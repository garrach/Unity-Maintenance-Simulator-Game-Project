import GuestLayout from '@/Layouts/GuestLayout';
import React from 'react';

const About = () => {
  return (
    <GuestLayout>
      <div className="dark:bg-gray-800 dark:text-white bg-gray-100 pt-56">
        <header className="py-8 dark:bg-gray-800 dark:text-white text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
        </header>
        <main className="container mx-auto">
          <div className='serviceDetails'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-0 w-full h-full'>
              <div className='dark:bg-gray-800 relative h-full'>
                <img src="application-sur-mesure.png.webp" alt="" className='relative top-20 left-56 w-auto h-80' />
              </div>
              <div className='dark:bg-gray-800 relative h-full'>
                  <p className='dark:text-gray-300 text-gray-800 text-xl text-justify indent-8'>We offer a dynamic project that seamlessly integrates game development and web development expertise.
                    Our solution synchronizes resources, processes user-provided information, and securely stores data in both a local database and MongoDB Atlas Cloud.
                    Leveraging our team's academic knowledge and experience, we've developed an innovative web application powered by Express.js.
                    This application analyzes user data in real-time, providing dynamic responses tailored to the user's interactions.
                    Additionally, our 3D game environment provides immersive visualization of resources, complete with required authentication for security.
                    Users can interact with the virtual world using standard input devices like a mouse and keyboard.
                    With our comprehensive solution, clients benefit from efficient resource management, secure data handling, and seamless integration between web and gaming environments.
                  </p>

              </div>

            </div>
          </div>




        </main>
      </div>
      <style>
        {`
        
        .serviceDetails {
          display: block;
          position: relative;
          height: 40vh;
          padding:2rem;
      }
        `}
      </style>
    </GuestLayout>
  );
};

export default About;
