<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Connection;
use App\Models\Vehicle;
use App\Models\Device;
use App\Models\Purchase;
use App\Models\User;
use App\Models\radar;

class ConnectedServicesController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $vehicles=[];
        $tmp=[];
        $devices=[];
        $purchases=[];
        $connections = Purchase::all();
        $radars = radar::all();

        $vehicleIds = $connections->pluck('user_id')->toArray();
        $vehicles = User::whereIn('id', $vehicleIds)->get();

        foreach($vehicles as $vehicle){
            $purchases[$vehicle->id]=Purchase::where('user_id',$vehicle->id)->get();

            foreach($purchases[$vehicle->id] as $purchase ){
                $tmp[$purchase->id]=Device::find($purchase->device_id);
            }
            $devices[$vehicle->id]=$tmp;
        }
        return Inertia::render('ConnectedServices/Index', [
            'user' => $user,
            'vehicles' => $vehicles,
            'devices' => $devices,
            'radars'=>$radars,
            'connections' => $connections,
        ]);
    }

}
