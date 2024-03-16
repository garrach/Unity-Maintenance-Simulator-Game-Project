// resources/js/Components/Dashboard/VehicleList.jsx
import React from 'react';
import { Link, usePage } from '@inertiajs/react';

const UsersList = ({ vehicle, usersList }) => {
  const { props } = usePage();
  const users = [{
    id: '',
    name: '',
    email: '',
    state: '',
  }]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md  overflow-y-auto h-80">
      {props.auth.user.role === "admin" ? (<><h2 className="text-lg font-semibold mb-2">Users List</h2>
      </>) : (<><h2 className="text-lg font-semibold mb-2">Client List</h2>
      </>)}
      <ul>
        {usersList.map((user, Index) => (

          <li key={Index}>
           <ul className='flex'>
  <li className='mb-4 mr-2'><strong className='uppercase mr-2'>Name:</strong> {user.name}</li>
  {props.auth.user.role === "admin" ? (
    <>
      <li className='mb-4 mr-2'><strong className='uppercase mr-2'>email:</strong> {user.email}</li>
      <li className='mb-4 mr-2'><strong className='uppercase mr-2'>role:</strong>{user.role}</li>
    </>
  ) : (
    <li className='mb-4 mr-2'><strong className='uppercase mr-2'>role:</strong>{user.role}</li>
  )}
  <div className='ml-auto flex'>
    {props.auth.user.role === "admin" ? (
      <>
        <li className='mb-4 mt-2'>
          <Link
            href={route('userAccount.show', { userID: user.id })}
            className="hover:bg-orange-500 hover:text-white text-gray-300 px-4 py-1 rounded">
            View user
          </Link>
        </li>
        <li className='mb-4 mt-2'>
          <Link
            href={route('userAccount.show', { userID: user.id })}
            className="hover:bg-red-500 hover:text-white text-gray-300 px-4 py-1 rounded ">
            Delete
          </Link>
        </li>
      </>
    ) : (
      <li className='mb-4 mt-2'>
        <Link
          href={route('userAccount.show', { userID: user.id })}
          className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block">
          View user
        </Link>
      </li>
    )}
  </div>
  <hr />
</ul>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
