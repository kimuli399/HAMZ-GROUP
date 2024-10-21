import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">HAMZ LIMITED</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/contact" className="hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-indigo-500 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="block hover:bg-indigo-500 px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/services" className="block hover:bg-indigo-500 px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/contact" className="block hover:bg-indigo-500 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;