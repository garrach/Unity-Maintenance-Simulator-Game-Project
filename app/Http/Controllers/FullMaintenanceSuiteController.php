<?php

namespace App\Http\Controllers;

use App\Models\Device;
use App\Models\Purchase;
use App\Models\Schedule;
use App\Models\User;
use App\Models\DeviceUsage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FullMaintenanceSuiteController extends Controller
{
    public static function getmaintenanceTasksz()
    {
        $schedules = [];
        $Purchases = [];
        $users = User::all();
        $devices = [];
        $maintenanceTasksz = [];
        $DeviceUsage=[];

        foreach ($users as $user) {
            $schedules[$user->id] = Schedule::where('user_id', $user->id);
            $Purchases[$user->id] = Purchase::where('user_id', $user->id)->first();
        }
        foreach ($Purchases as $Purchase) {
            if ($Purchase) {
                $DeviceUsage[$Purchase->id]=1000*$Purchase->id;
                $devices[$Purchase->id] = Device::where('id', $Purchase->device_id)->first();
                $maintenanceTasksz[$Purchase->id] = [
                    'id' => $Purchase->id,
                    'device' => $devices[$Purchase->id],
                    'task' => Schedule::where('purchase_id', $Purchase->id)->first(),
                    'status' => $Purchase->stat,
                    'usage' =>$DeviceUsage,
                ];
            }
        }
        return $maintenanceTasksz;
    }
    public function index()
    {
        $user = Auth::user();
        $maintenanceTasksz = $this->getmaintenanceTasksz();

        return Inertia::render('FullMaintenanceSuite/Index', compact('user', 'maintenanceTasksz'));
    }
    public function markAsComplete(Request $request)
    {

        $Purchase = Purchase::findOrFail($request->id);
        $Purchase->update([
            'stat' => 1,
        ]);
       
        $DeviceUsage=
        /*if($Purchase){
        $Schedule=Schedule::where('purchase_id',$Purchase->id)->first();
        $Schedule->delete();
        }*/

        $user = Auth::user();
        return redirect()->route('full-maintenance-suite')->with('success', 'Model updated successfully');
    }
}
