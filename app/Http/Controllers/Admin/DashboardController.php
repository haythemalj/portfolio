<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\ContactMessage;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
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
        $stats = [
            'total_projects' => Project::count(),
            'featured_projects' => Project::where('featured', true)->count(),
            'active_projects' => Project::where('active', true)->count(),
            'inactive_projects' => Project::where('active', false)->count(),
            'unread_messages' => ContactMessage::whereNull('read_at')->count(),
        ];

        // Get projects by technology
        $projects = Project::all();
        $technologies = [];
        foreach ($projects as $project) {
            if ($project->technologies) {
                foreach ($project->technologies as $tech) {
                    $technologies[$tech] = ($technologies[$tech] ?? 0) + 1;
                }
            }
        }
        arsort($technologies);
        $topTechnologies = array_slice($technologies, 0, 5);

        // Get projects by status
        $projectsByStatus = [
            'Featured' => Project::where('featured', true)->count(),
            'Active' => Project::where('active', true)->count(),
            'Archived' => Project::where('active', false)->count(),
        ];

        // Recent projects
        $recentProjects = Project::latest('updated_at')->take(5)->get();

        // Admin user info
        $admin = Auth::user();

        return view('admin.dashboard', compact(
            'stats',
            'topTechnologies',
            'projectsByStatus',
            'recentProjects',
            'admin'
        ));
    }
}
