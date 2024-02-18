// resources/js/Components/Dashboard/VehicleList.jsx
import React from 'react';

const UsersList = ({ vehicle, usersList }) => {
  const users=[{
    id:'',
    name:'',
    email:'',
    state:'',
  }]
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Users List</h2>
      <ul>
        {usersList.map((user) => (
            <>
            <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>role: {user.role}</p>
            </li><hr />
            </>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
