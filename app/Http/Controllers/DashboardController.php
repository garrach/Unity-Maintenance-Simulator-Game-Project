<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class DashboardController extends Controller
{
    public function index(){
            $usersList=User::all();
            return Inertia::render('Dashboard',['usersList'=>$usersList,'someSocket'=>'ws://localhost:3004']);
        
    }
}
