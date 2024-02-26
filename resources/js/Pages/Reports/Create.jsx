import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { useForm, usePage } from '@inertiajs/react';

const Create = ({ auth }) => {
  const {props}=usePage();
  const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const { data, setData, post, processing, errors, reset } = useForm({
    user_id: auth.user.id,
    title: '',
    description: '',
    application_date: currentDate,
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
    alert(data.user_id+"\n"+data.title+"\n"+data.description+"\n"+data.application_date+"\n")
    post(route('reports.store'), {
      data,
      onSuccess: () => {
        reset();
      },
    });
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
        {console.log(auth)}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-semibold mb-4 dark:text-gray-200">Create Report</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Title:
              </label>
              <input
              required
                type="text"
                id="title"
                name="title"
                value={data.title}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description:
              </label>
              <textarea
              required
                id="description"
                name="description"
                value={data.description}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                disabled={processing}
              >
                {processing ? 'Creating...' : 'Create Report'}
              </button>
            </div>
          </form>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Create;
