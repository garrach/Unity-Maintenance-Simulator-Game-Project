<?php

// database/seeders/ReportsTableSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Sample data for reports table
        DB::table('reports')->insert([
            [
                'user_id' => 5, // Replace with an existing user ID
                'application_status' => 0,
                'application_date' => now(),
                'job' => 'admin', // Replace with an existing job ID or set it to null
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more sample data as needed
        ]);
    }
}
