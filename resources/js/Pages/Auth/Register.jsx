import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { sendToMongo } from '../../mongoBackUP.cjs'

export default function Register() {
    const apiEndpoint = 'http://127.0.0.1:3002/api/login';
    const { props } = usePage();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        role: 'client',
        password: '',
        password_confirmation: '',
    });


    useEffect(() => {

        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => { sendToMongo(data) }
        });



    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className='grid grid-cols-1 grid-cols-2 justify-center items-center'>
                    {props.user.role !== "" && (<>
                        <div className='flex bg-orange-300 h-screen w-full p-12 flex-col sm:justify-center items-center dark:bg-gray-900'>
                            <img src="shape02.png" alt="" className='absolute z-0 w-auto h-full' />
                            <div className='z-10 w-full h-56'>
                                <center>
                                    <div className='grid grid-cols-1 justify-items-center justify-center items-center'>
                                        <h1 className='text-5xl text-gray-900 '>Welcome Back</h1>
                                        <p className='text-xl dark:text-gray-200 text-gray-800 bg-gray-100 p-2 bg-opacity-50 rounded-lg'>Hi there! </p>
                                        <p className='text-xl dark:text-gray-200 text-gray-800 bg-gray-100 bg-opacity-50 p-2 rounded-lg'>Welcome aboard to the community! We're over the moon to have you with us.</p>
                                        <p className='text-xl dark:text-gray-200 text-gray-800 bg-gray-100 bg-opacity-50 p-2 rounded-lg'>Get ready for exclusive insights, tips, and a whole lot of fun.</p>
                                        <p className='text-xl dark:text-gray-200 text-gray-800 bg-gray-100 bg-opacity-50 p-2 rounded-lg mb-4'>Don't hesitate to reach out if you need anything. We're in this together!Cheers</p>

                                        <Link
                                            href={route('login')}
                                            className="dark:bg-gray-300 bg-gray-700 uppercase w-32 px-4 w- 56 py-2 text-sm text-gray-200 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                        >
                                           <b>Sign in</b> 
                                        </Link>
                                    </div>
                                </center>
                            </div>

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
                    </>)}
                    <div className='w-96 mx-auto border-t-8 rounded-lg shadow-md border-green-500 p-4 dark:bg-gray-800'>
                    <div className='flex flex-col w-full sm:justify-center items-center pt-6 sm:pt-0'>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                       
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => { setData('email', e.target.value); }}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </div>

                    </div>
                  
                </div>
            </form>
        </GuestLayout>
    );
}
