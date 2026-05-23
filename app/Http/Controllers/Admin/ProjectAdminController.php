<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProjectAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware(function ($request, $next) {
            if (auth()->user()->name !== config('portfolio.admin_name')) {
                abort(403, 'Unauthorized');
            }
            return $next($request);
        });
    }

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
            'category' => 'nullable|in:web,design,ai',
            'order' => 'nullable|integer|min:0',
            'featured' => 'nullable|boolean',
        ]);

        $data['order'] = (int) ($data['order'] ?? 0);
        $data['featured'] = $request->boolean('featured');

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
