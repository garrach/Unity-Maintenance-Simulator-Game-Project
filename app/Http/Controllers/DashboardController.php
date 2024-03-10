<?php
namespace App\Http\Controllers;

use App\Models\Connection;
use App\Models\job;
use App\Models\PaymentPlan;
use App\Models\Report;
use App\Models\Service;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $route = Route::currentRouteName();
        $valid = $this->checkRole($route);

        $usersList = User::all();
        $vehicles = [];
        $devices = [];
        $connections = Connection::all();
        $services = Service::all();
        $plans = PaymentPlan::skip(0)->take(1)->first();
        $reports = Report::all()->toArray();
        $jobs = job::all()->toArray();
        $reports = count($reports);
        $jobs = count($jobs);
        $user = Auth::user();
        $user = User::where('id', $user->id)->first();
        $plans = $user->plans->first();
        if ($plans) {
            $services = $plans->services; // This gives you a collection of services associated with the payment plan
            foreach ($services as $service) {
                // Access service details
                $serviceName = $service->name;
                // Access additional pivot data
                $additionalData = $service->pivot->service_id;
            }
        } else {
            $plans = PaymentPlan::all()->first();
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
        for ($i = 0; $i < count($vehicleIds); $i++) {
            $devices[$i] = $vehicles[$i]->devices;
        }
        if ($valid == "Unauthorized") {
            return response()->json($valid);
        } else {
            return Inertia::render('Dashboard',
                ['usersList' => $usersList,
                    'someSocket' => 'ws://localhost:3004',
                    'services' => $services,
                    'connections' => $connections,
                    'paymentPlan' => $plans,
                    'vehicles' => $vehicles,
                    'reports' => $reports,
                    'requestJob' => $jobs,
                    'devices' => $devices]);
        }
    }
    public static function checkRole($route)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json('Unauthorized - not yet auth');
        }

        $hisPlan = $user->plans->first();
        if ($user->role == 'client') {
            $services = $hisPlan->services;
            foreach ($services as $service) {
                if ($service->route == $route) {
                    return response()->json('authorized');
                }
            }
        }
        return response()->json('Unauthorized - not in ur league'); 
    }
}
