<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentPlanServiceTable extends Migration
{
    public function up()
    {
        Schema::create('payment_plan_service', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('payment_plan_id');
            $table->unsignedBigInteger('service_id');
            // Add any additional columns you may need in the pivot table
            $table->timestamps();

            // Define foreign keys
            $table->foreign('payment_plan_id')->references('id')->on('payment_plans')->onDelete('cascade');
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');

            // Add unique constraint to prevent duplicates
            $table->unique(['payment_plan_id', 'service_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment_plan_service');
    }
}
