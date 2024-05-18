<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','device_id','rate'];

    public function device(): BelongsTo
    {
        return $this->belongsTo(device::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
