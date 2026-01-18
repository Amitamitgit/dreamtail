"use client"
import React, { useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
 

const Contactus = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Our Store",
      details: ["Dream Tails Headquarters", "123 Pet Care Lane", "Bangalore - 560034", "Karnataka, India"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: ["General Inquiries: +91 1800-123-DREAM (3732)", "Customer Support: +91 1800-456-TAIL (8245)", "Mon-Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: ["General: hello@dreamtails.com", "Support: support@dreamtails.com", "Partnership: partner@dreamtails.com", "Franchise: franchise@dreamtails.com"]
    }
  ];

  const faqs = [
    {
      question: "What are your store timings?",
      answer: "Our physical stores are open from 10:00 AM to 9:00 PM Monday to Saturday, and 10:00 AM to 7:00 PM on Sundays."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order by clicking on 'Track Order' in the header or by visiting the order tracking page with your order ID."
    },
    {
      question: "Do you offer home delivery for pet food?",
      answer: "Yes! We offer free home delivery on orders above ₹999. For orders below ₹999, a nominal delivery fee applies."
    },
    {
      question: "Can I return or exchange pet products?",
      answer: "Yes, we have a 7-day return policy for unused and unopened products. For hygiene reasons, certain items may not be returnable."
    },
    {
      question: "Do you provide veterinary consultation?",
      answer: "Yes, through our Pharmacy section, we offer teleconsultation with certified veterinarians."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white"
            style={{ backgroundColor: primaryColor }}
          >
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We're Here to <span style={{ color: primaryColor }}>Help</span> Your Pets
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about pet care, products, or services? Our team of pet experts is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-white"
                  style={{ backgroundColor: secondaryColor }}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Send Us a <span style={{ color: secondaryColor }}>Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ 
                        borderColor: secondaryColor,
                        focusRingColor: primaryColor 
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ 
                        borderColor: secondaryColor,
                        focusRingColor: primaryColor 
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ 
                        borderColor: secondaryColor,
                        focusRingColor: primaryColor 
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none"
                      style={{ 
                        borderColor: secondaryColor,
                        focusRingColor: primaryColor 
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="service">Service Booking</option>
                      <option value="franchise">Franchise Opportunity</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                    style={{ 
                      borderColor: secondaryColor,
                      focusRingColor: primaryColor 
                    }}
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{ backgroundColor: primaryColor }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="ml-4 px-4 py-2 bg-green-100 text-green-800 rounded-lg flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message sent successfully!
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Map & Social Links */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Find Our <span style={{ color: secondaryColor }}>Store</span>
                  </h3>
                  <div className="h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                    {/* Placeholder for Google Maps */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                      <div className="text-center">
                        <div 
                          className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-700">Dream Tails Headquarters</p>
                        <p className="text-sm text-gray-600">Bangalore, Karnataka</p>
                      </div>
                    </div>
                    {/* In production, replace with: */}
                    {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0155100000003!2d77.594614!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                      className="w-full h-full border-0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                  </div>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    Click to open in Google Maps
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Connect With <span style={{ color: secondaryColor }}>Us</span>
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Facebook', icon: 'F', color: '#1877F2' },
                    { name: 'Instagram', icon: 'I', color: '#E4405F' },
                    { name: 'Twitter', icon: 'T', color: '#1DA1F2' },
                    { name: 'YouTube', icon: 'Y', color: '#FF0000' },
                    { name: 'LinkedIn', icon: 'L', color: '#0A66C2' },
                    { name: 'WhatsApp', icon: 'W', color: '#25D366' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center justify-center w-12 h-12 rounded-lg text-white font-bold transition-all hover:opacity-90 hover:scale-105"
                      style={{ backgroundColor: social.color }}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Follow us for pet care tips, updates, and exclusive offers!
                </p>
              </div>

              {/* Quick Response */}
              <div 
                className="rounded-2xl p-6 text-white"
                style={{ backgroundColor: secondaryColor }}
              >
                <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 Emergency pet care support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Certified pet experts available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked <span style={{ color: primaryColor }}>Questions</span>
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about Dream Tails
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  style={{ backgroundColor: openFaq === index ? '#f9fafb' : 'transparent' }}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`}
                    style={{ color: secondaryColor }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            style={{ backgroundColor: primaryColor }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get pet care tips, exclusive offers, and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
                  style={{ color: secondaryColor }}
                />
                <button 
                  className="px-8 py-3 bg-white rounded-lg font-semibold transition-all hover:scale-105"
                  style={{ color: secondaryColor }}
                >
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

     <Footer/>
    </>
  )
}

export default Contactus