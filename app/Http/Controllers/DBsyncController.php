<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

use App\Models\PaymentPlan;
use App\Models\Service;

use App\Models\Dashboard;

use App\Models\Connection;
use App\Models\AddonRequest;
use App\Models\Vehicle;
use App\Models\Device;
use App\Models\User;

use App\Models\WishList;
use App\Models\Reminder;
use App\Models\Schedule;


class DBsyncController extends Controller
{
    public function index(){
        $connections=AddonRequest::all()->toArray();
        $Vehicle=Vehicle::all()->toArray();
        $Device=Device::all()->toArray();
        $User=User::all()->toArray();
        $Schedule=Schedule::all()->toArray();
        $DBsync=[$connections,$Vehicle,$Device,$User,$Schedule];
        return Inertia::render('unityRefresh',['DBsync'=>$DBsync]);
    }
}
