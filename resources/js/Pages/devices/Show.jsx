// resources/js/Pages/devices/Show.jsx
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode.react';
const Show = ({ device, auth }) => {
  const [formatData,setFormatData]=useState('');
  const canvasRef = useRef(null);

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
        <div className="my-4 w-fit mx-auto">
          <h1 className="text-2xl font-semibold mb-4">Device Details</h1>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-2"></p>
              <ul>
                <li>
                {`serial_number: ${device.serial_number} `}
                </li>
                <li>
                {`type: ${device.type}`}
                </li>
                <li>
                {`installation_date: ${device.installation_date}`}
                </li>
              </ul>
              
              {formatData && (
              <ul>
                <li className='mx-auto border flex justify-center p-4'><QRCode value={formatedData(formatData)} renderAs="canvas" /></li>
                <li><button className='p-2 text-white hover:bg-green-500 bg-blue-500 uppercase mt-4 rounded' onClick={(e)=> {e.preventDefault();handleDownload(device.serial_number)}}>download</button></li>
              </ul>
              )}
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Show;
