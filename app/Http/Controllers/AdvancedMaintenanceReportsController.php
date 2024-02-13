<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class AdvancedMaintenanceReportsController extends Controller
{
 // AdvancedMaintenanceReportsController
public function index()
{
    $user=Auth::user();
    return Inertia::render('AdvancedMaintenanceReports/Index',compact('user'));
}
}
