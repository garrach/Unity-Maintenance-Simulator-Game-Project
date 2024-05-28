<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Userexpcoin;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        // Get all users
        $users = User::all();
        $exp=Userexpcoin::all();

        $exparr=[];
        $i=0;
        foreach ($users as $user) {
            $userExp = Userexpcoin::where('user_id', $user->id)->first();
            $exparr[$user->id]=Userexpcoin::all()->skip($i)->take(1);
        }

        return Inertia::render('users', [
            'users' => $users,
            'userexp' => $exparr,
        ]);
    }
}
