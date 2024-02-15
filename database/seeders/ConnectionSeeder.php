<?php
// database/seeders/ConnectionSeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Connection;
use App\Models\Vehicle;
use App\Models\Device;
use Faker\Factory as Faker;

class ConnectionSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Assuming you have existing vehicles and devices
        $vehicles = Vehicle::pluck('id')->toArray();
        $devices = Device::pluck('id')->toArray();

        // Generate sample connections
        foreach (range(1, 50) as $index) {
            Connection::create([
                'connection_id'=>$faker->word,
                'vehicle_id' => $faker->randomElement($vehicles),
                'device_id' => $faker->randomElement($devices),
                'connection_date' => $faker->date,
            ]);
        }
    }
}
