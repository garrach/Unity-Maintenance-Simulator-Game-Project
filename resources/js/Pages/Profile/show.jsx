import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import AlertDialog from '@/Components/AlertDialog';

const Show = ({ userID }) => {
    const { props } = usePage();
    const carDetails = { make: "(N/A)", model: "(N/A)", year: "(N/A)" };
    const colors = ['blue', 'green', 'red', 'yellow'];

    const selectdRrole=useRef();
    const RroleAccpt=useRef(false);
    const[showDialog,setshowDialog]=useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        role: 'client',
    });
    const {data,setData,patch:update}=useForm({
        user:userID,
        role:'client',
        approval:true,
    });
    const encryptedData = btoa(userID);
    const handluserinfo = (userName, userEmail, userRole) => {
        useEffect(() => {
            setUserInfo({
                name: userName,
                email: userEmail,
                role: userRole,
            }
            )
        }, [])
    }

    const selectARole=(e)=>{
        e.preventDefault();
        setshowDialog(true);
    }
    const onClose=()=>{
        setshowDialog(false);

    }
    const onChange=(e)=>{
        e.preventDefault();
        setData(e.target.name,e.target.value)
    }

    const submitApproval=(e)=>{
        e.preventDefault();
        RroleAccpt.current=true;
        update(route('role.update', { data: data }))

    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">User Account</h2>}
        >
            <Head title="My Account" />
            <ul className='bg-red-500 mx-auto'>{userID.map((user, index) => (

                <li key={index}>{handluserinfo(userID[1], userID[2], userID[3])}</li>

            ))
            }
            </ul>



            <div className="container mx-auto mt-6 p-6 bg-white dark:text-white dark:bg-gray-800 rounded-md shadow-md">

                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-4">{props.qt}</h1>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-6">
                    <h2 className="text-lg font-bold mb-4">User Profile Information</h2>

                    <p className="mb-2"><strong>Name:</strong> {userInfo.name}</p>
                    <p className="mb-2"><strong>Email:</strong> {userInfo.email}</p>

                    <div className="flex flex-wrap">

                        {userInfo.role && (
                            <div className={`bg-${userInfo.role} text-white px-12 py-1 rounded-full mr-2 mb-2`}>
                                {userInfo.role}
                            </div>

                        )

                        }


                        {props.auth.user.role === "admin" && (<>
                            
                                <span onClick={selectARole} className='cursor-pointer text-white bg-gray-900 hover:dark:bg-orange-500 hover:bg-orange-500 px-4 py-1 rounded-full mb-2'>add Role</span>
                            </>)}
                            {showDialog && (<><AlertDialog title={userInfo.name} message='Add Role' onClose={onClose}>
                                <form onSubmit={submitApproval}>
                                    <label htmlFor="" className='text-gray-800 w-fit'>{userInfo.name}: Role {userInfo.role}</label>
                                    <select name='role' onChange={(e)=>{onChange(e)}} value={data.role} className='text-gray-800' required>
                                        <option className='text-gray-800' value='guest'>select a role</option>
                                        <option className='text-gray-800' value='client'>Client</option>
                                        <option className='text-gray-800' value='employee'>Employee</option>
                                        <option className='text-gray-800' value='admin'>Admin</option>
                                    </select>
                                    
                                    <button className='text-gray-800 m-12'>Grant</button>
                                </form>
                                </AlertDialog></>)}

                    </div>
                </div>


                <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md mb-6">
                    <h2 className="text-lg font-bold mb-4">Car Details</h2>
                    <p className="mb-2"><strong>Make:</strong> {carDetails.make}</p>
                    <p className="mb-2"><strong>Model:</strong> {carDetails.model}</p>
                    <p className="mb-2"><strong>Year:</strong> {carDetails.year}</p>
                </div>

                <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-lg font-bold mb-2">Maintenance History</h2>
                    <p>This section could display service records and reminders.</p>
                </div>

                <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-lg font-bold mb-2">Dashboard and Analytics</h2>
                    <p>This section could display mileage tracking, fuel efficiency, and maintenance costs.</p>
                </div>

                <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-lg font-bold mb-2">App Preferences</h2>
                    <p>This section could allow users to customize notification settings and app preferences.</p>
                </div>

                {props.auth.user.role === "admin" && (<>
                    <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                        <h2 className="text-lg font-bold mb-2">Security</h2>
                        <p>This section could allow users to change passwords and enable 2FA.</p>
                    </div>

                    <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                        <h2 className="text-lg font-bold mb-2">Support and Help</h2>
                        <p>This section could display FAQs, a help center, and contact support information.</p>
                    </div>

                    <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                        <Link href={route('userAccount.edit', { id: encryptedData })}><h2 className="text-lg font-bold mb-2">Logout and Account Deactivation</h2></Link>
                        <p>This section could include a logout button and an option for account deactivation.</p>
                    </div></>)}

                <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-lg font-bold mb-2">Connected Services</h2>
                    <p>This section could involve integration with auto repair shops or other connected services.</p>
                </div>

                <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
                    <h2 className="text-lg font-bold mb-2">Legal and Privacy</h2>
                    <p>This section could include links to terms of service and the privacy policy.</p>
                </div>
            </div>
            <style>
                {`
                .bg-admin{
                    background-color:blue;
                }
                .bg-client{
                    background-color:red;
                }
                .bg-employee{
                    background-color:green;
                }
                .bg-guest{
                    background-color:yellow;
                }
                
                `}
            </style>
        </AuthenticatedLayout>

    )
}
export default Show;
