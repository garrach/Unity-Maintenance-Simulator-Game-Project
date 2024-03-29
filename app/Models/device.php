<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $fillable = ['serial_number', 'type', 'installation_date','image'];

    public function vehicles()
    {
        return $this->belongsTo(Vehicle::class);
    }
    

    public function purchases()
    {
        return $this->hasmany(Purchase::class);
    }
    
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function reviews() 
    {
        return $this->hasMany(Review::class);
    }
}
