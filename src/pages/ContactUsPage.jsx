import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedSection from '../components/common/AnimatedSection';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Bhubaneswar', 'Odisha, India', 'Pin: 751001']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+929 333 9296', '+1 (555) 123-4567', 'Mon-Sat: 9AM - 6PM']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@estateconstruct.com', 'info@estateconstruct.com', 'support@estateconstruct.com']
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/60 via-primary-900/90 to-primary-900/95 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-primary-900">
        <AnimatedSection animation="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-accent-600 transition-all group"
              >
                <info.icon className="text-accent-600 mb-4 group-hover:scale-110 transition-transform" size={36} />
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </AnimatedSection>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-primary-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
            <SectionTitle 
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you within 24 hours"
            />
            </AnimatedSection>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
              <AnimatedSection animation="fade-up">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-600 focus:outline-none transition text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-600 focus:outline-none transition text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-600 focus:outline-none transition text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-600 focus:outline-none transition text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="property">Property Inquiry</option>
                    <option value="construction">Construction Project</option>
                    <option value="general">General Question</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-accent-600 focus:outline-none transition text-white resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up">
              <button
                type="submit"
                className="w-full bg-accent-600/80 hover:bg-accent-600 backdrop-blur-md text-white py-4 rounded-lg font-semibold transition-all border border-accent-500/30 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
              </AnimatedSection>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-primary-900">
        
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Find Us"
            subtitle="Visit our office for a personal consultation"
          />
          </AnimatedSection>

          <AnimatedSection animation="fade-up">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238395.1942744951!2d85.6815771!3d20.2960587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;