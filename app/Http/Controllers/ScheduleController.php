<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class ScheduleController extends Controller
{
    public function index()
    {
        $schedules = Schedule::all();
        $user=Auth::user();
        return Inertia::render('Schedules/Index',[
            'schedules' => $schedules,
            'user'=> $user,
        ]);
    }

    public function create()
    {
        $user=Auth::user();
        return Inertia::render('Schedules/Create',['user'=> $user]);
    }

    public function store(Request $request)
    {
        // Validate request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            // Add other validation rules as needed
        ]);

        // Create a new schedule
        Schedule::create($validatedData);

        // Redirect back or to a different route
        return redirect()->route('schedules.index');
    }

    public function show(Schedule $schedule)
    {
        $user=Auth::user();
        return Inertia::render('Schedules/Show', [
            'schedule' => $schedule,
            'user'=> $user,
        ]);
    }

    public function edit(Schedule $schedule)
    {
        $user=Auth::user();
        return Inertia::render('Schedules/Edit', [
            'schedule' => $schedule,
            'user'=> $user,
        ]);
    }

    public function update(Request $request, Schedule $schedule)
    {
        // Validate request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            // Add other validation rules as needed
        ]);

        // Update the schedule
        $schedule->update($validatedData);

        // Redirect back or to a different route
        return redirect()->route('schedules.index');
    }

    public function destroy(Schedule $schedule)
    {
        // Delete the schedule
        $schedule->delete();

        // Redirect back or to a different route
        return redirect()->route('schedules.index');
    }
}
