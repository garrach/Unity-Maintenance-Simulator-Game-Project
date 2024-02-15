// About.jsx

import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. 
            Proin ut augue et urna tincidunt condimentum. Vestibulum sit amet libero vitae 
            justo ultrices lacinia. Donec vel sapien auctor, vulputate nunc nec, aliquam 
            libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
