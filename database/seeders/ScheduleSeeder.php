<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Schedule;

class ScheduleSeeder extends Seeder
{
    public function run()
    {
        Schedule::create([
            'title' => 'Sample Schedule 1',
            'description' => 'This is a sample schedule.',
            'start_date' => '2022-02-27',
            'end_date' => '2022-03-05',
        ]);

        Schedule::create([
            'title' => 'Sample Schedule 2',
            'description' => 'Another sample schedule.',
            'start_date' => '2022-03-06',
            'end_date' => '2022-03-12',
        ]);

        // Add more schedules as needed
    }
}
