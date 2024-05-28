<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRadarsTable extends Migration
{

    public function up()
    {

        Schema::create('radars', function (Blueprint $table) {
            $categories = [
                'carelectronics',
                'interiorcontrols',
                'safetyfeatures',
                'entertainmentsystem',
                'chargingaccessories',
                'Driverassistanceandcontrol'
            ];
            $table->id();

            // Define columns for each category
            foreach ($categories as $category) {
                $table->string($category);
            }

            $table->unsignedBigInteger('device_id')->nullable();
            $table->timestamps();
            $table->foreign('device_id')->references('id')->on('devices');
        });
    }

    public function down()
    {
        Schema::dropIfExists('radars');
    }
}
