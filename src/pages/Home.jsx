import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, ChevronRight, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../assests/images/img 1.jpeg';
import img2 from '../assests/images/img 2.jpeg';
import img3 from '../assests/images/img 3.jpeg';
import img4 from '../assests/images/img 4.jpeg';

import EventCard from '../components/EventCard';

// Sample data
const sliderImages = [img1, img2, img3, img4];

const upcomingEvents = [
  {
    title: 'Annual Youth Convention',
    date: 'June 15-18, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'MCN Cathedral, Agbani',
    description: 'Join us for our annual youth convention, featuring worship, teachings, and fellowship.',
    image: 'https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Community Outreach Program',
    date: 'July 8, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'Agbani Town Hall',
    description: 'Reach out to the community through various service activities and evangelism.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    title: 'Bible Study Conference',
    date: 'August 12-13, 2025',
    time: '4:00 PM - 7:00 PM',
    location: 'Methodist Church Agbani',
    description: 'Deepen your understanding of the scriptures through intensive study and discussion.',
    image: 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Home = () => {
  return (
    <div className="space-y-20">

      {/* Hero Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-[500px]"
      >
        {sliderImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-[500px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] bg-primary-800 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 30, 66, 0.7), rgba(10, 30, 66, 0.7)), url(https://images.pexels.com/photos/16760852/pexels-photo-16760852/free-photo-of-church-interior-with-rows-of-benches-and-altar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="container-custom h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Methodist Church Nigeria Youth Fellowship
            </h1>
            <p className="text-xl text-neutral-200 mb-8 animate-slide-in">
              It helps young people come to a personal faith in Jesus Christ and provides opportunities to grow spiritually.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              <Link to="/events" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-800">Upcoming Events</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8108145/pexels-photo-8108145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Youth group members smiling"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="md:w-1/2">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full text-sm mb-4">
                Welcome to our Fellowship
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Growing Together in Faith and Purpose</h2>
              <p className="text-neutral-700 mb-6">
                A vibrant community of young believers dedicated to spiritual growth, service, and spreading the gospel message.
              </p>
              <p className="text-neutral-700 mb-6">
                We offer youth a platform to develop talents, build friendships, and make a Christ-centered impact.
              </p>
              <Link to="/about" className="inline-flex items-center font-medium text-primary-700 hover:text-primary-600 transition-colors">
                Read Our Story <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-neutral-50">
        <div className="container-custom text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full text-sm mb-4">Our Core Values</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">What Guides Our Fellowship</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            These values form the foundation of our community and guide our actions, decisions, and relationships.
          </p>
        </div>

        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="text-primary-700" size={24} />,
              title: 'Faith',
              text: 'We are committed to growing in our relationship with Christ and living out our faith daily.'
            },
            {
              icon: <Users className="text-primary-700" size={24} />,
              title: 'Fellowship',
              text: 'We foster genuine relationships and create a supportive community where everyone is welcomed.'
            },
            {
              icon: <Calendar className="text-primary-700" size={24} />,
              title: 'Service',
              text: 'We are dedicated to serving others with compassion, using our gifts to make an impact.'
            }
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-primary-800 mb-3">{value.title}</h3>
              <p className="text-neutral-700">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full text-sm mb-4">
                Mark Your Calendar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800">Upcoming Events</h2>
            </div>
            <Link to="/events" className="inline-flex items-center font-medium text-primary-700 hover:text-primary-600 mt-4 md:mt-0">
              View All Events <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Growing Community</h2>
          <p className="text-xl text-neutral-200 mb-8">
            Become part of a vibrant fellowship of young believers making a difference in their community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">Contact Us</Link>
            <Link to="/events" className="btn bg-secondary-600 text-white hover:bg-secondary-700">Join an Event</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-neutral-50">
        <div className="container-custom text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full text-sm mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">What Our Members Say</h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Hear from our fellowship members about their experiences and journeys.
          </p>
        </div>

        <div className="container-custom bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <p className="text-lg text-neutral-700 italic mb-6">
            "Being part of the Methodist Youth Fellowship has transformed my spiritual life and given me a community of friends who encourage me to grow in my faith."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary-100 rounded-full mr-4"></div>
            <div>
              <h4 className="font-bold text-primary-800">Chioma Nwosu</h4>
              <p className="text-sm text-neutral-600">Fellowship Member, 3 years</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
