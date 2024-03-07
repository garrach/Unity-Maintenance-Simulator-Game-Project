import { Link } from '@inertiajs/react';
import ThreeCar from './car';
import { useEffect, useRef, useState } from 'react';

const LandingPage = ({ auth }) => {
      
    return (
        <>
        <div className='bg-gray-500 absolute mx-auto scrollter'>
            Scroll-Zoom
        </div>
        
         <div className='canvas'>
                    <ThreeCar />
            </div>
 
                <div className="container mt-4 text-left ml-4 z-40">
        
                    <div className="mt-6 z-10">
                        <div className='flex static-links'>
                            <Link href="/" className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Home</Link>
                            <Link href={route('contact')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">contact</Link>
                            <Link href={route('about')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">About us</Link>
                            <Link href={route('devices.preview')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Products</Link>
                            <Link href={route('devices.index')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Purchase</Link>
                            <Link href={route('login')} className="bg-orange-500  text-white px-6 py-3 font-bold rounded-full hover:bg-orange-600">Get Started</Link>
                        </div>
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

                </div>

            <style>{`
            .callout{
                position:fixed;
                width:3rem;
                height:3rem;
                background:red;

            }
            .scrollter{
                width:10rem;
                height:10rem;
                padding:3rem;
                left: calc(50% - 5rem);
                top: 75%;
            }
            .op:hover{
                color:#ff6c00;
                background:#ffffff24;
                border-bottom:2px solid orange;
            }
            .op{
                   
            }
            .static-links a{
                position: relative;
                display:block;
            }
                .static-links{
                    position: fixed;
                    top: 5%;
                    right: 10%;
                    width:40%;
                    justify-content:space-between;
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
            `}</style>
        </>)
}
export default LandingPage;