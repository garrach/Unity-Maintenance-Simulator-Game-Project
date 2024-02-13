<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PriorityCustomerSupportController extends Controller
{
   
// PriorityCustomerSupportController
public function index()
{
    $user=Auth::user();

    return Inertia::render('PriorityCustomerSupport/Index',compact('user'));
}
}
