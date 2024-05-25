import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from '@/Pages/Navbar';
import { Link ,usePage} from '@inertiajs/react';
import { useRef } from 'react';

export default function Guest({ children }) {
    const {props}=usePage();
    const auth=props.auth;

    return (
        <>
        <Navbar layer="z-10 border-2 border-gray-300"/>
        <div className="flex sm:justify-center items-center p-0 bg-gray-100 dark:bg-gray-900">
           <div style={{ maxWidth: '100%' }} className="w-full bg-gray-100 dark:bg-gray-800 overflow-hidden sm:rounded-lg">
           <div className='w-full mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg h-screen'>
           <div className='w-full h-20 relative dark:bg-gray-800 bg-gray-200 border-b-2 border-indigo-500'>
                <div className='w-80 h-full grid md:grid-cols-2 grid-cols-1 justify-center items-center'>
                    <div>
                    </div>
                    <div>
                        <span className='text-white w-fit h-10 p-4 bg-red-500 rounded-full flex justify-center items-center'>
                            <Link href={route('login')}>Sign in</Link>
                        </span>
                    </div>

                </div>
            </div>
               {children}

           </div>
           </div>

           <style>
               {`
               .this-a{
                position:absolute;
                top:1%;
                left:1%;
               }
               `}
           </style>
       </div>
        </>

    );
}
