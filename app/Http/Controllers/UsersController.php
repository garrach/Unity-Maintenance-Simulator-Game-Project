<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::all()->toArray();

        return Inertia::render('users', [
            'users' => $users,
        ]);
    }
}
