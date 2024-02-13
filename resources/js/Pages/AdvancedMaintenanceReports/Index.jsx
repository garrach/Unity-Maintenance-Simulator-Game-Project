import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React from 'react';

const AdvancedMaintenanceReportsIndex = ({auth}) => {
    // Your JSX content for the Advanced Maintenance Reports view
    return (
        <div>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Advanced Maintenance Reports Page</h2>}
            >
                <Head title="Advanced Maintenance Reports Page" />
            </AuthenticatedLayout>
        </div>
    );
};

export default AdvancedMaintenanceReportsIndex;
