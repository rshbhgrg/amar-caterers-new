import React, { useState } from 'react';
import { Coffee, Salad, UtensilsCrossed, Cake, Soup, Pizza, Leaf, Download } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters', icon: Coffee },
    { id: 'mainVeg', name: 'Main Course (Veg)', icon: Leaf },
    { id: 'mainNonVeg', name: 'Main Course (Non-Veg)', icon: UtensilsCrossed },
    { id: 'breads', name: 'Breads & Rice', icon: Pizza },
    { id: 'desserts', name: 'Desserts', icon: Cake },
    { id: 'beverages', name: 'Beverages', icon: Coffee }
  ];

  const menuItems = {
    starters: [
      { name: 'Paneer Tikka', description: 'Marinated cottage cheese grilled to perfection', veg: true, popular: true },
      { name: 'Veg Spring Rolls', description: 'Crispy rolls filled with seasoned vegetables', veg: true },
      { name: 'Chicken Seekh Kebab', description: 'Minced chicken kebabs with aromatic spices', veg: false, popular: true },
      { name: 'Corn Cheese Balls', description: 'Golden fried cheese and corn balls', veg: true },
      { name: 'Fish Amritsari', description: 'Batter fried fish with Indian spices', veg: false },
      { name: 'Hara Bhara Kebab', description: 'Spinach and peas patties', veg: true }
    ],
    mainVeg: [
      { name: 'Paneer Butter Masala', description: 'Cottage cheese in rich tomato gravy', veg: true, popular: true },
      { name: 'Dal Makhani', description: 'Creamy black lentils slow-cooked overnight', veg: true },
      { name: 'Veg Kolhapuri', description: 'Mixed vegetables in spicy Kolhapuri gravy', veg: true },
      { name: 'Palak Paneer', description: 'Cottage cheese in spinach gravy', veg: true },
      { name: 'Malai Kofta', description: 'Vegetable dumplings in creamy gravy', veg: true, popular: true },
      { name: 'Chole Bhature', description: 'Spiced chickpeas with fluffy bread', veg: true }
    ],
    mainNonVeg: [
      { name: 'Butter Chicken', description: 'Tender chicken in creamy tomato sauce', veg: false, popular: true },
      { name: 'Mutton Rogan Josh', description: 'Aromatic Kashmiri mutton curry', veg: false },
      { name: 'Chicken Biryani', description: 'Fragrant rice with marinated chicken', veg: false, popular: true },
      { name: 'Fish Curry', description: 'Fresh fish in coconut-based curry', veg: false },
      { name: 'Prawn Masala', description: 'Prawns in spicy onion-tomato gravy', veg: false },
      { name: 'Egg Curry', description: 'Boiled eggs in flavorful curry', veg: false }
    ],
    breads: [
      { name: 'Butter Naan', description: 'Soft bread brushed with butter', veg: true },
      { name: 'Garlic Naan', description: 'Naan topped with garlic and herbs', veg: true, popular: true },
      { name: 'Tandoori Roti', description: 'Whole wheat bread from tandoor', veg: true },
      { name: 'Jeera Rice', description: 'Fragrant cumin-flavored rice', veg: true },
      { name: 'Veg Pulao', description: 'Rice cooked with vegetables and spices', veg: true },
      { name: 'Steamed Rice', description: 'Plain steamed basmati rice', veg: true }
    ],
    desserts: [
      { name: 'Gulab Jamun', description: 'Soft milk dumplings in sugar syrup', veg: true, popular: true },
      { name: 'Ras Malai', description: 'Cottage cheese patties in sweetened milk', veg: true },
      { name: 'Ice Cream', description: 'Assorted flavors of premium ice cream', veg: true },
      { name: 'Gajar Halwa', description: 'Sweet carrot pudding with nuts', veg: true },
      { name: 'Kulfi', description: 'Traditional Indian frozen dessert', veg: true },
      { name: 'Fruit Salad', description: 'Fresh seasonal fruits mix', veg: true }
    ],
    beverages: [
      { name: 'Masala Chai', description: 'Traditional spiced Indian tea', veg: true },
      { name: 'Coffee', description: 'Freshly brewed aromatic coffee', veg: true },
      { name: 'Fresh Juice', description: 'Seasonal fruit juices', veg: true },
      { name: 'Lassi', description: 'Sweet or salted yogurt drink', veg: true, popular: true },
      { name: 'Mocktails', description: 'Refreshing non-alcoholic cocktails', veg: true },
      { name: 'Soft Drinks', description: 'Assorted carbonated beverages', veg: true }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Delicious Food Selection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse menu featuring traditional Indian delicacies and international 
            cuisines, all prepared with fresh ingredients and authentic flavors.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max mx-auto justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-amber-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {menuItems[activeCategory].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <div className="flex items-center space-x-2">
                  {item.veg && (
                    <span className="w-5 h-5 border-2 border-green-600 flex items-center justify-center">
                      <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
                    </span>
                  )}
                  {item.popular && (
                    <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Special Diet Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Special Dietary Options
              </h3>
              <p className="text-gray-600 mb-6">
                We understand and respect diverse dietary requirements. Our kitchen is equipped 
                to prepare special meals according to your needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">100% Vegetarian Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Soup className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Jain Food Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Salad className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Vegan Friendly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <UtensilsCrossed className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Gluten-Free Options</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <Download className="w-12 h-12 text-amber-700 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Download Full Menu</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get our complete menu with prices
                </p>
                <button className="px-6 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Menu CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            We can create custom menus tailored to your preferences and requirements.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
          >
            Request Custom Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;