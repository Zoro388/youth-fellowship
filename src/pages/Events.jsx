import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import EventCard from '../components/EventCard';
import { Calendar, Filter } from 'lucide-react';

// Events Page
// Displays upcoming and past events with filtering options
function Events() {
  const [activeFilter, setActiveFilter] = useState('all');

  const eventsData = [
    {
      title: 'Annual Youth Convention',
      date: 'June 15-18, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'MCN Cathedral, Agbani',
      description: 'Join us for our annual youth convention, featuring worship, teachings, and fellowship.',
      image: 'https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'conference'
    },
    {
      title: 'Community Outreach Program',
      date: 'July 8, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Agbani Town Hall',
      description: 'Reach out to the community through various service activities and evangelism.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'outreach'
    },
    {
      title: 'Bible Study Conference',
      date: 'August 12-13, 2025',
      time: '4:00 PM - 7:00 PM',
      location: 'Methodist Church Agbani',
      description: 'Deepen your understanding of the scriptures through intensive study and discussion.',
      image: 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'bible-study'
    },
    {
      title: 'Youth Worship Night',
      date: 'May 25, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'MCN Youth Center',
      description: 'A night of praise, worship, and spiritual renewal for all youth.',
      image: 'https://images.pexels.com/photos/7869238/pexels-photo-7869238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'worship'
    },
    {
      title: 'Leadership Training Workshop',
      date: 'September 5, 2025',
      time: '9:00 AM - 3:00 PM',
      location: 'Methodist Conference Center',
      description: 'Develop essential leadership skills for effective service in the church and beyond.',
      image: 'https://images.pexels.com/photos/7691844/pexels-photo-7691844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'workshop'
    },
    {
      title: 'Sports & Fellowship Day',
      date: 'October 10, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Agbani Community Sports Complex',
      description: 'A day of friendly sports competitions and fellowship among youth from different parishes.',
      image: 'https://images.pexels.com/photos/8112110/pexels-photo-8112110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'fellowship'
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.category === activeFilter);

  return (
    <div>
      <PageHeader 
        title="Events" 
        description="Join us for our upcoming events and activities."
        backgroundImage="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Events Calendar Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-2">Upcoming Events</h2>
              <p className="text-neutral-600">Join us for these exciting events and activities.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
              <Calendar size={20} className="text-primary-600 mr-2" />
              <span className="text-neutral-600">Calendar View Coming Soon</span>
            </div>
          </div>

          {/* Event Filters */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <Filter size={18} className="text-primary-600 mr-2" />
              <span className="font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'conference', 'outreach', 'bible-study', 'worship', 'workshop', 'fellowship'].map(category => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-primary-700 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category === 'all' 
                    ? 'All Events' 
                    : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No events found for this category.</p>
              <button 
                className="mt-4 px-6 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
                onClick={() => setActiveFilter('all')}
              >
                View All Events
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Event Registration Info */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">Event Registration Information</h3>
            <p className="mb-4">
              To participate in our events, you can register in any of the following ways:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Contact our fellowship secretary through the contact page</li>
              <li>Register in person at the church office during working hours</li>
              <li>Register on-site at the event (subject to availability)</li>
            </ul>
            <p className="mb-4">
              Some events may have limited capacity, so early registration is encouraged to secure your spot.
            </p>
            <a href="/contact" className="btn btn-primary inline-block">
              Contact for Registration
            </a>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Past Events</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="md:w-1/4">
                <img 
                  src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Easter Retreat" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-primary-800 mb-2">Easter Youth Retreat 2024</h3>
                <p className="text-sm text-neutral-600 mb-3">April 10-12, 2024 • MCN Retreat Center</p>
                <p className="text-neutral-700 mb-4">
                  A three-day retreat focused on spiritual renewal and fellowship during the Easter season. 
                  The theme was "Risen with Christ" and featured worship sessions, Bible studies, and outdoor activities.
                </p>
                <button className="text-primary-700 font-medium hover:text-primary-600 transition-colors">
                  View Photos →
                </button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 p-6 border border-neutral-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="md:w-1/4">
                <img 
                  src="https://images.pexels.com/photos/8111311/pexels-photo-8111311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Christmas Carol" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-primary-800 mb-2">Christmas Carol Night 2023</h3>
                <p className="text-sm text-neutral-600 mb-3">December 18, 2023 • MCN Cathedral</p>
                <p className="text-neutral-700 mb-4">
                  An evening of Christmas carols, drama presentations, and fellowship to celebrate the birth of Christ.
                  The event featured performances from the youth choir and drama team.
                </p>
                <button className="text-primary-700 font-medium hover:text-primary-600 transition-colors">
                  View Photos →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting an Event */}
      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Want to Host or Sponsor an Event?</h2>
            <p className="text-xl text-neutral-200 mb-8">
              We welcome partnerships with individuals, organizations, and other churches for our events.
            </p>
            <a href="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">
              Contact Us to Discuss
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
