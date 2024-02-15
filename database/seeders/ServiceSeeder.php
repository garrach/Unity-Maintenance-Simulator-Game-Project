<?php

// database/seeders/ServiceSeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $servicesData = [
            ['name' => 'Basic Maintenance Tracking', 'description' => 'Effortlessly track and manage your car maintenance schedule. Receive timely reminders for oil changes, inspections, and more.'],
            ['name' => 'Car Analytics', 'description' => 'Gain insights into your car\'s performance with detailed analytics. Track fuel efficiency, mileage, and overall health of your vehicle.'],
        ];

        foreach ($servicesData as $data) {
            Service::create($data);
        }
    }
}

