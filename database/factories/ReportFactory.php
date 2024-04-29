<?php

namespace Database\Factories;

use App\Models\Report;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReportFactory extends Factory
{
    protected $model = Report::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(12, 200), // Assuming you have 20 users
            'application_status' => $this->faker->randomElement([0, 1]),
            'application_date' => $this->faker->dateTimeThisYear,
            'title' => $this->faker->jobTitle,
            'description' => $this->faker->paragraph,
        ];
    }
}
