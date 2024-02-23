// resources/js/Pages/connections/Create.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';

const Create = ({ auth, vehicles, devices, connections }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name:'',
    vehicle_id: 1,
    device_id: 1,
    connection_date: "",
  });
  const [socket,setSocket]=useState(new WebSocket("ws://localhost:3004"));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value.replace('/','-'),
    }));
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('connections.store'));
    const validDataToUNity="\n connection_date:"+data.connection_date+"\n vehicle_id:"+data.vehicle_id+"\n device_id:"+data.device_id+"\n"
    confirm("Data : "+validDataToUNity);
      socket.send(JSON.stringify({type:'running', data:data}));

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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Create Connection</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Your form fields here */}
            <div>
              <label htmlFor="vehicle_id" className="block text-sm font-medium text-gray-700">
                Vehicle:
              </label>
              <p>Connection:</p>
              <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </div>
              <select
                id="vehicle_id"
                name="vehicle_id"
                value={data.vehicle_id}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              >
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id} >
                    {vehicle.make}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="device_id" className="block text-sm font-medium text-gray-700">
                Device:
              </label>
              <select multiple size='4'
                id="device_id"
                name="device_id"
                
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              >
                {devices.map((device) => (
                  <option key={device.id} value={device.id}>
                    {device.serial_number}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="connection_date" className="block text-sm font-medium text-gray-700">
                Connection Date:
              </label>
              <input
                type="date"
                id="connection_date"
                name="connection_date"
                value={data.connection_date}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Create Connection
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
