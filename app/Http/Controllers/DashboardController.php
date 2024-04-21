<?php
namespace App\Http\Controllers;

use App\Models\Connection;
use App\Models\job;
use App\Models\PaymentPlan;
use App\Models\Purchase;
use App\Models\Report;
use App\Models\Service;
use App\Models\User;
use App\Models\Vehicle;
use App\Models\WishList;
use App\Models\Userexpcoin;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $route = Route::currentRouteName();
        $valid = $this->checkRole($route);

        $usersList = User::all();
        $vehicles = [];
        $devices = [];
        $connections = Connection::all();
        $Purchases = Purchase::all();

        $findExp=Userexpcoin::where('user_id',$user->id)->first();

        $userExp=['experience'=>$findExp->experience,'coins'=>$findExp->coins];

        $services = Service::all();
        $plans = PaymentPlan::skip(0)->take(1)->first();
        $reports = Report::all()->toArray();
        $jobs = job::all()->toArray();
        $reports = count($reports);
        $jobs = count($jobs);
        $wishListItems=WishList::where('user_id',$user->id)->get()->toArray();
        $reference=[];
        foreach($wishListItems as $wishListItem){
            $item=WishList::findOrfail($wishListItem['id']);
            $ref['item']=$item;
            $ref['Device']=$item->device ;
            $ref['User']=$item->user;
            $reference[$item->id]=$ref;
        }
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
        for ($i = 0; $i < count($Purchases); $i++) {
            $devices[$Purchases[$i]->id] = $Purchases[$i]->device;
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
                    'Purchases' => $Purchases,
                    'vehicles' => $vehicles,
                    'reports' => $reports,
                    'requestJob' => $jobs,
                    'userExp'=>$userExp,
                    'wishListItems' => $reference,
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
        return response()->json('Unauthorized'); 
    }
}
