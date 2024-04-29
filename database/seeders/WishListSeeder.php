<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\WishList;

class WishListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 20 wish list records using the WishList factory
        WishList::factory()->count(20)->create();
    }
}
