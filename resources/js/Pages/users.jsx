import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
const UsersList = ({ auth, users , userexp}) => {
    const exp = useRef();

    const [usersActive,setUsersActive]=useState(users);
   
    const handleUserClick = (user) => {
        console.log('Clicked on user:', user);
    };

    function generateExp() {
        usersActive.forEach(() => {
            exp.current=Object.entries(userexp);
        });
    }
    console.log(exp.current)
    generateExp();
    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className='dark:text-white'>Users List</h2>}>
            <div className='container mx-auto mt-8'>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {usersActive &&
                        usersActive.map((user, index) => (
                            <li
                                key={index}
                                className='relative bg-gray-800 p-4 rounded-md shadow-md transition-transform transform hover:scale-105 cursor-pointer'
                                onClick={() => handleUserClick(user)}
                            >
                                <div className='text-white'>
                                    <div className='w-full h-56 bg-gray-900 mt-6 text-white flex justify-center items-center text-3xl'>
                                        {user.name}
                                    </div>
                                    <p className='text-lg font-semibold mt-2'>{user.name}</p>
                                    <p className='text-gray-400'>{user.email}</p>
                                    <p className='text-gray-400 mt-2 absolute top-0 right-2'>
                                        <span className='font-semibold'>Exp:</span> {
                                        exp.current.map(([key,value])=>
                                            Object.values(value).map((val)=>(
                                                user.id===val.user_id&&
                                                val.experience
                                                )
                                            )

                                        )}
                                    </p>
                                    <p className='text-gray-400 mt-2'>
                                        <span className='font-semibold'>Role:</span> {user.role}
                                    </p>
                                    <p className='text-gray-400 mt-2 absolute bottom-4 right-4'>
                                        <Link href={route('userAccount.show', { userID: user.id })} className='font-semibold'>view</Link>
                                    </p>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
};

export default UsersList;
