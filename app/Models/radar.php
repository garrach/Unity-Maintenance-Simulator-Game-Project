<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class radar extends Model
{
    use HasFactory;
    protected $fillable=['carelectronics',

    'interiorcontrols',

    'safetyfeatures',

    'entertainmentsystem',

    'chargingaccessories',

    'Driverassistanceandcontrol',

    'device_id'];
}
