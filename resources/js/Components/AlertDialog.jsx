// resources/js/components/AlertDialog.jsx

import React, { useState } from 'react';
import { useEffect } from 'react';

const AlertDialog = ({ title, message, onClose, children }) => {

  const [popup, setpopup] = useState(true);

  useEffect(() => {
    async function setDataPost() {
      await onClose();
    }
    setDataPost();
  }, [])
  async function handleInputChange() {
    setpopup(false);
  }
  return (
    popup && <div className="fixed hover:bg-[#181818b2] inset-0 z-50 flex items-center justify-center "
    >
      {console.log(message)}
      <div className="relative w-auto max-w-md mx-auto my-6">
        {/* Modal content */}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-lg font-semibold dark:text-gray-800">{title}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-gray-500 opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={handleInputChange}
            >
              <span className="text-xl">×</span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto">
            <p className="text-sm leading-relaxed text-gray-600">{message}</p>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            {children}
            <button
              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleInputChange}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertDialog;
