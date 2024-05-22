<?php

// app/Models/Service.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description','route','stat'];

    public function paymentPlans()
    {
        return $this->belongsToMany(PaymentPlan::class);
    }
}

