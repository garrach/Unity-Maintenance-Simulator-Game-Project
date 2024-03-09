<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\FullMaintenanceSuiteController;
use App\Models\DeviceUsage;
class BasicMaintenanceController extends Controller
{
public function index()
{
    $user=Auth::user();
    $maintenanceTasksz=FullMaintenanceSuiteController::getmaintenanceTasksz();
    return Inertia::render('BasicMaintenance/Index',compact('user','maintenanceTasksz'));
}
}
