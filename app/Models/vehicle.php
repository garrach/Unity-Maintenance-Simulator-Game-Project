<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = ['make', 'model', 'year', 'license_plate'];

    public function devices()
    {
        return $this->BelongsToMany(Device::class,'connections','vehicle_id','device_id');
    }
    public function connection()
    {
        return $this->belongsTo(Connection::class);
    }
}
