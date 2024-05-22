import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faCoins,
    faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

const Contact = ({ successMessage, auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });
    const [validSub, setValidSub] = useState(false);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidSub(true);
        if (data.name !== "") {
            setTimeout(() => {
                post(route("contact.store"));
            }, 2000);
        }
        reset();
    };
    const [opened, setOpened] = useState(false);
    const openOptionsList = () => {
        setOpened(!opened);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard - {auth.user.role}
                </h2>
            }
        >
            <Head title="Edit Connection" />

            <div className="bg-gray-100 dark:bg-gray-800 min-h-screen  flex flex-col">
                {validSub && (
                    <div className="bg-green-500 text-white py-2 text-center">
                        Message sent successfully!
                    </div>
                )}
                <header className="bg-orange-500 text-white py-8 text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-2">
                        Reach out to us with any questions or concerns!
                    </p>
                </header>

                <main className="container mx-auto my-8 flex-1">
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full">
                        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6 max-w-md">
                            <h2 className="text-2xl text-gray-500 dark:text-gray-300 font-bold mb-4">
                                Get in Touch
                            </h2>
                            {auth.user.role !=="client" && <div>
                                <div className="absolute w-20 h-20 bg-gray-200 rounded-full right-10 flex justify-center items-center">
                                    <button onClick={openOptionsList}>
                                        <FontAwesomeIcon
                                            icon={faHeadphonesAlt}
                                            className="w-10 h-10 text-blue-500"
                                        />
                                    </button>
                                </div>
                                {opened && (
                                    <div className="absolute w-56 h-auto bg-gray-200 rounded-md right-32 text-gray-700">
                                        <ul>

                                            <li className="hover:bg-gray-300 p-4">
                                                <Link href={route("contact")}>
                                                    Get intouch
                                                </Link>
                                            </li>
                                            <li className="hover:bg-gray-300 p-4">
                                                <Link href={route("contact.list")}>
                                                    Show Contacts List
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>}


                            <form onSubmit={handleSubmit}>
                                {errors && (
                                    <div className="text-red-500 mb-4">
                                        {Object.values(errors).map(
                                            (error, index) => (
                                                <div key={index}>{error}</div>
                                            )
                                        )}
                                    </div>
                                )}
                                <div className="mb-4 relative">
                                    <label
                                        htmlFor="name"
                                        className="block dark:text-gray-300 font-bold mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        className="w-full dark:text-white px-3 py-2 dark:bg-gray-800 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300"
                                        required
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label
                                        htmlFor="email"
                                        className="block dark:text-gray-300 font-bold mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="w-full dark:text-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-800 transition duration-300"
                                        required
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label
                                        htmlFor="message"
                                        className="block dark:text-gray-300 font-bold mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={data.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full dark:text-white px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-800 transition duration-300"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300"
                                    disabled={processing}
                                >
                                    {processing ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </div>
                        <div className="md:flex md:items-center">
                            <img
                                src="Get-in-touch-copy.webp"
                                alt=""
                                className="relative w-auto h-80"
                            />
                        </div>
                    </section>
                </main>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contact;
