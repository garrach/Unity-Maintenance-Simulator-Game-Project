import { Link, Head } from '@inertiajs/react';
import LandingPage from './landingPage';
import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const landingPage = useRef(true);
    useEffect(() => {
        landingPage.current = true;
        return () => {
            //landingPage.current=false;
            console.log('out..')
        }
    })
    useEffect(() => {
        Cookies.set('Guide', 1);
    }, [])
    return (
        <div className='dark:bg-gray-900 bg-gray-200'>
            <Head title="Welcome" />
            {landingPage.current ? <LandingPage auth={auth} /> : <><div className='container mx-auto w-screen h-screen flex-col flex justify-center items-center'>
                <h1 className='text-3xl text-gray-900 uppercase dark:text-gray-200'>reload To view Page</h1><br />
                <h4 className='text-xl text-gray-600 dark:text-gray-300 '>Threejs render, Browser Warrning.</h4>
            </div></>}
        </div>
    );
}
