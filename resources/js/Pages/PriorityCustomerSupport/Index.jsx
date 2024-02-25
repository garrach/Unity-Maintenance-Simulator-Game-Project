import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react';

const PriorityCustomerSupportIndex = ({ auth }) => {
    // State to manage form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: null, // Use this for file input (resume upload)
        coverLetter: '',
    });

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    // Handler for input changes
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'resume' ? files[0] : value,
        }));
    };

    return (
        <div>
            <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Priority Customer Support</h2>}>
                <Head title="Priority Customer Support" />
                <div className="my-4 max-w-md mx-auto">
                    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 dark:text-gray-200 p-6 rounded-md shadow-md">
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
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md"
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
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md"
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
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md"
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
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md"
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
                                value={formData.coverLetter}
                                onChange={handleInputChange}
                                rows="4"
                                className="mt-1 p-2 w-full border rounded-md"
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
            </AuthenticatedLayout>
        </div>
    );
};

export default PriorityCustomerSupportIndex;
