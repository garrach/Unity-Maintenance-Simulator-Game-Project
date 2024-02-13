import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Services = ({ auth }) => {


  const services = [
    {

      title: 'Basic Maintenance Tracking',
      description: 'Effortlessly track and manage your car maintenance schedule. Receive timely reminders for oil changes, inspections, and more.',
      includedIn: ['Basic Plan'],
      path: "/basic-maintenance",
    },
    {
      title: 'Car Analytics',
      description: 'Gain insights into your car\'s performance with detailed analytics. Track fuel efficiency, mileage, and overall health of your vehicle.',
      includedIn: ['Standard Plan', 'Premium Plan'],
      path: "/car-analytics",

    },
    {
      title: 'Connected Services',
      description: 'Connect with partnered auto repair shops for seamless service appointments. Receive exclusive discounts and priority service.',
      includedIn: ['Premium Plan'],
      path: "/connected-services",

    },
    {
      title: 'Reminder Notifications',
      description: 'Stay on top of your car maintenance with email and SMS notifications. Get alerted for upcoming services and never miss a beat.',
      includedIn: ['Basic Plan', 'Standard Plan', 'Premium Plan'],
      path: "/reminder-notifications",

    },
    {
      title: 'Full Maintenance Suite',
      description: 'Unlock the full potential of our maintenance suite. Enjoy advanced features, priority support, and exclusive benefits.',
      includedIn: ['Premium Plan'],
      path: "/full-maintenance-suite",

    },
    {
      title: 'Customizable Maintenance Schedules',
      description: 'Tailor your car maintenance schedules to fit your unique needs. Set personalized intervals for services and inspections.',
      includedIn: ['Premium Plan'],
      path: "/customizable-maintenance-schedules",
    },
    {
      title: 'Exclusive Discounts on Partnered Auto Shops',
      description: 'As a premium member, enjoy special discounts when availing services from our partnered auto repair shops.',
      includedIn: ['Premium Plan'],
      path: "/exclusive-discounts"
    },
    {
      title: 'Priority Customer Support',
      description: 'Experience top-notch customer support with our priority service for any queries or assistance you may need.',
      includedIn: ['Standard Plan', 'Premium Plan'],
      path: "/priority-customer-support"
    },
    {
      title: 'Advanced Maintenance Reports',
      description: 'Access detailed reports on your car\'s maintenance history and performance, helping you make informed decisions.',
      includedIn: ['Standard Plan', 'Premium Plan'],
      path: "/advanced-maintenance-reports"
    },
  ];


  return (<>

    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Services</h2>}
    >
    <Head title="Services" />

      <div class="container mx-auto py-12">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4"> Services</h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <>
                <div key={index} className="bg-white p-4 group rounded shadow-md mb-4 rounded-lg hover:bg-sky-500 hover:ring-sky-500">
                  <a className='md:cursor-auto' href={service.path}>
                    <h2 className="text-lg font-bold mb-2 group-hover:text-white cursor-pointer">{service.title}</h2>
                    <p className="mb-4 group-hover:text-white">{service.description}</p>
                    <div className="text-sm font-semibold mb-2 group-hover:text-white">Included in:</div>
                    <ul className="list-disc pl-6 group-hover:text-white">
                      {service.includedIn.map((plan, idx) => (
                        <>
                        {plan==="Basic Plan" && (<li className='bg-blue-900 text-white px-2 py-1 rounded-full mr-2 mb-2' key={idx}>{plan}</li>)}
                        {plan==="Standard Plan" && (<li className='bg-green-900 text-white px-2 py-1 rounded-full mr-2 mb-2' key={idx}>{plan}</li>)}
                        {plan==="Premium Plan" && (<li className='bg-yellow-500 text-white px-2 py-1 rounded-full mr-2 mb-2' key={idx}>{plan}</li>)}
                        </>
                      ))}
                    </ul>
                  </a>
                </div>
              </>
            ))}
            <div className="bg-white p-4 group rounded shadow-md mb-4 rounded-lg">
              <label htmlFor='neew' class="hover:border-blue-500 hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                <svg class="mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New project
              </label>
              <input type='text' id='neew' accept='.json' hidden/>
            </div>
          </div>
        </div>
      </div>


    </AuthenticatedLayout>
  </>)
}
export default Services