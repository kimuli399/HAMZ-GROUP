import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">CompanyName</h3>
            <p className="text-gray-400">Innovative solutions for your business success.</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400 mb-2">123 Business Street, Suite 100</p>
            <p className="text-gray-400 mb-2">City, State 12345</p>
            <p className="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400">Email: info@companyname.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 CompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;