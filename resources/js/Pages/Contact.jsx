// Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4 dark:text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">     
      {/* Contact Section */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <ul className="list-disc text-gray-600">
          <li>Email: info@example.com</li>
          <li>Phone: (555) 123-4567</li>
          <li>Address: 123 Main Street, Cityville</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Contact;
