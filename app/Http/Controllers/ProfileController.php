<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Artisan;
use App\Models\User;
use Illuminate\Foundation\Inspiring;
class ProfileController extends Controller
{



    /**
     * Display the user's profile form.
     */
    public function create()
    {
       
        $qt=(Inspiring::quote());
        $qt = strip_tags($qt);
        $auth=Auth::user();
        return Inertia::render('Profile/Account',[
            'user' => $auth,
            'qt'=>$qt,
        ]);
    }

    public function show(Request $request)
    {
        $user=User::find($request->userID);
        $infos=[];
        
           $infos[0]=$user->id;
           $infos[1]=$user->name;
           $infos[2]=$user->email;
           $infos[3]=$user->role;
        
        return Inertia::render('Profile/show',[
            'userID' => $infos,
        ]);
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

    public function editUser(Request $request) : Response {

        $originalData = base64_decode($request->id);
        $userInfo=explode(',', $originalData);
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
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
