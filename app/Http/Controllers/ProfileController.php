<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\AddonRequest;
use App\Models\Comment;
use App\Models\Connection;
use App\Models\Contact;
use App\Models\Dashboard;
use App\Models\device;
use App\Models\Job;
use App\Models\PaymentPlan;
use App\Models\Report;
use App\Models\Review;
use App\Models\Schedule;
use App\Models\Service;
use App\Models\User;
use App\Models\Vehicle;
use App\Models\Purchase;
use App\Models\Message;

use App\Models\WishList;
use Defuse\Crypto\Crypto;
use Defuse\Crypto\Key;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{

    public function create()
    {

        
        $qt = (Inspiring::quote());
        $qt = strip_tags($qt);
        $auth = Auth::user();
        $inboxs=$auth->messages; 
        $users=[]; 
        foreach($inboxs as $inbox){
            $users[$inbox->id]=$inbox->user; 
        }
        return Inertia::render('Profile/Account', [
            'user' => $auth,
            'qt' => $qt,
            'inbox'=>$inboxs,
            'users'=>$users,
        ]);
    }
    public function sendMessage(Request $request)
    {   
        $msg=Message::create($request->all());
        $msg->save();
        //return $msg;
    }
    

    public function show(Request $request)
    {
        $user = User::find($request->userID);
        try {       
            $paymentPlans=[];
            $services=[];
            $wishLists=[];
            $devices=[];
            $reviews = [];
            $comments = []; 
            $connections = []; 
            $jobs = []; 
            $addonRequests = []; 
            $reports = []; 
        if($user)
        if($paymentPlans)
        $services = $paymentPlans->services;
    
    if($user){
            $paymentPlans = $user->plans->first();
            $Purchases=$user->purchases;
            $wishLists = $user->wishLists;
            $jobs = $user->job;
            $connections = Connection::where('user_id',$user->id);
            $addonRequests = AddonRequest::where('user_id',$user->id);
            $reports = Report::where('user_id',$user->id);
            if($Purchases){
            foreach($Purchases as $purchase){
                $devices[$purchase->id]=$purchase->device;
            }
            foreach($devices as $device){
                $reviews[$device->id]=$device->reviews;
                $comments[$device->id]=$device->comments;
            }
            }
        }



        $secretKey = Key::createNewRandomKey();
        $key=$secretKey->saveToAsciiSafeString();

 // Data to be encrypted


        $userData = [
            'user' => $user,
            'services' => $services,
            'paymentPlans' => $paymentPlans,
            'reviews' => $reviews,
            'comments' => $comments,
            'connections' => $connections,
            'jobs' => $jobs,
            'addonRequests' => $addonRequests,
            'reports' => $reports,
            'wishLists' => $wishLists,
            'devices' => $devices,
           
        ];

        $jsonUserData = json_encode($userData);

        $base64EncodedData = base64_encode($jsonUserData);
        $user = User::find($request->userID);
        $infos = [
            $user->id,
            $user->nickname,
            $user->name,
            $user->email,
            $user->role,
        ];

        return Inertia::render('Profile/show', [
            'userID' => $infos,
            'encryptedDataDetails' => $base64EncodedData,
        ]);
    } catch (\Throwable $th) {
        return null;
    }
}

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

// ...

    public function updateRole(User $user, Request $request)
    {
        $user = User::find($request->user)->first();
        $user->update([
            'role' => $request->role,
        ]);
        $user->save();

        $userpaymentPlan = $user->plans->first();

        $paymentPlans=PaymentPlan::all();

        if ($request->role=="client") {
            $user->plans()->sync($paymentPlans->first());
        }elseif($request->role=="employee"){
            $user->plans()->sync($paymentPlans->skip(1)->take(1));
        }elseif ($request->role=="admin") {
            $user->plans()->sync($paymentPlans->skip(2)->take(1));

        }


        return Redirect::route('dashboard');
    }

    public function editUser(Request $request): Response
    {

        $originalData = base64_decode($request->id);
        $userInfo = explode(',', $originalData);
        return Inertia::render('Profile/UserProfileEdit', [
            'user' => $userInfo,
        ]);
    }
    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request):RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        $accountToDelete=$request->editUser;

        if($accountToDelete){
            $accountToDelete = User::findOrFail($accountToDelete[0]);
            $accountToDelete->delete();
            return Redirect::to('/dashboard');

        }else{
            $user->delete();
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
            return Redirect::to('/');
        }
       

    }
}
