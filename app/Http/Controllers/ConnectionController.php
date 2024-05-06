<?php

// app/Http/Controllers/ConnectionController.php

namespace App\Http\Controllers;

use App\Models\Connection;
use Illuminate\Http\RedirectResponse;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Vehicle;
use App\Models\Device;
use App\Models\AssetBundles;
use App\Models\Purchase;
class ConnectionController extends Controller
{
    public static function getTendingConnections(){
        return ["Connections"=>Connection::all()->toArray(),
        "Users"=>User::all()->toArray(),
        "Vehicles"=>Vehicle::all()->toArray(),
        "Downloads"=>AssetBundles::all()->first()->users->toArray()];
    }
    public function getDevicesForVehicle($vehicleId)
    {

        $vehicle = Vehicle::all()->where('id',$vehicleId)->first();

        if (!$vehicle) {
            return [];
        }
        return $vehicle->devices;
    }

    public function index()
    {
        $vehicles=[];
        $devices=[];
        $connections = Connection::all();

        $vehicleIds = $connections->pluck('vehicle_id')->unique()->toArray();
        $vehicles = Vehicle::whereIn('id', $vehicleIds)->get();

        $deviceIds = $connections->pluck('device_id')->toArray();

        for ($i=0; $i < count($vehicleIds) ; $i++) { 
            $devices[$i] = $vehicles[$i]->devices;
        }
        return Inertia::render('connections/Index', [
            'vehicles' => $vehicles,
            'devices' => $devices,
            'connections' => $connections,
        ]);
    }

    public function create()
    {
        $Vehicle_z = Vehicle::all();
        $user = Auth::user();
        $user = User::where('id', $user->id)->first();
        $Devices_z=[];
        $Purchases=Purchase::all();
       // $Device = $purchases->devices->first();

       foreach($Purchases as $purchase){
        $Devices_z[$purchase->id]=$purchase->device;
       }
        $connections_z = Connection::all();
        return Inertia::render('connections/Create',[
            'vehicles'=>$Vehicle_z,
            'devices'=>$Devices_z,
            'connections'=>$connections_z,
        ]);
    }

    public function store(Request $request)
    {
        Connection::create($request->all());
        
        return redirect()->route('connections.index')->with('success', 'Connection created successfully.');
    }

    public function show(Connection $connection)
    {
        $vehicles=[];
        $devices=[];
        $connections = Connection::all();

        $vehicleIds = $connections->pluck('vehicle_id')->unique()->toArray();
        $vehicles = Vehicle::whereIn('id', $vehicleIds)->get();

        $deviceIds = $connections->pluck('device_id')->toArray();
        for ($i=0; $i < count($vehicleIds) ; $i++) { 
            $devices[$i] = $vehicles[$i]->devices;
        }
        return Inertia::render('connections/Show', [
            'vehicles' => $vehicles,
            'devices' => $devices,
            'connections' => $connections,
            'connection' => $connection,
        ]);
    }

    public function edit(Connection $connection)
    {
        return Inertia::render('connections/Edit', [
            'connection' => $connection,
        ]);
    }

    public function update(Request $request, Connection $connection)
    {
        $connection->update($request->all());
        return redirect()->route('connections.index')->with('success', 'Connection updated successfully.');
    }

    public function destroy(Request $request)
    {
        $connection = Connection::where('device_id',$request->device)->get()->first();
        $connection->delete();
        return redirect()->route('connections.index')->with('success', 'Connection deleted successfully.');
    }
}
