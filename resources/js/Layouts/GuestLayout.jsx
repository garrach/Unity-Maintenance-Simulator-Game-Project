import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from '@/Pages/Navbar';
import { Link ,usePage} from '@inertiajs/react';
import { useRef } from 'react';

export default function Guest({ children }) {
    const {props}=usePage();
    const auth=props.auth;

    return (
        <>
        <Navbar/>
        <div className="flex sm:justify-center items-center p-0 bg-gray-100 dark:bg-gray-900">
           
            
           <div style={{ maxWidth: '100%' }} className="w-full bg-white dark:bg-gray-800 overflow-hidden sm:rounded-lg">
           <div className='w-full mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg h-screen'>
               {children} 
               <Link href="/" className='this-a'>
                   <ApplicationLogo className="w-20 mt-2 ml-2 mx-auto fill-current text-gray-500" />
               </Link>
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
