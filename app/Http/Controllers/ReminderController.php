<?php

namespace App\Http\Controllers;

use App\Models\Reminder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class ReminderController extends Controller
{
    public function index()
    {
        $reminders = Reminder::all();
        $user=Auth::user();
        return Inertia::render('Reminders/Index',[
            'user'=> $user,
            'reminders' => $reminders,
        ]);
    }

    public function create()
    { 
        $user=Auth::user();
        return Inertia::render('Reminders/Create',[ 'user'=> $user,]);
    }

    public function store(Request $request)
    {
        // Validate request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            // Add other validation rules as needed
        ]);

        // Create a new reminder
        Reminder::create($validatedData);

        // Redirect back or to a different route
        return redirect()->route('reminders.index');
    }

    public function show(Reminder $reminder)
    {
        $user=Auth::user();
        return Inertia::render('Reminders/Show', [
            'reminder' => $reminder,
            'user'=> $user,
        ]);
    }

    public function edit(Reminder $reminder)
    {
        $user=Auth::user();
        return Inertia::render('Reminders/Edit', [
            'reminder' => $reminder,
            'user'=> $user,
        ]);
    }

    public function update(Request $request, Reminder $reminder)
    {
        // Validate request data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            // Add other validation rules as needed
        ]);

        // Update the reminder
        $reminder->update($validatedData);

        // Redirect back or to a different route
        return redirect()->route('reminders.index');
    }

    public function destroy(Reminder $reminder)
    {
        // Delete the reminder
        $reminder->delete();

        // Redirect back or to a different route
        return redirect()->route('reminders.index');
    }
}
