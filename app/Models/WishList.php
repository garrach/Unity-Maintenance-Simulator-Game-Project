<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WishList extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description','device_id',
    'user_id'];

    public function user(){
        return $this->BelongsTo(User::class);
    }
    public function device(){
        return $this->BelongsTo(Device::class);
    }
}
