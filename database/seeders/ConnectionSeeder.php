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
        $connection = Connection::factory()->count(100)->create();
    }
}
