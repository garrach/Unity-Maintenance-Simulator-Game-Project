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
    <div className="p-2 dark:text-white text-gray-800 h-80">
      <h2 className="text-lg font-semibold mb-2" id='pop'>Users List</h2>
      <div className='w-full overflow-x-hidden h-56 overflow-y-auto'>
        <table className='w-full'>
          {usersList.map((user, Index) => (
            <tr key={Index} className='hover:bg-gray-900 hover:text-gray-200 rounded shadow-md transition-transform transform hover:scale-105'>
              <td className='mb-4 mr-2'><strong className='uppercase mr-2'>Name:</strong> {user.name}</td>
              {props.auth.user.role === "admin" ? (
                <>
                  <td className='mb-4 mr-2'><strong className='uppercase mr-2'>email:</strong> {user.email}</td>
                  <td className='mb-4 mr-2'><strong className='uppercase mr-2'>role:</strong>{user.role}</td>
                </>
              ) : (
                <td className='mb-4 mr-2'><strong className='uppercase mr-2'>role:</strong>{user.role}</td>
              )}
              <div className='ml-auto flex relative top-2 right-0'>
                {props.auth.user.role === "admin" ? (
                  <>
                    <td className='mb-4 mt-2'>
                      <Link
                        href={route('userAccount.show', { userID: user.id })}
                        className="hover:bg-orange-500 hover:text-white text-gray-300 px-4 py-1 rounded">
                        View user
                      </Link>
                    </td>
                    <td className='mb-4 mt-2'>
                      <Link
                        href={route('userAccount.show', { userID: user.id })}
                        className="hover:bg-red-500 hover:text-white text-gray-300 px-4 py-1 rounded ">
                        Delete
                      </Link>
                    </td>
                  </>
                ) : (
                  <td className='mb-4 mt-2'>
                    <Link
                      href={route('userAccount.show', { userID: user.id })}
                      className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-blue-600 inline-block">
                      View user
                    </Link>
                  </td>
                )}
              </div>
            </tr>
          ))}
        </table>
      </div>


    </div>
  );
};

export default UsersList;
