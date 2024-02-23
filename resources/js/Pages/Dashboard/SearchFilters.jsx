// resources/js/Components/Dashboard/SearchFilters.jsx
import React, { useRef } from 'react';

const SearchFilters = () => {
  const inputs=useRef();
  const handlInputChange=(e)=>{
    inputs.current=e.target.value;
    window.addEventListener('keydown',(even)=>{
      if(even.key==='Enter'){
        console.log('searching..'+' '+even.target.value)
      }
    })
  }
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Search and Filters</h2>
      <div className='bg-gray-200 flex block w-70 h-10 rounded px-4 py-1'>
 
          <input className='rounded' type="search" name="search_options" id="Sp" 
          placeholder='search_options'
          onChange={handlInputChange}
          />
      
      </div>
      <style>
        {`
        #Sp{
          position:relative;
          display:block;
          width:100%;
          height:100%;
          border:none;
        }
        `}
      </style>
    </div>
  );
};

export default SearchFilters;
