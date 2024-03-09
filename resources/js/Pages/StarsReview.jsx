import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarsReview = ({ totalStars, onStarClick }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (star) => {
    setSelectedStars(star);
    onStarClick(star);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            className='inline-grid'
            key={index}
            color={starValue <= selectedStars ? '#ffd700' : '#e4e5e9'}
            onClick={() => handleStarClick(starValue)}
            style={{ cursor: 'pointer', width:'2rem',height:'2rem' }}
          />
        );
      })}
    </div>
  );
};

export default StarsReview;
