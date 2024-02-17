<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetBundlesDeviceTable extends Migration
{
    public function up()
    {
        Schema::create('asset_bundles_device', function (Blueprint $table) {
            $table->id();
            $table->foreignId('asset_bundles_id')->constrained();
            $table->foreignId('device_id')->constrained();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('asset_bundles_device');
    }
}
