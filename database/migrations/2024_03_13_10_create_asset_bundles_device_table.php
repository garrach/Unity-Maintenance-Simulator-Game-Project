<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetBundlesDeviceTable extends Migration
{
    public function up()
    {
        Schema::create('asset_bundles_device', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('asset_bundles_id');
            $table->unsignedBigInteger('device_id');
            $table->timestamps();
            $table->foreign('asset_bundles_id')->references('id')->on('asset_bundles')->onDelete('cascade');
            $table->foreign('device_id')->references('id')->on('devices')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('asset_bundles_device');
    }
}
