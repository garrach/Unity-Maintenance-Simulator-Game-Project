<?php


namespace Database\Factories;

use App\Models\Connection;
use Illuminate\Database\Eloquent\Factories\Factory;

class ConnectionFactory extends Factory
{
    protected $model = Connection::class;

    public function definition()
    {
        return [
            'connection_id' => $this->faker->sentence,
        ];
    }
}
