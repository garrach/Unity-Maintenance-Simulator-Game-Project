<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class CarAnalyticsController extends Controller
{
    // CarAnalyticsController
public function index()
{
    $user=Auth::user();

    return Inertia::render('CarAnalytics/Index',compact('user'));
}
}
