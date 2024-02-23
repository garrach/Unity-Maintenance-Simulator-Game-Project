// resources/js/Components/Dashboard/VehicleList.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

const UsersList = ({ vehicle, usersList }) => {
  const users=[{
    id:'',
    name:'',
    email:'',
    state:'',
  }]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md overflow-y-scroll h-56">
      <h2 className="text-lg font-semibold mb-2">Users List</h2>
      <ul>
        {usersList.map((user,Index) => (
            
            <li key={Index}>
              <ul>
              <li>Name: {user.name}</li>
              <li>email: {user.email}</li>
              <li>role: {user.role}</li>
              <li className='mb-4 mt-2'>
              <Link
              href={route('userAccount.show', { userID:Index })}
                        className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block">
                        View user
              </Link>
              <Link
              href={route('userAccount.show', { userID:Index })}
                        className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 mt-4 mb-4 inline-block">
                        destroy
              </Link>
              {/*<button className="bg-green-500 text-white ml-2 px-4 py-1 rounded-full hover:bg-blue-600">review</button>
              <button className="bg-blue-500 text-white ml-2 px-4 py-1 rounded-full hover:bg-red-600">Delete</button>*/}
              </li>
              <hr />

              </ul>
              
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
