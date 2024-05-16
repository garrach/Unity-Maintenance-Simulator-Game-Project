import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useRef, useState } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUserTie, faUserShield, faHandPointer } from '@fortawesome/free-solid-svg-icons';

const Index = ({ paymentPlans, auth }) => {
  const { props } = usePage();
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(true);
  const connectionRef = useRef();
  const deviceRef = useRef();
  const {
    data,
    setData,
    post,
    processing,
    reset,
    errors,
  } = useForm({
    user: props.auth.user,
    plan: '',
  });

  const suub = (e) => {
    e.preventDefault();
    post(route('subscription.store'));
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const iconsByUser = {
    'client': faUserCircle,
    'admin': faUserShield,
    'employee': faUserTie,
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
        <Head title="Plan Details" />

        <form onSubmit={suub}>
          <div className="my-4 mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full max-w-4xl">
            <h1 className="text-2xl font-semibold mb-6 text-center">Services Plans</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paymentPlans.map((plan, index) => (
                <li key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:bg-cyan-300 transition-all duration-200">
                  <label htmlFor={plan.id} className="cursor-pointer">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">
                        <FontAwesomeIcon icon={iconsByUser[plan.name.toLowerCase().split(' ')[0]]} className="mr-2" />
                        {plan.name}
                      </p>
                      <input
                        type="radio"
                        name="plan"
                        value={plan.id}
                        onChange={handleChange}
                        id={plan.id}
                        className="hidden"
                      />
                    </div>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {plan.services.map((service, index) => (
                        <li key={index} className="mt-1">{service.name}</li>
                      ))}
                    </ul>
                    <div className="flex space-x-2 mt-4">
                      <Link
                        href={route('paymentPlans.show', { paymentPlan: plan.id })}
                        className="text-blue-500 hover:underline"
                      >
                        View
                      </Link>
                      <Link
                        href={route('paymentPlans.edit', { paymentPlan: plan.id })}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200"
              >
                <FontAwesomeIcon icon={faHandPointer} />
                <span className="ml-2">Subscribe</span>
              </button>
            </div>
          </div>
        </form>
      </AuthenticatedLayout>
    </div>
  );
};

export default Index;
