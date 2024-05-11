import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const RealtimeTrackerChart = ({stream}) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
      max: 100,
    },
  });

  useEffect(() => {
    const fetchData = () => {
      // Simulate fetching real-time data (replace with your data fetching logic)
      const newDataPoint = {
        x: new Date().getTime(),
        y: Math.floor(Math.random() * 100),
      };

      setData((prevData) => [...prevData, newDataPoint]);

      // Update the options to scroll the chart to the latest data point
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          min: new Date().getTime() - 60000, // Display data for the last minute
          max: new Date().getTime(),
        },
      }));
    };

    // Fetch new data every second
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {console.log(stream)}
      <Chart options={options} series={[{ data }]} type="line" height={350} />
    </div>
  );
};

export default RealtimeTrackerChart;
