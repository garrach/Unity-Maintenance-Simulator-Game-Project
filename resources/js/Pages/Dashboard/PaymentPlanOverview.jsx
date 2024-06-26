// resources/js/Components/Dashboard/PaymentPlanOverview.jsx
import { usePage } from '@inertiajs/react';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
const PaymentPlanOverview = ({ paymentPlan }) => {
  const { props } = usePage();
  const servicesRef = useRef();
  servicesRef.current = props.services;
  const paymentPlans = [{
    id: '',
    features: servicesRef.current,
    statut: 'Active',
  }]
  return (
    <div className="p-4 dark:text-white text-gray-800 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2" id='pop'>
        <FontAwesomeIcon icon={faChartArea} />
        <span className='ml-2'>User Plan Overview</span>
    
      </h2>

      <ul>

        <li>
          <p><b>Name:</b>{props.paymentPlan.name}</p>
          <ul>
            <li><p><b>features:</b></p></li>
            {servicesRef.current && (servicesRef.current.map((feature, index) =>
              <li key={index}>{feature.name}</li>
            ))}
          </ul>
        </li>

      </ul>
    </div>
  );
};

export default PaymentPlanOverview;
