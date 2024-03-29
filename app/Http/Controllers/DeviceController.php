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
        $request->validate([
            'serial_number' => 'required',
            'type' => 'required',
            'installation_date' => 'required|date',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust file type and size as needed
        ]);

        $imagePath = $request->file('image')->store('public/images'); // Store the uploaded image

        // Create device with uploaded image path
        $device = new Device();
        $device->serial_number = $request->serial_number;
        $device->type = $request->type;
        $device->installation_date = $request->installation_date;
        $device->image = $imagePath; // Save the image path in the database
        $device->save();

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
        $request->validate([
            'serial_number' => 'required',
            'type' => 'required',
            'installation_date' => 'required|date',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust file type and size as needed
        ]);

        // Check if an image file was uploaded
        if ($request->hasFile('image')) {
            // Delete previous image if exists
            if ($device->image) {
                // Delete the previous image file
                Storage::delete($device->image);
            }

            // Store the new image and update the image path in the database
            $imagePath = $request->file('image')->store('public/images');
            $device->image = $imagePath;
        }

        // Update other device details
        $device->serial_number = $request->serial_number;
        $device->type = $request->type;
        $device->installation_date = $request->installation_date;
        $device->save();

        return redirect()->route('devices.index')->with('success', 'Device updated successfully.');
    }

    public function destroy(Device $device)
    {
        $device->delete();
        return redirect()->route('devices.index')->with('success', 'Device deleted successfully.');
    }
}
