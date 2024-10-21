import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500" placeholder="Your Message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">Send Message</button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="flex items-start mb-4">
                <Mail className="text-indigo-600 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@companyname.com</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Phone className="text-indigo-600 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-indigo-600 mr-4" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">123 Business Street, Suite 100, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;