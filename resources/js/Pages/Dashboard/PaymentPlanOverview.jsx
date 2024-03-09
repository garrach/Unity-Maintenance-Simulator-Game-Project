// resources/js/Components/Dashboard/PaymentPlanOverview.jsx
import { usePage } from '@inertiajs/react';
import React, { useRef } from 'react';

const PaymentPlanOverview = ({ paymentPlan }) => {
  const {props}=usePage();
  const servicesRef=useRef();
  servicesRef.current=props.services;
  const paymentPlans=[{
    id:'',
    features:servicesRef.current,
    statut:'Active',
  }]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Payment Plan Overview</h2>

      <ul>

          <li>
            <p><b>Name:</b>{props.paymentPlan.name}</p>
            <ul>
              <li><p><b>features:</b></p></li>
            {servicesRef.current &&(servicesRef.current.map((feature,index)=>
            <li key={index}>{feature.name}</li>
            ) )}
            </ul>
           
            <p><b>Subscribe:</b></p>
           
          </li>
      
      </ul>
    </div>
  );
};

export default PaymentPlanOverview;
