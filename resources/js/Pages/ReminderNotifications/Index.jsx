import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React from 'react';

const ReminderNotificationsIndex = ({auth}) => {

    return (
        <div>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Reminder Notifications</h2>}
            >
                <Head title="Reminder Notifications" />
            </AuthenticatedLayout>
        </div>
    );
};

export default ReminderNotificationsIndex;

