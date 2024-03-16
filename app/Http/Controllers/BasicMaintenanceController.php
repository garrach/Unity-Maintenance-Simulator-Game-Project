<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\FullMaintenanceSuiteController;
use App\Models\DeviceUsage;
use App\Models\User;
class BasicMaintenanceController extends Controller
{
public function index()
{
    $user = Auth::user();
        $users = User::all();
        $maintenanceTasksz = [];
        if($user->role=='admin'){
            foreach($users as $displayUser){
                $maintenanceTasksz[$displayUser->name]=FullMaintenanceSuiteController::getMaintenanceTasks($displayUser);
            }
        }else{
            $maintenanceTasksz[$user->name]=FullMaintenanceSuiteController::getMaintenanceTasks($user);
        }
        
    $maintenanceTasksz=json_encode($maintenanceTasksz);
    return Inertia::render('BasicMaintenance/Index',compact('user','maintenanceTasksz'));
}
}
