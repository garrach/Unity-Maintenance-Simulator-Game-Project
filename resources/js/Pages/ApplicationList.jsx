import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import { useEffect } from 'react';
import Markdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const currentJobDes = { description: '' };
const JobsList = ({ auth, jobs, users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDes, setSearchTermDes] = useState(null);

  const [currentJobs, setCurrentJobs] = useState([]);
  const [closedes, setCloseDes] = useState(true);
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setSearchTermDes(currentJobDes)
  }, [currentJobDes])
  const close = (event) => {
    event.preventDefault();
    setCloseDes(!closedes);
  };

  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className='dark:text-white'>Jobs List</h2>}
      >
        <Head title="Jobs List" />

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
                  <JobCard job={job} users={users} setMethod={setSearchTermDes} moreAction={setCurrentJobs} setCloseDesV={setCloseDes}/>
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
      {closedes && typeof (searchDes) === "string" &&
        <div class="absolute top-56 left-1/2 transform -translate-x-1/2  dark:bg-gray-400 dark:text-gray-800 bg-gray-800 text-gray-400 text-xl px-8 py-4 rounded-md">
          <button className='mb-2' onClick={(event) => close(event)}>       
           <FontAwesomeIcon icon={faClose} />
          </button>
          <div className='block max-w-screen text-center'>
            {(parseCoverLetter(searchDes))['Cover Letter']}
          </div>
        </div>
      }
      <div className='absolute bottom-0 z-40 text-gray-400'>
        <ol className='flex'>
          {typeof (searchDes) === 'string' && currentJobs.map((job,index) => (

            <li key={index} className='ml-4 p-4 rounded'>
              {`${index}) CoverLetter Of: ${job}`}
            </li>

          ))}
        </ol>
      </div>
    </>

  );
};
function parseCoverLetter(text) {
  const lines = text.split(/\r?\n/);
  const jobApplication = {};
  let currentField = '';

  lines.forEach(line => {
    if (line.trim() !== '') {
      const match = line.match(/([^:]+):(.*)/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim();
        if (key === 'Cover Letter') {
          currentField = key;
          jobApplication[currentField] = [];
        } else {
          jobApplication[key] = value;
        }
      } else {
        if (currentField !== '') {
          jobApplication[currentField].push(line.trim());
        }
      }
    }
  });

  return jobApplication;
}
const HandleChangedisplay = (e, job, setMethod, moreAction,setCloseDesV) => {
  e.preventDefault();
  currentJobDes.description = job;
  setMethod(currentJobDes.description);
  moreAction((prev) => [...prev, parseCoverLetter(job)['Name']]);
  setCloseDesV(true);


}
const JobCard = ({ job, users, setMethod, moreAction ,setCloseDesV}) => {
  return (
    <Link href={route('userAccount.show', { userID: users[job.id].id })}>
      <div className='dark:text-white text-gray-300 relative'>
        <div className='w-full h-56 bg-gray-900 mt-6 flex justify-center items-center'>{job.title}</div>
        <p className='text-lg font-semibold mt-2'></p>
        <button className='hover:bg-blue-500 p-2' onClick={(e) => { HandleChangedisplay(e, job.description, setMethod, moreAction,setCloseDesV); }}>view description</button>
      </div>
    </Link>
  );
};

const RenderDescription = (description) => {
  return (
    <ReactMarkdown remarkPlugins={[breaks]} className='text-gray-400'>
      {description}
    </ReactMarkdown>
  );
};

export default JobsList;
