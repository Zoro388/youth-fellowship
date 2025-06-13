import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

function EventCard({
  title,
  date,
  time,
  location,
  description,
  image
}) {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-xl font-bold text-primary-800 mb-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Calendar size={16} className="mr-2 text-primary-600" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <Clock size={16} className="mr-2 text-primary-600" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <MapPin size={16} className="mr-2 text-primary-600" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-neutral-700 mb-4">{description}</p>
        
        <button className="btn btn-outline text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default EventCard;