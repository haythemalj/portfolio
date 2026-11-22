<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use App\Models\Project;
use App\Support\SiteStats;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = new SiteStats(7);
        $month = new SiteStats(30);

        return view('admin.dashboard', [
            'totals' => $stats->totals(),
            'daily' => $month->daily(),
            'topPages' => $month->topPages(5),
            'sources' => $month->sources(),
            'performance' => $month->performance(),
            'hasData' => $stats->hasData(),
            'projectCounts' => [
                'total' => Project::count(),
                'visible' => Project::where('active', true)->count(),
                'hidden' => Project::where('active', false)->count(),
                'featured' => Project::where('featured', true)->count(),
            ],
            'unread' => ContactMessage::whereNull('read_at')->count(),
            'recentMessages' => ContactMessage::latest()->take(5)->get(),
            'recentProjects' => Project::latest('updated_at')->take(4)->get(),
        ]);
    }

    public function stats(Request $request)
    {
        $days = in_array((int) $request->query('days'), [7, 30, 90], true) ? (int) $request->query('days') : 30;
        $stats = new SiteStats($days);

        return view('admin.stats', [
            'days' => $days,
            'totals' => $stats->totals(),
            'daily' => $stats->daily(),
            'topPages' => $stats->topPages(12),
            'languages' => $stats->languages(),
            'sources' => $stats->sources(),
            'devices' => $stats->devices(),
            'performance' => $stats->performance(),
            'hasData' => $stats->hasData(),
            'sitemapUrls' => SiteStats::sitemapUrls(),
        ]);
    }
}
