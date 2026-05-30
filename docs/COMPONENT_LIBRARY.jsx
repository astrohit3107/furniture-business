// LUXESPACES Component Library & Reusable Patterns

/**
 * This file contains reusable components and patterns
 * that can be copy-pasted and customized for various use cases
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ============================================
// BUTTONS
// ============================================

export const PrimaryButton = ({ children, onClick, ...props }) => (
  <motion.button
    className="px-8 py-4 bg-black text-white rounded-full font-semibold text-base"
    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

export const SecondaryButton = ({ children, onClick, ...props }) => (
  <motion.button
    className="px-8 py-4 border-2 border-black text-black rounded-full font-semibold text-base"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.05)' }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

export const GhostButton = ({ children, onClick, ...props }) => (
  <motion.button
    className="px-6 py-2 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-100"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    {...props}
  >
    {children}
  </motion.button>
);

// ============================================
// CARDS
// ============================================

export const FeatureCard = ({ icon, title, description, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-amber-200 transition cursor-pointer"
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
    )}
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export const TestimonialCard = ({ name, role, text, image }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="p-8 bg-gradient-to-br from-white to-amber-50 rounded-2xl border border-amber-100"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-amber-400">★</span>
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">&quot;{text}&quot;</p>
    <div className="flex items-center gap-4">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      )}
      <div>
        <p className="font-bold text-black">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  </motion.div>
);

export const PricingCard = ({ title, price, features, popular }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`relative p-8 rounded-2xl border-2 transition ${
      popular
        ? 'border-amber-600 bg-gradient-to-br from-black to-gray-900 text-white'
        : 'border-gray-200 bg-white'
    }`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-amber-600 text-white rounded-full text-sm font-bold">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-4xl font-bold mb-6">
      {price}
      <span className="text-lg font-normal">/mo</span>
    </p>
    <ul className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <span className="text-amber-400 font-bold">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <PrimaryButton className="w-full text-center">Get Started</PrimaryButton>
  </motion.div>
);

// ============================================
// FORMS
// ============================================

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          required
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        className="w-full px-6 py-3 bg-black text-white rounded-full font-semibold"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-green-600 font-semibold"
        >
          Thank you! We'll be in touch soon.
        </motion.p>
      )}
    </form>
  );
};

// ============================================
// SECTIONS
// ============================================

export const SectionHeader = ({ title, subtitle, highlight }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
      {title}
      {highlight && <span className="text-amber-600 block">{highlight}</span>}
    </h2>
    {subtitle && (
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

export const AnimatedCounter = ({ target, label, suffix = '' }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
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
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-amber-600 mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

// ============================================
// TESTIMONIAL SLIDER
// ============================================

export const TestimonialSlider = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  return (
    <motion.div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <TestimonialCard {...testimonials[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? 'bg-black' : 'bg-gray-300'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ============================================
// ANIMATED TABS
// ============================================

export const AnimatedTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-8 border-b-2 border-gray-200">
        {tabs.map((tab, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`py-4 px-6 font-semibold text-lg transition ${
              activeTab === i
                ? 'text-black border-b-2 border-black'
                : 'text-gray-600 border-b-2 border-transparent'
            }`}
            whileHover={{ color: '#000' }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ============================================
// IMAGE REVEAL
// ============================================

export const RevealImage = ({ src, alt, className }) => (
  <motion.div
    className={`overflow-hidden rounded-xl ${className}`}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

// ============================================
// GRADIENT TEXT
// ============================================

export const GradientText = ({ children, className = '' }) => (
  <span
    className={`bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </span>
);

// ============================================
// ANIMATED DIVIDER
// ============================================

export const AnimatedDivider = () => (
  <motion.div
    className="h-1 bg-gradient-to-r from-transparent via-black to-transparent"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  />
);

// ============================================
// FLOATING ICON
// ============================================

export const FloatingIcon = ({ icon, delay = 0 }) => (
  <motion.div
    className="text-5xl"
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
    }}
  >
    {icon}
  </motion.div>
);

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// Example 1: Using PrimaryButton
<PrimaryButton onClick={() => alert('Clicked!')}>
  Click Me
</PrimaryButton>

// Example 2: Using FeatureCard
<FeatureCard
  icon="🏠"
  title="Custom Furniture"
  description="Tailored to your space and style"
  image="https://..."
/>

// Example 3: Using AnimatedCounter
<AnimatedCounter target={2000} label="Homes Transformed" suffix="+" />

// Example 4: Using ContactForm
<ContactForm />

// Example 5: Using AnimatedTabs
<AnimatedTabs
  tabs={[
    { label: 'Tab 1', content: <div>Content 1</div> },
    { label: 'Tab 2', content: <div>Content 2</div> },
  ]}
/>

// Example 6: Using TestimonialSlider
<TestimonialSlider testimonials={[
  {
    name: 'John Doe',
    role: 'Homeowner',
    text: 'Amazing transformation!',
    image: 'https://...',
  },
]} />
*/

export default {
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  FeatureCard,
  TestimonialCard,
  PricingCard,
  ContactForm,
  SectionHeader,
  AnimatedCounter,
  TestimonialSlider,
  AnimatedTabs,
  RevealImage,
  GradientText,
  AnimatedDivider,
  FloatingIcon,
};
