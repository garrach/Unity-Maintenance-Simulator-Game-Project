import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
const LeaderboardPage = ({ getLeaderboardData ,auth}) => {
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
  return (
    <AuthenticatedLayout
      user={auth}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Leaderboard Maintenance</h2>}
    >
      <Head title="Leaderboard" />
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          # Rank
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          User
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-800">
                      {leaderboardData && leaderboardData.map((user, index) => (
                        <tr key={index} className={`bg-white dark:bg-gray-${ index %2 ==0 ? '900' : '800'}`}>
                          <td className="px-6 py-4 whitespace-nowrap">{user.rank}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{user.user.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{user.score}</td>
                        </tr>
                      ))}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};
export default LeaderboardPage;
