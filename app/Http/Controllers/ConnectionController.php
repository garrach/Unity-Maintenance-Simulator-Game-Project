<?php

// app/Http/Controllers/ConnectionController.php

namespace App\Http\Controllers;

use App\Models\Connection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Vehicle;
use App\Models\Device;
class ConnectionController extends Controller
{
    public function index()
    {
        $vehicles=[];
        $connections = Connection::all();
        $devices=[];
        /*for ($i=0; $i < count($connections); $i++) { 
            $V_id=$connections[$i]->vehicle_id;
            $vehicles[$i]=Vehicle::find($V_id);
        }*/
        
        $connections = Connection::with('vehicle')->get();
        $vehicleIds = $connections->pluck('vehicle_id')->unique()->toArray();
        $vehicles = Vehicle::whereIn('id', $vehicleIds)->get();

        $deviceIds = $connections->pluck('device_id')->toArray();
        for ($i=0; $i < count($deviceIds) ; $i++) { 
            $devices = Device::whereIn('id', $deviceIds)->get();
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
        $Devices_z = Device::all();
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
        return Inertia::render('connections/Show', [
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

    public function destroy(Connection $connection)
    {
        $connection->delete();
        return redirect()->route('connections.index')->with('success', 'Connection deleted successfully.');
    }
}
