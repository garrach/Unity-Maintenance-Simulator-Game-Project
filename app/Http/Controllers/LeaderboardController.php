<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\AddonRequest;
use App\Models\Userexpcoin;
use Illuminate\Support\Facades\Auth;

class LeaderboardController extends Controller
{
    public function index()
{
    // Fetch all users
    $userIN = Auth::user();
    $users = User::all();

    // Fetch user's experience and coins
    $userExpCoins = Userexpcoin::all();

    // Calculate the total score for each user
    $userScores = [];
    foreach ($users as $user) {
        $score = 0;
        foreach ($userExpCoins as $expCoin) {
            if ($expCoin->user_id == $user->id) {
                $score += $expCoin->experience;
            }
        }
        $userScores[$user->id] = $score;
    }

    // Sort users by their scores in descending order
    arsort($userScores);

    // Assign ranks to users based on their scores
    $rankedUsers = [];
    $rank = 1;
    foreach ($userScores as $userId => $score) {
        $user = User::find($userId);
        $rankedUsers[] = [
            'rank' => $rank++,
            'user' => $user,
            'score' => $score
        ];
    }

    // Pass the ranked users data to the view
    return Inertia::render('LeaderboardPage', ['getLeaderboardData' => $rankedUsers,'auth'=>$userIN]);
}
public function userprogress() {
    $userIN = Auth::user();
    $rank = 0;
    $score = 0;
    $activities = [];
    $achivement = [];

    // Fetch all user experience coins
    $userExpCoins = Userexpcoin::all();
    $userExp = Userexpcoin::where('user_id', $userIN->id)->first();

    // Calculate rank
    foreach ($userExpCoins as $value) {
        if ($value->experience >= $userExp->experience) {
            $rank++;
        }
    }

    // Set score
    $score = $userExp->experience;

    // Fetch activities from addon_requests model
    $activities = AddonRequest::where('user_id', $userIN->id)->with('device')->get();

    $achievements = [
        ['icon' => '🏆', 'name' => 'Top Performer'],
        ['icon' => '🎖️', 'name' => 'Consistent Achiever'],
        ['icon' => '🏅', 'name' => 'Best Innovator'],
    ];
    $rankedUser = [
        'rank' => $rank,
        'user' => $userIN,
        'score' => $score
    ];

    return Inertia::render('UserProfile', [
        'getLeaderboardData' => $rankedUser,
        'activities' => $activities,
        'achievements' => $achievements,
        'auth' => $userIN
    ]);
}

}
