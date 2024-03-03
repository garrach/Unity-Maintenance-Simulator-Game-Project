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
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md overflow-y-scroll h-full">
      {props.auth.user.role === "admin" ? (<><h2 className="text-lg font-semibold mb-2">Users List</h2>
      </>) : (<><h2 className="text-lg font-semibold mb-2">Client List</h2>
      </>)}
      <ul>
        {usersList.map((user, Index) => (

          <li key={Index}>
            <ul>
             {props.auth.user.role === "admin" ?(<>
              <li>Name: {user.name}</li>
              <li>email: {user.email}</li>
              <li>role: {user.role}</li>
              <li className='mb-4 mt-2'>
                <Link
                  href={route('userAccount.show', { userID: user.id })}
                  className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block">
                  View user
                </Link>
                <Link
                  href={route('userAccount.show', { userID: user.id })}
                  className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block">
                  destroy
                </Link>
              </li>
              </>):(<>
                <li>Name: {user.name}</li>
                <li>role: {user.role}</li>
                <Link
                  href={route('userAccount.show', { userID: user.id })}
                  className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block">
                  View user
                </Link>
              </>)}
              <hr />

            </ul>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
