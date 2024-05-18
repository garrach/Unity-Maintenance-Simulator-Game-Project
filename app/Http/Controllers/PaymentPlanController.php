<?php
// app/Http/Controllers/PaymentPlanController.php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use App\Models\PaymentPlan;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Http\Controllers\DashboardController;

class PaymentPlanController extends Controller
{
    public function index()
    {

       
        $paymentPlans = PaymentPlan::all();
        $dashboards = Dashboard::all();
        $services = [count($paymentPlans)];
        for ($i = 0; $i < count($paymentPlans); $i++) {
            $paymentPlan = $paymentPlans[$i];
            $services[$i] = $paymentPlan->services;
        }
       
        
            return Inertia::render('PaymentPlans/Index',
            ['paymentPlans' => $paymentPlans,
                'services' => $services,
                'dashboards' => $dashboards]);
            }

    public function subNewPlan(Request $request)
    {
        $data = $request->all();
        $plan_id = $request->plan;
        $user_id = $request->user;

        $user = Auth::user();
        $user = User::where('id', $user->id)->first();
        $plan = PaymentPlan::where('id', $plan_id)->first();

        if ($user->plans()->exists()) {
            $user->plans()->sync($plan);
            return redirect()->route('dashboard');
        } else {
            $user->plans()->attach($plan);
            return redirect()->route('dashboard');
        }

    }
    public function create()
    {
        return Inertia::render('PaymentPlans/Create');
    }

    public function store(Request $request)
    {
        PaymentPlan::create($request->all());
        return redirect()->route('paymentPlans.index')->with('success', 'Payment Plan created successfully.');
    }

    public function show(PaymentPlan $paymentPlan)
    {
        $services = $paymentPlan->services;
        return Inertia::render('PaymentPlans/Show', ['paymentPlan' => $paymentPlan, 'services' => $services]);
    }

    public function edit(PaymentPlan $paymentPlan)
    {
        return Inertia::render('PaymentPlans/Edit', ['paymentPlan' => $paymentPlan]);
    }

    public function update(Request $request, PaymentPlan $paymentPlan)
    {
        $paymentPlan->update($request->all());
        return redirect()->route('paymentPlans.index')->with('success', 'Payment Plan updated successfully.');
    }

    public function destroy(PaymentPlan $paymentPlan)
    {
        $paymentPlan->delete();
        return redirect()->route('paymentPlans.index')->with('success', 'Payment Plan deleted successfully.');
    }

    // PaymentPlanController.php

    public function addService(PaymentPlan $paymentPlan, Service $service)
    {
        $paymentPlan->services()->attach($service);

        return redirect()->route('paymentPlans.edit', $paymentPlan);
    }

    public function deleteService(PaymentPlan $paymentPlan, Service $service)
    {
        $paymentPlan->services()->detach($service);

        return redirect()->route('paymentPlans.edit', $paymentPlan);
    }

}
