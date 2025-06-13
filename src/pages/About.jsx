import React from 'react';
import PageHeader from '../components/PageHeader';
import { Check, Target, Award } from 'lucide-react';

function About() {
  const leadershipTeam = [
    {
      name: 'John Okafor',
      role: 'Youth Fellowship President',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Amaka Ezeh',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Emmanuel Eze',
      role: 'General Secretary',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Blessing Okoro',
      role: 'Financial Secretary',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="About Us" 
        description="Learn about our fellowship, our mission, and our commitment to nurturing young Christians."
        backgroundImage="https://images.pexels.com/photos/3614167/pexels-photo-3614167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                The Methodist Church Nigeria Youth Fellowship, Agbani Diocese was established in 1995...
              </p>
              <p className="text-neutral-700 mb-4">
                What began as a small gathering of 15 youth has now grown...
              </p>
              <p className="text-neutral-700">
                Over the years, our fellowship has organized numerous outreach programs...
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8108518/pexels-photo-8108518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Group photo of youth fellowship members" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary-700 text-white py-2 px-4 rounded shadow-md">
                  <p className="text-lg font-bold">Est. 1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-neutral-700 mb-4">
                To nurture young people in Christian discipleship...
              </p>
              <ul className="space-y-2">
                {['Spiritual formation', 'Leadership development', 'Community service', 'Evangelism'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={18} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Award className="text-primary-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
              <p className="text-neutral-700 mb-4">
                To raise a generation of young people who are grounded in Scripture...
              </p>
              <p className="text-neutral-700">
                We envision a fellowship where young people discover their God-given purpose...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Our Core Values</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              These values form the foundation of our fellowship and guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Faith', text: 'Cultivating a deep, personal relationship with Christ...' },
              { title: 'Fellowship', text: 'Building authentic relationships...' },
              { title: 'Service', text: 'Using our gifts to serve others...' },
              { title: 'Growth', text: 'Continually developing spiritually and intellectually...' },
            ].map((value, index) => (
              <div key={index} className="bg-neutral-50 p-6 rounded-lg border-t-4 border-primary-700">
                <h3 className="text-xl font-bold text-primary-800 mb-3">{value.title}</h3>
                <p className="text-neutral-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 font-medium rounded-full text-sm mb-4">
              Meet Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">Leadership Team</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Our dedicated leaders who guide and serve the fellowship...
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-800 mb-1">{leader.name}</h3>
                  <p className="text-neutral-600">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-700 mb-4">
              Our leadership team works collaboratively with the Methodist Church Nigeria...
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-primary-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Fellowship</h2>
            <p className="text-xl text-neutral-200 mb-8">
              We welcome all young people who are seeking to grow in their faith...
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">
                Contact Us
              </a>
              <a href="/events" className="btn bg-secondary-600 text-white hover:bg-secondary-700">
                Attend an Event
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
