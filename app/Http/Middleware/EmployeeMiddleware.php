<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EmployeeMiddleware
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
        // Check if the authenticated user is an employee
        if (auth()->check() && auth()->user()->is_employee) {
            return $next($request);
        }

        // If not an employee, you may redirect to the login page or show an error page
        return redirect()->route('login')->with('error', 'You do not have permission to access this page.');
    }
}
