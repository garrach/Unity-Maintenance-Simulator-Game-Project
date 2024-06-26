import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { clientSocket } from '../client.cjs';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        websocket: null,
        remember: false,
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);
    const submit = (e) => {
        e.preventDefault();
        setData('websocket', clientSocket('loginAttempt'))
        post(route('login'));
    };
    return (
        <GuestLayout>
            <Head title="Log in" />
            <form onSubmit={submit} className="w-fit h-max-fit mx-auto mt-56 px-8 py-8 rounded-md shadow-lg border-l-8 border-green-500">
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 '>
                    <img src="application-sur-mesure.png.webp" alt="" className='w-auto h-96' />

                    <div>
                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                        <div className='mt-4'>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
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
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                            </label>
                            <Link
                                href={route('register')}
                                className="underline mt-4 inline-flex text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none"
                            >
                                Register with new account.
                            </Link>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
