import React from 'react';
import { Users, Briefcase, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We are a team of passionate professionals dedicated to delivering innovative solutions that drive business growth and success.</p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="h-full bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users size={48} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">Our team consists of industry experts with years of experience in delivering top-notch solutions.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="h-full bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Briefcase size={48} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tailored Solutions</h3>
              <p className="text-gray-600">We create custom solutions that perfectly fit your unique business needs and challenges.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="h-full bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <TrendingUp size={48} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Proven Results</h3>
              <p className="text-gray-600">Our track record speaks for itself, with numerous success stories and satisfied clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;