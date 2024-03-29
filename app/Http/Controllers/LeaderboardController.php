<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Userexpcoin;
use Illuminate\Support\Facades\Auth;

class LeaderboardController extends Controller
{
    public function index()
{
    // Fetch all users
    $user = Auth::user();
    $users = User::all();

    // Fetch user's experience and coins
    $userExpCoins = Userexpcoin::all();

    // Calculate the total score for each user
    $userScores = [];
    foreach ($users as $user) {
        $score = 0;
        foreach ($userExpCoins as $expCoin) {
            if ($expCoin->user_id == $user->id) {
                $score += $expCoin->experience; // Assuming experience contributes to the score
                $score += $expCoin->coins; // Assuming coins also contribute to the score
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
    return Inertia::render('LeaderboardPage', ['getLeaderboardData' => $rankedUsers,'auth'=>$user]);
}
}
