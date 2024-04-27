import { Link, usePage } from '@inertiajs/react';
import ThreeCar from './car';
import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
const LandingPage = ({ auth }) => {
    const { props } = usePage();
    const [loading, SetLoading] = useState(true);
    return (
        <>
            {loading && <><div className="fixed  h-56 w-56 left-32 top-32 "><img className='w-auto h-auto' src="loader2.gif" alt="loading" /></div></>}
            <div className='canvas'>
                {<ThreeCar SetLoading={SetLoading} />}
            </div>
            <div className="container mt-4 text-left ml-4 z-40">
                <div className="mt-6 z-10">
                    <Navbar />
                    <span className='relative flex mt-12 text-white'>Available For</span>
                    <div className='relative flex mt-5'>
                        <img src="https://minimals.cc/assets/icons/platforms/ic_js.svg" alt="" className='ml-4' />
                        <img src="https://minimals.cc/assets/icons/platforms/ic_vite.svg" alt="" className='ml-4' />
                        <img src="unity-69.svg" alt="" className='ml-4 w-6' />
                        <img src="laravel-2.svg" alt="" className='ml-4 w-6' />
                    </div>
                    <div className='preview-media mt-12 flex flex-col'>
                        <button className='text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500  rounded-full'>01</button>
                        <button className='text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500 rounded-full'>02</button>
                        <button className='text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500 rounded-full'>03</button>
                        <button className='text-white hover:bg-white hover:text-gray-500 px-2 mt-2 hover:border-2  hover:border-orange-500 rounded-full'>04</button>
                    </div>
                    <div className='absolute grid grid-cols-3 gap-4' id='element00'>
                        <div className='someGlass'>
                            <div className='absolute -ml-5 mt-5 w-20 h-10 rounded bg-red-600 py-2'><p className='mx-auto'>New</p></div>
                        </div>
                        <div className='someGlass'>
                            <div className='absolute -ml-5 mt-5 w-20 h-10 rounded bg-red-700 py-2'><p className='mx-auto'>New</p></div>
                        </div>
                        <div className='someGlass'>
                            <div className='absolute -ml-5 mt-5 w-20 h-10 rounded bg-orange-600 py-2'><p className='mx-auto'>New</p></div>
                        </div>
                    </div>
                    <h1 className="text-6xl text-white font-bold md:font-sans-serif lg:text-46 z-10 relative mt-32 bottom-0">Revamp Your Ride with <br /> Car Maintain</h1>
                </div>
                <style>{`.centdiv{
    background-color:#e2e6ee;
}`}</style>
            </div>
            <div className='tending h-screen w-full dark:text-white' >

                <div className='serviceDetails'>
                    <div className='grid grid-cols-2 gap-0 w-full h-full'>
                        <div className='dark:bg-white-500 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-300 dark:text-gray-900  font-bold'>Sauvegarde dans la Base de Données</p>
                                <p className='text-xl dark:text-gray-900 indent-8 mt-2'>Your information is securely stored in our <b className='underline decoration-sky-500'>MongoDB</b> database, ensuring reliability and scalability.
                                    Experience seamless data storage and retrieval with MongoDB Compass, our intuitive database management tool.</p>
                                <p className='text-3xl text-gray-300 dark:text-gray-900  font-bold'>Synchronisation avec Cloud</p>
                                <p className='text-xl dark:text-gray-900 indent-8 mt-2'>Experience the power of cloud synchronization with <b className='underline decoration-sky-500'>MongoDB Atlas</b>.
                                    Your data is seamlessly synced between your local database and the cloud, providing redundancy and availability for uninterrupted access.</p>
                            </center>

                        </div>
                        <div className='dark:bg-white-500 relative h-full'>
                            <img src="why-us.png" alt="" className='relative top-20 left-56 w-auto h-80' />
                            <div className='absolute dark:bg-white-500 dotsCon w-56 h-20 bottom-10 -left-20'>
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

                    </div>
                </div>
                <ul className='grid grid-cols-3 py-4 px-32 bg-gray-300 dark:bg-gray-800'>
                    {
                        Object.entries(props.tending).map(([keys, att], index) => (
                            <li key={index} className='text-3xl p-4 flex justify-center'>
                                {`+${att.length} \n ${keys}`}
                            </li>
                        ))
                    }
                </ul>

                <div className='serviceDetails'>
                    <div className='grid grid-cols-2 gap-0 w-full h-full'>
                        <div className='dark:bg-white-500 relative h-full'>
                            <img src="equipe-de-developpeur-web.png.webp" alt="" className='relative top-20 left-56 w-auto h-80' />
                        </div>
                        <div className='dark:bg-white-500 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-300 dark:text-gray-900 mt-10 font-bold'>Communication entre Application Web et Serveur</p>
                                <p className='text-xl dark:text-gray-900 indent-8 mt-2'>Experience real-time communication between our web application and backend server.
                                    With <b className='underline decoration-sky-500'>HTTP</b> requests or <b className='underline decoration-sky-500'>WebSocket</b> connections,
                                    data flows seamlessly to ensure instant updates and responsiveness.</p>

                            </center>
                        </div>

                    </div>
                </div>
                <div className='serviceDetails'>
                    <div className='grid grid-cols-2 gap-0 w-full h-full'>
                        <div className='dark:bg-white-500 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-300 dark:text-gray-900 mt-10 font-bold'>Moteur de Jeu</p>
                                <p className='text-xl dark:text-gray-900 indent-8 mt-2'> Immerse yourself in captivating <b className='underline decoration-sky-500'>3D worlds</b> created with industry-leading game engines like <b className='underline decoration-sky-500'>Unity</b> Discover stunning graphics,
                                    immersive environments, and thrilling <b className='underline decoration-sky-500'>Gameplay</b> that push the boundaries of interactive entertainment.</p>
                            </center>
                        </div>
                        <div className='dark:bg-white-500 relative h-full'>
                            <img src="game.png" alt="" className='relative top-20 left-56 w-auto h-80' />
                        </div>
                    </div>
                </div>
                <div className='serviceDetails'>
                    <div className='grid grid-cols-2 gap-0 w-full h-full'>
                    <div className='dark:bg-white-500 relative h-full'>
                            <img src="e-commerce.png.webp" alt="" className='relative top-20 left-56 w-auto h-80' />
                        </div>

                        <div className='dark:bg-white-500 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-300 dark:text-gray-900 mt-10 font-bold'>Coins and Experience Earning Service</p>
                                <p className='text-xl dark:text-gray-900 indent-8 mt-2'><b>Coins and Experience Rewards:</b> Earn <b className='underline decoration-sky-500'>coins</b> and <b className='underline decoration-sky-500'>experience points</b> as you engage with our platform's features and complete <b>tasks</b>. 
                                From developing applications to playing and testing games, every action contributes to your progress and unlocks exciting rewards.
                                <b>Gamified Development Environment:</b> Immerse yourself in a <b>gamified</b> development environment where progress is rewarded and achievements are celebrated. 
                                Level up your <b>skills</b>, unlock <b>badges</b>, and compete with friends and colleagues on <b className='underline decoration-sky-500'>leaderboards</b> for ultimate bragging rights.</p>
                            </center>
                        </div>
                       
                    </div>
                </div>

                <div className='serviceDetails'>
                    <div className='grid grid-cols-2 gap-0 w-full h-full'>
                      
                        <div className='dark:bg-white-500 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-300 dark:text-gray-900 mt-10 font-bold'>Future Update: Enhanced SaaS Platform for Web and Game Development</p>
                                <p className='text-xl dark:text-gray-900 indent-8 mt-2'> Coming soon, our Enhanced <b className='underline decoration-sky-500'>SaaS</b>  Platform will revolutionize the way developers create web applications and games.
                                    Building upon our existing infrastructure,
                                    this update will introduce new features and improvements aimed at further streamlining the <b className='underline decoration-sky-500'>development process</b> and <b className='underline decoration-sky-500'>enhancing</b>  user experiences.</p>
                            </center>
                        </div>
                        <div className='dark:bg-white-500 relative h-full'>
                            <img src="skills02.png" alt="" className='relative top-20 left-56 w-auto h-80' />
                        </div>
                    </div>
                </div>

             
            </div>
            <style>{`
            .dotsCon{

            }
            .callout{
                position:fixed;
                width:5rem;
                height:5rem;
                color: #ffffff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 400px;
                text-align: center;
                background-image: url('home_mouse_icon.png');
                background-size: cover;
            }
            .scrollter{
                width:10rem;
                height:10rem;
                padding:3rem;
                left: calc(50% - 5rem);
                top: 75%;
            }
                .absolute.top-200{
                    top: 170%;
                    width: 30rem;
                }
                .preview-media{
                    width: fit-content;
                }
                .preview-media button{
                    width:3rem;
                    height:3rem;
                }
            .container{
                position: absolute;
                width:fit-content;
                top:0;
            }
            .absolute.grid{
                top:20rem;
                display:none;
                width:auto;
            }
            .someGlass{
                width: 15rem;
                height: 20rem;
                position: relative;
                background:rgb(255 255 255 / 17%);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(9.7px);
                -webkit-backdrop-filter: blur(3.7px);
                border: 1px solid rgba(91, 91, 91, 0.4);
                margin-left:8rem;
                margin-top:0;
                animation:slide-up 2s ease 1s 1 forwards;
            }
            .someGlass:hover{
                cursor:pointer;
            }
            .someGlass:nth-child(1){
                margin-top:-5rem;
            }
            .someGlass:nth-child(2){
                margin-top:-10rem;
            }
            .someGlass:nth-child(3){
                margin-top:-15rem;
            }
    @keyframes slide-up{
form{
    margin-top:-5rem;
    width: 20rem;
    height: 30rem;
    margin-left:10rem;
}
to{
    margin-top:-1rem;
    width: 15rem;
    height: 20rem;
    margin-left:5rem;
}
    }
    .serviceDetails {
        display: block;
  position: relative;
  height: 60vh;
  background: white;
    }
            `}</style>
        </>)
}
export default LandingPage;