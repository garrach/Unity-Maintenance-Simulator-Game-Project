import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
const LeaderboardPage = ({ getLeaderboardData, auth }) => {
  const { props } = usePage();
  const [leaderboardData, setLeaderboardData] = useState();
  useEffect(() => {
    fetchLeaderboardData();
  }, []);
  const fetchLeaderboardData = async () => {
    try {
      // Call the getLeaderboardData function to fetch data
      const data = getLeaderboardData
      setLeaderboardData(data); // Update the state with the fetched data
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };
  function CardUser (user) {
    console.log(user)
  }
  return (
    <AuthenticatedLayout
      user={auth}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Leaderboard</h2>}
    >
      <Head title="Leaderboard" />
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8"></h1>
          <div className="flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              {/* First Place */}
              <div className="flex items-center space-x-2">
                <div className="h-12 w-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-white" >1 </span>
                </div>
                {leaderboardData && 
                <div >{`${leaderboardData.slice(0, 1)[0].user.name}`}</div>}
                <div className="font-semibold">First Place</div>
              </div>
              {/* Second Place */}
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-white">2 </span>
                </div>
                <div>{leaderboardData && (<>{`${leaderboardData.slice(1, 2)[0].user.name}`}</>)}</div>
                <div className="font-semibold">Second Place</div>
              </div>
              {/* Third Place */}
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-white">3 </span>
                </div>
                <div>{leaderboardData && (<>{`${leaderboardData.slice(2, 3)[0].user.name}`}</>)}</div>
                <div className="font-semibold">Third Place</div>
              </div>
            </div>
          </div>
          {/* Other Users */}
          <div className="mt-8">
            <div className="grid grid-cols-3 gap-4">
              {/* Render other users */}
              {leaderboardData && leaderboardData.slice(3).map((user, index) => (
                <div key={index} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <div className="font-semibold">{user.rank}</div>
                  <div>{user.user.name}</div>
                  <div>{user.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



    </AuthenticatedLayout>
  );
};
export default LeaderboardPage;
