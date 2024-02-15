<?php

// app/Models/Connection.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Connection extends Model
{
    use HasFactory;

    protected $fillable = ['vehicle_id', 'device_id', 'connection_date'];

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function device()
    {
        return $this->belongsTo(Device::class);
    }
}
