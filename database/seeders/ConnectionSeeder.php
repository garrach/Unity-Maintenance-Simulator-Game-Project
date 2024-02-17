<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Connection;
use App\Models\Vehicle;
use App\Models\Device;

class ConnectionSeeder extends Seeder
{
    public function run()
    {
        // Create a connection record
        $connection = Connection::factory()->create();

        // Attach devices to the connection
        $devices = Device::factory(5)->create();
        $connection->devices()->attach($devices);

        // Associate the connection with a vehicle
        $vehicle = Vehicle::factory()->create();
        $vehicle->connections()->save($connection);
    }
}
