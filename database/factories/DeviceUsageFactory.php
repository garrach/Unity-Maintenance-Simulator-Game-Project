<?php

namespace Database\Factories;

use App\Models\DeviceUsage;
use Illuminate\Database\Eloquent\Factories\Factory;

class DeviceUsageFactory extends Factory
{
    protected $model = DeviceUsage::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(12, 200), 
            'device_id' => $this->faker->numberBetween(31, 37), 
            'usage_count' => $this->faker->numberBetween(100, 1000),
        ];
    }
}
