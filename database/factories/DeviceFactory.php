<?php
// database/factories/DeviceFactory.php

namespace Database\Factories;


use App\Models\Device;
use Illuminate\Database\Eloquent\Factories\Factory;

class DeviceFactory extends Factory
{
    protected $model = Device::class;

    public function definition()
    {
        return [
            'serial_number' => $this->faker->word,
            'type' => $this->faker->word,
            'installation_date' => $this->faker->date,
            // Add other fields as needed
        ];
    }
}
