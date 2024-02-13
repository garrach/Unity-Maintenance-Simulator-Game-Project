<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class CustomizableMaintenanceSchedulesController extends Controller
{
    
// CustomizableMaintenanceSchedulesController
public function index()
{
    $user=Auth::user();

    return Inertia::render('CustomizableMaintenanceSchedules/Index',compact('user'));
}

}
