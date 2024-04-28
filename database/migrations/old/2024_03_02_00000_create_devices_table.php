<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('serial_number');
            $table->string('type');
            $table->decimal('price', 8, 2);
            $table->timestamps();
            $table->date('installation_date')->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('devices');
    }
}
