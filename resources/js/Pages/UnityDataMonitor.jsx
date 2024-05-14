import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Analytics from './Dashboard/Analytics';
import { useDynamicContext } from './DynamicContext';
import { serverResponse } from './client.cjs'

const UnityDataMonitor = ({ auth }) => {
  const { dynamicValues, updateValues } = useDynamicContext();
  const webSocket = dynamicValues.socket;
  
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> Maintenance monitor</h2>}
    >
      {console.log(serverResponse)}
      <Head title="Maintenance monitor" />
      <Link href='#' className='dark:text-gray-200 p-2 fixed right-5 bottom-10 hover:rounded bg-orange-500 opacity-75 hover:opacity-100 hover:drop-shadow-xl'>Refresh monitor</Link>
      <Analytics webSocket={webSocket} stat={true} auth={auth} />
      <Analytics webSocket={webSocket} stat={false} auth={auth} />
    </AuthenticatedLayout>
  );
};
export default UnityDataMonitor;
