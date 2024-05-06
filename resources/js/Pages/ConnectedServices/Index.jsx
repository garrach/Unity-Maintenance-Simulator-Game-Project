import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Chart from 'react-apexcharts';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
const ConnectedServicesIndex = ({ vehicles, devices, auth }) => {
    const [deviceChart, setDeviceChart] = useState();
    const devicesData=useRef([]);
    const devicesDataLabels=useRef([]);
    const devicesDatausage=useRef([]);
    const handlDeviceChart = () => {

        Object.values(devices).map(device=>{Object.entries(device).map(([key,value])=>{devicesData.current.push(value.id)})});
        Object.values(devices).map(device=>{Object.entries(device).map(([key,value])=>{devicesDataLabels.current.push(value.type)})});
        const uniqueValuesIDs = new Set(devicesData.current);
        const uniqueValuesLabels = new Set(devicesDataLabels.current);
        devicesDatausage.current = Array.from(uniqueValuesIDs);
        devicesDataLabels.current = Array.from(uniqueValuesLabels);
        const categories = ['Car Electronics', 'Interior Controls', 'Safety Features', 'Entertainment System', 'Charging Accessories', 'Driver Assistance and Control'];


        const data = [];
        devicesDataLabels.current.forEach(() => {
            const randomData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
            data.push(randomData);
        });
        
const series = data.map((dataPoints, index) => ({
    name: `${devicesDataLabels.current[index]}`,
    data: dataPoints,
    
  }));
        const options = {
            options: {
          
            chart: {
            height: 800,
            width: 800,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            }
          },
          title: {
            text: 'Devices Radar Chart '
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.1
          },
          markers: {
            size: 0
          },
          xaxis: {
            categories: categories,
          }},
          series:series,
        }
        const children = <><Chart options={options.options} series={options.series} type='radar' /></>;
        setDeviceChart(children);
    }
    useEffect(() => {
        handlDeviceChart();
    }, [])
    return (
        <div className=' dark:bg-gray-100 '>
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight dark:text-white">Connected Services</h2>}
            >
                <Head title="Connected Services" />
                <div className="bg-gray-100 dark:bg-gray-900 p-4">
                    <h1 className="text-3xl font-bold mb-4 dark:text-white">Connected Services</h1>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div className="bg-white p-4 rounded-md shadow mb-4  dark:bg-gray-800">
                            <h2 className="text-xl font-bold mb-2 dark:text-white">Connected Services Chart</h2>
                            {deviceChart}
                        </div>
                        <ul className="space-y-2">
                            <li className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                                <ul>
                                    {vehicles && vehicles.map((vehicle, index) => (
                                        <li key={index}>
                                            <ul>
                                                <li className='font-bold uppercase dark:text-white'>{vehicle.name}</li>
                                                <li>
                                                    <ul>
                                                        {
                                                            devices && Object.entries(devices).map(([key, device], index2) => (
                                                                <li key={index2}>
                                                                    <ul>
                                                                    {key == vehicle.id &&
                                                                        Object.values(device).map((device,Index3) => (
                                                                            <li key={Index3} className='text-gray-200  hover:text-gray-900'>{device.type}</li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};
export default ConnectedServicesIndex;
{/**{connection.devices.map((device,index) => (<li key={index}>{device}</li>))} */ }