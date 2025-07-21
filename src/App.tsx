import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Star, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Show success popup
    setShowPopup(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Your message has been submitted successfully. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={closePopup}
                className="bg-[#002868] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/rr-logo-new.png" 
                alt="Rate & Return Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={scrollToForm} className="text-gray-700 hover:text-[#002868] transition-colors">
                Services
              </button>
              <button onClick={scrollToForm} className="text-gray-700 hover:text-[#002868] transition-colors">
                About
              </button>
              <button onClick={scrollToForm} className="text-gray-700 hover:text-[#002868] transition-colors">
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop CTA */}
            <button
              onClick={scrollToForm}
              className="hidden md:inline-flex items-center px-6 py-2 bg-[#002868] text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={scrollToForm} className="text-gray-700 hover:text-[#002868] transition-colors text-left">
                  Services
                </button>
                <button onClick={scrollToForm} className="text-gray-700 hover:text-[#002868] transition-colors text-left">
                  About
                </button>
                <button onClick={scrollToForm} className="text-gray-700 hover:text-[#002868] transition-colors text-left">
                  Contact
                </button>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center px-6 py-2 bg-[#002868] text-white rounded-lg hover:bg-blue-800 transition-colors w-fit"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002868]/85 via-[#002868]/75 to-[#002868]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Maximize Your
            <span className="block bg-gradient-to-r from-sky-300 to-sky-100 bg-clip-text text-transparent">
              Financial Returns
            </span>
          </h1>
          
          <p className="text-xl sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional financial advisory services that deliver exceptional results. 
            Let our experts optimize your investment strategy and accelerate your wealth growth.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-400 to-sky-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={scrollToForm}
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sky-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white/20 rounded-full blur-lg animate-bounce delay-500"></div>
        <div className="absolute top-2/3 left-1/3 w-16 h-16 bg-sky-400/40 rounded-full blur-md animate-pulse delay-700"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-[#002868] mb-2">£2.5B+</div>
                <div className="text-gray-600">Assets Under Management</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-[#002868] mb-2">15%</div>
                <div className="text-gray-600">Average Annual Returns</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-[#002868] mb-2">500+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your unique goals and risk profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-sky-400/30 to-sky-300/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#002868]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Management</h3>
              <p className="text-gray-600 mb-6">
                Professional portfolio management with diversified strategies designed to maximize returns while managing risk.
              </p>
              <button
                onClick={scrollToForm}
                className="text-[#002868] font-semibold hover:text-sky-500 transition-colors inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-sky-400/30 to-sky-300/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#002868]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive risk analysis and mitigation strategies to protect and grow your wealth sustainably.
              </p>
              <button
                onClick={scrollToForm}
                className="text-[#002868] font-semibold hover:text-sky-500 transition-colors inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-sky-400/30 to-sky-300/30 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#002868]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Advisory</h3>
              <p className="text-gray-600 mb-6">
                One-on-one consultation with experienced financial advisors to create personalized wealth strategies.
              </p>
              <button
                onClick={scrollToForm}
                className="text-[#002868] font-semibold hover:text-sky-500 transition-colors inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real people who trust us with their financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Rate & Return transformed my investment portfolio. Their expertise helped me achieve a 22% return last year."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  JS
                </div>
                <div>
                  <div className="font-semibold text-gray-900">James Smith</div>
                  <div className="text-gray-500 text-sm">CEO, Tech Innovations</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Professional, reliable, and results-driven. I couldn't be happier with their personalized approach."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Johnson</div>
                  <div className="text-gray-500 text-sm">Investment Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Their risk assessment saved me from potential losses while maximizing my gains. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  RB
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Robert Brown</div>
                  <div className="text-gray-500 text-sm">Entrepreneur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Trusted by Leading Financial Institutions
            </h3>
            <p className="text-gray-600">
              Our partnerships ensure the highest standards of service and security
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            <div className="flex justify-center">
              <img src="/jpmorgan-logo.png" alt="JPMorgan" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="/deutsche bank-logo-png.png" alt="Deutsche Bank" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="/barclays-logo.png" alt="Barclays" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="/ubs-logo.png" alt="UBS" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center">
              <img src="/santander-logo.png" alt="Santander" className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex justify-center md:col-span-3 lg:col-span-1">
              <div className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xs">
                Partner Logo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Contact our experts today for a personalized consultation
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors resize-vertical"
                  placeholder="Tell us about your financial goals..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-[#002868] text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002868] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/rr-logo-new.png" 
                alt="Rate & Return Logo" 
                className="h-12 w-auto object-contain mb-4 filter brightness-0 invert"
              />
              <p className="text-sky-200/80 mb-4">
                Professional financial advisory services delivering exceptional results for our clients worldwide.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={scrollToForm}
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollToForm}
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={scrollToForm} className="text-sky-200/80 hover:text-white transition-colors">
                    Investment Management
                  </button>
                </li>
                <li>
                  <button onClick={scrollToForm} className="text-sky-200/80 hover:text-white transition-colors">
                    Risk Assessment
                  </button>
                </li>
                <li>
                  <button onClick={scrollToForm} className="text-sky-200/80 hover:text-white transition-colors">
                    Personal Advisory
                  </button>
                </li>
                <li>
                  <button onClick={scrollToForm} className="text-sky-200/80 hover:text-white transition-colors">
                    Portfolio Analysis
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-sky-300" />
                  <span className="text-sky-200/80">+44 20 7123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-sky-300" />
                  <span className="text-sky-200/80">info@rateandreturn.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-sky-300" />
                  <span className="text-sky-200/80">London, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sky-200/50 mt-8 pt-8 text-center">
            <p className="text-sky-200/80">
              © 2024 Rate & Return. All rights reserved. | Professional Financial Advisory Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;