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
                </div>
                <h1 className="text-6xl text-white font-bold md:font-sans-serif lg:text-46 z-10 absolute top-200">Revamp Your Ride with <br /> Car Maintain</h1>
                <style>{`.centdiv{
    background-color:#e2e6ee;
}`}</style>
            </div>
            <div className='tending h-screen w-full dark:text-white' >
                
                <div className='UnityGarage'>
                    <div className='grid grid-cols-2 gap-0 w-full h-full'>
                        <div className='dark:bg-red-500 relative h-full'>
                        </div>
                        <div className='dark:bg-orange-500 relative h-full'>
                            <div className='absolute dark:bg-gray-500 w-56 h-36 bottom-2 -left-20'></div>
                        </div>
                    </div>
                </div>
                <ul className='grid grid-cols-3 p-4 mt-12 bg-gray-300 dark:bg-gray-800'>
                    {
                        Object.entries(props.tending).map(([keys, att], index) => (
                            <li key={index} className='text-3xl p-4'>
                                {`+${att.length} \n ${keys}`}
                            </li>
                        ))
                    }
                </ul>
                <div className='UnityTestMode'>
                    <div className='grid grid-cols-2 gap-0 w-full h-full'>
                        <div className='dark:bg-orange-500 relative h-full'>
                        </div>
                        <div className='dark:bg-red-500 relative h-full'>
                        <div className='absolute dark:bg-gray-500 w-56 h-36 bottom-2 -left-20'></div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
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
    .UnityGarage, .UnityTestMode {
        display: block;
  position: relative;
  height: 64vh;
  background: white;
  margin-top: 2rem;
    }
            `}</style>
        </>)
}
export default LandingPage;