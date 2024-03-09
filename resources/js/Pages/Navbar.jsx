// Navbar.jsx

import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Navbar = ({ auth }) => {
  return (
    <>
    <div className='flex static-links z-20'>
      <Link href="/" className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Home</Link>
      <Link href={route('contact')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">contact</Link>
      <Link href={route('about')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">About us</Link>
      <Link href={route('devices.preview')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Products</Link>
      <Link href={route('devices.index')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Purchase</Link>
      <Link href={route('login')} className="bg-orange-500  text-white px-6 py-3 font-bold rounded-full hover:bg-orange-600">Get Started</Link>
    </div>
    <style>
{`  .static-links a{
                position: relative;
                display:block;
            }
            .op:hover{
              color:#ff6c00;
              background:#ffffff24;
              border-bottom:2px solid orange;
          }
                .static-links{
                    position: fixed;
                    top: 5%;
                    right: 2%;
                    width:40%;
                    height:3rem;
                    justify-content:space-between;
                }`}
    </style>
    </>
    
  );
};

export default Navbar;
