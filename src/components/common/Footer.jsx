import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'Youtube' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-primary-950 py-12 px-5 md:px-10 border-t border-primary-800/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/EstateConstructLogo.png" 
                alt="Estate & Construct Logo" 
                className="h-16 w-[200px] object-contain"
              />
            </div>
            <p className="text-grey-400 mb-6">
              Premium real estate and construction excellence since 2010. Building dreams, creating reality.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-grey-400 hover:text-accent-500 transition-colors duration-200"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-grey-100">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-grey-400 hover:text-accent-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-grey-100">Address</h3>
            <div className="space-y-3 text-grey-400">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <p>Bhubaneswar, Odisha</p>
                  <p>India - 751001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-grey-100">Contact Us</h3>
            <div className="space-y-3 text-grey-400">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-accent-500" />
                <p>+929 333 9296</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-accent-500" />
                <p>contact@estateconstruct.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 pt-8 text-center text-grey-400 text-sm">
          <p>&copy; 2026 Estate & Construct. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <a href="#terms" className="hover:text-accent-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;