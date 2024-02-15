<?php

// database/factories/VehicleFactory.php

namespace Database\Factories;

use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;

class VehicleFactory extends Factory
{
    protected $model = Vehicle::class;

    public function definition()
    {
        return [
            'make' => $this->faker->company,
            'model' => $this->faker->word,
            'year' => $this->faker->year,
            'license_plate' => $this->faker->unique()->regexify('[A-Z0-9]{7}'),
            // Add other fields as needed
        ];
    }
}
