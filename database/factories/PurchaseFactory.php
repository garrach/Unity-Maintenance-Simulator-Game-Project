<?php

namespace Database\Factories;

use App\Models\Purchase;
use Illuminate\Database\Eloquent\Factories\Factory;

class PurchaseFactory extends Factory
{
    protected $model = Purchase::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(12, 200), // Assuming you have 20 users
            'device_id' => $this->faker->numberBetween(30, 37), // Assuming you have 10 devices
            'date' => $this->faker->dateTimeBetween('-1 year', 'now'), // Random date in the past year
            'stat' => $this->faker->randomElement([0, 1]), // Random purchase status
            'position' => $this->faker->sentence // Random position description
        ];
    }
}
