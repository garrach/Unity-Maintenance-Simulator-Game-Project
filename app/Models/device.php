<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $fillable = ['serial_number', 'type', 'installation_date'];

    public function vehicles()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
