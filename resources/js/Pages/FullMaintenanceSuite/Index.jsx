import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React from 'react';

const FullMaintenanceSuiteIndex = ({auth}) => {

    return (
        <div>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Full Maintenance Suite</h2>}
            >
                <Head title="FullMaintenance Suite" />
            </AuthenticatedLayout>
        </div>
    );
};

export default FullMaintenanceSuiteIndex;
