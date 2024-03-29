<?php

namespace App\Http\Controllers;


use App\Models\Comment; // Make sure to import your Comment model
use Illuminate\Http\Request;

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
        Comment::create($request->all());
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
