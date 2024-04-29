<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
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
        for ($i = 43; $i <= 80; $i++) {
            User::create([
                'name' => 'User' . $i,
                'role' => 'client', 
                'email' => 'user' . $i . '@example.com',
                'password' => Hash::make('password'), 
            ]);
        }
    }
}
