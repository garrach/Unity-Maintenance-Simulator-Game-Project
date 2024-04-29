<?php

namespace Database\Factories;

use App\Models\WishList;
use Illuminate\Database\Eloquent\Factories\Factory;

class WishListFactory extends Factory
{
    protected $model = WishList::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'device_id' => $this->faker->numberBetween(30, 37), // Assuming you have 10 devices
            'user_id' => $this->faker->numberBetween(12, 200), // Assuming you have 20 users
        ];
    }
}
