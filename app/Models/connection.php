<?php

// app/Models/Connection.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
class Connection extends Model
{
    protected $fillable = ['vehicle_id', 'device_id', 'connection_date'];

    protected $table="connections";

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function devices()
    {
        return $this->BelongsToMany(Device::class,"connections");
    }
}
