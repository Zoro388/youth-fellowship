import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

// Contact Page
// Provides contact information and a form for visitors to send messages
const Contact = () => {
  return (
    <div>
      {/* Page Header */}
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our fellowship team. We'd love to hear from you!"
        backgroundImage="https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Contact Information and Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Get in Touch</h2>
              <p className="text-neutral-700 mb-8">
                We'd love to hear from you! Whether you have questions about our fellowship, 
                want to join an event, or need prayer support, feel free to reach out to us 
                using any of the contact methods below.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-800 mb-2">Visit Us</h3>
                    <address className="not-italic text-neutral-700">
                      Methodist Church Nigeria<br />
                      Agbani Diocese Headquarters<br />
                      Agbani, Enugu State, Nigeria
                    </address>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Phone className="text-primary-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-800 mb-2">Call Us</h3>
                    <p className="text-neutral-700">
                      <a href="tel:+2348012345678" className="hover:text-primary-600 transition-colors">
                        +234 801 234 5678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Mail className="text-primary-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-800 mb-2">Email Us</h3>
                    <p className="text-neutral-700">
                      <a href="mailto:info@mcnyouthagbani.org" className="hover:text-primary-600 transition-colors">
                        info@mcnyouthagbani.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Clock className="text-primary-700" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-800 mb-2">Fellowship Hours</h3>
                    <p className="text-neutral-700">
                      Youth Fellowship: Sundays at 3:00 PM<br />
                      Bible Study: Wednesdays at 5:00 PM<br />
                      Prayer Meeting: Fridays at 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-primary-800 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 hover:bg-primary-700 hover:text-white transition-colors"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 hover:bg-primary-700 hover:text-white transition-colors"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 hover:bg-primary-700 hover:text-white transition-colors"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-700 hover:bg-primary-700 hover:text-white transition-colors"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-neutral-50 px-0">
        <div className="container-custom mb-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Location</h2>
        </div>
        <div className="bg-neutral-200 h-96 w-full flex items-center justify-center">
          <p className="text-neutral-600">
            Interactive map will be embedded here
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-800 mb-3">How do I join the Youth Fellowship?</h3>
              <p className="text-neutral-700">
                You can join by attending any of our Sunday fellowship meetings. 
                Our members will welcome you and help you get integrated into the fellowship.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-800 mb-3">What age group is the Youth Fellowship for?</h3>
              <p className="text-neutral-700">
                Our fellowship is primarily for young people between the ages of 15 and 35, 
                but we welcome anyone who wishes to join in our activities.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-800 mb-3">Do I need to be a Methodist to join?</h3>
              <p className="text-neutral-700">
                No, while we operate within the Methodist tradition, we welcome young people from 
                all Christian denominations who wish to grow in their faith.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-800 mb-3">How can I volunteer or get involved?</h3>
              <p className="text-neutral-700">
                You can volunteer by joining any of our departments based on your interests and skills. 
                Reach out to us through the contact form for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request */}
      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Prayer?</h2>
            <p className="text-xl text-neutral-200 mb-8">
              Our prayer team is committed to praying for your needs. Submit your prayer requests, and we'll lift them up in prayer.
            </p>
            <a href="#" className="btn bg-white text-primary-700 hover:bg-neutral-100">
              Submit Prayer Request
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
