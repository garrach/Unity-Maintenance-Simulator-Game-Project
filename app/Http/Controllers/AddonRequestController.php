<?php

namespace App\Http\Controllers;

use App\Models\AddonRequest;
use App\Models\Device;
use App\Models\Schedule;
use App\Models\User;
use Illuminate\Http\Request;

class AddonRequestController extends Controller
{
    public function requestDevice(Request $request)
    {

        $device = Device::find($request->device)->first();
        $user = User::find($request->user_id);
        $addOnrequest = AddonRequest::create($request->all());
        $currentDate = date("Y-m-d H:i:s");
        $newDate = date("Y-m-d H:i:s", strtotime($currentDate . " +3 days"));
        Schedule::create([
            'title'=>'Schedule Device:'.$device->id,
            'description'=>'Another schedule.',
            'start_date'=>$currentDate,
            'end_date'=>$newDate,
        ]);
        return redirect()->route('devices.index')->with('success', 'AddonRequest created successfully.');
    }
}
