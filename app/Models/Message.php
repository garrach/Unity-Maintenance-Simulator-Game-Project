<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table='client_inboxs';
    protected $fillable = [
        'sender_id',
        'recipient_id',
        'subject',
        'body',
        'read_at',
    ];

    public function user(){
        return $this->belongsTo(User::class,'sender_id');
    }
}
