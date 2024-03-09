// Contact.jsx

import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

const Contact = ({successMessage}) => {

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });
  const [validSub,setValidSub]=useState(false);
  
  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValidSub(true);
    if(data.name!==''){

      setTimeout(()=>{
        post(route('contact.store'));
      },2000)
    }
    reset();
  };

  return (
    <GuestLayout>
    <div className="dark:bg-gray-800 drak:text-white bg-gray-100">
   {validSub && <div className='bg-green-500 w-screen abolute h-fit text-xl dark:text-white text-gray-200 text-center'>
      Message sent
    </div>}
      <header className="py-8 bg-blue-500 text-white text-center dark:bg-gray-800 drak:text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2">Reach out to us with any questions or concerns!</p>
      </header>

      <main className="container mx-auto my-8 dark:bg-gray-800 drak:text-white">
        <section>
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {/* Display success message */}
          {successMessage && (
            <div className="bg-green-200 p-3 mb-4 rounded border border-green-500">
              {successMessage}
            </div>
          )}
            <div className="mb-4">
              <label htmlFor="name" className="block dark:text-gray-200 text-gray-700 font-bold mb-2">
                Name
              </label>
              <input

              
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block dark:text-gray-200 text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block dark:text-gray-200 text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
    </GuestLayout>
  
  );
};

export default Contact;
