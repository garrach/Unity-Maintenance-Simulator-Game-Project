<?php

// app/Http/Controllers/DeviceController.php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Review;
use App\Models\Schedule;
use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DeviceController extends Controller
{
    public function index()
    {
        $devices = Device::all();
        session('request',0);
        return Inertia::render('devices/Index', [
            'devices' => $devices,
        ]);
    }

    public function preview()
    {
        $devices = Device::all();
        $reviews=[];
        $Comments=[];

        foreach($devices as $device){
            $reviews[$device->id]=$device->reviews;
            $Comments[$device->id]=$device->comments;
        }
        session('request',0);
        return Inertia::render('devicesPreview', [
            'devices' => $devices,
            'reviews' => $reviews,
            'comments' => $Comments
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
        $purchase=$device->purchase;
        return Inertia::render('devices/Show', [
            'device' => $device,
            'purchase' => $purchase,
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
