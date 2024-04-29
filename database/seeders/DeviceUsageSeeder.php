<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\DeviceUsage;

class DeviceUsageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 20 device usage records using the DeviceUsage factory
        DeviceUsage::factory()->count(20)->create();
    }
}
