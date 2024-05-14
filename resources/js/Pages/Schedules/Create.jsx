import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

const ScheduleCreate = ({ user }) => {
  return (
    <div>
      <AuthenticatedLayout
        user={user}
        header='Reminders'
      >
        <Head title="Schedule Details" />

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Create Schedule</h1>
          {/* Your form for creating a schedule */}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ScheduleCreate;
