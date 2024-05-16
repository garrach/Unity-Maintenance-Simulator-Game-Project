import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faCogs, faCalendarAlt, faImage } from '@fortawesome/free-solid-svg-icons';

const Create = ({ auth }) => {
  const { data, setData, post, processing, errors } = useForm({
    serial_number: '',
    type: '',
    installation_date: format(new Date(), 'yyyy-MM-dd'),
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('devices.store'));
  };

  return (
    <div className="dark:text-white min-h-screen bg-gray-100 dark:bg-gray-800">
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <Head title="Create Device" />

        <div className="my-4 mx-auto w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-center">Create Device</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="serial_number" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faBarcode} className="mr-2" />
                Serial Number:
              </label>
              <input
                type="text"
                id="serial_number"
                name="serial_number"
                value={data.serial_number}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Device serial number"
              />
              {errors.serial_number && <p className="text-red-500 text-sm mt-1">{errors.serial_number}</p>}
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faCogs} className="mr-2" />
                Type:
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={data.type}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Device type"
              />
              {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faImage} className="mr-2" />
                Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Device image"
              />
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>
            <div>
              <label htmlFor="installation_date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Installation Date:
              </label>
              <input
                type="date"
                id="installation_date"
                name="installation_date"
                value={data.installation_date}
                onChange={handleChange}
                className="mt-2 p-3 border rounded-md w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                aria-label="Device installation date"
              />
              {errors.installation_date && <p className="text-red-500 text-sm mt-1">{errors.installation_date}</p>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 mt-6 rounded-full hover:bg-blue-600 transition duration-200"
                disabled={processing}
                aria-live="polite"
              >
                {processing ? 'Creating...' : 'Create Device'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
