<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UnityDataMonitorController extends Controller
{
    public function index(){
        return Inertia::render('UnityDataMonitor');
    }
}
