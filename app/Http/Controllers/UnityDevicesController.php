<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Purchase;

class UnityDevicesController extends Controller
{
    public function index(){
        return Inertia::render('preview/Index');
    }

    public function move(Request $request){
        $purchases = Purchase::all();
        $positions = $request->data;
    
        // Check if the number of purchases matches the number of positions
        if(count($purchases) !== count($positions)) {
            return response()->json(['error' => 'Number of purchases does not match the number of positions'], 400);
        }
    
        // Loop through purchases and positions simultaneously
        foreach ($purchases as $index => $purchase) {
            // Get the position for the current purchase
            $position = $positions[$index];
    
            // Update the current purchase with the position
            $purchase->update([
                'position' => $position,
            ]);
        }
    
        return response()->json(['message' => 'Positions updated successfully']);
    }
    
}
