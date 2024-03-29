<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userexpcoin extends Model
{
    use HasFactory;
    protected $table='userexpcoin';
    protected $fillable = [
        'user_id',
        'experience',
        'coins',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
