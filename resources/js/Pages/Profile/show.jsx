import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import AlertDialog from '@/Components/AlertDialog';
import CryptoJS from 'crypto-js';
import SendMessage from './SendMessage';
const Show = ({ userID, encryptedDataDetails }) => {
  const { props } = usePage();
  const carDetails = { make: "(N/A)", model: "(N/A)", year: "(N/A)" };
  const colors = ['blue', 'green', 'red', 'yellow'];
  const decData = useRef({});

  const [userHistory, setUserHistory] = useState();


  const decryptUserData = (encryptedDataDetails) => {
    try {
      decData.current = atob(encryptedDataDetails);
      return decData.current;
    } catch (error) {
      console.error('Decryption failed:', error);
      return null;
    }
  };
  const selectdRrole = useRef();
  const RroleAccpt = useRef(false);
  const [showDialog, setshowDialog] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    email: '',
    role: 'client',
  });

  const { data, setData, patch: update } = useForm({
    user: userID,
    role: 'client',
    approval: true,
  });
  const encryptedData = btoa(userID);
  const handluserinfo = (id, userName, userEmail, userRole) => {
    useEffect(() => {
      setUserInfo({
        id: id,
        name: userName,
        email: userEmail,
        role: userRole,
      }
      )
    }, [])
  }
  const selectARole = (e) => {
    e.preventDefault();
    setshowDialog(true);
  }
  const onClose = () => {
    setshowDialog(false);
  }
  const onChange = (e) => {
    e.preventDefault();
    setData(e.target.name, e.target.value)
  }
  const submitApproval = (e) => {
    e.preventDefault();
    RroleAccpt.current = true;
    update(route('role.update', { data: data }))
  }
  const DataManager = useRef();
  async function orgnizeData() {
    decData.current = await JSON.parse(decryptUserData(encryptedDataDetails));
    return await decData.current;
  }
  useEffect(() => {
    async function fetchJsonRAw() {
      const userData = await orgnizeData();
      setUserHistory(userData)
    }
    fetchJsonRAw();
  }, [])
  const [showInbox, setShowInbox] = useState(false);
  const toggleInbox = (e) => {
    e.preventDefault();
    setShowInbox(!showInbox)
  }
  return (
    <AuthenticatedLayout
      user={props.auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">User Account</h2>}
    >
      <Head title="My Account" />
      <ul className='bg-red-500 mx-auto'>{userID.map((user, index) => (
        <li key={index}>{handluserinfo(userID[0], userID[2], userID[3], userID[4])}</li>
      ))
      }
      </ul>
      <div className="container mx-auto mt-6 p-6 bg-white dark:text-white dark:bg-gray-800 relative rounded-md shadow-md">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">{props.qt}</h1>
        </div>
        <div onClick={(e) => toggleInbox(e)} className='absolute flex top-30 rounded-md shadow-md right-5 w-56 h-12 dark:bg-gray-200 justify-center items-center justify-around dark:text-gray-800'>
          <span className='cursor-pointer'>Message</span>
        </div>
        {showInbox && <SendMessage sender={props.auth.user.id} recipient={userInfo.id} action={toggleInbox}/>}
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
            {showDialog && (<><AlertDialog title={userInfo.name} message='Add Role' addRole={onClose}>
              <form onSubmit={submitApproval}>
                <label htmlFor="" className='text-gray-800 w-fit'>{userInfo.name}: Role {userInfo.role}</label>
                <select name='role' onChange={(e) => { onChange(e) }} value={data.role} className='text-gray-800' required>
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
        <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
          <h2 className="text-lg font-bold mb-2">Maintenance History</h2>
          <ul>
            {userHistory && Object.values(userHistory.devices).map((item, index) => (
              <li key={index}>
                {`item purchase: ${item.type}`}
              </li>
            ))}
          </ul>
        </div>
        {props.auth.user.role === "admin" && (<>

          <div className="dark:bg-gray-800 bg-white p-4 rounded shadow-md mb-4">
            <Link href={route('userAccount.edit', { id: encryptedData })}><h2 className="text-lg font-bold mb-2">Logout and Account Deactivation</h2></Link>
            <p>This section could include a logout button and an option for account deactivation.</p>
          </div></>)}

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
