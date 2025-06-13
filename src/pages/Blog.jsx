import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      title: "Growing in Faith: A Youth's Journey",
      excerpt: "Personal reflections on spiritual growth and the challenges young Christians face in today's world.",
      author: 'Chioma Okafor',
      date: 'May 15, 2025',
      image: 'https://images.pexels.com/photos/1261773/pexels-photo-1261773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Faith'
    },
    {
      title: 'The Power of Prayer in Daily Life',
      excerpt: 'Exploring how consistent prayer can transform our everyday experiences and challenges.',
      author: 'Emmanuel Eze',
      date: 'April 28, 2025',
      image: 'https://images.pexels.com/photos/1246291/pexels-photo-1246291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Prayer'
    },
    {
      title: "Community Service: Reflecting Christ's Love",
      excerpt: "How our outreach programs demonstrate Christ's love to the broader community.",
      author: 'Grace Nwachukwu',
      date: 'April 10, 2025',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Service'
    },
    {
      title: 'Understanding Methodist Traditions',
      excerpt: 'An introduction to Methodist traditions and practices for youth members.',
      author: 'Pastor Samuel Okeke',
      date: 'March 22, 2025',
      image: 'https://images.pexels.com/photos/16760856/pexels-photo-16760856/free-photo-of-an-altar-in-a-church.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Methodism'
    },
    {
      title: 'Building Authentic Christian Relationships',
      excerpt: 'How to develop meaningful friendships that support your faith journey.',
      author: 'Joshua Amadi',
      date: 'March 5, 2025',
      image: 'https://images.pexels.com/photos/8111438/pexels-photo-8111438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Relationships'
    },
    {
      title: 'Balancing Faith and Academics',
      excerpt: 'Practical tips for maintaining your faith while excelling in your studies.',
      author: 'Blessing Okoli',
      date: 'February 18, 2025',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Lifestyle'
    },
    {
      title: 'Music in Worship: The Methodist Tradition',
      excerpt: 'Exploring the rich history and significance of music in Methodist worship.',
      author: 'Chinedu Eze',
      date: 'February 3, 2025',
      image: 'https://images.pexels.com/photos/7641836/pexels-photo-7641836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Worship'
    },
    {
      title: 'Youth Leadership in the Church',
      excerpt: 'The importance of developing young leaders and giving them opportunities to serve.',
      author: 'John Okafor',
      date: 'January 20, 2025',
      image: 'https://images.pexels.com/photos/6456211/pexels-photo-6456211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Leadership'
    },
    {
      title: 'Finding Your Purpose as a Young Christian',
      excerpt: "Guidance on discovering God's calling for your life and walking in your purpose.",
      author: 'Amaka Ezeh',
      date: 'January 5, 2025',
      image: 'https://images.pexels.com/photos/2662793/pexels-photo-2662793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Purpose'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <PageHeader 
        title="Blog" 
        description="Insights, reflections, and updates from our fellowship."
        backgroundImage="https://images.pexels.com/photos/2662793/pexels-photo-2662793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts by title, category, or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search size={18} className="text-neutral-400" />
                </div>
                <button type="submit" className="hidden">Search</button>
              </div>
            </form>
          </div>

          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-neutral-600">No posts found matching your search.</p>
              <button 
                className="mt-4 px-6 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          )}

          {filteredPosts.length > postsPerPage && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${
                    currentPage === 1
                      ? 'text-neutral-400 cursor-not-allowed'
                      : 'text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  <ArrowLeft size={20} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-md ${
                      currentPage === number
                        ? 'bg-primary-700 text-white'
                        : 'text-neutral-700 hover:bg-primary-50'
                    }`}
                  >
                    {number}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${
                    currentPage === totalPages
                      ? 'text-neutral-400 cursor-not-allowed'
                      : 'text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  <ArrowRight size={20} />
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Featured Post</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/8108518/pexels-photo-8108518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Featured post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full inline-block mb-4">
                  Special Feature
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Celebrating 30 Years of Youth Ministry</h3>
                <p className="text-neutral-700 mb-6">
                  As we celebrate three decades of youth ministry in the Methodist Church Nigeria, Agbani Diocese, 
                  we reflect on the journey, the impact, and the countless lives that have been transformed through this fellowship.
                </p>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-primary-800">Bishop Samuel Eneh</p>
                    <p className="text-sm text-neutral-600">May 1, 2025</p>
                  </div>
                </div>
                <button className="btn btn-primary">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-neutral-200 mb-8">
              Stay updated with the latest news, events, and articles from our fellowship. 
              We send a monthly newsletter with all the important updates.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md focus:ring-2 focus:ring-secondary-500"
                />
                <button type="submit" className="btn bg-secondary-600 text-white hover:bg-secondary-700 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-neutral-300 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
