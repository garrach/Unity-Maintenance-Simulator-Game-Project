<?php
// database/migrations/create_connections_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConnectionsTable extends Migration
{
    public function up()
    {
        Schema::create('connections', function (Blueprint $table) {
            $table->string('connection_id');
            $table->foreignId('vehicle_id')->constrained();
            $table->foreignId('device_id')->constrained();
            $table->date('connection_date');
            $table->timestamps();
            $table->unique(['connection_id', 'device_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('connections');
    }
}