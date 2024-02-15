// Navbar.jsx

import React from 'react';
import { Link } from '@inertiajs/react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white fixed top-0 w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">Your Logo</Link>
      <div className="space-x-4">
        <Link href="/aboutUs" className="hover:text-gray-400">About</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
