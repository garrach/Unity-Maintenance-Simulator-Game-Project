<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\DeviceUsage;
use App\Models\Purchase;
use App\Models\Schedule;
use App\Models\Connection;
use App\Models\Vehicle;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Userexpcoin;

class FullMaintenanceSuiteController extends Controller
{
    public static function getMaintenanceTasks($user,$employee)
    {
        $maintenanceTasks = [];

        if($employee){

            $purchases = Purchase::where('user_id', $user->id)->get();
        }
        else{

            $purchases = DeviceUsage::where('user_id', $user->id)->get();
        }
        
        foreach ($purchases as $purchase) {
            $devices = Device::where('id', $purchase->device_id)->get()->toArray();

            $deviceUsage = DeviceUsage::where('device_id', $purchase->device->id)->first();
            $usageCount = ($deviceUsage) ? $deviceUsage->usage_count : null;

            $schedules = Schedule::where('user_id', $user->id)->get();

            if($employee){
                $maintenanceTasks[] = [
                    'purchase_id' => $purchase->id,
                    'device' => $devices,
                    'task' => $schedules,
                    'status' => $purchase->stat,
                    'usage_count' => $usageCount,
                    'user'=>$user,
                ];
            }else{
                $maintenanceTasks[] = [
                    'usage_id' => $purchase->id,
                    'device' => $devices,
                    'task' => $schedules,
                    'usage_count' => $usageCount,
                    'user'=>$user,
                ];
            }
          
        }

        if($purchases){
            return $maintenanceTasks;
        }else{
            return;
        }
    }

    public function index()
    {
        $user = Auth::user();
        $users = User::all();
        $Vehicles = Vehicle::all();
        $maintenanceTasksz = [];
        if($user->role=='admin' || $user->role=='employee'){
            foreach($users as $displayUser){
                $maintenanceTasksz[$displayUser->name] = $this->getMaintenanceTasks($displayUser,true);
            }
        }else{
            $maintenanceTasksz[$user->name] = $this->getMaintenanceTasks($user,true);
        }
        
        $maintenanceTasksz=base64_encode(json_encode($maintenanceTasksz));
        $Vehicles=base64_encode(json_encode($Vehicles));
        return Inertia::render('FullMaintenanceSuite/Index', compact('maintenanceTasksz','Vehicles'));
    }
    public function markAsComplete(Request $request)
    {

        $Purchase = Purchase::findOrFail($request->id);
        $Purchase->update([
            'stat' => 1,
        ]);

        $deviceUsage = DeviceUsage::where('device_id', $Purchase->device->id)->first();

        if ($deviceUsage) {
            $usage_count = $deviceUsage->usage_count;
            $deviceUsage->update([
                'user_id' => $Purchase->user->id,
                'device_id' => $Purchase->device->id,
                'usage_count' => $usage_count + 100,
            ]);
        } else {
            $deviceUsage = DeviceUsage::Create([
                'user_id' => $Purchase->user->id,
                'device_id' => $Purchase->device->id,
                'usage_count' => 100,
            ]);
        }

        $user = Auth::user();
        $score=Userexpcoin::where('user_id',$user->id)->get()->first();
        $score->update([
            'experience'=>$score->experience+10,
            'coins'=>$score->coins+10,
        ]);

        $VID=$request->VID;
        $vehicle=Vehicle::findOrFail($VID);

        //return response()->json(['vehicle'=>$vehicle]) ;
        

        $Schedule=null;
        if($Purchase){
        $Schedule=Schedule::where('purchase_id',$Purchase->id)->first();
        //$Schedule->delete();
        }
        Connection::create([
            'name'=>$Purchase->user->name.": ".$Purchase->device->type.". Connected",
            'connection_id'=>$user->id,
            'schedules_id'=>$Schedule ? $Schedule->id : null ,
            'user_id'=>$Purchase->user->id,
            'vehicle_id'=>$vehicle->id,
            'device_id'=>$Purchase->device->id,
            'installationdate'=> date("Y-m-d")
        ]);

        return redirect()->route('basic-maintenance');
    }
}
