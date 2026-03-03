import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+929 333 9296',
      link: 'tel:+9293339296'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'contact@esateandconstruct.com',
      link: 'mailto:contact@esateandconstruct.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: '742 Evergreen Terrace, Brooklyn',
      link: '#'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {contactItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-xl border border-primary-700 hover:border-accent-600 transition-all duration-300 hover:transform hover:scale-105 group"
        >
          <item.icon className="text-accent-600 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="font-bold mb-2 text-white">{item.title}</h3>
          <p className="text-gray-300">{item.value}</p>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;