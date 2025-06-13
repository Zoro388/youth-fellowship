import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Methodisim from './pages/Methodisim';
import Events from './pages/Events';
import Departments from './pages/Departments';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="methodisim" element={<Methodisim />} />
        <Route path="events" element={<Events />} />
        <Route path="departments" element={<Departments />} />
        <Route path="blog" element={<Blog />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;