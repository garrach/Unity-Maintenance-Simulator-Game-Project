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
        $devices=[[]];
        $vehicles=Vehicle::all()->toArray();
        for ($i=0; $i < count($vehicles) ; $i++) { 
            $dvs=$this->getDevicesForVehicle($i);
            for ($j=0; $j < count($dvs) ; $j++) { 
                $devices[$i][$j]=$dvs[$j];
            }
        }
        $connections=Connection::all()->toArray();
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
