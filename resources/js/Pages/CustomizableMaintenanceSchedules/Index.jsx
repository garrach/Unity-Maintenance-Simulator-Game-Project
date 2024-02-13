import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React from 'react';

const CustomizableMaintenanceSchedulesIndex = ({auth}) => {

    return (
        <div>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Customizable Maintenance Schedules</h2>}
            >
                <Head title="Customizable Maintenance Schedules" />
            </AuthenticatedLayout>
        </div>
    );
};

export default CustomizableMaintenanceSchedulesIndex;
