import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food & Cuisine' },
    { id: 'events', name: 'Events' },
    { id: 'setup', name: 'Setup & Decor' }
  ];

  const galleryImages = [
    { id: 1, category: 'food', title: 'Delicious Spread', description: 'Traditional Indian cuisine' },
    { id: 2, category: 'events', title: 'Wedding Reception', description: 'Grand wedding setup' },
    { id: 3, category: 'food', title: 'Appetizer Platter', description: 'Assorted starters' },
    { id: 4, category: 'setup', title: 'Elegant Decor', description: 'Beautiful table arrangements' },
    { id: 5, category: 'events', title: 'Corporate Event', description: 'Professional catering service' },
    { id: 6, category: 'food', title: 'Dessert Station', description: 'Sweet delicacies' },
    { id: 7, category: 'setup', title: 'Buffet Setup', description: 'Live counters arrangement' },
    { id: 8, category: 'events', title: 'Birthday Celebration', description: 'Kids party catering' },
    { id: 9, category: 'food', title: 'Main Course', description: 'Variety of dishes' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Moments We've Created
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of successful events and delicious culinary creations 
            that showcase our expertise and dedication.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br from-amber-100 to-orange-100 aspect-[4/3]"
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-16 h-16 text-amber-300" />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Follow Us on Instagram
          </h3>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest events and culinary creations
          </p>
          <a 
            href="https://instagram.com/amarcaterers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
            @amarcaterers
          </a>
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <button className="text-amber-700 font-medium hover:text-amber-800 transition-colors">
            Load More Images →
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <Camera className="w-24 h-24 text-amber-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;