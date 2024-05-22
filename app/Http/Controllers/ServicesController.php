<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\PaymentPlan;
use App\Models\User;
class ServicesController extends Controller
{
    public function index()
    {
        $services = Service::all();

        $user = Auth::user();
        $user = User::where('id', $user->id)->first();
        $paymentPlan=$user->plans->first();
        $services=$paymentPlan->services;
       
        return Inertia::render('Services/Index', ['services' => $services]);
    }

    public function create(): Response
    {
        $paymentPlans=PaymentPlan::all()->toArray();
        return Inertia::render('Services/Create',["paymentPlans"=>$paymentPlans]);
    }

    public function store(Request $request)
    {
    
    $data=$request->all();
       $service=Service::create([
            'name'=>$data['name'],
            'description'=>$data['description'],
            'route'=>$data['route'],
            'stat'=>$data['stat'],
        ]);
        $service->save();
        $paymentPlan=PaymentPlan::where('id',$data['plan'])->first();
        $paymentPlan->services()->attach($service);

        return redirect()->route('services.index')->with('success', 'Service created successfully.');
    }

    public function show(Service $service): Response
    {
        return Inertia::render('Services/Show', ['service' => $service]);
    }

    public function edit(Service $service): Response
    {
        return Inertia::render('Services/Edit', ['service' => $service]);
    }

    public function update(Request $request, Service $service)
    {
        // Validation logic here, if needed

        $service->update($request->all());
        return redirect()->route('services.index')->with('success', 'Service updated successfully.');
    }

    public function destroy(Service $service): Response
    {
        $service->delete();
        return redirect()->route('services.index')->with('success', 'Service deleted successfully.');
    }
}
