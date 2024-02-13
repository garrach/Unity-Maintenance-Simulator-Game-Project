import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import { usePage } from '@inertiajs/react';
const Account=()=>{
    const { user , qt } = usePage().props;
    const carDetails={make:"(N/A)",model:"(N/A)",year:"(N/A)"}
    const roles=['Admin','Client','Employee','Guest']
    return(<>
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">My Account</h2>}
        >
            <Head title="My Account" />
      <div className="container mx-auto p-4">
      <h1 className="text-1xl font-bold mb-4">{qt}</h1>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">User Profile Information</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        
        <div className="flex flex-wrap">
      {roles.map((role, index) => (
       <>
       {role==="Admin" ? (<><div key={index} className="bg-blue-900 text-white px-2 py-1 rounded-full mr-2 mb-2">
          {role}
        </div></>):(<></>)}
        {role==="Client" ? (<><div key={index} className="bg-red-500 text-white px-2 py-1 rounded-full mr-2 mb-2">
          {role}
        </div></>):(<></>)}
        {role==="Employee" ? (<><div key={index} className="bg-green-500  text-white px-2 py-1 rounded-full mr-2 mb-2">
          {role}
        </div></>):(<></>)}
        {role==="Guest" ? (<><div key={index} className="bg-red-800  text-white px-2 py-1 rounded-full mr-2 mb-2">
          {role}
        </div></>):(<></>)}
       </>
      ))}
    </div>
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Car Details</h2>
        <p><strong>Make:</strong> {carDetails.make}</p>
        <p><strong>Model:</strong> {carDetails.model}</p>
        <p><strong>Year:</strong> {carDetails.year}</p>
        {/* Add more car details */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Maintenance History</h2>
        {/* Display service records and reminders */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Dashboard and Analytics</h2>
        {/* Display mileage tracking, fuel efficiency, and maintenance costs */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">App Preferences</h2>
        {/* Allow users to customize notification settings and app preferences */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Security</h2>
        {/* Allow users to change password and enable 2FA */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Support and Help</h2>
        {/* Display FAQs, help center, and contact support */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Logout and Account Deactivation</h2>
        {/* Include logout button and option for account deactivation */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Connected Services</h2>
        {/* Integration with auto repair shops or other connected services */}
      </div>

      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-lg font-bold mb-2">Legal and Privacy</h2>
        {/* Include links to terms of service and privacy policy */}
      </div>
    </div>
    </AuthenticatedLayout>
    </>)
}
export default Account