<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddonRequest extends Model
{
    use HasFactory;
    protected $fillable = ['device_id', 'user_id'];
    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
