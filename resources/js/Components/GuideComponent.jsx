import React, { useRef } from 'react';

const GuideComponent = ({ guideElemnt, nextGuid, storedMenuState, closeGuide, skipping }) => {
    const guideRef = useRef(null);

    const focusGuide = () => {
        if (guideRef.current) {
            guideRef.current.focus();
        }
    };

    if (!guideElemnt || storedMenuState === 0) return null;

    const currentElement = guideElemnt[nextGuid.current];
    const { left, top } = currentElement.getBoundingClientRect();
    const content = currentElement.innerHTML;

    return (
        <div
            ref={guideRef}
            style={{
                left: left - 50,
                top: top + window.scrollY
            }}
            className="w-80 h-auto absolute bg-gray-800 dark:bg-white border border-gray-300 rounded-lg shadow-lg p-6 z-50 focus:outline-none"
            tabIndex="-1"
        >
            <div className="mb-4 text-gray-300 dark:text-gray-800" id="showGuid">
                <button
                    onClick={(e) => closeGuide(e)}
                    className="absolute top-0 left-0 text-white dark:text-gray-500 px-4 py-2 rounded-md"
                >
                    Skip
                </button>
                <h1 className="text-xl font-bold mt-4">Guide</h1>
                <div  ref={guideRef} className="text-sm grid grid-cols-1 gap-1"  dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <button
                onClick={(e) => {
                    skipping(e, guideElemnt);
                    focusGuide();
                }}
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
                Next
            </button>
        </div>
    );
};

export default GuideComponent;
