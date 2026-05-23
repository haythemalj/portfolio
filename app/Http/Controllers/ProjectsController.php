<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function index()
    {
        $projects = Project::active()->get();
        $featured = Project::featured()->limit(3)->get();
        
        return view('pages.portfolio', [
            'projects' => $projects,
            'featured' => $featured,
        ]);
    }

    public function show(Project $project)
    {
        return view('pages.project-show', ['project' => $project]);
    }
}
