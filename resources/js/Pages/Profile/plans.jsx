import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Plans=({auth})=>{


  const plans = [
    {
      name: 'Basic Plan',
      price: '$9.99/month',
      features: [
        'Basic Maintenance Tracking',
        'Email Notifications',
        'Access to Essential Maintenance Reports',
        'Reminder for Oil Changes and Inspections',
        'Limited Customer Support',
      ],
    },
    {
      name: 'Standard Plan',
      price: '$19.99/month',
      features: [
        'Advanced Maintenance Tracking',
        'Email and SMS Notifications',
        'Car Analytics',
        'Detailed Maintenance Reports',
        'Priority Customer Support',
      ],
    },
    {
      name: 'Premium Plan',
      price: '$29.99/month',
      features: [
        'Full Maintenance Suite',
        'Priority Customer Support',
        'Connected Services',
        'Customizable Maintenance Schedules',
        'Exclusive Discounts on Partnered Auto Shops',
        'Luxury Device',
        'RGB - Gaming Car Setup'
      ],
    },
  ];

    return (<>
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Pricing</h2>}
>
<div class="bg-gray-100">
  <div class="container mx-auto py-12">
    <h2 class="text-3xl font-bold text-center mb-8">Pricing Plans</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {plans.map((plan, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-2">{plan.name}</h2>
            <p className="text-xl mb-2">{plan.price}</p>
            <ul className="list-disc pl-6">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-600">Choose Plan</button>
          </div>
        ))}
    </div>
  </div>
</div>

    
</AuthenticatedLayout>
    </>)
}
export default Plans