// resources/js/Pages/paymentPlans/Index.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Link } from '@inertiajs/react';

const Index = ({ paymentPlans, auth }) => {

  const { props } = usePage();
  const pageData = usePage();
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(true);
  const connectionRef = useRef();
  const deviceRef = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    connection: connectionRef.current,
    device: deviceRef.current,
  });


  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };


  const deleteUser = (e, connection, device) => {
    e.preventDefault();
    connectionRef.current = connection;
    deviceRef.current = device;
    destroy(route('subscription.store', { connection: connection, device: device }), {
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
    <div className='dark:text-white'>
      <AuthenticatedLayout
        user={auth.user}
        header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Dashboard - {auth.user.role}
          </h2>
        }
      >
        <div className="my-4 mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Payment Plans</h1>
          <ul className="grid grid-cols-3 gap-8 mb-12">
            {paymentPlans.map((plan) => (
              <li key={plan.id} className="bg-white dark:bg-gray-800 p-4  rounded-md shadow-md cursor-pointer h-full  hover:text-white hover:bg-cyan-300">
                <p className="text-lg font-semibold mb-2">{plan.name}</p>

                {/* Display services associated with the payment plan */}
                <ul>
                  {plan.services.map((service) => (
                    <li key={service.id}>{service.name}</li>
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
            ))}

<form onSubmit={(e) => { e.preventDefault(); deleteUser(e, connections[index1].id, device.id); }}>
<li><Link
              href={route('subscription.store')}
              className="subscribe !block bg-blue-500 text-white mx-auto px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Subscribe
            </Link></li>
            <li><Link
              href={route('subscription.store')}
              className="subscribe !block bg-blue-500 text-white mx-auto px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Subscribe
            </Link></li>
            <li><Link
              href={route('subscription.store')}
              className="subscribe !block bg-blue-500 text-white mx-auto px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Subscribe
            </Link></li>

</form>
           
          </ul>

        </div>
      </AuthenticatedLayout>
      <style>
        {`
        .subscribe{
         
        }
        
        `}
      </style>
    </div>
  );
};

export default Index;
