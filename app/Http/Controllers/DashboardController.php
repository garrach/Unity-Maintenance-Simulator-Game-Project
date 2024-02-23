<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Connection;
use App\Models\Vehicle;
use App\Models\Device;
use App\Models\Service;
class DashboardController extends Controller
{
    public function index(){
            $usersList=User::all();
            $vehicles=[];
        $devices=[];
        $connections = Connection::all();
        $services = Service::all();

        $vehicleIds = $connections->pluck('vehicle_id')->unique()->toArray();
        $vehicles = Vehicle::whereIn('id', $vehicleIds)->get();

        $deviceIds = $connections->pluck('device_id')->toArray();

        for ($i=0; $i < count($vehicleIds) ; $i++) { 
            $devices[$i] = $vehicles[$i]->devices;
        }
            return Inertia::render('Dashboard',
            ['usersList'=>$usersList,
            'someSocket'=>'ws://localhost:3004',
            'services'=>$services,
            'connections'=>$connections,
            'vehicles'=>$vehicles,
            'devices'=>$devices]);
        
    }
}
