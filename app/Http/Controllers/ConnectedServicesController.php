<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ConnectedServicesController extends Controller
{
    // ConnectedServicesController
    public function index(){
        $user=Auth::user();

        return Inertia::render('ConnectedServices/Index',compact('user'));
    }

}
