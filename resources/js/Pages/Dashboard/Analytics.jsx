import { usePage } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';
import RealtimeTrackerChart from './RealtimeTrackerChart'; 

// Defining the Analytics component
const Analytics = ({stat}) => {

  const { props } = usePage(); // Getting page properties using Inertia.js hook
  
  const [LiveFeedAvailable, setLiveFeedAvailable] = useState(false); // Variable determining whether live feed is available or not
  const [LiveFeedElemnt, setLiveFeedElemnt] = useState({Devices:[{name:'GPS'}],Vehicles:[{name:'Toyota'}]}); // Variable determining whether live feed is available or not

  // Function to toggle live feed availability
  const toggleLiveFeed = () => {
    setLiveFeedAvailable(prevState => !prevState); // Toggle the state
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md h-full">
      <h2 className="text-lg font-semibold mb-2">Graphs/Analytics <span className='ml-4'>{stat ? LiveFeedElemnt.Devices[0].name:LiveFeedElemnt.Vehicles[0].name}</span></h2>
      
      {/* Conditionally rendering components based on LiveFeedAvailable */}
      {LiveFeedAvailable ? (
        <RealtimeTrackerChart />
      ) : (
        <div className="text-red-500">
          Live feed is not available at the moment.
        </div>
      )}

      {/* Button to toggle live feed availability */}
      <button disabled onClick={toggleLiveFeed} className="mt-4 disabled px-4 py-2 bg-blue-500 text-white rounded-md">
        {LiveFeedAvailable ? "Disable Live Feed" : "Enable Live Feed"}
      </button>
    </div>
  );
};

export default Analytics;
