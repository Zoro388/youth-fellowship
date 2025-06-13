import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Header Component
// This component contains the navigation bar that appears on all pages
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="flex items-center">
              <div className="w-16 h-16 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI86QStCxrIsRcRPUQqhFTWlVE9bKQvUzINg&s"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-2">
                <span className="font-bold text-primary-700 text-lg leading-tight block">MCN Youth</span>
                <span className="text-xs text-neutral-600 leading-tight block">Agbani Diocese</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-700' : 'text-neutral-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-700' : 'text-neutral-700'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                `font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-700' : 'text-neutral-700'}`
              }
            >
              Events
            </NavLink>
            <NavLink 
              to="/departments" 
              className={({ isActive }) => 
                `font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-700' : 'text-neutral-700'}`
              }
            >
              Departments
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-700' : 'text-neutral-700'}`
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-700' : 'text-neutral-700'}`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `font-medium hover:text-primary-600 transition-colors ${isActive ? 'text-primary-700' : 'text-neutral-700'}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-neutral-700 hover:text-primary-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="container-custom py-4 flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium p-2 hover:bg-neutral-100 rounded transition-colors ${isActive ? 'text-primary-700 bg-neutral-100' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-medium p-2 hover:bg-neutral-100 rounded transition-colors ${isActive ? 'text-primary-700 bg-neutral-100' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/events" 
            className={({ isActive }) => 
              `font-medium p-2 hover:bg-neutral-100 rounded transition-colors ${isActive ? 'text-primary-700 bg-neutral-100' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Events
          </NavLink>
          <NavLink 
            to="/departments" 
            className={({ isActive }) => 
              `font-medium p-2 hover:bg-neutral-100 rounded transition-colors ${isActive ? 'text-primary-700 bg-neutral-100' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Departments
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `font-medium p-2 hover:bg-neutral-100 rounded transition-colors ${isActive ? 'text-primary-700 bg-neutral-100' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              `font-medium p-2 hover:bg-neutral-100 rounded transition-colors ${isActive ? 'text-primary-700 bg-neutral-100' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-medium p-2 hover:bg-neutral-100 rounded transition-colors ${isActive ? 'text-primary-700 bg-neutral-100' : 'text-neutral-700'}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;