import React, { useState } from 'react';
import { X } from 'lucide-react';

function GalleryImage({ src, alt, category }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div 
        className="relative overflow-hidden rounded-lg cursor-pointer group"
        onClick={openLightbox}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="text-white text-center p-4">
            <div className="text-sm bg-primary-700 px-2 py-1 rounded-full inline-block mb-2">
              {category}
            </div>
            <p className="font-medium">{alt}</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          <div 
            className="max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="text-white text-center mt-4">
              <p className="font-medium">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryImage;