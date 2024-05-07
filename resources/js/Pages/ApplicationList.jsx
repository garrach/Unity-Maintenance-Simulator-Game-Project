import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';

const JobsList = ({ auth, jobs, users }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className='dark:text-white'>Jobs List</h2>}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
          />
        </div>
        {filteredJobs.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredJobs.map((job) => (
              <li
                key={job.id}
                className="relative dark:bg-gray-800 p-1 hover:border-2 dark:hover:border-indigo-500 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer overflow-hidden"
              >
                <JobCard job={job} users={users} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600 text-lg font-semibold">No jobs found.</p>
          </div>
        )}
      </div>


    </AuthenticatedLayout>
  );
};

const JobCard = ({ job, users }) => {
  return (
    <Link href={route('userAccount.show', { userID: users[job.id].id })}>
      <div className='dark:text-white text-gray-300'>
        <div className='w-full h-56 bg-gray-900 mt-6 flex justify-center items-center'>{job.title}</div>
        <p className='text-lg font-semibold mt-2'></p>
        <p className='text-gray-400 p-2'>{renderDescription(job.description)}</p>
      </div>
    </Link>
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
