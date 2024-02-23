// resources/js/Components/Dashboard/Analytics.jsx
import { usePage } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'react-apexcharts';

const Analytics = () => {
  const { props } = usePage();
  
  const interiorDevices = ['Infotainment System', 'Climate Control', 'Heated Seats'];
  const connectedDevices = ['GPS Tracker', 'Bluetooth OBD-II Scanner', 'Smartphone Integration'];

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Assuming props.devices is an array of data for the chart
    setChartData(props.devices || []);
  }, [props.devices]);

  const chartOptions = {
    chart: {
      id: 'basic-line-chart',
    },
    xaxis: {
      categories: interiorDevices, // Use your own categories here
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
    title: {
      text: 'Line Chart',
      align: 'center',
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    colors: ['#008FFB'], // You can customize line colors
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth', // Choose the curve type: 'smooth', 'straight', 'stepline', etc.
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Graphs/Analytics</h2>
      {chartData.length > 0 ? (
        <Chart series={[{ name: 'Series 1', data: chartData }]} options={chartOptions} type="line" height={350} />
      ) : (
        <p>No data available for the chart.</p>
      )}
    </div>
  );
};

export default Analytics;
