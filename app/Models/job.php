<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class job extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'resume',
        'hash',
        'user_id'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
