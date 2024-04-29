<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Purchase;

class Purchase2Seeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 20 purchase records using the Purchase factory
        Purchase::factory()->count(20)->create();
    }
}
