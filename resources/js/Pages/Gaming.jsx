import React from "react";
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from "@inertiajs/react";
const Gaming = ({ displayArray }) => {
    return <GuestLayout>
        <Head title="Gaming Guide" />
        <div className="relative h-screen overflow-x-hidden overflow-y-auto">
            <div className="relative h-80 bg-gray-900">
                <img src="banner.jpg" alt="" className='relative w-auto h-auto md:h-auto mx-auto' />
                <div className="absolute z-40 top-0 w-full h-full flex flex-col justify-center items-center">
                    <h1 className="font-bold text-5xl text-gray-200 mt-32">Unity Garage Simulator</h1>
                </div>

            </div>
            <div className="relative h-56 bg-gray-200 dark:bg-gray-900 flex flex-col justify-center items-center mx-auto p-4">

                <h2 className="font-bold text-3xl text-gray-800 dark:text-gray-200">welcome to Car mantainance platform, enjoy our services</h2>
                <p className="text-gray-800 dark:text-gray-200 text-xl text-center  rounded-md p-8 ">
                    Unity car mantaince provide a <b className="underline decoration-sky-500">Server-side</b> handling along with a Game client-side, this platform register users attached devices
                    along with <br />  competetive earning Exp by getting into the gaming users can earn <b className="underline decoration-sky-500">experience points</b> experience points classified on a <b className="underline decoration-sky-500">LeaderBoard</b>.</p>
            </div>
            <div className="relative h-12 bg-gray-200 flex mx-auto">
                <marquee className="flex">
                    {Object.values(displayArray).map((user) => (
                        user.exp > 0 && <span className="mt-2 inline-block ml-2">
                            <span className="hover:bg-orange-500 p-2 rounded cursor-default"> {`${user.ID}`}</span>
                            <span className="font-bold uppercase"> {`${user.exp}exp`}</span>
                           
                        </span>
                    )
                    )}
                </marquee>
            </div>
            <div className="relative h-auto bg-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 text-gray-800 dark:text-gray-200 text-center block p-4">
                            <p className="font-bold text-2xl">Game Industry</p>
                            <p className="text-xl">Immerse yourself in captivating <b className="underline decoration-sky-500">3D worlds </b>created with industry-leading game engines like Unity Discover stunning graphics,</p>
                            <p className="text-xl">immersive environments, and thrilling <b className="underline decoration-sky-500">Gameplay</b> that push the boundaries of interactive entertainment.</p>
                        </span>
                    </div>
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 bg-gray-300 block p-2">
                            <div className='dark:bg-gray-900 relative h-full'>
                                <img src="game.png" alt="" className='relative top-20 right-56 w-auto h-80' />
                                <div className='absolute dark:bg-gray-900 dotsCon w-56 h-20 bottom-10 -right-24'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <pattern id="dots" width="5" height="20" patternUnits="userSpaceOnUse">
                                                <circle cx="5" cy="5" r="2" fill="#808080" />
                                            </pattern>
                                        </defs>
                                        <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
                                    </svg>
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
            </div>
            <div className="relative h-auto bg-gray-200 dark:bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 bg-gray-300 block p-2">
                            <div className='bg-gray-200 dark:bg-gray-900 relative h-full'>
                                <img src="unityLogin.png" alt="" className='relative top-20 left-56 w-auto h-80' />
                                <div className='absolute dark:bg-gray-900 dotsCon w-56 h-20 bottom-10 -left-20'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <pattern id="dots" width="5" height="20" patternUnits="userSpaceOnUse">
                                                <circle cx="5" cy="5" r="2" fill="#808080" />
                                            </pattern>
                                        </defs>
                                        <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
                                    </svg>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 text-gray-800 dark:text-gray-200 text-center block p-4">
                            <p className="font-bold text-2xl">Unity Authentication</p>
                            <p className="text-xl">Gain access to <b className="underline decoration-sky-500">exclusive features</b> and content with Unity Authentication. Seamlessly integrate <b className="underline decoration-sky-500">authentication</b> into your Unity games to provide <b className="underline decoration-sky-500">personalized experiences</b> for your players.</p>
                            <p className="text-xl">Immerse yourself in <b className="underline decoration-sky-500">captivating 3D worlds</b> created with industry-leading game engines like Unity. Discover <b className="underline decoration-sky-500">stunning graphics</b>, immersive environments, and <b className="underline decoration-sky-500">thrilling gameplay</b> that push the boundaries of interactive entertainment.</p>
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 text-gray-800 dark:text-gray-200 text-center block p-4">
                            <p className="font-bold text-2xl">Player FPS Test Drive</p>
                            <p className="text-xl">Users can engage in <b className="underline decoration-sky-500">test driving simulations</b> within the game, with the ability to switch between <b className="underline decoration-sky-500">first-person (FPS)</b> and <b className="underline decoration-sky-500">third-person (TPS)</b> views. This feature not only enhances the gaming experience but also rewards users with <b className="underline decoration-sky-500">in-game coins</b> for participation.</p>

                        </span>
                    </div>
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 bg-gray-300 block p-2">
                            <div className='bg-gray-200 dark:bg-gray-900  relative h-full'>
                                <img src="enterTest.png" alt="" className='relative top-32 right-32 w-auto h-80' />
                                <div className='absolute dark:bg-gray-900 dotsCon w-56 h-20 bottom-10 -right-24'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <pattern id="dots" width="5" height="20" patternUnits="userSpaceOnUse">
                                                <circle cx="5" cy="5" r="2" fill="#808080" />
                                            </pattern>
                                        </defs>
                                        <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
                                    </svg>
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 bg-gray-300 block p-2">
                            <div className='bg-gray-200 dark:bg-gray-900 relative h-full'>
                                <img src="eppp.png" alt="" className='relative top-20 left-56 w-auto h-80' />
                                <div className='absolute dark:bg-gray-900 dotsCon w-56 h-20 bottom-10 -left-20'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <pattern id="dots" width="5" height="20" patternUnits="userSpaceOnUse">
                                                <circle cx="5" cy="5" r="2" fill="#808080" />
                                            </pattern>
                                        </defs>
                                        <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
                                    </svg>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 text-gray-800 dark:text-gray-200 text-center block p-4">
                            <p className="font-bold text-2xl">Player Environment</p>
                            <p className="text-xl">The game <b className="underline decoration-sky-500">client-side interface</b> provides users with more interactive features related to <b className="underline decoration-sky-500">maintenance schedules</b>. Users can engage with their <b className="underline decoration-sky-500">maintenance schedules</b> in a <b className="underline decoration-sky-500">gamified environment</b>.</p>

                        </span>
                    </div>


                </div>
            </div>

            <div className="relative h-auto bg-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 text-gray-800 dark:text-gray-200 text-center block p-4">
                            <p className="font-bold text-2xl">Game Industry</p>
                            <p className="text-xl">Experience the ultimate virtual garage with Unity Car Maintenance. Customize, test drive,
                                and indulge your automotive passion like never before. <b className="underline decoration-sky-500"><Link href={route('login')}> Join us now! </Link></b></p>
                        </span>
                    </div>
                    <div className="relative flex h-screen bg-gray-200 dark:bg-gray-900 block justify-center items-center">
                        <span className="w-auto h-80 bg-gray-300 block p-2">
                            <div className='bg-gray-200 dark:bg-gray-900 relative h-full'>
                                <img src="transparent.png" alt="" className='relative top-20 right-56 w-auto h-80' />
                                <div className='absolute dark:bg-gray-900 dotsCon w-56 h-20 bottom-10 -right-24'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <pattern id="dots" width="5" height="20" patternUnits="userSpaceOnUse">
                                                <circle cx="5" cy="5" r="2" fill="#808080" />
                                            </pattern>
                                        </defs>
                                        <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
                                    </svg>
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
            </div>
            <div className="relative h-32 bg-gray-900 flex justify-center p-4">
                <p className='text-center text-gray-500'>© 2024 ISIMS. All rights reserved.</p>
                <p className='text-center text-gray-500'>Designed with ❤️ by Us</p>
            </div>
        </div>
    </GuestLayout>
}
export default Gaming