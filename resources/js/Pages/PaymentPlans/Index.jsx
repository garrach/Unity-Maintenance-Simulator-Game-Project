// resources/js/Pages/paymentPlans/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useRef, useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';

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
    console.log(data)
    post(route('subscription.store'))
    reset();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  return (
    <div className='dark:text-white'>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
       
            <form onSubmit={suub}> <div className="my-4 mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Payment Plans</h1>
          <ul className="grid grid-cols-3 gap-8 mb-12">
            {paymentPlans.map((plan, index) => (
              <div key={index}>
              <label htmlFor={plan.id}>
                <li className="bg-white dark:bg-gray-800 p-4  rounded-md shadow-md cursor-pointer h-full  hover:text-white hover:bg-cyan-300">
                  <p className="text-lg font-semibold mb-2">{plan.name}</p>

                
                  <ul>

                    {plan.services.map((service,index) => (<>
                      <li key={index}>{service.name}</li></>
                    ))}
                  </ul>

                  <div className="flex space-x-2">
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

                </li>  
                <input
                    type="radio"
                    name="plan"
                    className='hiRadio'
                    value={plan.id}
                    onChange={handleChange}
                    
                    id={plan.id} />
              </label></div>))}

              <li><button
                className="subscribe !block bg-blue-500 text-white mx-auto px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Subscribe
              </button></li>
              <li><button
                className="subscribe !block bg-blue-500 text-white mx-auto px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Subscribe
              </button></li>
              <li><button

                className="subscribe !block bg-blue-500 text-white mx-auto px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Subscribe
              </button></li>

            

          </ul>

        </div></form>
      </AuthenticatedLayout>
      <style>
        {`
        .subscribe{
         
        }
        .hiRadio{
          display:none !important; 
        }
        
        `}
      </style>
    </div>
  );
};

export default Index;
