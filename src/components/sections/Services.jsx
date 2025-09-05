import React from 'react';
import { Cake, Building2, PartyPopper, Heart, Users, Home, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite wedding catering services. From traditional to contemporary cuisines.",
      features: ["Multi-cuisine menu", "Live counters", "Customized decor", "Professional staff"],
      color: "bg-pink-100",
      iconColor: "text-pink-700"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional catering solutions for your business events, conferences, and corporate gatherings with timely service.",
      features: ["Breakfast meetings", "Business lunches", "Conference catering", "Team celebrations"],
      color: "bg-blue-100",
      iconColor: "text-blue-700"
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Celebrate birthdays with delicious food and impeccable service. Special menus for kids and adults alike.",
      features: ["Themed parties", "Kids special menu", "Birthday cakes", "Party snacks"],
      color: "bg-purple-100",
      iconColor: "text-purple-700"
    },
    {
      icon: Users,
      title: "Religious Events",
      description: "Respectful and traditional catering for religious ceremonies, ensuring adherence to dietary requirements.",
      features: ["Satvik food", "Jain options", "Traditional meals", "Prasad services"],
      color: "bg-orange-100",
      iconColor: "text-orange-700"
    },
    {
      icon: PartyPopper,
      title: "Social Gatherings",
      description: "From family reunions to anniversary celebrations, we make every social event memorable with our catering.",
      features: ["Anniversary parties", "Reunion events", "Kitty parties", "Get-togethers"],
      color: "bg-green-100",
      iconColor: "text-green-700"
    },
    {
      icon: Home,
      title: "Private Parties",
      description: "Intimate catering services for your private events at home or venue of your choice with personalized menu.",
      features: ["House parties", "Private dinners", "Cocktail parties", "Small gatherings"],
      color: "bg-indigo-100",
      iconColor: "text-indigo-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Catering for Every Occasion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From grand weddings to intimate gatherings, we provide exceptional catering services 
            tailored to your specific needs and preferences. Serving all across India with 
            our outdoor catering expertise since 1986.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Custom Catering Solutions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We understand that every event is unique. Let us create a customized catering 
              package that perfectly fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
              >
                Get Custom Quote
              </a>
              <a 
                href="tel:919414132868" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-700 text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;