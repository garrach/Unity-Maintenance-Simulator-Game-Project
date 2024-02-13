import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import React from 'react';

const ExclusiveDiscountsIndex = ({auth}) => {

    return (
        <div>

            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Exclusive Discounts</h2>}
            >
                <Head title="Exclusive Discounts" />
            </AuthenticatedLayout>
        </div>
    );
};

export default ExclusiveDiscountsIndex;
