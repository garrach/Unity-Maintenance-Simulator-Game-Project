import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Chart from 'react-apexcharts';
import React, { useEffect, useRef, useState } from 'react';
const BasicMaintenanceIndex = ({ auth, maintenanceTasksz ,RouteIDS}) => {
    const [maintenanceOne, setMaintenanceOne] = useState(maintenanceTasksz);
    const [users, setUsers] = useState();

    const [labels, setLabels] = useState([]);
    const chartOptions = {
        chart: {
            height: 200,
            type: 'donut', // Set the chart type to donut
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '0%', // Adjust the size of the donut hole
                },
            },
        },
        labels: labels,
        legend: {
            show: true,
            position: 'right',
            horizontalAlign: 'left',
            fontSize: '14px',
            labels: {
                colors: ['#ff0000', '#00ff00', '#0000ff'], // Set the legend label colors here
            },
        },
    };
    const statss = useRef([]);
    const [chartSeries, setChartSeries] = useState([]);
    useEffect(() => {
        statss.current = [];
        const labels = [];
        const infos = [];
        const parser = JSON.parse(maintenanceOne);
        setUsers(Object.keys(parser));
        const mat = Object.values(parser);
        mat.map((u) => {
            u.map((obj) => {
                obj.device.map((DVinfos) => {
                    labels.push(DVinfos.type)
                })
                if (obj.usage_count) {

                    statss.current.push(obj.usage_count)
                }
            })
        })

        setLabels(labels);
        setChartSeries(statss.current);
        return () => {
            statss.current = [];
        }

    }, [])
    const namesRoute=Object.values(RouteIDS);
useEffect(()=>{

},[])
    return (
        <div className='dark:bg-gray-900 dark:text-white'>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Basic Maintenance</h2>}
            >
                <Head title="BasicMaintenance" />
                <div className="bg-gray-100 dark:bg-gray-900 p-4 relative">
                    <h1 className="text-3xl font-bold mb-4">Basic Maintenance Tracking</h1>
                    <div className='grid md:grid-cols-1 gap-4 container mx-auto'>

                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4 ">
                            {chartSeries && <Chart options={chartOptions} series={chartSeries} type="donut" height={200} />}
                        </div>                    <Link className='bg-blue-500 hover:bg-green-500 p-4' href={route('full-maintenance-suite')}>settings</Link>

                        {/* Display Maintenance Schedule */}
                        <div className="dark:text-white bg-white dark:bg-gray-800 p-4 rounded-md shadow mb-4">
                            <h2 className="text-xl font-bold mb-2">Maintenance / Device Usage Rank</h2>
                            <ul>
                                {labels && labels.map((label, index) => (
                                    <li key={index}>
                                        <ul>
                                            <li>{label}</li>
                                            <li> {chartSeries[index]} exp</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </AuthenticatedLayout>
            <div className='absolute top-0 left-96 grid grid-cols-3'>

                {users && users.map((user, index) => (

                    <div className='relative left-24'>

                        <span style={{ zIndex: (index * 10 + 1), left: (index * 50) }} 
                        className='p-4 absolute top-32 border-2 border-indigo-500 flex justify-center items-center  bg-gray-900 dark:bg-gray-900 w-20 h-20 rounded-full uppercase text-xl dark:text-white text-gray-500 hover:bg-orange-500 cursor-pointer'>
                            <span>
                                <Link href={route('userAccount.show',{userID:namesRoute[index]})}>
                                    {user.substring(0, 1)}
                                </Link>


                            </span>
                        </span>
                    </div>


                ))}
            </div>
        </div>
    );
};
export default BasicMaintenanceIndex;
