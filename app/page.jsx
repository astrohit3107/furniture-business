'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// ============================================
// LUXURY FURNITURE BRAND WEBSITE
// Production-ready, optimized for Vercel
// ============================================

const LuxuryFurnitureWebsite = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      <Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <main>
        <HeroSection />
        <TransformationSection />
        <ServicesSection />
        <ProcessSection />
        <ExperienceSection />
        <GallerySection />
        <StatsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

const Navigation = ({ isOpen, setIsOpen }) => {
  const navItems = ['Services', 'Projects', 'Process', 'About'];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div className="text-2xl font-bold tracking-tight" whileHover={{ scale: 1.05 }}>
          <span className="text-black">LUXE</span>
          <span className="text-amber-600">SPACES</span>
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-black transition"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Book a consultation"
          >
            Book Consultation
          </motion.button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsNavOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="space-y-1.5">
            <div className="w-6 h-0.5 bg-black" />
            <div className="w-6 h-0.5 bg-black" />
            <div className="w-6 h-0.5 bg-black" />
          </div>
        </button>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-white via-amber-50 to-white pt-20 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-medium">
            ✨ Transforming Living Spaces Since 1998
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight tracking-tight max-w-4xl"
          style={{ opacity, y }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          From Bare Walls to
          <br />
          <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            Beautiful Living
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Your complete home transformation partner. We design, manufacture, and transform your space
          into a luxurious sanctuary.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-black text-white rounded-full font-semibold text-base flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore transformations"
          >
            Explore Transformations →
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-black text-black rounded-full font-semibold text-base"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.05)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Book free consultation"
          >
            Book Free Consultation
          </motion.button>
        </motion.div>

        <FloatingElement delay={1} bottom="20%" left="10%">
          <div className="w-20 h-20 rounded-lg bg-amber-200 opacity-30" aria-hidden="true" />
        </FloatingElement>
        <FloatingElement delay={1.5} bottom="30%" right="10%">
          <div className="w-32 h-32 rounded-full bg-gray-200 opacity-20" aria-hidden="true" />
        </FloatingElement>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </motion.section>
  );
};

const TransformationSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Modern Minimalist Living',
      before: 'https://images.unsplash.com/photo-1607165214902-0e6f2e5a5aef?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600121848371-bb4dc53f1399?w=800&q=80',
    },
    {
      title: 'Contemporary Elegance',
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612ba94d?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      title: 'Luxury Residential',
      before: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      after: 'https://images.unsplash.com/photo-1600121848371-bb4dc53f1399?w=800&q=80',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Your Space,
            <br />
            <span className="text-amber-600">Completely Transformed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we turn empty apartments into dream homes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <BeforeAfterSlider
            before={projects[selectedProject].before}
            after={projects[selectedProject].after}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {projects.map((project, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedProject(i)}
              className={`px-6 py-3 rounded-full font-medium transition ${
                selectedProject === i
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={selectedProject === i}
            >
              {project.title}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { icon: '🏠', title: 'Custom Furniture', description: 'Bespoke pieces designed for your space' },
    { icon: '🍳', title: 'Modular Kitchens', description: 'Complete kitchen solutions with premium finishes' },
    { icon: '✨', title: 'Interior Design', description: 'Professional design consultation and execution' },
    { icon: '👔', title: 'Wardrobes', description: 'Custom storage solutions maximizing space' },
    { icon: '📐', title: 'Space Planning', description: 'Optimal layouts for perfect functionality' },
    { icon: '💡', title: 'Lighting Design', description: 'Ambient and accent lighting solutions' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-black text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Complete Home
          <br />
          <span className="text-amber-600">Solutions</span>
        </motion.h2>

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Everything you need to transform your space
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-amber-200 transition cursor-pointer group"
    >
      <motion.div
        className="text-5xl mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        aria-hidden="true"
      >
        {service.icon}
      </motion.div>
      <h3 className="text-xl font-bold text-black mb-2">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
      <motion.div
        className="mt-4 w-1 h-1 bg-amber-600 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 16 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </motion.div>
  );
};

const ProcessSection = () => {
  const steps = [
    { number: '01', title: 'Consultation', description: 'Understand your vision and space' },
    { number: '02', title: 'Design Planning', description: 'Create detailed design mockups' },
    { number: '03', title: 'Material Selection', description: 'Choose premium materials and finishes' },
    { number: '04', title: 'Manufacturing', description: 'Craft your custom pieces' },
    { number: '05', title: 'Installation', description: 'Professional setup in your space' },
    { number: '06', title: 'Final Styling', description: 'Perfect finishing touches' },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our <span className="text-amber-400">Process</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-bold text-gray-800 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>

              {i < steps.length - 1 && (
                <motion.div
                  className="absolute -bottom-12 -right-6 w-12 h-12 border-2 border-amber-400 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const highlights = [
    { text: '15+', subtext: 'Years of Manufacturing Excellence' },
    { text: '2000+', subtext: 'Homes Transformed' },
    { text: '100%', subtext: 'Customization Capability' },
    { text: '24/7', subtext: 'Design Support' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Why Choose
            <br />
            <span className="text-amber-600">LUXESPACES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-amber-600 mb-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              >
                {item.text}
              </motion.div>
              <p className="text-gray-600">{item.subtext}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    { category: 'living', image: 'https://images.unsplash.com/photo-1600121848371-bb4dc53f1399?w=400&q=80', title: 'Modern Living' },
    { category: 'kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', title: 'Luxury Kitchen' },
    { category: 'bedroom', image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=400&q=80', title: 'Master Bedroom' },
    { category: 'living', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80', title: 'Contemporary Living' },
    { category: 'kitchen', image: 'https://images.unsplash.com/photo-1600566753086-00f18282e969?w=400&q=80', title: 'Modern Kitchen' },
    { category: 'bedroom', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80', title: 'Elegant Bedroom' },
  ];

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-black text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Project <span className="text-amber-600">Gallery</span>
        </motion.h2>

        <motion.div
          className="flex justify-center gap-4 mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {['all', 'living', 'kitchen', 'bedroom'].map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition capitalize ${
                filter === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={filter === cat}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <motion.div className="absolute inset-0 bg-black/50 flex items-end p-6 opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-amber-400">Thousands</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatCard number="2000+" label="Homes Transformed" />
          <StatCard number="15+" label="Years of Excellence" />
          <StatCard number="500+" label="Manufacturing Team" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const target = parseInt(number);
    const increment = target / 50;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center p-8"
    >
      <div className="text-6xl font-bold text-amber-400 mb-4">
        {count}
        {number.includes('+') ? '+' : ''}
      </div>
      <p className="text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
};

const FinalCTASection = () => {
  return (
    <motion.section
      className="relative py-32 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />

      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Dream Home
          <br />
          Starts <span className="text-amber-400">Here</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let&apos;s create a space that reflects your lifestyle and personality. Schedule a free
          consultation with our design experts.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black rounded-full font-bold text-base transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Free Consultation
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-base hover:bg-white hover:text-black transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Site Visit
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-amber-400">LUXE</span>SPACES
            </h3>
            <p className="text-gray-400">Transforming homes since 1998</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Custom Furniture</a></li>
              <li><a href="#" className="hover:text-white transition">Interior Design</a></li>
              <li><a href="#" className="hover:text-white transition">Space Planning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Projects</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LUXESPACES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingElement = ({ delay, bottom, left, right, children }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ bottom, left, right }}
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
    >
      {children}
    </motion.div>
  );
};

const BeforeAfterSlider = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-col-resize bg-gray-200"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <img src={after} alt="After transformation" className="absolute inset-0 w-full h-full object-cover" />

      <motion.div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt="Before transformation" className="w-screen h-full object-cover" />
      </motion.div>

      <motion.div className="absolute top-0 bottom-0 w-1 bg-white" style={{ left: `${position}%` }}>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-gray-800 rounded-full" />
            <div className="w-0.5 h-4 bg-gray-800 rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="absolute top-4 left-4 text-white font-semibold text-sm">Before</motion.div>
      <motion.div className="absolute top-4 right-4 text-white font-semibold text-sm">After</motion.div>
    </motion.div>
  );
};

export default LuxuryFurnitureWebsite;
