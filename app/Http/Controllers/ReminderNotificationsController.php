<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Reminder;

class ReminderNotificationsController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $reminders = Reminder::all();
        return Inertia::render('ReminderNotifications/Index', compact('user', 'reminders'));
    }
}
