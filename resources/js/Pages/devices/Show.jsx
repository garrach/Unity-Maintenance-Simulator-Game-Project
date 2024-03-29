// resources/js/Pages/devices/Show.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode.react';
import { useForm } from '@inertiajs/react';
import StarsReview from '../StarsReview';

const Show = ({ device, purchase, auth }) => {
  const [formatData, setFormatData] = useState('');
  const canvasRef = useRef(null);
  const [requestSent, setRequestSet] = useState(false);
  const purchased = (purchase !== null && purchase.stat);
  const installded = device.installation_date;


  const { data, setData, post, processing } = useForm({
    device: device,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDevieRequest();
  };

  useEffect(() => {
    Object.entries(device).map(([key, value], index) => {
      setFormatData((formatData) => [...formatData, key +" : "+ value + "\n"]);
    })
  }, [device])

  function formatedData(data) {
    let ready = "Device:\n";
    data.forEach(element => {
      ready += "\n" + element;
    });
    return ready;
  }
  useEffect(() => {
    canvasRef.current = document.getElementsByTagName('canvas')[0];
  })
  const handleDownload = (name) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const dataUrl = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = name + '.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDevieRequest = () => {
    setRequestSet(true);
    setTimeout(() => {
      setRequestSet(false);
      post(route('requestDevice.store', { device_id: data.device.id, user_id: auth.user.id }));
    }, 2000)
    console.log(device)
  }

  const stars = useRef();
  const comment = useRef();
  const handleSubmitFeedBack = (e) => {
    e.preventDefault();
    // Extract the device ID from data
    const deviceId = data.device.id;

    // Extract the review and comment data
    const reviewData = { rate: stars.current, device_id: deviceId };
    const commentData = { text: comment.current, device_id: deviceId };

    // Create an array of promises for both review and comment requests
    const requests = [
        post(route('reviews.store', reviewData)),
        post(route('comments.store', commentData))
    ];

    // Execute both requests in parallel
    Promise.all(requests)
        .then(() => {
            // Both requests completed successfully
            setRequestSet(true);

            console.log('Review and comment posted successfully.');
            setTimeout(() => {
              setRequestSet(false);
              window.location.href='/dashboard'
            }, 2000);
        })
        .catch((error) => {
            // Handle errors if any request fails
            console.error('Error:', error);
            setRequestSet(false);
            // Optionally display an error message to the user
        });
};


  const handleFeedBackStars = (selectedStars) => {
    stars.current = selectedStars;
  }
  const handleFeedBack = (e) => {
    e.preventDefault();
    comment.current = e.target.value;
  }
  return (
<div className="dark:text-white">
  <AuthenticatedLayout
    user={auth.user}
    header={
      <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
        Dashboard - {auth.user.role}
      </h2>
    }
  >
    {requestSent && (
      <div className="relative text-center bg-green-500 text-white p-4 mx-auto rounded">
        Request Sent
      </div>
    )}
    <div className="max-w-full mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md mb-4 transition duration-300 ease-in-out transform hover:shadow-lg ">
      <h1 className="text-3xl font-bold mb-4">Device Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-content-center">
        {/* Side for QR code and download button */}
        <div className="flex flex-col justify-center items-center md:items-start ml-32">
          <div className="border flex justify-center bg-gray-100 p-4 rounded-lg hover:scale-105">
            {formatData && <QRCode value={formatedData(formatData)} renderAs="canvas" />}
          </div>
          <button
            className="block mt-4 ml-6 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-md"
            onClick={(e) => { e.preventDefault(); handleDownload(device.serial_number) }}
          >
            Download
          </button>
        </div>

        {/* Side for device details */}
        <div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <ul className="space-y-4">
              <li className="text-lg font-semibold">{`Serial Number: ${device.serial_number}`}</li>
              <li className="text-lg font-semibold">{`Type: ${device.type}`}</li>
              <li>
                {auth.user.role === "admin" || (purchased && installded && auth.user.role === "client") ? (
                  <p className="text-sm text-gray-600 dark:text-gray-400">{`Installation Date: ${device.installation_date}`}</p>
                ) : (
                  <>
                    {(auth.user.role === "client" && (!installded && purchased)) || (auth.user.role === "employee" && !installded) ? (
                      <p className="text-sm text-gray-600 dark:text-gray-400">Installation pending..</p>
                    ) : (
                      <>
                        {(auth.user.role === "employee" && installded) || (auth.user.role === "client" && (installded && purchased)) ? (
                          <p className="text-sm text-gray-600 dark:text-gray-400">{`Installation Date: ${device.installation_date}`}</p>
                        ) : (
                          <p className="text-sm text-gray-600 dark:text-gray-400">Device Price : $...</p>
                        )}
                      </>
                    )}
                  </>
                )}
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <form onSubmit={handleSubmitFeedBack}>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="rate" className="text-gray-700 dark:text-gray-400">Review:</label>
                <StarsReview totalStars={5} onStarClick={handleFeedBackStars} />
                <input onChange={handleFeedBack} className="px-3 dark:text-gray-900 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:focus:ring-gray-500" type="text" name="comment" id="comment" />
                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-indigo-600 rounded-md shadow-md">
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Request Button */}
      <div className="mt-6">
        <form onSubmit={handleSubmit} className='flex justify-center'>
          <button className='absolute top-6 right-6 p-2 dark:text-white hover:bg-green-500 bg-orange-500 uppercase rounded'>
            Request
          </button>
        </form>
      </div>


    </div>
    <style>
      {`
        .slide-down {
          animation: slideDown 0.5s ease-in;
        }
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}
    </style>

    <div className="mt-8">
  <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Device Description
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            Config
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-800">
        {/* Replace the following tr elements with your data */}
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Connector Type</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{device.connectorType}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Included Components </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{device.includedComponents}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Color</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{device.color}</td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Mounting Type</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{device.mountingType}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


  </AuthenticatedLayout>
</div>


  );
};

export default Show;
