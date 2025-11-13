import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import SocialLink from '../sections/Contact/components/SocialLink.jsx';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      value: 'hruthviknaik03@gmail.com',
      href: 'mailto:hruthviknaik03@gmail.com',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/hruthviknaik',
      color: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/Hruth-Vik',
      color: 'hover:text-gray-400',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/hruthviknaik',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://instagram.com/hruthviknaik',
      color: 'hover:text-pink-500',
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative" style={{ '--grad1': '#10B981', '--grad2': '#06B6D4' }}>
      <div className="container-width section-padding">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-secondary-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-on-bg">Get in Touch</h3>
                <p className="text-secondary-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a friendly chat about technology and innovation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ scale: 1.02, x: 8 }}
                      className="flex items-center gap-4 p-4 rounded-xl glass-panel neon-card hover:border-primary-500/50 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary-400">{info.title}</p>
                        <p className="text-on-bg font-medium group-hover:text-primary-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-secondary-300 mb-4">Follow me on social media</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <SocialLink key={index} href={social.href} Icon={Icon} className={social.color} />
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6" aria-busy={isSubmitting}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="relative">
                      <label htmlFor="name" className="pointer-events-none absolute left-3 top-3 text-secondary-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-400">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="peer w-full px-4 py-3 rounded-lg glass-panel border text-white placeholder-transparent focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                        placeholder=" "
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <label htmlFor="email" className="pointer-events-none absolute left-3 top-3 text-secondary-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-400">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="peer w-full px-4 py-3 rounded-lg glass-panel border text-white placeholder-transparent focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                        placeholder=" "
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <label htmlFor="message" className="pointer-events-none absolute left-3 top-3 text-secondary-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary-400">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="peer w-full px-4 py-3 rounded-lg glass-panel border text-white placeholder-transparent focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 resize-none"
                      placeholder=" "
                    />
                  </div>
                </div>
                
                <div aria-live="polite" className="sr-only" id="form-status">
                  {isSubmitting ? 'Sending message…' : ''}
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30 light:opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/15 light:bg-primary-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/15 light:bg-accent-500/8 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Contact;