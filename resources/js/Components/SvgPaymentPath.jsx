// src/SvgPaymentPath.js
import React from 'react';

const SvgPaymentPath = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="absolute inset-y-0 right-0 h-full w-full"
      style={{ zIndex: -1 }}
    >
      <path
        fill="#3498db"
        fillOpacity="1"
        d="M0,64L48,85.3C96,107,192,149,288,186.7C384,224,480,256,576,245.3C672,235,768,181,864,144C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1046.7,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default SvgPaymentPath;
