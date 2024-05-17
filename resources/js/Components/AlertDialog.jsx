// resources/js/components/AlertDialog.jsx

import React, { useState, useEffect } from 'react';

const AlertDialog = ({ title, message, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    async function handleOnClose() {
      await onClose();
    }
    handleOnClose();
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-lg mx-auto my-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-start justify-between p-5 border-b border-gray-300 rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={handleClose}
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          <div className="p-6">
            <p className="text-gray-700">{message}</p>
            <div className="mt-4">{children}</div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-gray-300">
            <button
              className="px-4 py-2 text-sm font-semibold text-blue-600 bg-transparent border border-blue-600 rounded hover:bg-blue-600 hover:text-white focus:outline-none transition duration-150"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AlertDialog;
