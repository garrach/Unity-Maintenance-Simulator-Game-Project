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
        `Dear [Hiring Manager name],
        As a highly focused and motivated individual with a passion for cars, 
        I'm writing to express my strong interest in joining your car maintenance community and offering my excellent service skills.  
        I believe my dedication to quality work and desire to be part of a supportive community make me a great fit.
        In previous roles (or personal projects), I've consistently demonstrated a strong work ethic and a dedication to exceeding expectations.  
        I'm eager to learn from experienced mechanics and contribute my own skills to your community.
        I'm confident that with my commitment to excellence and my passion for cars, I can become a valuable asset to your team.  
        I'm a quick learner and eager to contribute to the positive and supportive environment you've built.
        
        Thank you for your time and consideration.  I've attached my resume (or a document outlining relevant skills and experience) for your review.  
        I look forward to the opportunity to discuss my qualifications further and learn more about joining your car maintenance community`,
        `Dear [Hiring Manager name],
        I am writing to express my keen interest in the data analyst position.  
        My ability to analyze data quickly and efficiently aligns perfectly with your company's need for fast-paced insights.  
        I'm a highly motivated individual with a strong analytical mind and a passion for extracting valuable information from data.
        In my previous role at [Previous company name] (or relevant experience), 
        I consistently delivered data-driven insights that helped optimize processes and improve decision-making. 
        I'm proficient in using various data analysis tools and platforms, allowing me to work quickly and efficiently.
        I'm confident that my ability to think critically, analyze data rapidly, 
        and communicate findings clearly will make me a valuable asset to your team.  
        I thrive in a fast-paced environment and am eager to contribute to your company's success.

        Thank you for your time and consideration.  
        My resume, attached for your review, provides further details on my skills and experience.  
        I look forward to discussing how my analytical skills can benefit your team.`,
        `Dear [Hiring Manager name],
        I am writing to express my enthusiasm for the community moderator position.  
        I have a strong sense of justice and believe in creating a safe and positive online environment.  
        My dedication to enforcing community rules and fostering a respectful atmosphere makes me a perfect fit for this role.
        I have a deep understanding of [mention relevant online communities or platforms] and the importance of maintaining a safe space for all users.  
        In previous experiences (online communities, volunteer work, etc.), I've demonstrated strong judgment and a commitment to upholding community guidelines.
        I am confident in my ability to identify and address rule violations while remaining respectful and empathetic.  
        I'm also a clear communicator and believe in building positive relationships with users.  
        This position allows me to combine my passion for community safety with my strong communication skills.
        
        Thank you for your time and consideration.  My resume, attached for your review, provides further details on my experience and qualifications.  
        I look forward to discussing how I can contribute to a positive and safe online community.`,
        `Dear [Hiring Manager name],
        I am writing to express my strong interest in the support specialist position.  
        I am a highly motivated and dedicated individual with a passion for providing exceptional customer service 24/7.  
        My commitment to continuous support makes me a great fit for this role.
        In my previous role at [Previous company name] (or relevant experience), I consistently delivered exceptional customer service, 
        ensuring prompt responses and clear resolutions.  
        I am a quick learner and adept at using various support tools and platforms, allowing me to maintain consistent availability.
        I am confident in my ability to troubleshoot issues efficiently, communicate clearly, and maintain a positive and helpful attitude.  
        The opportunity to provide ongoing support and ensure a positive customer experience motivates me greatly.
        
        Thank you for your time and consideration.  My resume, attached for your review, provides further details on my skills and experience.  
        I look forward to discussing how my dedication to 24/7 support can benefit your team.`,
    ]

    const DevCoverLetter = [`Cover Letter 1: Front-End Developer
    Dear [Hiring Manager name],
    
    I am writing to express my keen interest in the Front-End Developer position advertised on [Platform where you saw the job posting]. With [Number] years of experience crafting user-friendly and visually appealing web applications, I possess the skills and passion to contribute significantly to your team.
    
    In my previous role at [Previous company name], I played a key role in developing a new e-commerce platform.  I implemented a responsive design framework (e.g., Bootstrap) ensuring seamless user experience across different devices, resulting in a 15% increase in mobile conversions.  My expertise lies in HTML, CSS, JavaScript, and front-end frameworks like React or Angular.  I'm also proficient in tools like Git and browser developer tools for efficient development and debugging.
    
    Highly motivated and results-oriented, I thrive on creating intuitive and visually engaging user interfaces.  I excel at collaboration, working effectively with designers and back-end developers to bring projects to life.  I possess a strong problem-solving ability and a constant desire to learn new technologies to stay ahead of the curve.
    
    My portfolio, which you can access at [Link to your portfolio], showcases a selection of my web development projects.  My resume, attached for your review, provides further details on my skills and experience.  Thank you for your time and consideration.  I look forward to discussing my qualifications further and learning more about this exciting opportunity.`,
        `Cover Letter 2: Back-End Developer
        Dear [Hiring Manager name],
        
        I am writing to express my enthusiasm for the Back-End Developer position advertised on [Platform where you saw the job posting]. With [Number] years of experience building robust and scalable web applications, I am confident I possess the skills and dedication to excel in this role.
        
        In my previous role at [Previous company name], I spearheaded the development of a new API, utilizing [Specific back-end technologies] to ensure efficient data retrieval and processing.  This resulted in a 20% reduction in server load and improved application performance.  My expertise lies in back-end development languages like Python, Java, or Node.js, and I'm proficient in relational databases like MySQL or PostgreSQL.
        
        Highly motivated and results-oriented, I possess a passion for clean, efficient, and secure code.  I thrive in collaborative environments and excel at communication, working effectively with front-end developers and other team members to achieve project goals.  I'm a quick learner and possess a strong problem-solving ability, adept at tackling complex technical challenges.
        
        My resume, attached for your review, provides further details on my technical skills and project experience.  Thank you for your time and consideration.  I look forward to discussing my qualifications further in an interview.`,
        `Cover Letter 3: Full-Stack Developer
        Dear [Hiring Manager name],
        
        I am writing to express my strong interest in the Full-Stack Developer position advertised on [Platform where you saw the job posting]. With [Number] years of experience building web applications from the ground up, I possess a well-rounded skillset that allows me to contribute meaningfully across all development phases.
        
        In my previous role at [Previous company name], I played a key role in developing and maintaining a social media platform.  I implemented both front-end features using frameworks like [Front-end frameworks] and back-end functionalities using [Back-end technologies].  My problem-solving skills were crucial in debugging complex issues and ensuring optimal performance.  My expertise lies in both front-end and back-end development, including [List of relevant skills].
        
        Highly motivated and results-oriented, I possess a passion for creating full-stack web applications that are not only functional but also deliver a positive user experience.  I'm comfortable working independently and as part of a team, and my strong communication skills allow me to collaborate effectively with designers, product managers, and other developers.  I'm a fast learner who readily embraces new challenges and technologies.
        
        My portfolio, which you can access at [Link to your portfolio], showcases a selection of my full-stack development projects.  My resume, attached for your review, provides further details on my skills and experience.  Thank you for your time and consideration.  I look forward to discussing how my full-stack development skills can benefit your team.`,
        `Cover Letter 4: UI/UX Designer
        Dear [Hiring Manager name],
        
        I am writing to express my keen interest in the UI/UX Designer position advertised on [Platform where you saw the job posting]. With [Number] years of experience crafting user-centered designs that are both visually compelling and intuitive, I am confident I can contribute significantly to your team.
        
        In my previous role at [Previous company name], I designed and implemented a new user interface for`,

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
            <div className='relative dark:bg-gray-800 bg-gray-200 cover-letter-container hover:text-gray-800 text-gray-800 dark:text-white rounded-md hover:bg-orange-500 p-4'>
                <h4 className='font-bold uppercase'>employee</h4>
                <p className='cover-letter'>
                    {line}
                </p>
                <button className='absolute top-2 right-4' onClick={(e) => { e.preventDefault(); handleAutoDataChange({ name: 'coverLetter', value: line }) }}>Apply</button>

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
            <style>
                {
                    `
                
                .cover-letter-container {
                    max-height: 200px; 
                    max-width: 400px; 
                    overflow-y: auto; 
                  }
                  
                  .cover-letter {
                    margin-bottom: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-family: Arial, sans-serif;
                    font-size: 14px;
                    line-height: 1.6;
                    
                  }
                  
                
                `
                }
            </style>
        </div>
    );
};

export default PriorityCustomerSupportIndex;
