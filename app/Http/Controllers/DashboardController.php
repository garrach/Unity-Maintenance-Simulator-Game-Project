<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Connection;
use App\Models\Vehicle;
use App\Models\Device;
use App\Models\Service;
use App\Models\PaymentPlan;
use App\Models\job;
use App\Models\Report;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(){
        $usersList=User::all();
        $vehicles=[];
        $devices=[];
        $connections = Connection::all();
        $services = Service::all();
        $plans = PaymentPlan::skip(0)->take(1)->first();
       
        $reports=Report::all()->toArray();
        $jobs=job::all()->toArray();

        $reports=count($reports);
        $jobs=count($jobs);

        $user=Auth::user();
        $user=User::where('id',$user->id)->first();
        
        $plans=$user->plans->first();
         
        if ($plans) {
            $services = $plans->services; // This gives you a collection of services associated with the payment plan
        
            foreach ($services as $service) {
                // Access service details
                $serviceName = $service->name;
                // Access additional pivot data
                $additionalData = $service->pivot->service_id;
            }
        } else {
            $plans=PaymentPlan::all()->first();
            $services = $plans->services; // This gives you a collection of services associated with the payment plan
        
            foreach ($services as $service) {
                // Access service details
                $serviceName = $service->name;
                // Access additional pivot data
                $additionalData = $service->pivot->service_id;
            }
        }

        $vehicleIds = $connections->pluck('vehicle_id')->unique()->toArray();
        $vehicles = Vehicle::whereIn('id', $vehicleIds)->get();

        $deviceIds = $connections->pluck('device_id')->toArray();

        for ($i=0; $i < count($vehicleIds) ; $i++) { 
            $devices[$i] = $vehicles[$i]->devices;
        }
            return Inertia::render('Dashboard',
            ['usersList'=>$usersList,
            'someSocket'=>'ws://localhost:3004',
            'services'=>$services,
            'connections'=>$connections,
            'paymentPlan'=>$plans,
            'vehicles'=>$vehicles,
            'reports'=>$reports,
            'requestJob'=>$jobs,
            'devices'=>$devices]);
        
    }
}
