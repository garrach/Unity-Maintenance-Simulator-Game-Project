<?php
// app/Models/PaymentPlan.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaymentPlan extends Model
{
    protected $fillable = ['name'];

    use HasFactory;

    public function services()
    {
        return $this->belongsToMany(Service::class)->withPivot('service_id');
    }
    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('user_id');
    }
}
