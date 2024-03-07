// resources/js/Components/Dashboard/Analytics.jsx
import { usePage } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'react-apexcharts';
import RealtimeTrackerChart from './RealtimeTrackerChart';

const Analytics = () => {
  const { props } = usePage();
  

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md h-full">
      <h2 className="text-lg font-semibold mb-2">Graphs/Analytics</h2>
    
    <RealtimeTrackerChart/>
      
    </div>
  );
};

export default Analytics;
