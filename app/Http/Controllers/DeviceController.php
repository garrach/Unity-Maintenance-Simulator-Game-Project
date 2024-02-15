<?php

// app/Http/Controllers/DeviceController.php

namespace App\Http\Controllers;

use App\Models\Device;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DeviceController extends Controller
{
    public function index()
    {
        $devices = Device::all();
        
        return Inertia::render('devices/Index', [
            'devices' => $devices,
        ]);
    }

    public function create()
    {
        return Inertia::render('devices/Create');
    }

    public function store(Request $request)
    {
        Device::create($request->all());
        return redirect()->route('devices.index')->with('success', 'Device created successfully.');
    }

    public function show(Device $device)
    {
        return Inertia::render('devices/Show', [
            'device' => $device,
        ]);
    }

    public function edit(Device $device)
    {
        return Inertia::render('devices/Edit', [
            'device' => $device,
        ]);
    }

    public function update(Request $request, Device $device)
    {
        $device->update($request->all());
        return redirect()->route('devices.index')->with('success', 'Device updated successfully.');
    }

    public function destroy(Device $device)
    {
        $device->delete();
        return redirect()->route('devices.index')->with('success', 'Device deleted successfully.');
    }
}
