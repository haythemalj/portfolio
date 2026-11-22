<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectAdminController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('order')->orderBy('id')->get();
        return view('admin.projects.index', compact('projects'));
    }

    public function create()
    {
        return view('admin.projects.form', ['project' => new Project()]);
    }

    public function store(Request $request)
    {
        $data = $this->validated($request);
        $data['user_id'] = auth()->id();
        $data['technologies'] = $this->parseTechnologies($request->input('technologies'));
        $data['image'] = $this->storeImage($request);
        if (! $request->filled('order')) {
            $data['order'] = (int) Project::max('order') + 1;
        }

        Project::create($data);

        return redirect()->route('admin.projects.index')->with('success', 'Project created.');
    }

    public function edit(Project $project)
    {
        return view('admin.projects.form', compact('project'));
    }

    public function update(Request $request, Project $project)
    {
        $data = $this->validated($request);
        $data['technologies'] = $this->parseTechnologies($request->input('technologies'));
        $newImage = $this->storeImage($request);
        if ($newImage) {
            $data['image'] = $newImage;
        }

        $project->update($data);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated.');
    }

    public function toggleVisibility(Project $project)
    {
        $project->update(['active' => ! $project->active]);

        return back()->with('success', $project->active
            ? "\"{$project->title}\" is now shown on the website."
            : "\"{$project->title}\" is now hidden from the website.");
    }

    /** Move a project one place up or down; orders are renumbered 1, 2, 3... */
    public function move(Project $project, string $direction)
    {
        $ordered = Project::orderBy('order')->orderBy('id')->get()->values();
        $index = $ordered->search(fn ($p) => $p->id === $project->id);
        $swap = $direction === 'up' ? $index - 1 : $index + 1;

        if ($index !== false && isset($ordered[$swap])) {
            $items = $ordered->all();
            [$items[$index], $items[$swap]] = [$items[$swap], $items[$index]];
            foreach ($items as $position => $item) {
                if ((int) $item->order !== $position + 1) {
                    $item->update(['order' => $position + 1]);
                }
            }
        }

        return back();
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route('admin.projects.index')->with('success', 'Project deleted.');
    }

    private function validated(Request $request): array
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'details' => 'nullable|string',
            'url' => 'nullable|string|max:500',
            'github_url' => 'nullable|string|max:500',
            'category' => 'nullable|in:web,design,ai,wordpress',
            'order' => 'nullable|integer|min:0',
            'featured' => 'nullable|boolean',
            'active' => 'nullable|boolean',
        ]);

        if ($request->filled('order')) {
            $data['order'] = (int) $data['order'];
        } else {
            unset($data['order']); // new projects go last; edits keep their position
        }
        $data['featured'] = $request->boolean('featured');
        $data['active'] = $request->boolean('active');

        return $data;
    }

    private function parseTechnologies(?string $raw): array
    {
        if (!$raw) {
            return [];
        }

        return array_values(array_filter(array_map('trim', explode(',', $raw))));
    }

    private function storeImage(Request $request): ?string
    {
        if (!$request->hasFile('image_file')) {
            return $request->input('image') ?: null;
        }

        $path = $request->file('image_file')->store('projects', 'public');
        return asset('storage/' . $path);
    }
}
