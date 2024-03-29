<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeviceUsage extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'device_id', 'usage_count'];

}
