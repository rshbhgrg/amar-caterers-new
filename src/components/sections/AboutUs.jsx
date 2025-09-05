import React from 'react';
import { Clock, Users, Award, Heart } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Clock,
      title: "38+ Years Legacy",
      description: "Serving delicious food and creating memorable events since 1986"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Expert chefs and trained staff dedicated to exceptional service"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish prepared with care using traditional recipes"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium ingredients and highest hygiene standards"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Your Trusted Partner for Every Celebration
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p className="text-lg leading-relaxed">
                Amar Caterers, owned by Mr. Jairaj Sabnani, is one of the most trusted caterers 
                in India since 1986. With our long history of providing perfect menus and 
                unparalleled services, we are the best choice for your big occasion.
              </p>
              <p className="leading-relaxed">
                We aim to satisfy your every demand and will effectively blend with your every 
                preference, from developing your very own menu to services that fit your needs, 
                from quick lunch to an elaborate buffet. Amar Caterers will make everything 
                special because we focus on class and great tastes.
              </p>
              <p className="leading-relaxed">
                With our vast experience in catering for different events and occasions, our talented 
                team of chefs and food specialists will prepare creative menus according to the 
                demands of the occasion. We create the best ambiance for a fine banquet experience.
              </p>
            </div>

            {/* Mission */}
            <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To make your dream of a perfect celebration with enticing aromas and appetizing 
                food come true, providing services that fit your needs and preferences while 
                maintaining our legacy of excellence since 1986.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-700 to-orange-700 rounded-2xl text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Amar Caterers?</h3>
            <p className="text-amber-100 max-w-2xl mx-auto">
              We combine traditional flavors with modern presentation to create culinary experiences 
              that delight your guests and make your events truly special.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-amber-100">Fresh Ingredients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-amber-100">Menu Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-amber-100">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-amber-100">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;