<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Schedule;
class CustomizableMaintenanceSchedulesController extends Controller
{
    
// CustomizableMaintenanceSchedulesController
public function index()
{
    $user=Auth::user();
 
    $maintenanceSchedules =Schedule::all();
    return Inertia::render('CustomizableMaintenanceSchedules/Index',
    ['user'=>$user,
    'Schedules'=>$maintenanceSchedules]);
}

}
