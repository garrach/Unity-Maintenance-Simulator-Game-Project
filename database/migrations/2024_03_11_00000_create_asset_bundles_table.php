<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAssetBundlesTable extends Migration
{
    public function up()
    {
        Schema::create('asset_bundles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('version');
            $table->string('platform');
            $table->unsignedBigInteger('file_size')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();
            $table->unique('name');
        });
    }

    public function down()
    {
        Schema::dropIfExists('asset_bundles');
    }
}
