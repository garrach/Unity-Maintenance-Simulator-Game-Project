import GuestLayout from '@/Layouts/GuestLayout';

import React from 'react';

const About = () => {
  return (
    <GuestLayout>
    <div className="dark:bg-gray-800 dark:text-white bg-gray-100">
      <header className="py-8 bg-gray-800 text-white text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2">Learn more about our amazing team!</p>
      </header>

      <main className="container mx-auto my-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eleifend, sapien vitae vehicula fermentum, odio nisl ultricies
            libero, a luctus dui ex sit amet quam.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example team member card */}
            <div className="dark:bg-gray-700 bg-white p-4 rounded shadow-md">
              <img
                src="https://placekitten.com/150/150"
                alt="Team Member"
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="dark:text-gray-100 text-gray-600">Co-founder & Developer</p>
            </div>

            {/* Add more team member cards as needed */}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            Have questions or want to get in touch? Feel free to email us at{' '}
            <a href="mailto:info@example.com" className="text-blue-500">
              info@example.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
    </GuestLayout>

  );
};

export default About;
