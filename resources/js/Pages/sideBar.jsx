import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({ Children, auth, expand }) => {
    const routesArr = ['basic-maintenance', 'car-analytics', 'connected-services', 'reminder-notifications',
        'full-maintenance-suite', 'customizable-maintenance-schedules', 'exclusive-discounts', 'priority-customer-support',
        'priority-customer-support', 'advanced-maintenance-reports']
    const { props } = usePage();
    const servicesRef = useRef();
    servicesRef.current = props.services;
    const [ssi, setSsi] = useState(false);
    useEffect(() => {
    }, [ssi])
    const handlSideBar = () => {
        setSsi((prevState) => !prevState)
    }
    return (
        <>
            {ssi ? (
                <>

                    <aside className="bg-gray-800 text-gray-500 sm:w-56 dark:bg-gray-900 dark:text-gray-300">
                        <nav>
                            <ul className="p-0 mmLi sm:w-56">
                                <li className='px-0 py-0' onClick={handlSideBar}>
                                    <span className='text-white'><FontAwesomeIcon icon={faBars} /></span>
                                </li>
                                {(<>
                                    {servicesRef.current && (servicesRef.current.map((feature, index) =>
                                        <li><Link href={route(`${feature.route}`)}>{feature.name}</Link></li>
                                    ))}

                                </>
                                )}
                                {Children}
                            </ul>
                        </nav>
                        <div className='really-idk mx-auto flex bg-gray-800 dark:bg-gray-900'>
                            <span>
                                <img src="" alt="" />
                            </span>
                            <ul>
                                <li className='bg-gray-800 dark:bg-gray-900 ml-2 py-4 rounded hover:rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 px-12'>
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
    background-color:transparent;
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
                    {(<><aside className="bg-gray-800" >
                        <nav>
                            <ul className="mmLi">
                                <li>
                                    <span className='text-white mx-auto mt-4' onClick={handlSideBar}>
                                        <FontAwesomeIcon icon={faBars} size="lg" />
                                    </span>
                                </li>
                                {servicesRef.current && (servicesRef.current.map((feature, index) =>
                                    <li className='text-white mx-5 mt-4'>
                                    <Link href={route(`${feature.route}`)}>
                                        <FontAwesomeIcon icon={faCog} size="lg" />
                                    </Link>
                                </li>
                                ))}
                                {Children}
                                
                            </ul>
                        </nav>
                        <div className='really-idk mx-auto text-white flex bg-gray-800'>
                            <span>
                                <img src="" alt="" />
                            </span>
                            <ul>
                                <li ><Link href={route('myaccount')}> {auth.user.name}</Link></li>
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