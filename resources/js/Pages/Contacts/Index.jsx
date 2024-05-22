// resources/js/Pages/Connections/Index.jsx
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useRef, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoll, faTrashAlt, faWifi } from "@fortawesome/free-solid-svg-icons";
const Index = ({ contacts, auth }) => {
    const { data, setData, post, delete: destroy } = useForm({});
    const handleChange = (contact) => {
        const rep = confirm(
            `are you sure you want to delete Contact ?\n about:"${contact.message}"`
        );

        if (rep) {
            destroy(route("contact.delete", contact));
        }
    };

    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Dashboard - {auth.user.role}
                    </h2>
                }
            >
                <Head title="Connection List" />

                <div className="dark:text-white my-4 max-w-7xl mx-auto mt-6 p-6 bg-white dark:bg-gray-800 rounded-md shadow-md">
                    <h1 className="text-3xl font-semibold mb-4">
                        Contacts List
                    </h1>
                    {contacts.length > 0 ? <ul className="space-y-2">
                        {contacts.map((contact, index) => (
                            <li key={index} className="bg-gray-700 p-2">
                                <div className="relative">
                                    <div className="underline font-bold decoration-sky-500">
                                        {contact.name}
                                    </div>
                                    <div>{contact.email}</div>
                                    <div>{contact.message}</div>
                                    <div className="absolute right-0 top-0 flex">
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleChange(contact);
                                            }}
                                        >
                                            <div
                                                className="p-4 hover:bg-gray-300"
                                                title="Delete contact"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrashAlt}
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul> : <h3 className="text-gray-500">No Contacts were found</h3>}

                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Index;
