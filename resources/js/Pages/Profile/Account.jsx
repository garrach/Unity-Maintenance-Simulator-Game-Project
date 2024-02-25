import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';

const Account = () => {
  const { user, qt } = usePage().props;
  const carDetails = { make: "(N/A)", model: "(N/A)", year: "(N/A)" };
  const roles = ['admin', 'client', 'employee', 'Guest'];
  const colors = ['blue', 'green', 'red', 'yellow'];

  return (
    <div className='dark:text-white dark:bg-gray-900'>
      <AuthenticatedLayout
        user={user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">My Account</h2>}
      >
        <Head title="My Account" />
        <div className="container mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">

          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">{qt}</h1>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">User Profile Information</h2>
            <p className="mb-2"><strong>Name:</strong> {user.name}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>

            <div className="flex flex-wrap">
              {roles.map((role, index) => (<>
                {user.role === role && (
                  <div key={index} className={`bg-${colors[index].toLowerCase()}-500 text-white px-12 py-1 rounded-full mr-2 mb-2`}>
                    {role}
                  </div>
                )}

              </>

              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Car Details</h2>
            <p className="mb-2"><strong>Make:</strong> {carDetails.make}</p>
            <p className="mb-2"><strong>Model:</strong> {carDetails.model}</p>
            <p className="mb-2"><strong>Year:</strong> {carDetails.year}</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Maintenance History</h2>
            <p>This section could display service records and reminders.</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Dashboard and Analytics</h2>
            <p>This section could display mileage tracking, fuel efficiency, and maintenance costs.</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">App Preferences</h2>
            <p>This section could allow users to customize notification settings and app preferences.</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Security</h2>
            <p>This section could allow users to change passwords and enable 2FA.</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Support and Help</h2>
            <p>This section could display FAQs, a help center, and contact support information.</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Logout and Account Deactivation</h2>
            <p>This section could include a logout button and an option for account deactivation.</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Connected Services</h2>
            <p>This section could involve integration with auto repair shops or other connected services.</p>
          </div>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">Legal and Privacy</h2>
            <p>This section could include links to terms of service and the privacy policy.</p>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}

export default Account;
