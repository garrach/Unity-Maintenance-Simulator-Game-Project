import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import RecentConnections from "./Dashboard/RecentConnections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserShield,
    faUserCircle,
    faUserTie,
    faUserPlus,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import SVGAnimation from "@/Components/SVGAnimation";
const UserProfile = ({
    getLeaderboardData,
    activities,
    achievements,
    auth,
}) => {
    const userProfile = getLeaderboardData;

    // Function to get initials from user name
    const getInitials = (name) => {
        const names = name.split(" ");
        const initials = names.map((n) => n[0]).join("");
        return initials.slice(0, 2).toUpperCase();
    };

    return (
        <AuthenticatedLayout
            user={auth}
            header={
                <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
                    User Progress
                </h2>
            }
        >
            <Head title="User Profile" />
            <div className="relative bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen overflow-hidden">
            <SVGAnimation />

                <div className="relative z-10 container mx-auto px-4 py-8">
                    {userProfile && (
                        <>
                            {/* Cover Photo */}
                            <div className="relative flex justify-center items-center dark:bg-gray-800 bg-gray-200">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    className="w-auto h-auto object-cover rounded-t-lg"
                                >
                                    <source src="banner.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute w-full h-full"></div>
                                {/* Profile Initials */}
                                <div className="absolute top-24 left-4 md:left-8 transform -translate-y-1/2 ">
                                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-700 text-white rounded-full flex items-center justify-center border-8 border-gray-200 dark:border-gray-800 text-4xl font-bold">
                                        {getInitials(userProfile.user.name)}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-b-lg shadow-md mt-4 p-4 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                                    <div className="mt-16 md:mt-0">
                                        <h1 className="text-3xl font-bold">
                                            {userProfile.user.name}
                                        </h1>
                                        <p className="text-lg">
                                            Rank: #{userProfile.rank}
                                        </p>
                                        <p className="text-lg">
                                            Score: {userProfile.score}
                                        </p>

                                    </div>
                                </div>
                                {/* Progress Bar */}
                                <div className="mt-8">
                                    <h2 className="text-xl font-semibold mb-2">
                                        Progress
                                    </h2>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                                        <div
                                            className="bg-green-500 h-4 rounded-full"
                                            style={{
                                                width: `${
                                                    (userProfile.score / 1000) *
                                                    100
                                                }%`,
                                            }} // Assuming score out of 1000
                                        />
                                    </div>
                                </div>
                                {/* Recent Activities */}
                                <div className="mt-8">
                                    <h2 className="text-xl font-semibold mb-4">
                                        Recent Activities
                                    </h2>
                                    <ul className="space-y-4">
                                        {activities.map((activity, index) => (
                                            <li
                                                key={index}
                                                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 shadow-md"
                                            >
                                                <div className="text-lg font-semibold">
                                                    Device:{" "}
                                                    {
                                                        activity.device
                                                            .serial_number
                                                    }
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    Activity ID: {activity.id}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Achievements */}
                                <div className="mt-8">
                                    <h2 className="text-xl font-semibold mb-4">
                                        Achievements
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {achievements.map(
                                            (achievement, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-yellow-200 dark:bg-yellow-600 rounded-lg p-4 text-center shadow-md"
                                                >
                                                    <div className="text-2xl font-bold">
                                                        {achievement.icon}
                                                    </div>
                                                    <div className="mt-2">
                                                        {achievement.name}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default UserProfile;
