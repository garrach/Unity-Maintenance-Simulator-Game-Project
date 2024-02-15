<?php

// app/Http/Controllers/ConnectionController.php

namespace App\Http\Controllers;

use App\Models\Connection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ConnectionController extends Controller
{
    public function index()
    {
        $connections = Connection::all();
        $vehicles=[];
        $devices=[];
        for ($i=0; $i < count($connections) ; $i++) { 
           $vehicles[$i]=$connections[$i]->vehicle;
           $devices[$i]=$connections[$i]->devices;
        }
       // $vehicles = $connections->vehicle;
        return Inertia::render('connections/Index', [
            'connections' => $connections,
            'vehicles' => $vehicles,
            'devices' => $devices,
        ]);
    }

    public function create()
    {
        return Inertia::render('connections/Create');
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
