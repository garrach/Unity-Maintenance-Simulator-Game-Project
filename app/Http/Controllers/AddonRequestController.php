<?php

namespace App\Http\Controllers;

use App\Models\AddonRequest;
use App\Models\Device;
use App\Models\Schedule;
use App\Models\Purchase;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Userexpcoin;

class AddonRequestController extends Controller
{
    public function requestDevice(Request $request)
    {

        $device = Device::find($request->device)->first();
        $user = User::find($request->user_id);
        $addOnrequest = AddonRequest::create($request->all());
        $currentDate = date("Y-m-d H:i:s");
        $newDate = date("Y-m-d H:i:s", strtotime($currentDate . " +3 days"));


        $data = array(
            'position' => array(
                'x' => 0,
                'y' => 0,
                'z' => 0
            )
        );
        
        // Convert the array to a JSON string
        $jsonString = json_encode($data);

        $Purchase=Purchase::create([
            'device_id'=>$device->id,
            'user_id'=>$request->user_id,
            'date'=>$currentDate,
            'stat'=>0,
            'position'=>$jsonString,
        ]);
        $Purchase->save();

       
        $schedule=Schedule::create([
            'user_id'=>$request->user_id,
            'purchase_id'=>$Purchase->id,
            'title'=>'Schedule Device:'.$device->id,
            'description'=>'Device:'.$device->type,
            'start_date'=>$currentDate,
            'end_date'=>$newDate,
        ]);
        $schedule->save();


        $score=Userexpcoin::where('user_id',$user->id)->get()->first();
        $score->update([
            'experience'=>$score->experience+10,
            'coins'=>$score->coins-10,
        ]);

        return redirect()->route('devices.index')->with('success', 'AddonRequest created successfully.');
    }
}
