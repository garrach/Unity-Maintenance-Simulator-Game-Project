import React from 'react';
import Chart from 'react-apexcharts';

const GraphComponent = ({ jsonData }) => {
  // Extracting data for the graph
  const labels = Object.keys(jsonData).filter(key => key !== 'make' && key !== 'model' && key !== 'year');
  const dataValues = labels.map(label => {return parseFloat(jsonData[label])});

  // Building the data object for the graph
  const series = [{
    name: 'Vehicle Data',
    data: dataValues
  }];

  const options = {
    chart: {
      type: 'line',
      toolbar: {
        show: false // Hide chart toolbar
      },
      fontFamily: 'Arial, sans-serif',
      animations: {
        enabled: false // Disable animations for a smoother loading experience
      }
    },
    xaxis: {
      categories: labels,
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 500,
          colors: '#333' // Adjust x-axis label color
        }
      },
      axisTicks: {
        show: false // Hide x-axis ticks
      },
      axisBorder: {
        show: false // Hide x-axis border
      }
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 500,
          colors: '#333' // Adjust y-axis label color
        },
        formatter: function(value) {
          return value.toFixed(2); // Format y-axis values with two decimal places
        }
      },
      axisTicks: {
        show: false // Hide y-axis ticks
      },
      axisBorder: {
        show: false // Hide y-axis border
      }
    },
    stroke: {
      curve: 'smooth' // Smooth curve for the line chart
    },
    colors: ['#007bff'], // Line color
    markers: {
      size: 6, // Adjust marker size
      colors: ['#007bff'], // Marker color
      strokeWidth: 0, // Remove marker stroke
      strokeColors: '#fff' // Marker stroke color
    },
    tooltip: {
      enabled: true, // Show tooltip on hover
      style: {
        fontSize: '14px'
      },
      x: {
        show: true,
        format: 'MMM yyyy'
      },
      y: {
        formatter: function(value) {
          return value.toFixed(2); // Format tooltip values with two decimal places
        }
      }
    },
    grid: {
      borderColor: '#eee', // Adjust grid border color
      padding: {
        top: 15, // Add padding to the top of the chart
        bottom: 15 // Add padding to the bottom of the chart
      }
    }
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Vehicle Analytics Line Chart</h2>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default GraphComponent;