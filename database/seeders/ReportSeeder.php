<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Report;

class ReportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 20 report records using the Report factory
        Report::factory()->count(800)->create();
    }
}
