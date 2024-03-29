<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\job;
use App\Models\User;
use Inertia\Inertia;
class ApplicationListController extends Controller
{
   public function index(){
    $jobs=job::all();
    $users=[];

    foreach($jobs as $job){
      if($job->user)
      $users[$job->id]=$job->user;
    }

    return Inertia::render('ApplicationList',compact('jobs','users'));
   }
   
}
