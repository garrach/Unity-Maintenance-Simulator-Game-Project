// resources/js/Components/Dashboard/PaymentPlanOverview.jsx
import React from 'react';

const PaymentPlanOverview = ({ paymentPlan }) => {
  const paymentPlans=[{
    id:'',
    name:'',
    features:'',
    statut:true,
  }]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Payment Plan Overview</h2>
      <ul>
        {paymentPlans.map((plan) => (
          <li key={plan.id}>
            <p>Name: {plan.name}</p>
            <p>Features: {plan.features}</p>
            <p>Subscribe: {plan.statut}</p>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentPlanOverview;
