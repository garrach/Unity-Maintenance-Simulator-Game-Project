import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';

const UsersList = ({ auth, users, userexp }) => {
    const exp = useRef([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [usersActive, setUsersActive] = useState(users);

    useEffect(() => {
        setUsersActive(users);
    }, [users]);

    const handleUserClick = (user) => {
    };

    useEffect(() => {
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setUsersActive(filteredUsers);
    }, [searchQuery, users]);

    useEffect(() => {
        users && users.forEach(() => {
            exp.current = Object.entries(userexp);
        });
    }, [userexp]);

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className='font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight'>Users List</h2>}>
                  <Head title="Users List" />

            <div className='container mx-auto mt-8'>
                <div className='mb-4'>
                    <input
                        type='text'
                        placeholder='Search users...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='block w-full p-3 rounded-md dark:text-gray-200 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300'
                    />
                </div>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {usersActive &&
                        usersActive.map((user, index) => (
                            <li
                                key={index}
                                className='bg-white hover:border-2 dark:hover:border-indigo-500 dark:bg-gray-800 rounded-md shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer'
                                onClick={() => handleUserClick(user)}
                            >
                                <div className='p-6'>
                                    <div className='w-full h-40 bg-gray-300 dark:bg-gray-600 flex justify-center items-center text-3xl text-gray-600 dark:text-gray-400 rounded-t-md'>
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className='mt-4'>
                                        <p className='text-lg dark:text-indigo-500 font-semibold'>{user.name}</p>
                                        <p className='text-gray-600 dark:text-gray-400'>{user.email}</p>
                                        <p className='text-gray-600 dark:text-gray-400 mt-2'>
                                            <span className='font-semibold'>Experience:</span> {exp.current.map(([key, value]) => Object.values(value).map((val) => (user.id === val.user_id && val.experience)))}
                                        </p>
                                        <p className='text-gray-600 dark:text-gray-400 mt-2'>
                                            <span className='font-semibold'>Role:</span> {user.role}
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-gray-100 dark:bg-gray-700 py-3 px-6 flex justify-end'>
                                    <Link href={route('userAccount.show', { userID: user.id })} className='text-blue-500 dark:text-blue-400 font-semibold hover:underline'>View Profile</Link>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
};

export default UsersList;
