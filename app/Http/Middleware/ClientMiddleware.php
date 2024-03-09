<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ClientMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the authenticated user is a client
        if (auth()->check() && auth()->user()->is_client) {
            return $next($request);
        }

        // If not a client, you may redirect to the login page or show an error page
        return redirect()->route('login')->with('error', 'You do not have permission to access this page.');
    }
}
