import React from 'react';

function PageHeader({ 
  title, 
  description, 
  backgroundImage = 'https://images.pexels.com/photos/16760853/pexels-photo-16760853/free-photo-of-arches-and-columns-in-church.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}) {
  return (
    <div 
      className="relative py-20 md:py-32 bg-primary-900 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 30, 66, 0.8), rgba(10, 30, 66, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl animate-slide-in">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default PageHeader;