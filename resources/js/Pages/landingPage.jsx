import { Link, usePage } from '@inertiajs/react';
import ThreeCar from './car';
import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLink,
    faDownload,
    faUsers,
    faCar,
} from '@fortawesome/free-solid-svg-icons';
const LandingPage = ({ auth }) => {
    const { props } = usePage();
    const [loading, SetLoading] = useState(true);
    const topBack = useRef(null);
    const decData = useRef(null);
    const [displayData, setDisplayData] = useState(null);

    function toggleAnimation(circle) {
        if (circle.classList.contains('paused')) {
            circle.classList.remove('paused');
        } else {
            circle.classList.add('paused');
        }
    }
    const decryptUserData = (encryptedDataDetails) => {
        try {
            decData.current = atob(encryptedDataDetails);
            return JSON.parse(decData.current);
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    };

    const options = {
        method: 'GET',
        url: 'https://127.0.0.1:3002/api/testimonial',
    };
    async function initTest() {

        try {
            const response = await axios.request(options);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        initTest();
        setDisplayData(decryptUserData(props.tending))
    }, [])
    const iconsList = [faLink,
        faUsers,
        faCar,
        faDownload
    ]


    const [countedValues, setCountedValues] = useState({});


    useEffect(() => {
        // Function to animate counting
        const animateCounting = () => {
            const newData = {};
            Object.entries(displayData).forEach(([key, value]) => {
                // If the value is a number and it's not already counted
                if (!countedValues[key]) {
                    const step = 2 // Change the speed of animation by adjusting the divisor
                    let currentCount = 0;
                    const interval = setInterval(() => {
                        currentCount += step;
                        if (currentCount >= (value.length +400)) {
                            // Stop counting when it reaches the original value
                            clearInterval(interval);
                            currentCount = value.length;
                        }
                        newData[key] = (currentCount);
                        setCountedValues((prev) => ({ ...prev, ...newData }));
                    }, 20); // Change the interval duration to adjust the animation speed
                } else {
                    newData[key] = value.length;
                }
            });
        };

        if (displayData) {
            animateCounting();
        }

        // Clean up function to clear intervals
        return () => {
            Object.values(countedValues).forEach((interval) => clearInterval(interval));
        };
    }, [displayData]);
    return (
        <>
            <Navbar />
            {loading && <><div className="fixed  h-56 w-56 left-32 top-32 "><img className='w-auto h-auto' src="loader2.gif" alt="loading" /></div></>}
            <div className='canvas' id='top'>
                {<ThreeCar SetLoading={SetLoading} />}
            </div>
            <div className="container mt-4 text-left ml-4 z-40">
                <div className="mt-6 z-10">
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
                    <h1 className="text-6xl text-white font-bold md:font-sans-serif lg:text-46 z-10 relative mt-56 py-32 bottom-0">Revamp Your Ride with <br /> Car Maintain</h1>
                </div>
                <style>{`.centdiv{
    background-color:#e2e6ee;
}`}</style>
            </div>
            <div className='tending h-screen w-full dark:text-white' >

                <div className='serviceDetails'>
                    <div className='grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>

                        <div className='dark:bg-gray-900 relative h-full col-span-2'>
                            <div className='mt-32 p-10'>
                                <center>
                                    <p className='text-4xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Why Us!</p>

                                    <p className='text-2xl dark:text-gray-300 indent-8 mt-2'>we offer an <b className='underline decoration-sky-500'>Open Source Dynamic</b> project that seamlessly integrates <b className='underline decoration-sky-500'>Game Development</b> and <b className='underline decoration-sky-500'>Web Development</b> expertise.
                                        Our solution synchronizes resources,<br /> processes user-provided information, and securely stores data in both a local and Cloud <b className='underline decoration-sky-500'>database</b>.
                                        Leveraging our team's <b className='underline decoration-sky-500'>Academic Knowledge</b> and experience,<br /> we've developed an innovative web application powered by <b className='underline decoration-sky-500'>Nodejs</b>.<br />
                                        This application analyzes user data in <b className='underline decoration-red-500'>Real-time</b>, providing dynamic responses tailored to the user's interactions.<br />
                                        Additionally, we developed <b className='underline decoration-sky-500'>3D game</b>, environment provides immersive visualization of resources, requires authentication.<br />
                                        With our comprehensive solution, clients benefit from efficient resource management,<br /> secure data handling, and seamless integration between web and gaming environments.
                                    </p>
                                </center>

                            </div>

                        </div>

                    </div>
                </div>

                <div className='serviceDetails'>
                    <div className='grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>
                        <div className='dark:bg-gray-900 relative h-full col-span-2'>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Our Team</p>
                            </center>
                        </div>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <center className='mt-8 p-4'>
                                <div className='initials-circle'>HM</div>
                                <p className='text-xl text-gray-800 dark:text-gray-300 font-semibold'>Hafedh Mellasi</p>
                                <p className='text-md text-gray-600 dark:text-gray-400'>Position: Developer</p>
                            </center>
                        </div>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <center className='mt-8 p-4'>
                                <div className='initials-circle'>BS</div>
                                <p className='text-xl text-gray-800 dark:text-gray-300 font-semibold'>Bachar Skrafi</p>
                                <p className='text-md text-gray-600 dark:text-gray-400'>Position: Designer</p>
                            </center>
                        </div>
                        <div className='dark:bg-gray-900 relative h-full col-span-2'>
                            <center className='mt-8 p-4'>
                                <div className='initials-circle'>GH</div>
                                <p className='text-xl text-gray-800 dark:text-gray-300 font-semibold'>Garrach Hazem</p>
                                <p className='text-md text-gray-600 dark:text-gray-400'>Position: Project Manager</p>
                            </center>
                        </div>
                    </div>
                </div>
                <ul className='grid md:grid-cols-4 grid-cols-1 py-4 px-32 bg-gray-300 dark:bg-gray-800'>
                    {displayData &&
                        Object.entries(displayData).map(([keys, att], index) => (
                            <li key={index} className='text-3xl p-4 flex justify-center'>
                                <FontAwesomeIcon icon={iconsList[index]} />
                                <span className='ml-2'> {`${(att.length > 100) ? att.length : countedValues[keys] ? countedValues[keys]:0} \n ${keys}`}</span>

                            </li>
                        ))
                    }
                </ul>
                <div className='serviceDetails'>
                    <div className='grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>
                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300  font-bold'>Database Backup</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'>Your information is securely stored in our <b className='underline decoration-sky-500'>MongoDB</b> database, ensuring reliability and scalability.
                                    Experience seamless data storage and retrieval with MongoDB Compass, our intuitive database management tool.</p>
                                <p className='text-3xl text-gray-900 dark:text-gray-300  font-bold'>Synchronisation Throught Cloud</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'>Experience the power of cloud synchronization with <b className='underline decoration-sky-500'>MongoDB Atlas</b>.
                                    Your data is seamlessly synced between your local database and the cloud, providing redundancy and availability for uninterrupted access.</p>
                            </center>

                        </div>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="why-us.png" alt="" className='relative mx-auto w-auto h-56 md:h-80 mx-auto' />
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

                    </div>
                </div>


                <div className='serviceDetails'>
                    <div className='grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="equipe-de-developpeur-web.png.webp" alt="" className='relative w-auto h-56 md:h-80 mx-auto' />
                        </div>
                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Web Application and Server Communication</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'>Experience real-time communication between our web application and backend server.
                                    With <b className='underline decoration-sky-500'>HTTP</b> requests or <b className='underline decoration-sky-500'>WebSocket</b> connections,
                                    data flows seamlessly to ensure instant updates and responsiveness.</p>

                            </center>
                        </div>

                    </div>
                </div>
                <div className='serviceDetails'>
                    <div className='grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>
                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Game Engine</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'> Immerse yourself in captivating <b className='underline decoration-sky-500'>3D worlds</b> created with industry-leading game engines like <b className='underline decoration-sky-500'>Unity</b> Discover stunning graphics,
                                    immersive environments, and thrilling <b className='underline decoration-sky-500'>Gameplay</b> that push the boundaries of interactive entertainment.</p>
                            </center>
                        </div>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="game.png" alt="" className='relative mx-auto w-auto h-56 md:h-80' />
                        </div>
                    </div>
                </div>
                <div className='serviceDetails'>
                    <div className='grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="e-commerce.png.webp" alt="" className='relative mx-auto w-auto h-56 md:h-80' />
                        </div>

                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Coins and Experience Earning Service</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'><b>Coins and Experience Rewards:</b> Earn <b className='underline decoration-sky-500'>coins</b> and <b className='underline decoration-sky-500'>experience points</b> as you engage with our platform's features and complete <b>tasks</b>.
                                    From developing applications to playing and testing games, every action contributes to your progress and unlocks exciting rewards.
                                    <b>Gamified Development Environment:</b> Immerse yourself in a <b>gamified</b> development environment where progress is rewarded and achievements are celebrated.
                                    Level up your <b>skills</b>, unlock <b>badges</b>, and compete with friends and colleagues on <b className='underline decoration-sky-500'>leaderboards</b> for ultimate bragging rights.</p>
                            </center>
                            <div className='absolute dark:bg-gray-900 dotsCon w-56 h-20 top-10 -left-20'>
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

                <div className='serviceDetails'>
                    <div className='grid md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>

                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Future Update: Enhanced SaaS Platform for Web and Game Development</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'> Coming soon, our Enhanced <b className='underline decoration-sky-500'>SaaS</b>  Platform will revolutionize the way developers create web applications and games.
                                    Building upon our existing infrastructure,
                                    this update will introduce new features and improvements aimed at further streamlining the <b className='underline decoration-sky-500'>development process</b> and <b className='underline decoration-sky-500'>enhancing</b>  user experiences.</p>
                            </center>
                        </div>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="skills02.png" alt="" className='relative mx-auto w-auto h-56 md:h-80' />
                        </div>
                    </div>
                </div>

                <div className='serviceDetails'>
                    <div className='grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="application-sur-mesure.png.webp" alt="" className='relative mx-auto w-auto h-56 md:h-80 ' />
                        </div>
                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold '>Authentification</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'>Secure your journey with robust <b>authentication</b> methods like JSON Web Tokens <b className='underline decoration-sky-500'>(JWT) or OAuth</b>.
                                    Rest assured knowing your data is <b>protected</b> as you engage with our platform using <b>industry-standard</b> authentication protocols.</p>
                            </center>
                        </div>
                    </div>
                </div>


                <div className='serviceDetails'>
                    <div className='grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>

                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Backend (Serveur Express.js)</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'>Our robust backend, powered by <b className='underline decoration-sky-500'>Express.js</b>, ensures smooth communication between the client and server, providing reliable data processing and response handling for a <b>seamless</b> user experience.</p>
                            </center>
                        </div>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="node.png" alt="" className='relative mx-auto w-auto h-56 md:h-80' />
                        </div>
                    </div>
                </div>

                <div className='serviceDetails'>
                    <div className='grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>

                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Backend (Laravel Vite)</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'>Our powerful backend, built with <b className='underline decoration-sky-500'>Laravel</b> and <b className='underline decoration-sky-500'>Vite</b>, ensures smooth communication between the client and server, providing reliable data processing and response handling for a <b>seamless</b> user experience.</p>
                            </center>
                        </div>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="laravel-banner.webp" alt="" className='relative mx-auto w-auto h-56 md:h-80' />
                        </div>
                    </div>
                </div>

                <div className='serviceDetails'>
                    <div className='grid md:md:grid-cols-2  grid-cols-1 gap-0 w-full h-full'>
                        <div className='dark:bg-gray-900 relative h-full'>
                            <img src="application-sur-mesure.png.webp" alt="" className='relative mx-auto w-auto h-56 md:h-80' />
                        </div>
                        <div className='dark:bg-gray-900 relative h-full '>
                            <center className='mt-32 p-4'>
                                <p className='text-3xl text-gray-900 dark:text-gray-300 mt-10 font-bold'>Frontend (Web Application)</p>
                                <p className='text-xl dark:text-gray-300 indent-8 mt-2'>Explore our dynamic web application built with cutting-edge technologies: <b className='underline decoration-sky-500'> React.js </b>,
                                    <b className='underline decoration-sky-500'> Taillwind.css </b>, <b className='underline decoration-sky-500'>Inertia.js</b>, <b className='underline decoration-sky-500'>Bootstrap</b>.
                                    Engage with intuitive user interfaces and <b>seamless</b> interactions designed to enhance your experience.</p>
                            </center>
                        </div>
                    </div>
                </div>





                <footer className=''>
                    <div className='grid md:md:grid-cols-2 grid-cols-1 gap-0 w-full h-auto '>
                        <div className='dark:bg-gray-800 relative h-full flex justify-center items-end p-4 col-span-2'>
                            <p className='text-center text-gray-500'>© 2024 ISIMS. All rights reserved.</p>
                            <p className='text-center text-gray-500'>Designed with ❤️ by Us</p>
                        </div>
                    </div>
                </footer>





                <div ref={topBack} className='fixed flex items-center justify-center bottom-4 right-4 bg-blue-500 w-20 h-20 rounded-full'>
                    <div className='backTop absolute' onMouseEnter={(e) => toggleAnimation(e.target)}></div>
                    <a href='#top'>TOP</a>
                </div>
            </div>
            <style>{`
            .initials-circle {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                background-color: #4a5568;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2rem;
                font-weight: bold;
            }
            
            .backTop{
                width: 100px;
                height: 100px;
                background-color: #3490dc;
                border-radius: 50%;
                opacity: 0.4;
                z-index:-1;
                animation: waveScale 1s infinite alternate;
            }
            .paused {
                animation-play-state: paused;
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
            @keyframes waveScale {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(1.1);
                }
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
  height: 60%;
  background: white;
    }
            `}</style>
        </>)
}
export default LandingPage;