import { Link } from '@inertiajs/react';
import ThreeCar from './car';
import { useEffect, useRef, useState } from 'react';

const LandingPage = ({ auth }) => {
    const [st, setSt] = useState(null);
    return (
        <>
            <div class="bg-gray-800 text-white py-20 h-large wider">
                <div className='absolute anima'>
                    <div className='canvas' onClick={(e) => {
                        e.preventDefault()
                        setSt(e.target);
                        console.log(st)
                    }}>
                        {st && (<ThreeCar container={st} />)}
                    </div>
                </div>
                <div class="container mt-12 text-left ml-12 z-40">
                    <h1 class="text-6xl  lg:text-46 z-10 relative">Revamp Your Ride with Car Maintain</h1>
                    <p class="text-2xl mt-3 text-gray-300 para" >an innovative automotive service dedicated to enhancing the performance and aesthetics of your vehicle. With a team of skilled professionals and state-of-the-art technology, Car Maintain offers a comprehensive range of services, from routine maintenance to advanced customization. Whether you're looking to optimize your car's engine efficiency, upgrade its interior features, or give it a fresh exterior look, Car Maintain has you covered. The company is committed to delivering top-notch craftsmanship, using high-quality materials and cutting-edge techniques. Revitalize your driving experience and ensure your vehicle stands
                        out on the road by trusting Car Maintain for all your automotive needs.</p>
                    <div class="mt-6 z-10">
                        <Link href={route('login')} class="bg-blue-500 relative text-white px-6 py-3 rounded-full hover:bg-blue-600">Get Started</Link>
                    </div>

                </div>
            </div>

            <div class="container mx-auto mt-12 mb-12">
                <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">Infotainment System</h2>

                        <p className="text-left">Transform your driving experience with our state-of-the-art Infotainment System. Designed to be more than just a car entertainment system, our Infotainment System is your gateway to a world of connectivity and control.</p>
                        <div className="sm:flex">
                            <div className="sm:block">

                                <p className="text-left">Key Features:</p>

                                <ul className="list-disc pl-6">
                                    <li><strong>Seamless Control:</strong> Take command of your journey with seamless control over audio settings, navigation, and smartphone integration.</li>
                                    <li><strong>Touchscreen Interface:</strong> Our sleek touchscreen interface provides an intuitive and user-friendly experience, putting everything at your fingertips.</li>
                                    <li><strong>Media Options:</strong> Enjoy a variety of entertainment options, from music to podcasts, and stay connected to your favorite content on the go.</li>
                                    <li><strong>Navigation:</strong> Effortlessly navigate through your routes with our advanced navigation system, ensuring you reach your destination with ease.</li>
                                </ul>

                                <p className="text-left">Whether you're on a long road trip or a daily commute, our Infotainment System ensures that you stay entertained, informed, and connected without compromising your focus on the road.</p>
                            </div>

                            <div className="display-pnl mb-3">
                                <img src="infront.gif" alt="Infotainment System" />
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl text-right font-bold mb-4">Air Conditioning System</h2>

                        <p class="text-right">Experience a new level of comfort with our advanced Air Conditioning System. Designed to keep you cool and relaxed in any driving conditions, our system goes beyond basic temperature control.</p>
                        <div className="sm:flex">
                            <div className="display-pnl mb-3">
                                <img src="air.gif" alt="Infotainment System" />
                            </div>
                            <div className="sm:block">

                                <p className="text-left">Key Features:</p>

                                <ul class="list-disc pl-6">
                                    <li><b>Perfect Temperature:</b> Our system ensures the perfect interior temperature, providing a comfortable environment for every journey.</li>
                                    <li><b>Adaptive Cooling:</b> Whether it's scorching heat or a chilly day, our adaptive cooling system adjusts to external conditions for optimal comfort.</li>
                                    <li><b>Air Quality:</b> Breathe fresh air with our built-in air filtration system, ensuring a clean and allergen-free cabin environment.</li>
                                    <li><b>Efficient Ventilation:</b> Enjoy efficient and customizable ventilation options for personalized airflow throughout the car.</li>
                                </ul>

                                <p class="text-left">Say goodbye to the discomfort of extreme temperatures and welcome a pleasant drive every time. Our Air Conditioning System is designed to make your journey enjoyable, regardless of the weather outside.</p>
                            </div>


                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md mb-3">
                        <h2 className="text-xl font-bold mb-4">Dashboard and Controls</h2>
                        <p className="text-left">Take control with ease through our advanced Dashboard and Controls system. Our intuitive dashboard puts essential controls and real-time data at your fingertips, enhancing your driving experience.</p>
                        <div className="sm:flex">
                            <div className="sm:block">

                                <p className="text-left">Key Features:</p>

                                <ul className="list-disc pl-6">
                                    <li><strong>Intuitive Controls:</strong> Effortlessly manage your vehicle's functions with our user-friendly dashboard interface.</li>
                                    <li><strong>Real-time Data:</strong> Stay informed with real-time data displayed conveniently on your dashboard.</li>
                                    <li><strong>Customizable Settings:</strong> Tailor your driving environment with customizable settings for a personalized experience.</li>
                                    <li><strong>User-Friendly Interface:</strong> Navigate through controls seamlessly with our easy-to-use interface.</li>
                                </ul>

                                <p className="text-left">Whether you're a tech enthusiast or just looking for a straightforward driving experience, our Dashboard and Controls system ensures a smooth and enjoyable journey.</p>
                            </div>

                            <div className="display-pnl">
                                <img src="meter.gif" alt="Dashboard and Controls" />
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl text-right font-bold mb-4">Sound System</h2>

                        <p className="text-left text-right">Immerse yourself in a world of audio perfection with our cutting-edge Sound System. More than just speakers, our Sound System is crafted to deliver a rich, immersive listening experience.</p>
                        <div className="sm:flex">

                            <div className="display-pnl mb-3">
                                <img src="sound.gif" alt="Sound System" />
                            </div>
                            <div className="sm:block">

                                <p className="text-left">Key Features:</p>

                                <ul className="list-disc pl-6">
                                    <li><strong>Premium Audio Quality:</strong> Experience crystal-clear sound and deep bass for an unparalleled audio experience.</li>
                                    <li><strong>Immersive Surround:</strong> Our state-of-the-art technology creates an immersive surround sound experience, making every note come to life.</li>
                                    <li><strong>Customizable Settings:</strong> Tailor the audio to your preferences with customizable settings for bass, treble, and balance.</li>
                                    <li><strong>Connectivity:</strong> Easily connect your devices through various input options, ensuring a seamless playback experience.</li>
                                </ul>

                                <p className="text-left">Whether you're a music enthusiast or simply enjoy the joy of great audio, our Sound System brings your car interior to life with premium sound quality.</p>
                            </div>

                        </div>
                    </div>




                </div>
            </div>

           
            <style>{`
  .anima{
    width:100%;
    height:45rem;
    right:0;
    top:0;
    z-index:0;
  }
  .canvas{
    background-color:black;
    position:absolute;
    width:100%;
    height:100%;
    right:0;
    bottom:0;
    z-index:2;
  }
  .wider{
    width:100%;
  }
  .para{
    display:block;
    position:relative;
    width:70rem;
    text-align:justify;
    z-index:20;
  }
  .display-pnl{
    width:50rem;
    height:20rem;
  }
  .display-pnl img{
    filter: invert(100%);
    max-height:20rem;
    border-radius:1rem;
  }
  .h-large{
    height:45rem;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
  
  }
                .wp{
                    background-image: url("https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/-/format/auto/");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>)
}
export default LandingPage;