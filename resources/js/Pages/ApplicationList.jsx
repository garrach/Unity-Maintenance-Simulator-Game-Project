// JobsList.jsx

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
const JobsList = ({ auth, jobs,users }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='dark:text-white'>Jobs List</h2>}
    >
      <div className='container mx-auto mt-8'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {jobs &&
            jobs.map((job, index) => (
              <li
                key={index}
                className='relative bg-gray-800 p-4 rounded-md shadow-md transition-transform transform hover:scale-105 cursor-pointer'
              >
                {console.log(users)}
              <Link href={route('userAccount.show', { userID: users[job.id].id })}>
                <div className='text-white'>
                  <div className='w-full h-56 bg-gray-900 mt-6'></div>
                  <p className='text-lg font-semibold mt-2'>{job.title}</p>
                  <p className='text-gray-400'>{renderDescription(job.description)}</p>
                </div>
                </Link>
                
              </li>
            ))}
        </ul>
      </div>
    </AuthenticatedLayout>
  );
};

const renderDescription = (description) => {
    return (
        <ReactMarkdown remarkPlugins={[breaks]} className='text-gray-400'>
        {description}
      </ReactMarkdown>
    );
};
export default JobsList;