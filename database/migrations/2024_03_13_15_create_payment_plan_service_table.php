<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentPlanServiceTable extends Migration
{
    public function up()
    {
        Schema::create('payment_plan_service', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('payment_plan_id');
            $table->unsignedBigInteger('service_id');
            $table->timestamps();
            $table->unique(['payment_plan_id', 'service_id']);
            $table->foreign('payment_plan_id')->references('id')->on('payment_plans')->onDelete('cascade');
            $table->foreign('service_id')->references('id')->on('services')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment_plan_service');
    }
}
