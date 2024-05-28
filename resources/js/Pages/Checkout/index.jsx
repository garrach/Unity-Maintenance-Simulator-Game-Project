import CheckoutForm from "@/Components/CheckoutForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Checkout = ({ auth, service }) => {
    const { data, setData, post } = useForm({
        serviceID: service.id,
        userID: auth.user.id,
    });
    const [modelshow, setModelShow] = useState(false);

    const OpenModal = () => {
        setModelShow(true);
    };
    const CloseModal = () => {
        setModelShow(false);
    };

    const handlsubmit = (e) => {
        e.preventDefault();
        post(route("purchase.service", data));
        OpenModal();
    };
    return (
        <div className="dark:text-white dark:bg-gray-900">
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Purchase Service Checkout
                    </h2>
                }
            >
                <Head title="Checkout Analytics" />
                {modelshow && (
                    <div
                        onClick={CloseModal}
                        className="absolute bg-gray-500 bottom-10 left-2 border-l-4 flex justify-center items-center hover:border-red-500  border-green-500 rounded"
                        style={{ width: "300px", height: "3rem" }}
                    >
                        <h3 className="cursor-default">Checkout Complete</h3>
                    </div>
                )}
                <div className="bg-gray-100 p-4 dark:bg-gray-900">
                    <h1 className="text-3xl font-bold mb-4">Checkout Order</h1>

                    <form onSubmit={handlsubmit}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="flex flex-col">
                                <table>
                                    <tr className="bg-gray-700">
                                        <th>User</th>
                                    </tr>
                                    <tbody>
                                        {Object.entries(auth.user).map(
                                            ([key, value], index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-500 border-b-2 dark:border-gray-700 border-gray-300"
                                                >
                                                    <td className="p-4 ">{`${value}`}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col">
                                <table>
                                    <tr className="bg-gray-700">
                                        <th>Service</th>
                                    </tr>
                                    <tbody>
                                        {Object.entries(service).map(
                                            ([key, value], index) => (
                                                <tr
                                                    key={index}
                                                    className="hover:bg-gray-500 border-b-2 dark:border-gray-700 border-gray-300"
                                                >
                                                    <td className="p-4 ">{`${value}`}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="md:rows-2 md:col-span-2 flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="p-2 bg-orange-500 rounded"
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                    <div className="bg-gray-500 p-6 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold mb-4 text-center">
                            Stripe Payment
                        </h1>
                        {/*<CheckoutForm />*/}
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Checkout;
