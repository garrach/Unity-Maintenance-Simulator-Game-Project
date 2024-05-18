<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\Comment; 
use Illuminate\Http\Request;
use App\Models\Userexpcoin; 

class CommentsController extends Controller
{
    public function index()
    {
        $comments = Comment::all();
        return redirect()->route('home');
    }

    public function create()
    {
        return view('comments.create');
    }

    public function store(Request $request)
    {
        $user=Auth::user();
        Comment::create([
            'user_id'=>$user->id,
            'device_id'=>$request->device_id,
            'text'=>$request->text
        ]);
        $addExp=Userexpcoin::where('user_id',$user->id)->get();
        $addExp->update([
            'experience'=>$addExp->experience+5
        ]);
        return redirect()->route('leaderboard')->with('success','well done!');
    }

    public function show($id)
    {
        $comment = Comment::findOrFail($id);
        return view('comments.show', ['comment' => $comment]);
    }

    public function edit($id)
    {
        $comment = Comment::findOrFail($id);
        return view('comments.edit', ['comment' => $comment]);
    }

    public function update(Request $request, $id)
    {
        $comment = Comment::findOrFail($id);
        // Validation can be added here
        $comment->update($request->all());
        return redirect()->route('comments.index');
    }

    public function destroy($id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();
        return redirect()->route('comments.index');
    }
}
