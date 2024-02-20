<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Connection;
use App\Models\Vehicle;
use App\Models\Device;
class ConnectedServicesController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $vehicles=[];
        $devices=[];
        $connections = Connection::all();

        $vehicleIds = $connections->pluck('vehicle_id')->unique()->toArray();
        $vehicles = Vehicle::whereIn('id', $vehicleIds)->get();

        $deviceIds = $connections->pluck('device_id')->toArray();

        for ($i=0; $i < count($vehicleIds) ; $i++) { 
            $devices[$i] = $vehicles[$i]->devices;
        }
        
        return Inertia::render('ConnectedServices/Index', [
            'user' => $user,
            'vehicles' => $vehicles,
            'devices' => $devices,
            'connections' => $connections,
        ]);
    }

}
