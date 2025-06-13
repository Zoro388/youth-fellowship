import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import GalleryImage from '../components/GalleryImage';

// Gallery Page
// Displays photos from various events and activities
const Gallery: React.FC = () => {
  // Filter state
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample gallery images
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/8108518/pexels-photo-8108518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Youth Convention 2024',
      category: 'conventions'
    },
    {
      src: 'https://images.pexels.com/photos/8111438/pexels-photo-8111438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Fellowship Meeting',
      category: 'meetings'
    },
    {
      src: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Community Outreach',
      category: 'outreach'
    },
    {
      src: 'https://images.pexels.com/photos/7869238/pexels-photo-7869238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Worship Session',
      category: 'worship'
    },
    {
      src: 'https://images.pexels.com/photos/7641836/pexels-photo-7641836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Choir Performance',
      category: 'worship'
    },
    {
      src: 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Bible Study Group',
      category: 'meetings'
    },
    {
      src: 'https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Youth Conference',
      category: 'conventions'
    },
    {
      src: 'https://images.pexels.com/photos/8112110/pexels-photo-8112110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Sports Fellowship Day',
      category: 'activities'
    },
    {
      src: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Easter Retreat',
      category: 'retreats'
    },
    {
      src: 'https://images.pexels.com/photos/8111311/pexels-photo-8111311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Christmas Carol',
      category: 'celebrations'
    },
    {
      src: 'https://images.pexels.com/photos/7691844/pexels-photo-7691844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Leadership Workshop',
      category: 'workshops'
    },
    {
      src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Hospital Visitation',
      category: 'outreach'
    }
  ];

  // Filter images based on selected category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  // Get unique categories
  const categories = ['all', ...new Set(galleryImages.map(image => image.category))];

  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Photo Gallery" 
        description="Explore photos from our events, activities, and gatherings."
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-primary-700 text-white' 
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <GalleryImage key={index} {...image} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No images found in this category.</p>
              <button 
                className="mt-4 px-6 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
                onClick={() => setActiveCategory('all')}
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Gallery (Placeholder) */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Video Highlights</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-neutral-100 rounded-lg p-12 mb-6 flex items-center justify-center">
              <p className="text-neutral-600">Video content coming soon...</p>
            </div>
            <p className="text-neutral-700">
              We're working on adding video highlights from our recent events and activities. 
              Check back soon to see recordings of our worship sessions, testimonies, and other special moments.
            </p>
          </div>
        </div>
      </section>

      {/* Share Your Photos */}
      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Share Your Photos</h2>
            <p className="text-xl text-neutral-200 mb-8">
              Do you have photos from our events or activities? We'd love to add them to our gallery!
            </p>
            <a href="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">
              Submit Your Photos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;