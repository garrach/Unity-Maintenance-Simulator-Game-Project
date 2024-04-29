<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\PaymentPlan;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generate 20 users
        for ($i = 202; $i <= 400; $i++) {
            $user=User::create([
                'name' => 'User' . $i,
                'role' => 'client', 
                'email' => 'user' . $i . '@example.com',
                'password' => Hash::make('password'), 
            ]);
            $user->save();

            $plans = PaymentPlan::skip(0)->take(1)->first();

            $user->plans()->attach($plans);
        }
    }
}
