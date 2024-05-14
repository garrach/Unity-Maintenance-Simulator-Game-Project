<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Userexpcoin;

class UnityDataMonitorController extends Controller
{
    public function index(){
        return Inertia::render('UnityDataMonitor');
    }
    public function previewService(){
        $Userexpcoin=Userexpcoin::all();
        $displayArray=[];
        foreach($Userexpcoin as $user){
            $displayArray[$user->id]=['ID'=>$user->user->name,'exp'=>$user->experience];
            
        }
        
        return Inertia::render('Gaming',compact('displayArray'));
    }
}
