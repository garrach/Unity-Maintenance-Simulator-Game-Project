<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Reminder;

class ReminderSeeder extends Seeder
{
    public function run()
    {
        Reminder::create([
            'title' => 'Sample Reminder 1',
            'description' => 'This is a sample reminder.',
            'date' => '2022-02-27',
        ]);

        Reminder::create([
            'title' => 'Sample Reminder 2',
            'description' => 'Another sample reminder.',
            'date' => '2022-03-05',
        ]);

        // Add more reminders as needed
    }
}
