<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['device_id','text'];

    public function device(): BelongsTo
    {
        return $this->belongsTo(device::class);
    }
}
