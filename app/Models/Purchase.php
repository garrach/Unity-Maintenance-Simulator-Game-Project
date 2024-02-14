<?php
// app/Models/Purchase.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'service_plan', 'purchase_date'];

    // Define a relationship to the User model
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Define a relationship to the Service model (assuming you have a services table)
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
