import React, { useEffect, useRef, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { PDFViewer } from '@react-pdf/renderer';
import FullMaintenancePDF from './FullMaintenancePDF';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar} from '@fortawesome/free-solid-svg-icons';
const FullMaintenanceSuiteIndex = ({ auth, maintenanceTasksz, Vehicles }) => {
  const [data, setData] = useState({ rep: '', user: '' });
  const [printReport, setPrintReport] = useState(false);
  const setMaintenanceOne = useRef();
  const [users, setUsers] = useState();
  const [DataMain, setDataMain] = useState([]);
  const { post } = useForm();
  const [registredVH, setregistredVH] = useState([]);
  const [selectedVH, setSelectedVH] = useState(null);
  useEffect(() => {
    setregistredVH(JSON.parse((atob(Vehicles))))
  }, [])
  const handleSelectedVH = (e, vh) => {
    e.preventDefault();
    setSelectedVH(vh);
  }
  const handleTaskAction = (taskId, action) => {
    post(route('markAsComplete', { id: taskId, VID: selectedVH ? selectedVH.id : 11 }))
  };
  useEffect(() => {
    const parsedData = JSON.parse(atob(maintenanceTasksz));
    setUsers(Object.keys(parsedData));
    setMaintenanceOne.current = Object.values(parsedData);
    setMaintenanceOne.current.map((userData) => {
      Object.values(userData).map((values) => {
        setDataMain(prevData => prevData && [...prevData, values]);
      })
    })
    return () => {
      setDataMain(null);
    }
  }, [])
  let fps = 0;
  function smoothScroll(frame) {
    window.scrollTo(0, window.scrollY - (frame * 0.01));
    fps = requestAnimationFrame(smoothScroll)
    if (window.scrollY === 0)
      cancelAnimationFrame(fps)
  }
  const PrintReport = (id) => {
    setPrintReport(!printReport);
    requestAnimationFrame(smoothScroll)
  };
  useEffect(() => {
    setData({ rep: { title: 'Full Maintenance Suite', dataMain: DataMain }, user: auth.user })
  }, [setMaintenanceOne.current])
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    if (DataMain && DataMain.length > 0) {
      const filteredTasks = DataMain.filter(task => {
        // Check if the user's name includes the search term
        return task.user && task.user.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredTasks(filteredTasks);
    }
  }, [DataMain, searchTerm]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Full Maintenance Suite</h2>}
      >
        <Head title="Full Maintenance Suite" />
        {printReport && <PDFViewer width={window.innerWidth - 20} height={window.innerHeight}>
          <FullMaintenancePDF data={data} />
        </PDFViewer>}
        <div className="my-4 p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-md">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Scheduled Maintenance</h2>
            {(auth.user.role === "admin" || auth.user.role === "employee") && <div className="mb-4">
              <input
                type="text"
                placeholder="Search Client..."
                value={searchTerm}
                onChange={handleSearch}
                className="border p-2 w-full dark:text-gray-800"
              />
            </div>}
            <div className='relative h-32'>
              <h4>
              <FontAwesomeIcon icon={faCar} /><span className='ml-2 font-bold uppercase'>Registred Cars</span>
                
                </h4>
              <ul className='flex'>
                {registredVH.length > 0 && registredVH.map((vehicle, index) => (
                  <li key={index}>
                    <div className='flex p-4 justify-center items-center'>
                      <input
                        type="radio"
                        name="VID"
                        className='outline-none select-none border-0'
                        id={`VID${index}`}
                        value={vehicle.id}
                        onChange={(e) => { handleSelectedVH(e, vehicle) }}
                      />
                      <label htmlFor={`VID${index}`} className='ml-2 select-none cursor-pointer hover:underline decoration-sky-500'>{vehicle.make}</label>
                    </div>
                  </li>
                ))}
                {console.log(selectedVH)}
              </ul>
            </div>
            {setMaintenanceOne.current && filteredTasks.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No scheduled maintenance tasks found.</p>
            ) : (
              <ul className="space-y-4">
                {/*setMaintenanceOne.current && DataMain.map((userMaintainanceInfo, index) => {
                })*/}
                {setMaintenanceOne.current && filteredTasks.map((task, index) => (
                  task.device && task.device.map((dv, indexer) => (<div key={index}>
                    <h3 className='uppercase text-2xl dark:text-white text-gray-800'>{`${task.user.name} : ${task.user.role}`}</h3>
                    <li key={indexer} className={`bg-${task.status === 1 ? 'green-100' : 'yellow-100'} dark:bg-${task.status === 1 ? 'green-700' : 'yellow-700'} p-4 rounded-md shadow-md flex items-center justify-between`}>
                      <div>
                        <h3 className={`text-lg font-semibold mb-2 ${task.status === 1 ? 'dark:text-orange-600' : 'dark:text-gray-500'}`}>{dv.type}</h3>
                        <p className={`text-sm text-gray-500 ${task.status === 1 ? 'line-through' : ''}`}>{task.status === 1 ? 'Completed' : 'Scheduled'}</p>
                      </div>
                      {(auth.user.role === "admin" || auth.user.role === "employee") && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleTaskAction(task.purchase_id, 'complete')}
                            className={`text-white px-3 py-1 rounded bg-${task.status === 1 ? 'gray' : 'green'}-500 hover:bg-${task.status === 1 ? 'gray' : 'green'}-600`}
                            disabled={task.status === 'completed'}
                          >
                            Mark as Complete
                          </button>
                        </div>
                      )}
                    </li>
                  </div>
                  ))
                ))}
              </ul>
            )}
          </section>
          {(auth.user.role == "admin" || auth.user.role == "employee") &&
            <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              onClick={(e) => { e.preventDefault(); PrintReport() }}
            >
              Generate Report
            </button>}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};
export default FullMaintenanceSuiteIndex;
