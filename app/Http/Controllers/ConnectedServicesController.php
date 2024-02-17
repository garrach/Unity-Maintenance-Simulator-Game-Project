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
        $connections = Connection::all();
        /*for ($i=0; $i < count($connections); $i++) { 
            $V_id=$connections[$i]->vehicle_id;
            $vehicles[$i]=Vehicle::find($V_id);
        }*/
        
        $connections = Connection::with('vehicle')->get();
        $vehicleIds = $connections->pluck('vehicle_id')->unique()->toArray();
        $vehicles = Vehicle::whereIn('id', $vehicleIds)->get();

        $deviceIds = $connections->pluck('device_id')->unique()->toArray();
        $devices = Device::whereIn('id', $vehicleIds)->get();
        
        return Inertia::render('ConnectedServices/Index', [
            'user' => $user,
            'vehicles' => $vehicles,
            'devices' => $devices,
            'connections' => $connections,
        ]);
    }

}
