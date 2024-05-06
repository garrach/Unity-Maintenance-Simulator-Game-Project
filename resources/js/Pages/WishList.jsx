import React from 'react';

const WishList = ({wishListItems}) => {
  return (
    <div className='overflow-auto h-80'>
      <h1 className="text-2xl dark:text-white text-gray-800 font-bold mb-4" id='pop'>WishList Items</h1>
      <ul className="space-y-4">
        {Object.entries(wishListItems).map(([key,value]) => (
          <li key={value.item.id} className="bg-gray-200 p-4 rounded-md shadow-md">
            <h2 className="dark:text-lg dark:text-gray-600 uppercase font-semibold">{value.item.title}</h2>
            <p className="dark:text-gray-600">{value.item.description}</p>
            <p className="dark:text-sm text-gray-500"><strong>Device:</strong>{value.Device.serial_number} <strong> User:</strong>{value.User.name}</p>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default WishList;
