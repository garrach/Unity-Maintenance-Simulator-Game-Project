<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Vehicle;
use App\Models\Device;
use App\Models\DeviceUsage;
use App\Models\Connection;
class CarAnalyticsController extends Controller
{
    // CarAnalyticsController
public function index()
{

   
    $user=Auth::user();
    $devices=[];
    $vehicle=Vehicle::all()->first();
    $connection=Connection::where('vehicle_id',$vehicle->id)->get();

    
    $deviceUsage=DeviceUsage::where('user_id',$user->id)->get();
    foreach($deviceUsage as $userUsage){
        $devices[$userUsage->id]=$userUsage->device;
        //return response()->json($devices);
    }
    return Inertia::render('CarAnalytics/Index',compact('user','vehicle','devices','connection'));
}
}
