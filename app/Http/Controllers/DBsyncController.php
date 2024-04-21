<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;



use App\Models\Vehicle;
use App\Models\Device;
use App\Models\User;
use App\Models\Schedule;
use App\Models\Purchase;


class DBsyncController extends Controller
{
    public function index(){
        $connections=Purchase::all()->toArray();
        $Vehicle=Vehicle::all()->toArray();
        $Device=Device::all()->toArray();
        $User=User::all()->toArray();
        $Schedule=Schedule::all()->toArray();
        $DBsync=[$connections,$Vehicle,$Device,$User,$Schedule];
        return Inertia::render('unityRefresh',['DBsync'=>$DBsync]);
    }
}
