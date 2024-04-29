<?php

namespace Database\Factories;

use App\Models\Job;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobFactory extends Factory
{
    protected $model = Job::class;

    public function definition()
    {
        return [
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->paragraph,
            'resume' => $this->faker->url,
            'hash' => $this->faker->md5,
            'user_id' => $this->faker->numberBetween(12, 200), // Assuming you have 20 users
        ];
    }
}
