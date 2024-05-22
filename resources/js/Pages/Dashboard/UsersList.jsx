import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUserTie, faUserShield } from '@fortawesome/free-solid-svg-icons';

const UsersList = ({ usersList }) => {
  const { props } = usePage();

  // Icons mapping based on user roles
  const iconsByUser = {
    'client': faUserCircle,
    'admin': faUserShield,
    'employee': faUserTie,
  };

  return (
    <div className="p-2 dark:text-white text-gray-800 h-80">
      <h2 className="text-lg font-semibold mb-2">
        <FontAwesomeIcon icon={faUserCircle} />
        <span className='ml-2'>Users List</span>
      </h2>
      <div className='w-full overflow-x-hidden h-56 overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className="bg-gray-800 dark:bg-gray-900 text-white">
              <th className='p-3 text-left'>Name</th>
              {props.auth.user.role === "admin" && (
                <>
                  <th className='p-3 text-left'>Email</th>
                  <th className='p-3 text-left'>Role</th>
                </>
              )}
              <th className='p-3 text-left'>Role</th>
              <th className='p-3 text-left'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user, index) => (
              <tr key={index} className='hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'>
                <td className='p-3'>{user.name}</td>
                {props.auth.user.role === "admin" ? (
                  <>
                    <td className='p-3'>{user.email}</td>
                    <td className='p-3'>
                      <FontAwesomeIcon icon={iconsByUser[user.role]} />
                      <span className='ml-2'>{user.role}</span>
                    </td>
                  </>
                ) : <>
                  <td className='p-3'>
                    <FontAwesomeIcon icon={iconsByUser[user.role]} />
                    <span className='ml-2'>{user.role}</span>
                  </td>
                </>}
                <td className='p-3'>
                  {props.auth.user.role === "admin" ? (
                    <div>
                      <Link
                        href={route('userAccount.show', { userID: user.id })}
                        className="text-gray-600 hover:text-gray-900 mr-2">
                        View
                      </Link>
                      <Link
                        href={route('userAccount.show', { userID: user.id })}
                        className="text-red-600 hover:text-red-900">
                        Delete
                      </Link>
                    </div>
                  ) : (
                    <Link
                      href={route('userAccount.show', { userID: user.id })}
                      className="text-gray-600 hover:text-gray-900">
                      View
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
