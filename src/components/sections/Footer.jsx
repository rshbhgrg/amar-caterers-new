import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Wedding Catering', href: '#services' },
    { name: 'Corporate Events', href: '#services' },
    { name: 'Birthday Parties', href: '#services' },
    { name: 'Religious Events', href: '#services' },
    { name: 'Social Gatherings', href: '#services' },
    { name: 'Private Parties', href: '#services' }
  ];

  const serviceAreas = [
    'Delhi', 'Mumbai', 'Bangalore', 'Jaipur', 'Jodhpur', 'Udaipur', 'All India'
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/amarcaterers', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/amarcaterers', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/amarcaterers', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/amarcaterers', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get latest updates on offers and events</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 outline-none transition w-full sm:w-80"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo size="default" className="mb-2" />
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for exceptional catering services. Making every event 
              memorable with delicious food and impeccable service since 1986. Owned by 
              Mr. Jairaj Sabnani, we are one of India's most trusted caterers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="flex items-center text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <a href="tel:02912633860" className="hover:text-amber-500 transition-colors">
                    0291-2633860
                  </a>
                  <br />
                  <a href="tel:02912629068" className="hover:text-amber-500 transition-colors">
                    0291-2629068
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <a href="tel:919414132868" className="hover:text-amber-500 transition-colors">
                    94141-32868
                  </a>
                  <br />
                  <a href="tel:919828032868" className="hover:text-amber-500 transition-colors">
                    98280-32868
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <a href="mailto:amar_caterers@yahoo.com" className="hover:text-amber-500 transition-colors">
                    amar_caterers@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p>1st 'B' Road, Sardarpura</p>
                  <p>Jodhpur, Rajasthan</p>
                </div>
              </li>
            </ul>

            <h4 className="font-semibold text-white mb-3">Service Areas</h4>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-400"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Amar Caterers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;