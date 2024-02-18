<?php
namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
class Connection extends Model
{
    use HasFactory;

    protected $fillable = ['vehicle_id','device_id'];

    public function vehicles()
    {
        return $this->hasManyThrough(Vehicle::class,Device::class,'id','id');
    }
}
