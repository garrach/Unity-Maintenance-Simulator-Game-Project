<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\radar;
use App\Models\Device;

class RadarController extends Controller
{

    public function assigntoDevice(Request $request){
        $device=Device::all()->last();
        $categories = [
            'carelectronics' => $request->input('carelectronics', 0),
            'interiorcontrols' => $request->input('interiorcontrols', 0),
            'safetyfeatures' => $request->input('safetyfeatures', 0),
            'entertainmentsystem' => $request->input('entertainmentsystem', 0),
            'chargingaccessories' => $request->input('chargingaccessories', 0),
            'Driverassistanceandcontrol' => $request->input('Driverassistanceandcontrol', 0),
            'device_id'=>$device->id
        ];

        radar::create($categories);
        return response()->json(['list Of categories' => $categories]);

    }

    public function updateAssignToDevice(Request $request){

        return response()->json(['list Of categories' => $request->all()]);

    }

}
