// DashboardElements.jsx

import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

const DashboardCard = ({ number, icon, children ,span,margin}) => {
    return (
        <>
        {span ? (<> <div className={`bg-white p-4 rounded-md shadow py-3 dark:bg-gray-900  border-indigo-500 border-b-4 border-l-4  dark:text-white   ${margin}`}>
            <div className="flex items-center mb-4  mx-auto dark:border-gray-100 ">
            {icon && <span className="text-xl"><img alt=".." /></span>}
            <span className="text-3xl">{number}</span>
            </div>

            <h2>new items</h2>
            <div>{children}</div>
        </div></>):(<> <div className="bg-white p-4 rounded-md dark:bg-gray-900 dark:text-white shadow py-3">
            <div className="flex items-center mb-4  mx-auto dark:border-gray-100">
            {icon && <span className="text-xl"><img alt=".."/></span>}
            <span className="text-3xl">{number}</span>
            </div>
            <h2>new items</h2>

            <div>{children}</div>
        </div></>)}
        </>
     
    );
  };



const MainContent = ({ children }) => {


    return (
        <main className="flex-2 p-4">
            <div className="grid grid-cols-4 gap-4 content-center m-md-n4">
              <DashboardCard number="74.89b" icon="ic_glass_buy.png" span={true} margin="col-span-3 row-span-2">
                <div className='py-12'>00000000000000000000000000000</div>
              </DashboardCard>
              <DashboardCard number="2" icon="ic_glass_users.png" span={false} />
              <DashboardCard number="15m" icon="ic_glass_message.png" span={false} />
              <DashboardCard number="188k" icon="ic_glass_buy.png" span={false} />
              <DashboardCard number="71.9k" icon="ic_glass_buy.png" span={false} />
              <DashboardCard number="32.5k" icon="ic_glass_buy.png" span={false} />
              <DashboardCard number="41.5k" icon="ic_glass_buy.png" span={false} />
              <DashboardCard number="302.5k" icon="ic_glass_buy.png" span={true} margin="col-span-2"/>
              <DashboardCard number="92.5k" icon="ic_glass_buy.png" span={false} />
              <DashboardCard number="57.5k" icon="ic_glass_buy.png" span={false} />
              { children }
            </div>
        </main>
    );
};

const DashboardElements = ({ children }) => {
    return (
            <MainContent>
               { children }
            </MainContent>
    );
};

export default DashboardElements;
