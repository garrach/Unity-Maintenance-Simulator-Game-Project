<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ServicesController extends Controller
{
    public function index(): Response
    {
        $services = Service::all();
        return Inertia::render('Services/Index', ['services' => $services]);
    }

    public function create(): Response
    {
        return Inertia::render('Services/Create');
    }

    public function store(Request $request): Response
    {
        // Validation logic here, if needed

        Service::create($request->all());
        return redirect()->route('services.index')->with('success', 'Service created successfully.');
    }

    public function show(Service $service): Response
    {
        return Inertia::render('Services/Show', ['service' => $service]);
    }

    public function edit(Service $service): Response
    {
        return Inertia::render('Services/Edit', ['service' => $service]);
    }

    public function update(Request $request, Service $service): Response
    {
        // Validation logic here, if needed

        $service->update($request->all());
        return redirect()->route('services.index')->with('success', 'Service updated successfully.');
    }

    public function destroy(Service $service): Response
    {
        $service->delete();
        return redirect()->route('services.index')->with('success', 'Service deleted successfully.');
    }
}
