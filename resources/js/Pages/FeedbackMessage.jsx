import React from 'react';
import { Transition } from '@headlessui/react';

function FeedbackMessage({ show }) {
  return (
    <Transition
      show={show}
      as="div"
      className="fixed inset-0 flex items-center justify-center"
      enter="transition-opacity ease-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-gray-800 bg-opacity-75 text-white p-4 rounded">
        Thank you for downloading!
      </div>
    </Transition>
  );
}

export default FeedbackMessage;
