<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddonRequest;
use App\Models\Schedule;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class AddonRequestController extends Controller
{
    public function requestDevice(Request $request){
        return redirect()->route('devices.index',['count'=>session('request')])->with('success', 'Service created successfully.');
    } 
}
