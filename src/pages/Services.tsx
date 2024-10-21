import React from 'react';
import { Code, Server, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Code size={40} />, title: 'Web Development', description: 'Custom web applications tailored to your business needs.' },
    { icon: <Server size={40} />, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure for your growing business.' },
    { icon: <Smartphone size={40} />, title: 'Mobile App Development', description: 'Engaging mobile apps for iOS and Android platforms.' },
    { icon: <Globe size={40} />, title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies to boost your online presence.' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;