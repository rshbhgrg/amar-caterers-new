import React from 'react';

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-8 h-8",
    default: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image */}
      <img 
        src="/amar-caterers-logo.png" 
        alt="Amar Caterers Logo" 
        className={`${sizeClasses[size]} mr-3`}
      />
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-2xl md:text-3xl font-bold text-amber-700">
          Amar Caterers
        </span>
        <span className="text-xs md:text-sm text-amber-600 font-medium hidden sm:block">
          The Perfect Solution for any Occasion
        </span>
      </div>
    </div>
  );
};

export default Logo;