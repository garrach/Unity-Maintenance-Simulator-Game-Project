import React from "react";

const SVGAnimation = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Path 1 */}
      <path
        d="M0,200 Q100,100 200,200 T400,200 T600,200 T800,200"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="3"
        fill="none"
        className="animate-path"
      />
      {/* Path 2 */}
      <path
        d="M0,100 Q100,200 200,100 T400,100 T600,100 T800,100"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="3"
        fill="none"
        className="animate-path"
      />
      {/* Path 3 */}
      <path
        d="M0,300 Q100,400 200,300 T400,300 T600,300 T800,300"
        stroke="rgba(255, 255, 255, 0.6)"
        strokeWidth="3"
        fill="none"
        className="animate-path"
      />
      <style jsx>{`
        .animate-path {
          stroke-dasharray: 500;
          stroke-dashoffset: 1000;
          animation: dash 15s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 100;
          }
        }
      `}</style>
    </svg>
  );
};

export default SVGAnimation;
