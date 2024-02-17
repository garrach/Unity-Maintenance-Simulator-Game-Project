import { Link, Head } from '@inertiajs/react';
import LandingPage from './landingPage';
export default function Welcome({ auth, laravelVersion, phpVersion }) {

    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:block min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end z-10">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                          
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-100 hover:text-gray-100 dark:text-gray-600 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-100 hover:text-gray-100 dark:text-gray-600 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                
                            </Link>
                        </>
                    )}
                </div>
                <div className='grid justify-items-center'>
                    <LandingPage auth={auth} />
                </div>

            </div>

            <footer class="bg-gray-800 text-white py-8">
                <div class="container mx-auto flex justify-between items-center">

                    <div>
                        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
                        <p class="text-gray-300">123 Main Street, Cityville</p>
                        <p class="text-gray-300">Email: info@example.com</p>
                        <p class="text-gray-300">Phone: (555) 123-4567</p>
                    </div>

                    <div class="text-center">
                        <h2 class="text-2xl font-bold mb-4">Quick Links</h2>
                        <a href="/" class="block text-gray-300 hover:text-gray-400 mb-2">Home</a>
                        <a href="#" class="block text-gray-300 hover:text-gray-400 mb-2">About</a>
                        <a href="#" class="block text-gray-300 hover:text-gray-400 mb-2">Services</a>
                        <a href="#" class="block text-gray-300 hover:text-gray-400 mb-2">Contact</a>
                    </div>

                    <div>
                        <h2 class="text-2xl font-bold mb-4">Connect with Us</h2>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-300 hover:text-gray-400"><i class="fab fa-facebook"></i></a>
                            <a href="#" class="text-gray-300 hover:text-gray-400"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-gray-300 hover:text-gray-400"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                </div>
                <div class="text-center mt-8">
                    &copy; 2024 Your Company. All rights reserved.
                </div>
            </footer>
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
