<?php

namespace Database\Factories;

// database/factories/AssetBundlesFactory.php

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\AssetBundles;

class AssetBundlesFactory extends Factory
{
    protected $model = AssetBundles::class;

    public function definition()
    {
        return [
            'name' => $this->faker->sentence,
            'description' => $this->faker->sentence,
            'version' => $this->faker->numberBetween(1, 10),
            'platform' => $this->faker->word,
            'file_size' => $this->faker->randomFloat(2, 100, 1000),
        ];
    }
}
