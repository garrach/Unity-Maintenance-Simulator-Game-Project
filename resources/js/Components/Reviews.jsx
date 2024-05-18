import { Link, useForm } from '@inertiajs/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserShield,
  faUserCircle,
  faUserTie,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const Reviews = ({ userInfo, auth }) => {
  const [cuurentDevicefeed, setCuurentDevicefeed] = useState(JSON.parse(atob(userInfo)));

  const{delete:destroy}=useForm();

  const handleDelete = (comment) => {

    const rep = confirm(`Are you sure u want to delete comment:?\n\n ${comment.user.name}: "${comment.text}"`);

    if (rep) {
      destroy(route('comments.destroy',comment.id))
      return;
    }
    return;
  }
  return (
    cuurentDevicefeed &&
    <div className="p-4 dark:bg-gray-800 dark:text-white text-gray-800">
      <h2 className="text-lg font-semibold mb-4">
        User Reviews
      </h2>
      <div className="space-y-4">
        {cuurentDevicefeed.comments.map((comment, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 relative">
            {(auth.user.role === "admin" || auth.user.role === "employee") &&
              <button
                onClick={(e) => { e.preventDefault; handleDelete(comment) }}
              >
                <div className='absolute top-2 right-2 w-10 h-10 hover:bg-red-500 rounded-full flex justify-center items-center'>

                  <FontAwesomeIcon icon={faTrashAlt} className='hover:bg-white-500' />

                </div>

              </button>
            }

            <div className="flex items-center mb-2">
              <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold mr-3">
                {comment.user.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{comment.user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">{comment.created_at}</div>
              </div>
            </div>
            <div className="text-gray-800 dark:text-gray-200 mt-4 ml-4">{comment.text}</div>
            <div className="text-right mt-2">
              <Link href={route('userAccount.show', { userID: comment.user.id })} className="text-blue-500 hover:underline">
                report
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
