import React from 'react';
import { ChefHat, Users, Calendar, Award } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Calendar, value: '38+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Events Served' },
    { icon: Award, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-amber-700">
              <ChefHat className="w-6 h-6" />
              <span className="font-semibold">Trusted Since 1986</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Exceptional Catering for{' '}
              <span className="text-amber-700">Every Occasion</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              One of India's most trusted caterers, bringing perfect menus and 
              unparalleled services to make your big occasion truly special.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
              >
                View Our Menu
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-700 text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors"
              >
                Get Free Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                <div className="text-center text-white">
                  <ChefHat className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-medium opacity-75">Hero Image</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;