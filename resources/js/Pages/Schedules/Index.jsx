import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link, useForm } from '@inertiajs/react';

const ScheduleIndex = ({ schedules, user }) => {
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '', // Assuming you have a password field for confirmation
  });

  const deleteSchedule = (id) => {
    if (confirm('Are you sure you want to delete this schedule?')) {
      destroy(route('schedules.destroy', { schedule: id }));
    }
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white min-h-screen">
      <AuthenticatedLayout user={user} header="Schedules">
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4 dark:text-white">Schedules</h1>
          {(schedules) ? <>


            <ul>
              {schedules.map((schedule) => (
                <li key={schedule.id} className="bg-white dark:bg-gray-700 shadow-md rounded-md p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{schedule.title}</span>
                    <div className="flex space-x-4">
                      <Link href={route('schedules.show', schedule.id)} className="text-blue-500 hover:text-blue-700">
                        View
                      </Link>

                      {user.role === "admin" && (<>
                        <Link href={route('schedules.edit', schedule.id)} className="text-blue-500 hover:text-blue-700">
                          Edit
                        </Link>
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={(e) => { e.preventDefault(); deleteSchedule(schedule.id) }}
                        >
                          Delete
                        </button>
                      </>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{schedule.description}</p>
                  <div className="mt-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Start Date: {schedule.start_date}</span>
                    <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">End Date: {schedule.end_date}</span>
                  </div>
                </li>
              ))}
            </ul>

          </> : <>
            <ul>
              <li className='text-xl dark:text-gray-300'>NO Schedules</li>
            </ul>
          </>}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ScheduleIndex;
