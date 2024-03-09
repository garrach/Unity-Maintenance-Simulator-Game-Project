<?php
namespace App\Http\Controllers;

use App\Models\job;
use App\Models\Report;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function apply(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'coverLetter' => 'required|string',
            'resume' => 'required|file|mimes:pdf,doc,docx',
        ]);

        $title = 'Job Application: ' . $request->fullName;
        $description = 'Name: ' . $request->fullName . "\n" .
        'Email: ' . $request->email . "\n" .
        'Phone: ' . $request->phone . "\n" .
        'Cover Letter: ' . $request->coverLetter;

        $resumeFile = $request->file('resume');
        $resumeContent = file_get_contents($resumeFile->path());
        $resumeHash = Hash::make($resumeFile);
        $resumePath = null;
        if (job::where('hash', $resumeHash)->exists()) {

            return response()->json(['message' => 'Duplicate file detected.'], 422);
        } else {
            $resumePath = $resumeFile->store('resumes');
        }

        if (isset($resumeHash)) {
            $res = [
                'title' => $title,
                'description' => $description,
                'resume' => $resumePath,
                'approval'=>0,
                'hash' => $resumeHash,
                'hash' => $resumeHash,
            ];
            job::create($res);
        }

        return Redirect::route('dashboard')->with('success', 'Report created successfully!');
    }

    public function index()
    {
        $jobs = Report::with(['user', 'job'])->get();
        $reports = Report::all();

        return Inertia::render('Reports/Index', ['reports' => $reports, 'jobs' => $jobs]);
    }

    public function create()
    {
        // Add logic to fetch users and jobs if needed
        $users = User::all();
        $jobs = Job::all();

        return Inertia::render('Reports/Create', ['users' => $users, 'jobs' => $jobs]);
    }

    public function store(Request $request)
    {
        Report::create($request->all());
        return Redirect::route('reports.index')->with('success', 'Report created successfully!');
    }

    public function edit(Report $report)
    {
        // Assuming you have an 'Edit' component in the 'resources/js/Pages/Reports' directory
        return Inertia::render('Reports/Edit', ['report' => $report]);
    }

    public function show(Report $report)
    {
        // Assuming you have a 'Show' component in the 'resources/js/Pages/Reports' directory
        return Inertia::render('Reports/Show', ['report' => $report]);
    }

    public function update(Request $request, Report $report)
    {
        $report->update($request->all());
        return Redirect::route('reports.index')->with('success', 'Report updated successfully!');
    }

    public function destroy(Report $report)
    {
        $report->delete();
        return Redirect::route('reports.index')->with('success', 'Report deleted successfully!');
    }
}
