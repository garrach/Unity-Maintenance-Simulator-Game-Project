import React, { useState } from 'react';

const EditProfileForm = ({userInfo}) => {
  const [formData, setFormData] = useState({
    firstName: userInfo[0],
    lastName: userInfo[1],
    email: userInfo[2],
    bio: userInfo[3],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the user profile
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <label className="block mb-4">
        <span className="text-gray-700">First Name:</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Last Name:</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Bio:</span>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="form-textarea mt-1 block w-full rounded-md border-gray-300"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfileForm;
