<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact; // Make sure to import the Contact model
class ContactController extends Controller
{
    function index(){return Inertia::render('Contact', ['successMessage' => session('success')]);}
    public function store(Request $request)
    {
        // Validate the form data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

       // Save the form data to the database using Eloquent
       Contact::create([
        'name' => $request->name,
        'email' => $request->email,
        'message' => $request->message,
    ]);

        return redirect()->route('contact')->with('success', 'message submitted successfully!');
    }
}
