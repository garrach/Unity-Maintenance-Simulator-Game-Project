import { Head, Link, useForm, usePage } from '@inertiajs/react';

const SendMessage = ({sender,recipient}) => {
    const { data, setData, post, processing } = useForm({
        sender_id: sender, // Assuming sender_id will be set in the backend
        recipient_id: recipient,
        subject: '',
        body: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('send-message'), {
            onSuccess: () => {
                // Handle successful submission
                setData({
                    sender_id: null,
                    recipient_id: null,
                    subject: '',
                    body: '',
                });
            },
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Send Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject:
                </label>
                <input
                    type="text"
                    name="subject"
                    required
                    value={data.subject || ''}
                    onChange={handleChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
            </div>
            <div>
                <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Body:
                </label>
                <textarea
                    name="body"
                    required
                    value={data.body || ''}
                    onChange={handleChange}
                    placeholder="Please provide details about ur Message assignment..."
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
            </div>
            <button
                type="submit"
                disabled={processing}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
                {processing ? 'Sending...' : 'Send'}
            </button>
        </form>
    </div>
    );
};

export default SendMessage;
