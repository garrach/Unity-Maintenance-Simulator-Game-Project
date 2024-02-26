import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

const Navigation = () => {
  return (
    <div className="flex justify-center space-x-4">
      <Link
        href={route('reminders.index')}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
      >
        Reminders
      </Link>
      <Link
        href={route('schedules.index')}
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
      >
        Schedules
      </Link>
    </div>
  );
};

export default Navigation;
