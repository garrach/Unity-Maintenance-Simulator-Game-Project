import React, { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

const LeaderboardPage = ({ getLeaderboardData, auth }) => {
  const { props } = usePage();
  const leaderboardData = getLeaderboardData;

  // Add fade-in effect to the main content
  useEffect(() => {
    const content = document.querySelector('.fade-in');
    if (content) {
      content.classList.remove('opacity-0');
      content.classList.add('opacity-100');
    }
  }, []);

  return (
    <AuthenticatedLayout
      user={auth}
      header={<h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">Leaderboard</h2>}
    >
      <Head title="Leaderboard" />
      <div className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen overflow-hidden">
        {/* SVG Background Animation */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,200 Q100,100 200,200 T400,200 T600,200 T800,200"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="3"
            fill="none"
            className="animate-path"
          />
          <style jsx>{`
            .animate-path {
              stroke-dasharray: 500;
              stroke-dashoffset: 1000;
              animation: dash 15s linear infinite;
            }
            @keyframes dash {
              to {
                stroke-dashoffset: 100;
              }
            }
          `}</style>
        </svg>
        <div className="relative z-10 container mx-auto px-4 py-8 fade-in opacity-0 transition-opacity duration-1000">
          <h1 className="text-4xl font-bold text-center mb-8">Leaderboard</h1>
          <div className="flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              {/* First Place */}
              {leaderboardData.length > 0 && (
                <div className="flex items-center space-x-4 bg-yellow-200 dark:bg-yellow-600 rounded-md p-4 w-full max-w-xl transform transition-transform duration-500 hover:scale-105">
                  <div className="text-3xl font-bold text-yellow-800 dark:text-yellow-200">🥇</div>
                  <div className="text-lg font-semibold">{leaderboardData[0].user.name}</div>
                  <div className="text-lg font-semibold">Score: {leaderboardData[0].score}</div>
                </div>
              )}
              {/* Second Place */}
              {leaderboardData.length > 1 && (
                <div className="flex items-center space-x-4 bg-gray-200 dark:bg-gray-700 rounded-md p-4 w-full max-w-xl transform transition-transform duration-500 hover:scale-105">
                  <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">🥈</div>
                  <div className="text-lg font-semibold">{leaderboardData[1].user.name}</div>
                  <div className="text-lg font-semibold">Score: {leaderboardData[1].score}</div>
                </div>
              )}
              {/* Third Place */}
              {leaderboardData.length > 2 && (
                <div className="flex items-center space-x-4 bg-orange-200 dark:bg-orange-600 rounded-md p-4 w-full max-w-xl transform transition-transform duration-500 hover:scale-105">
                  <div className="text-3xl font-bold text-orange-800 dark:text-orange-200">🥉</div>
                  <div className="text-lg font-semibold">{leaderboardData[2].user.name}</div>
                  <div className="text-lg font-semibold">Score: {leaderboardData[2].score}</div>
                </div>
              )}
            </div>
          </div>
          {/* Other Users */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Render other users */}
              {leaderboardData.slice(3).map((user, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transform transition-transform duration-500 hover:scale-105 slide-in">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold">#{user.rank}</div>
                    <div className="text-lg font-semibold">{user.user.name}</div>
                    <div className="text-lg font-semibold">Score: {user.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </AuthenticatedLayout>
  );
};

export default LeaderboardPage;
