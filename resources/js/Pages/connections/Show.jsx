// resources/js/Pages/Connections/Show.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useRef, useState } from 'react';
import { Link, useForm , usePage} from '@inertiajs/react';

const Show = ({ connection, auth }) => {
  const {props}=usePage();
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(true);

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
} = useForm({
    password: '',
});


const confirmUserDeletion = () => {
  setConfirmingUserDeletion(true);
};

const deleteUser = (e) => {
  e.preventDefault();

  destroy(route('connections.destroy',{connection:connection.id}), {
      preserveScroll: true,
    
      onSuccess: () => closeModal(),
      onFinish: () => reset(),
  });
};

const closeModal = () => {
  setConfirmingUserDeletion(false);

  reset();
};



  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Connection Details</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold text-2xl text-gray-600 dark:text-gray-400">
            </label>
            <ul>
                <li>
                {`vehicle:${props.vehicles[0].make}`}
                </li>
       
                  <ul>
                  {
                    props.devices.map((device,index)=>(
                      <ul key={index}>
                      {
                        device.map((elemnt,index)=>(
                            <li key={index}>{`${index} : ${elemnt.type}`}</li>
                          ))
                        }
                    </ul>
                        
                    ))
                  }
            </ul>
                  
          
              </ul>
          </div>
          {/* Add other fields as needed */}
          <div className="space-x-2">
            <Link
              href={route('connections.edit', { connection: connection.id })}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </Link>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Show;
