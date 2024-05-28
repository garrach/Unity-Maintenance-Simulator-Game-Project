import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWifi,
    faToolbox,
    faCog,
    faMedal,
    faChartLine,
    faBars,
    faCoins,
    faBriefcase,
    faTrophy,
    faDatabase,
    faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'; // Import necessary FontAwesome icons
const Sidebar = ({ Children, auth, expand }) => {
    const { props } = usePage();
    const servicesRef = useRef();
    const paindSv = useRef(JSON.parse(atob(props.dataEnc)));
    servicesRef.current = props.services;
    const [ssi, setSsi] = useState(expand);
    const iconMappings = {
        "Basic Maintenance Tracking": faCog,
        "Car Analytics": faChartLine,
        "Connected Services": faWifi,
        "Full Maintenance Suite": faToolbox,
        "Customizable Maintenance Schedules": faCalendarCheck,
        "Priority Customer Support": faDatabase,
        "Coinsystem": faTrophy,
        "JobApplications": faBriefcase,
        "LeaderBoard": faTrophy,
        "Unity Data Monitoring": faChartLine
    };
    const listPaidServices = useRef([]);
    useEffect(() => {
        listPaidServices.current = [];
        Object.entries(paindSv.current.services).map(([key, value]) => { listPaidServices.current.push(value) });
    }, [])
    const iconsList = useRef([]);
    if (servicesRef.current) {
        iconsList.current = servicesRef.current.map((feature, index) => {
            const icon = iconMappings[feature.name]; // Get the icon corresponding to the service name
            return icon ? <FontAwesomeIcon key={index} icon={icon} /> : null; // Return the icon component
        });
    }
    const handlSideBar = () => {
        setSsi((prevState) => !prevState)
    }
    return (
        <>
            {ssi ? (
                <>
                    <aside className="dark:text-white glass-container text-gray-800 sm:w-56 ">
                        <nav>
                            <ul className="p-0 mmLi sm:w-56 ">
                                <li className='px-0 py-0' onClick={handlSideBar}>
                                    <span className='text-white'><FontAwesomeIcon icon={faBars} /></span>
                                </li>
                                {servicesRef.current && (servicesRef.current.map((feature, index) =>
                                    <li key={index}>
                                        <Link href={route(`${feature.route}`)}>
                                            <span>
                                                {feature.name}
                                            </span>
                                            {Object.values(listPaidServices.current).map((value,index2) => (
                                                feature.name === value.name ? <div key={index2}>
                                                    <span style={{ padding: '4px', fontSize: '11px' }} className='ml-2 uppercase rounded bg-orange-500' >purchased</span>
                                                </div> : ''
                                            ))}
                                        </Link>
                                    </li>
                                ))}
                                <li><Link href={route('subservices.viewPlans')} id='pop'>Purchase service</Link></li>
                                <li><Link href={route('contact')} id='pop'>Customer Support</Link></li>
                                {auth.user.role === "admin" &&
                                    Children}
                            </ul>
                        </nav>
                        <div className='really-idk mx-auto flex'>
                            <span>
                                <img src="" alt="" />
                            </span>
                            <ul>
                                <li className='ml-2 py-4 rounded hover:rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 px-12'>
                                    <Link href={route('myaccount')}>{auth.user.name}</Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <style>
                        {`
        .really-idk{
    width: auto;
    position: fixed;
    height: 7rem;
    color:white;
    cursor:pointer;
    bottom: 0;
}
    .menu-content{
    width:100%;
    height:auto;
    background-color:transparent;
    }
    .mmLi li{
    display:flex;
    width:100%;
    height:auto;
    padding:20px;
    transition: all 300ms ease;
    }
    .mmLi ul{
    width:100%;
    height:auto;
    }
    .mmLi ul:hover{
    width:100%;
    height:auto;
    }
    .mmLi li:hover{
    background-color:black;
    color:white;
    cursor:pointer;
    }`}
                    </style>
                </>) : (
                <>
                    {(<><aside className="glass-container bg-gray-900" >
                        <nav>
                            <ul className="mmLi ">
                                <li>
                                    <span className='text-white mx-auto mt-4' onClick={handlSideBar}>
                                        <FontAwesomeIcon icon={faBars} size="lg" />
                                    </span>
                                </li>
                                {servicesRef.current && servicesRef.current.map((feature, index) => (
                                    <li key={index} className='text-white mx-5 mt-4'>
                                        <Link href={route(`${feature.route}`)}>
                                            {iconsList.current[index]} {/* Display the corresponding icon from the dynamic iconsList */}
                                        </Link>
                                    </li>
                                ))}
                                {auth.user.role === "admin" &&
                                    Children}
                            </ul>
                        </nav>
                        <div className='really-idk mx-auto text-white flex'>
                            <span>
                                <img src="" alt="" />
                            </span>
                            <ul>
                                <li><Link href={route('myaccount')}> {auth.user.name}</Link></li>
                            </ul>
                        </div>
                    </aside></>)}
                    <style>
                        {`
                aside{
                    width:100%;
                    overflow:hidden;
                    padding-bottom:5rem;
                    color:#1f2937;
                }
                .really-idk{
                    width: 4rem;
                    position: fixed;
                    padding:0;
                    text-wrap: wrap;
                    height: 5rem;
                    cursor:pointer;
                    bottom: 0;
                    }
                    .menu-content{
                        width:100%;
                        height:auto;
                        background-color:transparent;
                        overflow:hiddin;
                    }
                    .mmLi li{
                        display:flex;
                        width:100%;
                        height:auto;
                        padding:10px;
                        overflow:hiddin;
                        background-color:transparent;
                        transition: all 300ms ease;
                    }
                    .mmLi ul{
                        width:100%;
                        height:auto;
                        overflow:hiddin;
                    }
                    .mmLi ul:hover{
                        width:100%;
                        height:auto;
                    }
                    .mmLi li:hover{
                        background-color:black;
                        color:#1f2937;
                        cursor:pointer;
                    }`}
                    </style>
                </>)}
        </>
    )
}
export default Sidebar
