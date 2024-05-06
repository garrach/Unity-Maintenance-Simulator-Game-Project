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
      <div className='container mx-auto mt-8'>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={handleSearch}
            className="border p-2 w-full"
          />
        </div>
        {filteredJobs.length > 0 ? (
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {filteredJobs.map((job) => (
              <li
                key={job.id}
                className='relative bg-gray-800 p-4 rounded-md shadow-md transition-transform transform hover:scale-105 cursor-pointer'
              >
                <JobCard job={job} users={users} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

const JobCard = ({ job, users }) => {
  return (
    <Link href={route('userAccount.show', { userID: users[job.id].id })}>
      <div className='text-white'>
        <div className='w-full h-56 bg-gray-900 mt-6'></div>
        <p className='text-lg font-semibold mt-2'>{job.title}</p>
        <p className='text-gray-400'>{renderDescription(job.description)}</p>
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
