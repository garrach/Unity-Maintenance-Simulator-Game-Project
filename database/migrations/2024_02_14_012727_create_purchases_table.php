<?php

// database/migrations/YYYY_MM_DD_create_purchases_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchasesTable extends Migration
{
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained(); // Assuming a relationship with the users table
            $table->string('service_plan'); // Example: 'basic', 'standard', 'premium'
            $table->timestamp('purchase_date');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}
