<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('asset_bundles_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('asset_bundle_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            // Define foreign key constraints
            $table->foreign('asset_bundle_id')->references('id')->on('asset_bundles')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // Add unique constraint to prevent duplicate entries
            $table->unique(['asset_bundle_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asset_bundles_user');
    }
};
