<?php

// app/Models/Service.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'price'];

    // Define a relationship to the Purchase model
    public function purchases()
    {
        return $this->hasMany(Purchase::class);
    }
}

