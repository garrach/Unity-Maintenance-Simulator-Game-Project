<?php


namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Review;
use App\Models\Userexpcoin; 
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
        $user=Auth::user();
        Review::create([
            'user_id'=>$user->id,
            'device_id'=>$request->device_id,
            'rate'=>$request->rate
        ]);
        $addExp=Userexpcoin::where('user_id',$user->id)->get();
        $addExp->update([
            'experience'=>$addExp->experience+5
        ]);
        return redirect()->route('leaderboard')->with('success','well done!');

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
