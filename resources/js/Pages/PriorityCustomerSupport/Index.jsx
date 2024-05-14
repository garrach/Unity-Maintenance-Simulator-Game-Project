import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { clientSocket } from '../client.cjs';
import { useEffect } from 'react';


const JobCard = ({ line }) => {
    return (<div className='bg-green-500 w-56 h-56'>
        <h4>employee</h4>
        <p>
            {line}
        </p>
        <button onClick={handleAutoDataChange({ name: 'coverLetter', value: line })}>Apply</button>

    </div>)

};

const PriorityCustomerSupportIndex = ({ auth }) => {

    const socket = clientSocket('dashdoard_sentRequest');

    const sendRoleRequest = (e) => {
        e.preventDefault();

        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'roleRequest', message: 'a request from client to admin, to grant role', data: auth.user }))
        }

    }

    const suggestCoverLetter = [
        'focuced and motivated person, want to join Car maintenance community and offer a good services',
        'i can analyze data as quick as it should be',
        'i feel good about this position, to keep community safe and Ban whoever goes against community rules',
        'i can keep the support panel active 24/7',
    ]

    const DevCoverLetter = [
        'focuced and motivated person, want to join Car maintenance community and offer a good services',
        'i can analyze data as quick as it should be',
        'i feel good about this position, to keep community safe and Ban whoever goes against community rules',
        'i can keep the support panel active 24/7',
    ]


    const [autoData, setAutoData] = useState({
        fullName: '',
        email: '',
        coverLetter: '',
    })
    const handleAutoDataChange = (target) => {
        console.log(target);
        const { name, value } = target;
        setAutoData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const { data, setData, post, processing, errors, reset } = useForm({
        fullName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'file' ? e.target.files[0] : value;
        setData((prevData) => ({
            ...prevData,
            [name]: val,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('fullName', data.fullName);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('resume', data.resume);
        formData.append('coverLetter', data.coverLetter);

        post(route('applyforjob.store'), formData);
        sendRoleRequest(e);
    };
    useEffect(() => {
        setAutoData((prevData) => ({
            ...prevData,
            ['fullName']: auth.user.name,
        }));
        setAutoData((prevData) => ({
            ...prevData,
            ['email']: auth.user.email,
        }));
    }, [])
    const JobCard = ({ line }) => {
       
        return (
        <div className='relative dark:bg-gray-800 bg-gray-200 hover:text-gray-800 text-gray-800 dark:text-white rounded-md hover:bg-orange-500 w-56 h-56 p-4'>
            <h4 className='font-bold uppercase'>employee</h4>
            <p className='text-center'>
                {line}
            </p>
            <button className='absolute bottom-5 left-24' onClick={(e) => { e.preventDefault(); handleAutoDataChange({ name: 'coverLetter', value: line }) }}>Apply</button>

        </div>)

    };
    return (
        <div>
            <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Customer Support</h2>}>
                <Head title="Priority Customer Support" />
                <div className='relative h-80 dark:bg-gray-900 p-4'>
                    
                    <h3 className='font-bold text-2xl text-gray-800 dark:text-gray-200'>Work opportunity</h3>
                    <div className='w-full h-full flex p-4 justify-around items-center'>
                        {suggestCoverLetter.map((cover) => (
                            <JobCard line={cover} />
                        ))}
                    </div>

                </div>
                <div className='relative h-80 dark:bg-gray-900 p-4'>
                    
                    <h3 className='font-bold text-2xl text-gray-800 dark:text-gray-200'>For Developer</h3>
                    <div className='w-full h-full flex p-4 justify-around items-center'>
                        {DevCoverLetter.map((cover) => (
                            <JobCard line={cover} />
                        ))}
                    </div>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-0 items-center justify-center p-12 rounded-md shadow-md dark:bg-gray-800'>

                    <div className='relative h-full'>
                        <img src="joApplyToo.png" alt="" className='w-auto absolute bottom-20 right-0' />
                    </div>

                    <div className='relative left-0'>

                        <form onSubmit={handleSubmit} className="dark:text-gray-200 p-6 rounded-md shadow-md w-80">
                            <h1 className="text-2xl font-semibold mb-4">Job Application Form</h1>
                            {/* Full Name */}
                            <div className="mb-4">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={data.fullName || autoData.fullName}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full dark:text-gray-800  border rounded-md"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={data.email || autoData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full dark:text-gray-800 border rounded-md"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="(XXX) XXX-XXXX"
                                    pattern="^\+\d{3} \d{2} \d{3} \d{3}$"
                                    value={data.phone}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full dark:text-gray-800 border rounded-md"
                                    required
                                />
                            </div>

                            {/* Resume Upload */}
                            <div className="mb-4">
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Resume (PDF or Word)
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full dark:text-gray-800 border rounded-md"
                                    required
                                />
                            </div>

                            {/* Cover Letter */}
                            <div className="mb-4">
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-600 dark:text-gray-200">
                                    Cover Letter
                                </label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={data.coverLetter || autoData.coverLetter}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 p-2 w-full dark:text-gray-800 border rounded-md"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                    <div className='relative h-full'>
                        <img src="skills02.png" alt="" className='w-auto absolute bottom-20 right-0' />
                    </div>
                </div>

            </AuthenticatedLayout>
        </div>
    );
};

export default PriorityCustomerSupportIndex;
