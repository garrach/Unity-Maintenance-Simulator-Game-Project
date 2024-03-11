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
        return Inertia::render('devicesPreview', ['wishes' => $wishes]);
    }

    public function create()
    {
        return Inertia::render('Wishlist/Create');
    }

    public function store(Request $request)
    {
        $requestData = $request;

        WishList::create([
            'title' => $requestData->user['role'],
            'description' => 'WishList Item Added',
            'device_id' => $request->device['id'],
            'user_id' => $requestData->user['id'],
        ]);
        return redirect()->route('devices.index');
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
