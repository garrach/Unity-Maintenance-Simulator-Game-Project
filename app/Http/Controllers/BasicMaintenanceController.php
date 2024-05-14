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
        $users = [];
        $RouteIDS=[];


        $usersUsage=DeviceUsage::all();

        foreach($usersUsage as $usage){
            $users[$usage->id]=$usage->user;
        }

        $maintenanceTasksz = [];
        if($user->role=='admin' || $user->role=='employee'){
            foreach($users as $displayUser){
                $maintenanceTasksz[$displayUser->name]=FullMaintenanceSuiteController::getMaintenanceTasks($displayUser,false);
                $RouteIDS[$displayUser->name]=$displayUser->id;
            }
        }else{
            $maintenanceTasksz[$user->name]=FullMaintenanceSuiteController::getMaintenanceTasks($user,false);
        }
    $maintenanceTasksz=json_encode($maintenanceTasksz);
    return Inertia::render('BasicMaintenance/Index',compact('user','maintenanceTasksz','RouteIDS'));
}
}
