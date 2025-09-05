import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      event: "Wedding Reception",
      rating: 5,
      text: "Amar Caterers made our wedding reception absolutely perfect! The food was exceptional, and the service was impeccable. Our guests are still talking about the delicious spread. Highly recommended!",
      date: "2 months ago"
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Event",
      rating: 5,
      text: "Professional service from start to finish. They handled our corporate event for 500 people seamlessly. The variety of food options and presentation was outstanding. Will definitely use them again.",
      date: "1 month ago"
    },
    {
      name: "Anita Patel",
      event: "Birthday Party",
      rating: 5,
      text: "They catered my daughter's birthday party and it was amazing! The kids loved the special menu, and adults enjoyed the variety. The staff was friendly and attentive throughout the event.",
      date: "3 weeks ago"
    },
    {
      name: "Mohammed Ali",
      event: "Anniversary Celebration",
      rating: 5,
      text: "Celebrated our 25th anniversary with Amar Caterers. The attention to detail and personalized menu options were impressive. They made our special day even more memorable.",
      date: "1 week ago"
    },
    {
      name: "Sunita Verma",
      event: "Religious Ceremony",
      rating: 5,
      text: "They perfectly understood our requirements for satvik food. Everything was prepared according to our specifications. The taste was authentic and the service was excellent.",
      date: "2 weeks ago"
    },
    {
      name: "Vikram Singh",
      event: "Engagement Party",
      rating: 5,
      text: "Outstanding catering service! The live counters were a hit among our guests. The team was very cooperative and ensured everything ran smoothly. Couldn't have asked for better!",
      date: "1 month ago"
    }
  ];

  const stats = [
    { value: "5000+", label: "Happy Clients" },
    { value: "4.9", label: "Average Rating" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years of Trust" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with Amar Caterers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-200" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.event}</div>
                <div className="text-xs text-gray-400 mt-1">{testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-amber-700 to-orange-700 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Numbers That Speak for Themselves
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Find us on popular review platforms</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
              <div className="font-semibold text-gray-900">Google Reviews</div>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="ml-1 font-semibold">4.9</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
              <div className="font-semibold text-gray-900">Facebook</div>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="ml-1 font-semibold">4.8</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg">
              <div className="font-semibold text-gray-900">Justdial</div>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="ml-1 font-semibold">4.9</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Experience Our Service?
          </h3>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
          >
            Book Your Event Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;