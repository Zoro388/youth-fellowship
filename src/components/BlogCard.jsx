import React from 'react';
import { Calendar, User } from 'lucide-react';

function BlogCard({
  title,
  excerpt,
  author,
  date,
  image,
  category
}) {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary-700 text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-xl font-bold text-primary-800 mb-2 hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center space-x-4 mb-3 text-sm text-neutral-600">
          <div className="flex items-center">
            <User size={14} className="mr-1 text-primary-600" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 text-primary-600" />
            <span>{date}</span>
          </div>
        </div>
        
        <p className="text-neutral-700 mb-4">{excerpt}</p>
        
        <button className="text-primary-700 font-medium hover:text-primary-600 transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
}

export default BlogCard;