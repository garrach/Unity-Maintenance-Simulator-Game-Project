<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact; // Make sure to import the Contact model
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    function index(){
        if (Auth::check()) {
            return Inertia::render('Contacts/Create');
        }else {
            return Inertia::render('Contact');
        }
    }

    function list(){
        if (Auth::check()) {
            $contacts=Contact::all()->toArray();
            return Inertia::render('Contacts/Index',compact('contacts'));
        }else {
            return Inertia::render('Contact');
        }
    }

    function show(Contact $contact){
        if (Auth::check()) {
            return Inertia::render('Contacts/Show');
        }else {
            return Inertia::render('Contact');
        }
    }

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

        return redirect()->route('home')->with('success', 'message submitted successfully!');
    }

    public function destroy(Request $request)
    {
        $contact=Contact::where('id',$request->id)->first();
        $contact->delete();
        return $request->all();
    }
}
