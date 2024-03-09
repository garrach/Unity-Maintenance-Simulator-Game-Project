<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\job;
use Inertia\Inertia;
class ApplicationListController extends Controller
{
   public function index(){
    $jobs=job::all();
    return Inertia::render('ApplicationList',compact('jobs'));
   }
   
}
