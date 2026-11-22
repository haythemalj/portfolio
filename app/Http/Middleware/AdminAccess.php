<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

/**
 * Lets a signed-in team member into the dashboard when their role is at least the
 * one given: `admin:viewer` (read only), `admin:editor` (projects and messages) or
 * `admin:owner` (team and security). Also keeps "last active" up to date.
 */
class AdminAccess
{
    public function handle(Request $request, Closure $next, string $role = 'viewer')
    {
        $user = $request->user();

        if (! $user || $user->isInvitePending() || ! $user->hasRole($role)) {
            abort(403, 'You do not have access to this part of the dashboard.');
        }

        if (! $user->last_active_at || $user->last_active_at->lt(now()->subMinutes(10))) {
            $user->forceFill(['last_active_at' => now()])->saveQuietly();
        }

        return $next($request);
    }
}
