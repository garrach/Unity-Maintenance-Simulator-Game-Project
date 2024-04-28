// Navbar.jsx

import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({ auth }) => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    //toggleMenu()
    return () => {
      setMenuOpen(true);
      window.removeEventListener('resize', () => { })
    }
  }, [])
  return (
    <div>
      {isMenuOpen ? <>

        <div className={`staticNavBar static-links z-20 flex`}>
          <span className='w-10 h-10 bg-red-500 rounded-full flex items-center justify-center' onClick={() => toggleMenu(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faAngleUp : faAngleDown} className="text-white" />
          </span>

          <Link href="/" className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Home</Link>
          <Link href={route('contact')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Contact</Link>
          <Link href={route('documentation')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Documentation</Link>
          <Link href={route('about')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">About us</Link>
          <Link href={route('devices.preview')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Products</Link>
          <Link href={route('devices.index')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Purchase</Link>
          <Link href={route('login')} className="bg-orange-500  text-white px-6 py-3 font-bold rounded-full hover:bg-orange-600">Get Started</Link>
        </div>

      </> : <>

        <div className={`staticNavBar static-links w-56 z-20 block`}>
          <span className='w-10 h-10 bg-red-500 rounded-full flex items-center justify-center' onClick={() => toggleMenu(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faAngleUp : faAngleDown} className="text-white" />
          </span>

          <Link href="/" className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">
            <div className='flex justify-between '>
              <span>Home</span>
              <span>{`-->`}</span>
            </div>

          </Link>
          <Link href={route('contact')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Contact</Link>
          <Link href={route('documentation')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Documentation</Link>
          <Link href={route('about')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">About us</Link>
          <Link href={route('devices.preview')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Products</Link>
          <Link href={route('devices.index')} className="  text-white px-6 py-3 font-bold op hover:rounded-lg hover:bg-white">Purchase</Link>
          <Link href={route('login')} className="bg-orange-500  text-white px-6 py-3 font-bold rounded-full hover:bg-orange-600">Get Started</Link>
        </div>


      </>}

      <style>
        {`
          .static-links a {
            position: relative;
            display: block;
          }
          .staticNavBar{
            padding:1rem;
            border-radius:2rem;

          }
          .staticNavBar:hover{
            background: #000000c9;
          }
          .op:hover {
            color: #ff6c00;
            background: #ffffff24;
            border-bottom: 2px solid orange;
          }

          .static-links {
            position: fixed;
            top: 5%;
            right: 2%;
            width: 100%;
            max-width: auto;
            height: auto;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          

          @media screen and (min-width: 768px) {
            .static-links {
              width: 50%;
              max-width: none;
            }
          }

          /* Hide the navigation bar on small devices */
          @media screen and (max-width: 767px) {
            .static-links {
              display: none;
            }

            /* Show the navigation bar when the menu button is clicked */
            .static-links.flex {
              display: flex;
              flex-direction: column;
              position: absolute;
              top: 60px; /* Adjust the top position based on your design */
              right: 0;
              background-color: #333; /* Adjust the background color */
              padding: 10px;
              border-radius: 5px;
            }

            .hidden {
              display: none;
            }
          }
        `}
      </style>
    </div>

  );
};

export default Navbar;
