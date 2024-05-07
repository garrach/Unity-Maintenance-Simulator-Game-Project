import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ auth , layer}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close menu on window resize
    const closeMenuOnResize = () => {
      if (window.innerWidth > 767 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`dark:text-white text-gray-700 bg-gray-300 dark:bg-gray-900 shadow-md fixed top-4 right-4 z-50 lg:rounded-full ${layer}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className="h-8 w-auto"
                  src="/logo00.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500"
                >
                  Home
                </Link>
                <Link
                  href={route('contact')}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500"
                >
                  Contact
                </Link>
                <Link
                  href={route('documentation')}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500"
                >
                  Documentation
                </Link>
                <Link
                  href={route('about')}
                  className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500"
                >
                  About us
                </Link>
                <Link
                  href={route('devices.preview')}
                  className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500"
                >
                  Products
                </Link>
                <Link
                  href={route('devices.index')}
                  className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-500"
                >
                  Purchase
                </Link>
                <Link
                  href={route('login')}
                  className="bg-orange-500  px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Open menu"
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500"
            >
              Home
            </Link>
            <Link
              href={route('contact')}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500"
            >
              Contact
            </Link>
            <Link
              href={route('documentation')}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500"
            >
              Documentation
            </Link>
            <Link
              href={route('about')}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500"
            >
              About us
            </Link>
            <Link
              href={route('devices.preview')}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500"
            >
              Products
            </Link>
            <Link
              href={route('devices.index')}
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500"
            >
              Purchase
            </Link>
            <Link
              href={route('login')}
              className="block bg-orange-500 text-white px-4 py-2 mt-1 rounded-full text-base font-medium hover:bg-orange-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
