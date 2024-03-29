<?php

// app/Http/Controllers/ReviewsController.php

namespace App\Http\Controllers;

use App\Models\Review; // Make sure to import your Review model
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function index()
    {
        $reviews = Review::all();
        return redirect()->route('home');
    }

    public function create()
    {
        return view('reviews.create');
    }

    public function store(Request $request)
    {
        Review::create($request->all());
    }

    public function show($id)
    {
        $review = Review::findOrFail($id);
        return view('reviews.show', ['review' => $review]);
    }

    public function edit($id)
    {
        $review = Review::findOrFail($id);
        return view('reviews.edit', ['review' => $review]);
    }

    public function update(Request $request, $id)
    {
        $review = Review::findOrFail($id);
        // Validation can be added here
        $review->update($request->all());
        return redirect()->route('home');
    }

    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        $review->delete();
        return redirect()->route('home');
    }
}
