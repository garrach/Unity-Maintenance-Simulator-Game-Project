// Navbar.jsx

import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Navbar = ({ auth }) => {
  const [currentUser,setCurrentUser]=useState(null); 
  useEffect(()=>{
    setCurrentUser(auth.initialPage.props.auth.user) ;
  })
  return (
    <nav className="bg-gray-800 p-4 text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Your Logo</Link>
        <div className="space-x-4">
          <Link href="/aboutUs" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          {currentUser !== null ? (
          <Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          ) : (<>
           <Link href="/login" className="hover:text-gray-400">login</Link>
           <Link href="/register" className="hover:text-gray-400">register</Link>
          </>)

          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
