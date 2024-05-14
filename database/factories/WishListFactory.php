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
            'device_id' => $this->faker->numberBetween(30, 37), 
            'user_id' => $this->faker->numberBetween(12, 200), 
        ];
    }
}
