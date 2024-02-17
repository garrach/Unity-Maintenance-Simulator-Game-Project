<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssetBundles extends Model
{
    use HasFactory;


    // Define the fillable fields for mass assignment
    protected $fillable = ['name', 'description', 'version', 'platform', 'file_size'];

    public function devices()
    {
        return $this->belongsToMany(Device::class);
    }
}
