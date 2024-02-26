<?php

namespace App\Http\Controllers;

use App\Models\WishList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WishListController extends Controller
{
    public function index()
    {
        $wishes = WishList::all();
        return Inertia::render('Wishlist/Index', ['wishes' => $wishes]);
    }

    public function create()
    {
        return Inertia::render('Wishlist/Create');
    }

    public function store(Request $request)
    {
        WishList::create($request->validate([
            'title' => 'required',
            'description' => 'nullable',
        ]));

        return redirect()->route('wishlist.index');
    }

    public function edit(WishList $wishlist)
    {
        return Inertia::render('Wishlist/Edit', ['wish' => $wishlist]);
    }

    public function update(Request $request, WishList $wishlist)
    {
        $wishlist->update($request->validate([
            'title' => 'required',
            'description' => 'nullable',
        ]));

        return redirect()->route('wishlist.index');
    }

    public function destroy(WishList $wishlist)
    {
        $wishlist->delete();
        return redirect()->route('wishlist.index');
    }
}
