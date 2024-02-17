<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AssetBundles;
use App\Models\Device;
use Inertia\Inertia;

class AssetBundlesController extends Controller
{
    public function index()
    {
        $assetBundles = AssetBundles::all();
        return Inertia::render('AssetBundles/Index', ['assetBundles' => $assetBundles]);
    }

    public function create()
    {
        return Inertia::render('AssetBundles/Create');
    }

    public function store(Request $request)
    {
        // Validate and store the connection
        $assetBundle = AssetBundles::create([
            'name' => $request->name,
            'description' => $request->description,
            'version' => $request->version,
            'platform' => $request->platform,
            'file_size' => $request->file_size,
            'file_path' => $request->file_path,
        ]);

        // Attach devices to the connection
        $assetBundle->devices()->attach($request->device_ids);

        // Retrieve the devices associated with the connection
        $devices = $assetBundle->devices()->get();

        // Serialize the devices into JSON
        $serializedData = $devices->toJson();

        // Return the serialized data as part of the response
        return response()->json(['data' => $serializedData]);
    }

    public function show(AssetBundles $assetBundle)
    {
        return Inertia::render('AssetBundles/Show', ['assetBundle' => $assetBundle]);
    }

    public function edit(AssetBundles $assetBundle)
    {
        $devices=$assetBundle->devices;
        return Inertia::render('AssetBundles/Edit', ['assetBundle' => $assetBundle,"devices"=>$devices]);
    }

    public function update(Request $request, AssetBundles $assetBundle)
    {
        // Update AssetBundle details
        $assetBundle->update([
            'name' => $request->name,
            'description' => $request->description,
            'version' => $request->version,
            'platform' => $request->platform,
            'file_size' => $request->file_size,
            'file_path' => $request->file_path,
        ]);

        // Sync devices for the connection
        $assetBundle->devices()->sync($request->device_ids);

        // Redirect to the index page
        return redirect()->route('assetBundles.index')->with('success', 'AssetBundle updated successfully.');
    }

    public function destroy(AssetBundles $assetBundle)
    {
        // Detach devices before deleting the connection
        $assetBundle->devices()->detach();

        // Delete the AssetBundle
        $assetBundle->delete();

        // Redirect to the index page
        return redirect()->route('assetBundles.index')->with('success', 'AssetBundle deleted successfully.');
    }
}
