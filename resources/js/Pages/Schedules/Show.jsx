import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const ScheduleShow = ({ schedule, user }) => {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <AuthenticatedLayout user={user} header="Schedules">
      <Head title="Schedule Details" />

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Schedule Details</h1>
          <div className="bg-gray-700 rounded-md p-4 mb-4">
            <div className="mb-2">
              <strong className="font-bold">Title:</strong> {schedule.title}
            </div>
            <div className="mb-2">
              <strong className="font-bold">Description:</strong> {schedule.description}
            </div>
            <div className="mb-2">
              <strong className="font-bold">Start Date:</strong> {schedule.start_date}
            </div>
            <div>
              <strong className="font-bold">End Date:</strong> {schedule.end_date}
            </div>
          </div>
          {/* Display other schedule details here */}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ScheduleShow;
