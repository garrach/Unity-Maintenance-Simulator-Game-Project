import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            
            <div style={{ maxWidth: '100%' }} className="w-full h-screen mt-6 px-6 py-4 bg-white dark:bg-gray-800 overflow-hidden sm:rounded-lg">
            <div className='w-full mx-auto'>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 mt-32 mx-auto fill-current text-gray-500" />
                </Link>
                {children}
            </div>
            </div>
        </div>
    );
}
