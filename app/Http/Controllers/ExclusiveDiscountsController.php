<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ExclusiveDiscountsController extends Controller
{
  // ExclusiveDiscountsController
public function index()
{
  $user=Auth::user();

    return Inertia::render('ExclusiveDiscounts/Index',compact('user'));
}

}
