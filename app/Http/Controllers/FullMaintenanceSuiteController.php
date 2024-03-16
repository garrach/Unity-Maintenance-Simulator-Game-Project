<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\DeviceUsage;
use App\Models\Purchase;
use App\Models\Schedule;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FullMaintenanceSuiteController extends Controller
{
    public static function getMaintenanceTasks($user)
    {
        $maintenanceTasks = [];

        $purchases = Purchase::where('user_id', $user->id)->get();

        foreach ($purchases as $purchase) {
            $devices = Device::where('id', $purchase->device_id)->get()->toArray();

            $deviceUsage = DeviceUsage::where('device_id', $purchase->device->id)->first();
            $usageCount = ($deviceUsage) ? $deviceUsage->usage_count : null;

            $schedules = Schedule::where('user_id', $user->id)->get();

            $maintenanceTasks[] = [
                'purchase_id' => $purchase->id,
                'device' => $devices,
                'task' => $schedules,
                'status' => $purchase->stat,
                'usage_count' => $usageCount,
            ];
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
        $maintenanceTasksz = [];
        if($user->role=='admin'){
            foreach($users as $displayUser){
                $maintenanceTasksz[$displayUser->name] = $this->getMaintenanceTasks($displayUser);
            }
        }else{
            $maintenanceTasksz[$user->name] = $this->getMaintenanceTasks($user);
        }
        
        $maintenanceTasksz=json_encode($maintenanceTasksz);
        return Inertia::render('FullMaintenanceSuite/Index', compact('user', 'maintenanceTasksz'));
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
        /*if($Purchase){
        $Schedule=Schedule::where('purchase_id',$Purchase->id)->first();
        $Schedule->delete();
        }*/

        $user = Auth::user();
        return redirect()->route('basic-maintenance');
    }
}
