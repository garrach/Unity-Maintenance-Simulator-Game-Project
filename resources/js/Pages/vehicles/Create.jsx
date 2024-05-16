import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendarAlt, faTag, faIdCard } from '@fortawesome/free-solid-svg-icons';

const Create = ({ auth }) => {
  const { data, setData, post, processing, errors } = useForm({
    make: '',
    model: '',
    year: '',
    license_plate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('vehicles.store'), {
      onError: () => {
        // Handle errors if needed
      }
    });
  };

  return (
    <div className='dark:text-white min-h-screen bg-gray-100 dark:bg-gray-800'>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <Head title="Vehicle Details" />

        <div className="my-4 mx-auto w-full max-w-lg bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-center">Create Vehicle</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faCar} className="mr-2" />
                Make:
              </label>
              <input
                type="text"
                id="make"
                name="make"
                value={data.make}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Vehicle make"
              />
              {errors.make && <p className="text-red-500 text-sm mt-1">{errors.make}</p>}
            </div>
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faTag} className="mr-2" />
                Model:
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={data.model}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Vehicle model"
              />
              {errors.model && <p className="text-red-500 text-sm mt-1">{errors.model}</p>}
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Year:
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={data.year}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Vehicle year"
              />
              {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
            </div>
            <div>
              <label htmlFor="license_plate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faIdCard} className="mr-2" />
                License Plate:
              </label>
              <input
                type="text"
                id="license_plate"
                name="license_plate"
                value={data.license_plate}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Vehicle license plate"
              />
              {errors.license_plate && <p className="text-red-500 text-sm mt-1">{errors.license_plate}</p>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
                disabled={processing}
                aria-live="polite"
              >
                {processing ? 'Creating...' : 'Create Vehicle'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
