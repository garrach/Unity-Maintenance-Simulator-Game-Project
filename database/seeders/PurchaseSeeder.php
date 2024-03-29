<?php

// database/seeders/PurchaseSeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Purchase;

class PurchaseSeeder extends Seeder
{
    public function run()
    {
        $users = \App\Models\User::all();

        $purchasePlans = ['basic', 'standard', 'premium'];

        foreach ($users as $user) {
            foreach ($purchasePlans as $plan) {
                // Attach services to each purchase plan
                $services = Service::inRandomOrder()->limit(3)->get(); // Adjust the limit as needed
                $purchaseData = ['user_id' => $user->id, 'service_plan' => $plan, 'purchase_date' => now()];

                $purchase = Purchase::create($purchaseData);

                // Attach services to the purchase
                $purchase->services()->attach($services);
            }
        }
    }
}

