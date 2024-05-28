import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Chart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
const ConnectedServicesIndex = ({ vehicles, devices, radars, auth }) => {
    const datapointszero = [];
    const deviceRadarMapper = useRef({});
    const radarValue = useRef();
    const currentDeviceID = useRef();
    const currentRadarArr = useRef();

    const {post}=useForm();

    const editRadar = useRef(Object.keys(radars[0]).slice(1, 7));
    const randomDataRef = useRef([]);
    Object.entries(radars).map(([key, radar], index) => {
        randomDataRef.current = [];
        Object.values(radar)
            .slice(1, 7)
            .map((value, index) => {
                randomDataRef.current.push((value + 35) * 2);
            });
        datapointszero.push(randomDataRef.current);
    });

    const [deviceChart, setDeviceChart] = useState();
    const devicesData = useRef([]);
    const devicesDataLabels = useRef([]);
    const devicesDatausage = useRef([]);
    const handlDeviceChart = () => {
        Object.values(devices).map((device) => {
            Object.entries(device).map(([key, value]) => {
                devicesData.current.push(value.id);
            });
        });
        Object.values(devices).map((device) => {
            Object.entries(device).map(([key, value]) => {
                devicesDataLabels.current.push(value.type);
            });
        });
        const uniqueValuesIDs = new Set(devicesData.current);
        const uniqueValuesLabels = new Set(devicesDataLabels.current);
        devicesDatausage.current = Array.from(uniqueValuesIDs);
        devicesDataLabels.current = Array.from(uniqueValuesLabels);

        // Assuming devices is an object containing device data
        const deviceKeys = Object.keys(devices[0] || {});
        const categories = deviceKeys.length > 0 ? deviceKeys : [];

        const data = [];
        devicesDataLabels.current.forEach(() => {
            const randomData = Array.from({ length: 6 }, () =>
                Math.floor(Math.random() * 100)
            );
            data.push(randomData);
        });

        const series = datapointszero.map((dataPoints, index) => ({
            name: `${devicesDataLabels.current[index]}`,
            data: dataPoints,
        }));

        datapointszero.map((radarDevice, index) => {
            deviceRadarMapper.current[devicesDatausage.current[index]] =
                radarDevice;
        });
        console.log(deviceRadarMapper);
        const options = {
            options: {
                chart: {
                    height: 500,
                    width: 500,
                    type: "radar",
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1,
                    },
                },
                title: {
                    text: "Devices Radar Chart ",
                },
                stroke: {
                    width: 2,
                },
                fill: {
                    opacity: 0.1,
                },
                markers: {
                    size: 4,
                },
                xaxis: {
                    categories: Object.keys(radars[0]).slice(1, 7),
                },
            },
            series: series,
        };
        const children = (
            <>
                <Chart
                    options={options.options}
                    series={options.series}
                    type="radar"
                />
            </>
        );
        setDeviceChart(children);
    };
    useEffect(() => {
        handlDeviceChart();
    }, []);
    const handlDeviceRadar = (item) => {
        const arr = document.querySelectorAll(".radar");
        currentDeviceID.current = item.target.value;
        deviceRadarMapper.current[item.target.value].map((itsValue, index) => {
            arr[index].checked = itsValue > 70;
        });
    };
    const handlRadarUpdate = (item) => {
        const arr = document.querySelectorAll(".radar");
        const arrt=Array.from(arr);

        currentRadarArr.current=[]
        arrt.map((box)=>{
            currentRadarArr.current.push(box.checked)
        })

        const dataToUpdate=[
            editRadar.current.map((cols,index)=>{return [cols,currentRadarArr.current[index]]})
        ]
        dataToUpdate.push(['device_id',currentDeviceID.current])
        console.log(dataToUpdate);
        post(route('assignToDevice.update',dataToUpdate));
    };
    return (
        <div className=" dark:bg-gray-100 ">
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight dark:text-white">
                        Connected Services
                    </h2>
                }
            >
                <Head title="Connected Services" />
                <div className="bg-gray-100 dark:bg-gray-900 p-4">
                    <h1 className="text-3xl font-bold mb-4 dark:text-white">
                        Connected Services
                    </h1>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-md shadow mb-4  dark:bg-gray-800">
                            <h2 className="text-xl font-bold mb-2 dark:text-white">
                                Connected Services Chart
                            </h2>
                            {deviceChart}
                        </div>
                        <ul className="space-y-2 h-96 relative overflow-y-auto overflow-x-hidden">
                            <li className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                                <ul>
                                    {vehicles &&
                                        vehicles.map((vehicle, index) => (
                                            <li
                                                className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md mt-4"
                                                key={index}
                                            >
                                                <ul>
                                                    <li className="font-bold uppercase dark:text-white">
                                                        {vehicle.name}
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            {devices &&
                                                                Object.entries(
                                                                    devices
                                                                ).map(
                                                                    (
                                                                        [
                                                                            key,
                                                                            device,
                                                                        ],
                                                                        index2
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index2
                                                                            }
                                                                        >
                                                                            <ul>
                                                                                {key ==
                                                                                    vehicle.id &&
                                                                                    Object.values(
                                                                                        device
                                                                                    ).map(
                                                                                        (
                                                                                            device,
                                                                                            Index3
                                                                                        ) => (
                                                                                            <li
                                                                                                key={
                                                                                                    Index3
                                                                                                }
                                                                                                className="text-gray-200  hover:text-gray-900"
                                                                                            >
                                                                                                {
                                                                                                    device.type
                                                                                                }
                                                                                            </li>
                                                                                        )
                                                                                    )}
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                )}
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
                <div className="absolute w-auto h-auto bg-gray-700 right-10 bottom-5">
                    <div className="w-56 h-24 bg-red-500 absolute -left-56 top-10">
                        <select
                            name=""
                            id=""
                            className="w-full"
                            onChange={(e) => {
                                e.preventDefault();
                                handlDeviceRadar(e);
                            }}
                        >
                            {devicesDataLabels.current.map((device, index) => (
                                <option
                                    value={devicesDatausage.current[index]}
                                >{`${device}`}</option>
                            ))}
                        </select>
                    </div>
                    <ul className="p-4">
                        {editRadar.current.map((radar, index) => (
                            <li
                                key={index}
                                className="p-2 capitalize text-gray-300"
                                ref={radarValue}
                            >
                                <input
                                    onChange={(e) => {
                                        handlRadarUpdate(e);
                                    }}
                                    value={radar}
                                    className="mr-2 radar "
                                    type="checkbox"
                                    name=""
                                    id={`radar${index}`}
                                />
                                {`${radar}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};
export default ConnectedServicesIndex;
{
    /**{connection.devices.map((device,index) => (<li key={index}>{device}</li>))} */
}
