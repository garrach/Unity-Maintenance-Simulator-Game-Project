<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AssetBundles;
use Illuminate\Support\Facades\Storage;
class AssetBundlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        AssetBundles::factory(3)->create()->each(function ($assetBundle) {
            // Generate a file content (you can modify this part based on your needs)
            $fileContent = "This is the content of the file for AssetBundle ID: {$assetBundle->id}";

            // Generate a unique file name
            $fileName = "file_{$assetBundle->id}.txt";

            // Store the file in the 'public/storage/files' directory
            Storage::disk('public')->put("files/{$fileName}", $fileContent);

            // Update the AssetBundle with the file path
            $assetBundle->update(['file_path' => "public/storage/files/{$fileName}"]);
        });
    
    }
}
