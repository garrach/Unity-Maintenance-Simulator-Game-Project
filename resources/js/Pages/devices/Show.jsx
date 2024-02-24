// resources/js/Pages/devices/Show.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode.react';

const Show = ({ device, auth }) => {
  const [formatData,setFormatData]=useState('');
  const canvasRef = useRef(null);
  const purchased=false;
  const installded=false;
useEffect(()=>{
  Object.entries(device).map((elemnt,index)=>{
    setFormatData((formatData)=>[...formatData, index+" : "+elemnt+"\n"]);
  })
},[device])

function formatedData(data){
  let ready="Devices:\n";
  data.forEach(element => {
    ready +="\n"+element;
  });
return ready;
}
useEffect(()=>{
  canvasRef.current = document.getElementsByTagName('canvas')[0];
})
const handleDownload = (name) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext('2d');

  const dataUrl = canvas.toDataURL('image/png');

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = name+'.png';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
   
  return (
    <div className='dark:text-white'>
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard - {auth.user.role}
        </h2>
      }
    >
      <div className="my-4 max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md mb-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
        <h1 className="text-2xl font-semibold mb-4">Device Details</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
          <ul className="space-y-4">
            <li className="text-lg font-semibold">{`Serial Number: ${device.serial_number}`}</li>
            <li className="text-lg font-semibold">{`Type: ${device.type}`}</li>
            <li>
            {auth.user.role==="admin" || (purchased && installded && auth.user.role==="client" ) ? (<>
                      <p className="text-sm text-gray-500">{`Installation Date: ${device.installation_date}`}</p>
                      <p className="text-sm text-gray-500">{`Device Price : $...`}</p>
                    </>):(<>
                    {(auth.user.role==="client" && (!installded && purchased)) || (auth.user.role==="employee" && !installded) ? (<>
                      <p className="text-sm text-gray-500">{`Installation pending..`}</p>
                    </>):(<>
                    {(auth.user.role==="employee" && installded) || (auth.user.role==="client" && (installded && purchased)) ?(<>
                      <p className="text-sm text-gray-500">{`Installation Date: ${device.installation_date}`}</p>
                    </>):(<>
                  
                      <p className="text-sm text-gray-500">{`Device Price : $...`}</p>
                    </>)}
                    </>)}
                    </>)}
            </li>
          </ul>
  
          {formatData && (
            <div className="mt-6">
              <div className='border flex justify-center p-4'>
                <QRCode value={formatedData(formatData)} renderAs="canvas" />
              </div>
              <button
                className='p-2 text-white hover:bg-green-500 bg-blue-500 uppercase mt-4 rounded'
                onClick={(e) => { e.preventDefault(); handleDownload(device.serial_number) }}
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  </div>
  
  );
};

export default Show;
