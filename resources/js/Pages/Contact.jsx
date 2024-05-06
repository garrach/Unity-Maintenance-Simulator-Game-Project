import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

const Contact = ({ successMessage }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });
  const [validSub, setValidSub] = useState(false);

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidSub(true);
    if (data.name !== '') {
      setTimeout(() => {
        post(route('contact.store'));
      }, 2000);
    }
    reset();
  };

  return (
    <GuestLayout>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen  flex flex-col">
        {validSub && (
          <div className="bg-green-500 text-white py-2 text-center">
            Message sent successfully!
          </div>
        )}
        <header className="bg-orange-500 text-white py-8 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2">Reach out to us with any questions or concerns!</p>
        </header>

        <main className="container mx-auto my-8 flex-1">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6 max-w-md">
              <h2 className="text-2xl text-gray-500 dark:text-gray-300 font-bold mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                {errors && (
                  <div className="text-red-500 mb-4">
                    {Object.values(errors).map((error, index) => (
                      <div key={index}>{error}</div>
                    ))}
                  </div>
                )}
                <div className="mb-4 relative">
                  <label htmlFor="name" className="block dark:text-gray-300 font-bold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="w-full dark:text-white px-3 py-2 dark:bg-gray-800 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label htmlFor="email" className="block dark:text-gray-300 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className="w-full dark:text-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-800 transition duration-300"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label htmlFor="message" className="block dark:text-gray-300 font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full dark:text-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-800 transition duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300"
                  disabled={processing}
                >
                  {processing ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
            <div className="md:flex md:items-center">
              <img src="Get-in-touch-copy.webp" alt="" className='relative w-auto h-80' />
            </div>
          </section>
        </main>

      </div>
    </GuestLayout>
  );
};

export default Contact;
