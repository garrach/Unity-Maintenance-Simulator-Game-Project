import React, { useEffect, useRef, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import jsPDF from 'jspdf';

const FullMaintenanceSuiteIndex = ({ auth, maintenanceTasksz }) => {
  const setMaintenanceOne = useRef();
  const [users, setUsers] = useState();
  const [DataMain, setDataMain] = useState([{}]);

  const { post } = useForm();

  const pdfUnit = 71;

  const pdfUnitInPixels = pdfUnit * (96 / 72);

  const generateReport = () => {
    const reportData = {
      scheduledTasks: setMaintenanceOne.current,
    };

    // Create a new PDF document
    const pdfDoc = new jsPDF();

    // Set font and style for the title
    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(18);
    pdfDoc.setTextColor(44, 62, 80); // Dark blue color
    pdfDoc.text('Maintenance Report', 20, 20);

    pdfDoc.setFont('helvetica', 'bold');
    pdfDoc.setFontSize(11);
    pdfDoc.setTextColor(44, 62, 80); // Dark blue color
    pdfDoc.text(auth.user.name, pdfUnitInPixels * 2 - 20, 20);

    // Add a horizontal line below the title
    pdfDoc.setLineWidth(0.5);
    pdfDoc.line(20, 25, 190, 25);

    // Set font and style for section headers
    pdfDoc.setFont('helvetica', 'normal');
    pdfDoc.setFontSize(14);

    // Example: Display scheduled tasks
    pdfDoc.setTextColor(52, 73, 94); // Dark gray color
    pdfDoc.text('Scheduled Tasks', pdfUnit / 4, pdfUnit - 30);
    Object.entries(reportData.scheduledTasks).map(([key, task], index) => {
      Object.values(task).map(item => {
        pdfDoc.text(`${index + 1}. Device: ${item.device.map(dv => (dv.type))}, Task: ${(item.task) ? item.task.map(title => (title.title)) : 'DONE'}, Status: ${item.status}`, pdfUnit / 5, (pdfUnit - 20) + index * 10);
      })
    });


    // Save or open the PDF
    pdfDoc.save('Maintenance_Report.pdf');
  };

  const handleTaskAction = (taskId, action) => {
    console.log(`Task ${taskId} ${action}`);
    post(route('markAsComplete', { id: taskId }))
  };
  useEffect(() => {
    const parsedData = JSON.parse(maintenanceTasksz);
    setUsers(Object.keys(parsedData));
    setMaintenanceOne.current = Object.values(parsedData);

    setMaintenanceOne.current.map((userData) => {
      Object.values(userData).map((values) => {
        setDataMain(prevData => [...prevData, values]);
      })
    })

    return () => {
      setDataMain(null);
    }
  }, [])
  return (
    <div>
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Full Maintenance Suite</h2>}
      >
        <Head title="Full Maintenance Suite" />
        <div className="my-4 p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Welcome to the Full Maintenance Suite</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Scheduled Maintenance</h2>

            {setMaintenanceOne.current && DataMain.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">No scheduled maintenance tasks found.</p>
            ) : (
              <ul className="space-y-4">
                {/*setMaintenanceOne.current && DataMain.map((userMaintainanceInfo, index) => {
                  console.log(userMaintainanceInfo.status)
                })*/}
                {setMaintenanceOne.current && DataMain.map((task, index) => (

                  task.device && task.device.map((dv) => (<>
                    <h3 className='uppercase text-2xl dark:text-white text-gray-800'>{users[index+1]}</h3>
                    <li key={task.purchase_id} className={`bg-${task.status === 1 ? 'green-100' : 'yellow-100'} dark:bg-${task.status === 1 ? 'green-700' : 'yellow-700'} p-4 rounded-md shadow-md flex items-center justify-between`}>
                      <div>
                        <h3 className={`text-lg font-semibold mb-2 ${task.status === 1 ? 'dark:text-orange-600' : 'dark:text-gray-500'}`}>{dv.type}</h3>
                        <p className={`text-sm text-gray-500 ${task.status === 1 ? 'line-through' : ''}`}>{task.status === 1 ? 'Completed' : 'Scheduled'}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleTaskAction(task.purchase_id, 'complete')}
                          className={`text-white px-3 py-1 rounded bg-${task.status === 1 ? 'gray' : 'green'}-500 hover:bg-${task.status === 1 ? 'gray' : 'green'}-600`}
                          disabled={task.status === 'completed'}
                        >
                          Mark as Complete
                        </button>
                      </div>
                    </li>
                  </>
                  ))
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Generate Maintenance Report</h2>
            <button
              onClick={generateReport}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Generate Report
            </button>
          </section>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default FullMaintenanceSuiteIndex;
