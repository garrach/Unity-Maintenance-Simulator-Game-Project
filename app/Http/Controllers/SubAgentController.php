<?php

namespace App\Http\Controllers;


use App\Models\SubAgent;
use App\Models\User;
use App\Models\PaymentPlan;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class SubAgentController extends Controller
{
    // Show the form for editing a specific subagent
    public function EditSubservice($id)
    {
        $subagent = SubAgent::findOrFail($id); // Changed to SubAgent model
        return Inertia::render('subscriptions/Edit', compact('subagent')); // Changed variable name to subagent
    }

    // Update a specific subagent
    public function UpdateSubservice(Request $request, $id)
    {
        $subagent = SubAgent::findOrFail($id); // Changed to SubAgent model

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
        ]);

        $subagent->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
        ]);

        return redirect()->route('subservices.index')->with('success', 'SubAgent updated successfully'); // Changed message
    }

    // Remove the specified subagent from storage
    public function DeleteSubservice($id)
    {
        $subagent = SubAgent::where('service_id',$id)->first(); // Changed to SubAgent model
        $subagent->delete();

        return redirect()->route('subservices.index')->with('success', 'SubAgent deleted successfully'); // Changed message
    }

    

    public static function getUserPaidServices($id){

        $user = User::where('id',$id)->first();
    
        $subscriptions=[];
            foreach ($user->subs as $subscription) {
                $service = Service::where('id',$subscription->service_id)->first();
                $subscriptions[$service->id]=$service;
            }

            $displaySubs = [
                "user" => $user,
                "services" => $subscriptions
            ];
            return $displaySubs;
    }
    public function index() {
        // Eager load users with their subscriptions
        $users = User::all();
    
        $displaySubs = [];
        $subscriptions=[];
        foreach ($users as $user) {    
            $subscriptions=[];
            foreach ($user->subs as $subscription) {
                $service = Service::find($subscription->service_id);
                $subscriptions[$subscription->id]=$service;
       
            }
            $displaySubs[$user->id] = [
                "user" => $user,
                "services" => $subscriptions
            ];
        }
    
        //return $displaySubs ;
        return Inertia::render('subscriptions/Index', compact('displaySubs'));
    }
    
    
    public function sub(Request $request){

        $user=Auth::user();

        if($user->role=="admin"){
            SubAgent::create([
                'user_id' => $request->input('user_id'),
                'service_id' => $request->input('service_id'),
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
            ]);
        }else {
            SubAgent::create([
                'user_id' => $user->id,
                'service_id' => $request->input('service_id'),
                'name' => $request->input('name'),
                'description' => $request->input('description'),
                'price' => $request->input('price'),
            ]);
        }
       

        return redirect()->route('subservices.index')->with('success', 'SubAgent updated successfully');
    }
    public function viewPlans(){

        $paymentPlans=PaymentPlan::all();

        foreach ($paymentPlans as $value) {
            $services[$value->id]=$value->services;
        }
        return Inertia::render('subscriptions/ClientPlans', compact('services','paymentPlans'));

    }
}
