<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentPlanUserTable extends Migration
{
    public function up()
    {
        Schema::create('payment_plan_user', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('payment_plan_id');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();
            $table->unique('user_id');
            $table->foreign('payment_plan_id')->references('id')->on('payment_plans')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('payment_plan_user');
    }
}
