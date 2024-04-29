<?php


namespace Database\Factories;

use App\Models\Connection;
use App\Models\Vehicle;
use App\Models\Device;

use Illuminate\Database\Eloquent\Factories\Factory;

class ConnectionFactory extends Factory
{
    protected $model = Connection::class;

    public function definition()
    {

        $devices=Device::all()->last();
        $vehicles=Vehicle::all()->last();
        $randomNumberD = rand(30, $devices->id);
        $randomNumberV = rand(11, $vehicles->id);
        $randomNumberV = rand(0, $vehicles->id);
        return [
            'device_id'=>$randomNumberD,
            'vehicle_id'=>$randomNumberV,
        ];
    }
}
