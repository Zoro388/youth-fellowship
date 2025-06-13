import React from 'react';
import PageHeader from '../components/PageHeader';
import { Music, Book, Heart, Users, MessageSquare, Globe } from 'lucide-react';

const Departments = () => {
  const departments = [
    {
      title: 'Worship & Music',
      icon: <Music size={24} className="text-primary-600" />,
      description: 'Leads the fellowship in worship through music, singing, and creative arts. Responsible for coordinating worship sessions during meetings and events.',
      activities: ['Weekly choir practice', 'Instrument training', 'Worship night coordination', 'Musical productions'],
      leader: 'Chinedu Eze',
      image: 'https://images.pexels.com/photos/7641836/pexels-photo-7641836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Bible Study',
      icon: <Book size={24} className="text-primary-600" />,
      description: 'Facilitates in-depth study of the Bible and develops study materials for fellowship meetings. Focuses on helping members grow in their understanding of Scripture.',
      activities: ['Weekly Bible study sessions', 'Scripture memorization challenges', 'Theological discussions', 'Study resource development'],
      leader: 'Grace Okonkwo',
      image: 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Evangelism & Outreach',
      icon: <Globe size={24} className="text-primary-600" />,
      description: 'Plans and coordinates outreach activities to share the gospel and meet community needs. Focuses on community service and evangelistic missions.',
      activities: ['Community service projects', 'Hospital visitations', 'School outreach programs', 'Evangelistic campaigns'],
      leader: 'Emmanuel Nwachukwu',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Prayer Warriors',
      icon: <Heart size={24} className="text-primary-600" />,
      description: 'Dedicated to intercession and spiritual warfare. Organizes prayer meetings and teaches about effective prayer life.',
      activities: ['Weekly prayer meetings', 'Prayer walks', 'Prayer and fasting programs', 'Prayer request ministry'],
      leader: 'Blessing Okoli',
      image: 'https://images.pexels.com/photos/1246291/pexels-photo-1246291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Discipleship & Mentoring',
      icon: <Users size={24} className="text-primary-600" />,
      description: 'Focuses on one-on-one and small group discipleship to help members grow in their faith journey and develop as leaders.',
      activities: ['Mentoring partnerships', 'Leadership development workshops', 'Small group discipleship', 'New member integration'],
      leader: 'Joshua Amadi',
      image: 'https://images.pexels.com/photos/7691844/pexels-photo-7691844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Communications',
      icon: <MessageSquare size={24} className="text-primary-600" />,
      description: 'Manages all communication channels including social media, website, and print materials. Ensures effective information sharing.',
      activities: ['Social media management', 'Website maintenance', 'Newsletter production', 'Event promotion'],
      leader: 'Amaka Eze',
      image: 'https://images.pexels.com/photos/6237733/pexels-photo-6237733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Departments" 
        description="Discover the various departments that make up our fellowship and find where you can serve."
        backgroundImage="https://images.pexels.com/photos/8111438/pexels-photo-8111438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Fellowship Departments</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Our fellowship operates through various departments, each focused on specific aspects of ministry. 
              These departments work together to fulfill our mission and provide opportunities for members to 
              use their gifts and talents in service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="card overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      {dept.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary-800">{dept.title}</h3>
                  </div>
                  <p className="text-neutral-700 mb-4">{dept.description}</p>
                  <div className="mt-auto">
                    <p className="text-sm font-medium text-primary-700 mb-1">Department Lead:</p>
                    <p className="text-neutral-800">{dept.leader}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {departments.map((dept, index) => (
        <section key={index} className={`section ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}>
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                <img 
                  src={dept.image} 
                  alt={dept.title} 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    {dept.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-primary-800">{dept.title}</h2>
                </div>
                <p className="text-neutral-700 mb-6">{dept.description}</p>
                
                <h3 className="text-xl font-bold text-primary-700 mb-3">Key Activities</h3>
                <ul className="space-y-2 mb-6">
                  {dept.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-primary-100 rounded-full p-1 mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span className="text-neutral-700">{activity}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center mb-6">
                  <span className="font-medium text-neutral-800 mr-2">Department Lead:</span>
                  <span className="text-primary-700">{dept.leader}</span>
                </div>
                
                <button className="btn btn-primary">
                  Join This Department
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Find Your Place to Serve</h2>
            <p className="text-xl text-neutral-200 mb-8">
              Everyone has a place to serve in the fellowship. Discover your gifts and join a department today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn bg-white text-primary-700 hover:bg-neutral-100">
                Contact Us
              </a>
              <a href="#" className="btn bg-secondary-600 text-white hover:bg-secondary-700">
                Take Gifts Assessment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
