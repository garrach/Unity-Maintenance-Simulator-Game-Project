import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';

const ScheduleCreate = ({user}) => {
  return (
    <div>
       <AuthenticatedLayout
      user={user}
      header='Reminders'
      >
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Create Schedule</h1>
          {/* Your form for creating a schedule */}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default ScheduleCreate;
