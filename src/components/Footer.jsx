import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">MCN Youth Fellowship</h4>
            <p className="text-neutral-200 mb-4">
              Nurturing young minds in faith, fellowship, and service to become 
              effective disciples of Christ in the Methodist tradition.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-secondary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-secondary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-secondary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-secondary-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/methodisim" className="text-neutral-200 hover:text-white transition-colors">
                  Methodisim
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-neutral-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-200 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Departments</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/departments" className="text-neutral-200 hover:text-white transition-colors">
                  Evangelism
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-neutral-200 hover:text-white transition-colors">
                  Music & Worship
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-neutral-200 hover:text-white transition-colors">
                  Bible Study
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-neutral-200 hover:text-white transition-colors">
                  Community Outreach
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-neutral-200 hover:text-white transition-colors">
                  Prayer Warriors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-200">
                  Methodist Church Nigeria<br />
                  Agbani Diocese Headquarters<br />
                  Agbani, Enugu State, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary-400 mr-2 flex-shrink-0" />
                <a href="tel:+2348012345678" className="text-neutral-200 hover:text-white transition-colors">
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@mcnyouthagbani.org" className="text-neutral-200 hover:text-white transition-colors">
                  info@mcnyouthagbani.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-900 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-300 text-sm">
              &copy; {currentYear} Methodist Church Nigeria Youth Fellowship, Agbani Diocese. All Rights Reserved.
            </p>
            <div className="mt-2 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;