"use client"
import React, { useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
 

const OurService = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';
  
  const [selectedService, setSelectedService] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    {
      id: 'grooming',
      title: 'Professional Pet Grooming',
      icon: '✂️',
      description: 'Complete grooming services for all breeds with certified groomers using premium products.',
      features: [
        'Bath & Blow Dry',
        'Haircut & Styling',
        'Nail Trimming',
        'Ear Cleaning',
        'Teeth Brushing',
        'De-shedding Treatment'
      ],
      packages: [
        {
          name: 'Basic Grooming',
          price: '₹999',
          includes: ['Bath', 'Blow Dry', 'Nail Trim', 'Ear Cleaning']
        },
        {
          name: 'Premium Grooming',
          price: '₹1,999',
          includes: ['Everything in Basic', 'Haircut/Styling', 'Teeth Brushing', 'De-shedding']
        },
        {
          name: 'Spa Package',
          price: '₹2,999',
          includes: ['Everything in Premium', 'Aromatherapy', 'Paw Massage', 'Blueberry Facial']
        }
      ],
      image: '/services/grooming.jpg'
    },
    {
      id: 'walker',
      title: 'Pet Walking & Sitting',
      icon: '🐾',
      description: 'Trusted pet walkers and sitters to keep your furry friends active and happy.',
      features: [
        'Daily Walks',
        'Play Sessions',
        'Feeding & Medication',
        'Potty Breaks',
        'Overnight Sitting',
        'Real-time Updates'
      ],
      packages: [
        {
          name: '30-min Walk',
          price: '₹299',
          includes: ['30 min walk', 'Playtime', 'Water Refill', 'Photo Update']
        },
        {
          name: '60-min Walk',
          price: '₹499',
          includes: ['60 min walk', 'Extended Play', 'Treats', 'Detailed Report']
        },
        {
          name: 'Day Care',
          price: '₹1,299',
          includes: ['8-hour care', '3 Walks', 'Meals', 'Activity Updates']
        }
      ],
      image: '/services/walking.jpg'
    },
    {
      id: 'food',
      title: 'Premium Pet Nutrition',
      icon: '🍗',
      description: 'Customized nutrition plans and premium pet food for optimal health.',
      features: [
        'Custom Diet Plans',
        'Vet-approved Brands',
        'Home Delivery',
        'Subscription Plans',
        'Special Diets',
        'Nutrition Consultation'
      ],
      packages: [
        {
          name: 'Basic Nutrition',
          price: '₹1,499/mo',
          includes: ['Monthly Food Supply', 'Free Delivery', 'Basic Consultation']
        },
        {
          name: 'Premium Nutrition',
          price: '₹2,999/mo',
          includes: ['Customized Diet', 'Vet Consultation', 'Supplement Kit']
        },
        {
          name: 'Health Package',
          price: '₹4,999/mo',
          includes: ['Everything in Premium', 'Monthly Checkup', 'Weight Management']
        }
      ],
      image: '/services/food.jpg'
    },
    {
      id: 'training',
      title: 'Pet Training',
      icon: '🎓',
      description: 'Professional training programs for behavioral development and obedience.',
      features: [
        'Basic Obedience',
        'Potty Training',
        'Behavior Correction',
        'Advanced Commands',
        'Socialization',
        'Puppy Training'
      ],
      packages: [
        {
          name: 'Basic Training',
          price: '₹3,999',
          includes: ['4 Sessions', 'Basic Commands', 'Behavior Assessment']
        },
        {
          name: 'Advanced Training',
          price: '₹7,999',
          includes: ['8 Sessions', 'Advanced Commands', 'Behavior Correction']
        },
        {
          name: 'Complete Package',
          price: '₹12,999',
          includes: ['12 Sessions', 'Socialization', 'Certificate']
        }
      ],
      image: '/services/training.jpg'
    },
    {
      id: 'veterinary',
      title: 'Veterinary Care',
      icon: '🏥',
      description: 'Comprehensive healthcare services with experienced veterinarians.',
      features: [
        'Regular Checkups',
        'Vaccination',
        'Dental Care',
        'Emergency Services',
        'Teleconsultation',
        'Surgery'
      ],
      packages: [
        {
          name: 'Basic Health',
          price: '₹999',
          includes: ['Health Checkup', 'Vaccination', 'Basic Consultation']
        },
        {
          name: 'Complete Health',
          price: '₹2,999',
          includes: ['Complete Checkup', 'Dental Exam', 'Blood Tests']
        },
        {
          name: 'Annual Package',
          price: '₹9,999',
          includes: ['4 Checkups', 'All Vaccines', 'Emergency Support']
        }
      ],
      image: '/services/veterinary.jpg'
    },
    {
      id: 'boarding',
      title: 'Pet Boarding',
      icon: '🏨',
      description: 'Luxury boarding facilities for when you need to travel.',
      features: [
        '24/7 Supervision',
        'Spacious Accommodation',
        'Daily Exercise',
        'Grooming Sessions',
        'Medical Care',
        'Live Camera Access'
      ],
      packages: [
        {
          name: 'Standard Boarding',
          price: '₹799/day',
          includes: ['Comfy Bedding', '3 Meals', '2 Walks', 'Basic Care']
        },
        {
          name: 'Premium Suite',
          price: '₹1,499/day',
          includes: ['Private Suite', 'Play Area', 'Grooming', 'Extra Activities']
        },
        {
          name: 'Luxury Villa',
          price: '₹2,499/day',
          includes: ['Luxury Suite', 'Personal Care', 'Spa Treatments', 'Training']
        }
      ],
      image: '/services/boarding.jpg'
    }
  ];

  const handleBookingChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBookService = (serviceId) => {
    setSelectedService(serviceId);
    setBookingForm({
      ...bookingForm,
      service: serviceId
    });
    // Scroll to booking form
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingForm);
    alert('Booking request submitted! We will contact you shortly.');
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      petType: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    setSelectedService(null);
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white"
            style={{ backgroundColor: primaryColor }}
          >
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Care for Your <span style={{ color: primaryColor }}>Furry Friends</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From grooming to veterinary care, we offer everything your pet needs to live a happy, healthy life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span style={{ color: secondaryColor }}>Premium Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of professional pet care services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center text-white text-6xl"
                  >
                    {service.icon}
                  </div>
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <button
                      onClick={() => handleBookService(service.id)}
                      className="px-6 py-3 bg-white rounded-lg font-semibold transition-all hover:scale-105"
                      style={{ color: secondaryColor }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <span 
                      className="text-xs font-bold px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: primaryColor }}
                    >
                      POPULAR
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <span 
                        className="w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: secondaryColor }}
                      ></span>
                      Includes:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Packages</h4>
                    <div className="space-y-3">
                      {service.packages.map((pkg, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div>
                            <h5 className="font-medium text-gray-900">{pkg.name}</h5>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {pkg.includes.map((item, i) => (
                                <span key={i} className="text-xs text-gray-600">• {item}</span>
                              ))}
                            </div>
                          </div>
                          <span className="font-bold text-lg" style={{ color: secondaryColor }}>
                            {pkg.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleBookService(service.id)}
                    className="w-full mt-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It <span style={{ color: primaryColor }}>Works</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to get the best care for your pet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Service',
                description: 'Select from our range of premium pet care services',
                icon: '📱'
              },
              {
                step: '2',
                title: 'Book Appointment',
                description: 'Pick a convenient time slot for your pet',
                icon: '📅'
              },
              {
                step: '3',
                title: 'Expert Care',
                description: 'Our certified professionals take care of your pet',
                icon: '👨‍⚕️'
              },
              {
                step: '4',
                title: 'Happy Pet',
                description: 'Your pet returns home happy and healthy',
                icon: '🐕'
              }
            ].map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="relative">
                  <div 
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl"
                    style={{ backgroundColor: secondaryColor, color: 'white' }}
                  >
                    {step.icon}
                  </div>
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Book a <span style={{ color: secondaryColor }}>Service</span>
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll confirm your appointment within 2 hours
              </p>
            </div>

            <form onSubmit={handleSubmitBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleBookingChange}
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
                    value={bookingForm.email}
                    onChange={handleBookingChange}
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
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleBookingChange}
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
                    Pet Type *
                  </label>
                  <select
                    name="petType"
                    value={bookingForm.petType}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none"
                    style={{ 
                      borderColor: secondaryColor,
                      focusRingColor: primaryColor 
                    }}
                  >
                    <option value="">Select Pet Type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    name="service"
                    value={bookingForm.service || selectedService || ''}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none"
                    style={{ 
                      borderColor: secondaryColor,
                      focusRingColor: primaryColor 
                    }}
                  >
                    <option value="">Choose a Service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleBookingChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{ 
                      borderColor: secondaryColor,
                      focusRingColor: primaryColor 
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'].map((time) => (
                    <label key={time} className="relative">
                      <input
                        type="radio"
                        name="time"
                        value={time}
                        checked={bookingForm.time === time}
                        onChange={handleBookingChange}
                        required
                        className="sr-only"
                      />
                      <div className={`text-center py-3 rounded-lg cursor-pointer transition-all ${
                        bookingForm.time === time 
                          ? 'text-white' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ 
                        backgroundColor: bookingForm.time === time ? secondaryColor : 'transparent',
                        border: bookingForm.time === time ? 'none' : '1px solid #d1d5db'
                      }}>
                        {time}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={bookingForm.message}
                  onChange={handleBookingChange}
                  rows="3"
                  placeholder="Any special requirements or notes about your pet..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                  style={{ 
                    borderColor: secondaryColor,
                    focusRingColor: primaryColor 
                  }}
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  <p>✅ Confirmation within 2 hours</p>
                  <p>✅ Free cancellation 24 hours before</p>
                  <p>✅ Certified professionals</p>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                  style={{ backgroundColor: primaryColor }}
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Happy <span style={{ color: secondaryColor }}>Customers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What pet parents say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                pet: 'Dog Owner',
                rating: 5,
                comment: 'My golden retriever loves the grooming sessions! The team is professional and caring.',
                service: 'Grooming'
              },
              {
                name: 'Rohan Mehta',
                pet: 'Cat Owner',
                rating: 5,
                comment: 'The pet sitting service is a lifesaver! Real-time updates give me peace of mind.',
                service: 'Pet Sitting'
              },
              {
                name: 'Anjali Patel',
                pet: 'Multiple Pets',
                rating: 5,
                comment: 'Custom nutrition plans transformed my pets health. Highly recommended!',
                service: 'Nutrition'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.pet}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: primaryColor }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-3 italic">"{testimonial.comment}"</p>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: primaryColor + '20', color: primaryColor }}
                >
                  {testimonial.service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Pamper Your Pet?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Book a service today and give your pet the premium care they deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-3 bg-white rounded-lg font-semibold transition-all hover:scale-105"
                  style={{ color: secondaryColor }}
                  onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Service Now
                </button>
                <button 
                  className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-semibold text-white transition-all hover:bg-white/10"
                >
                  Call Now: +91 1800-123-4567
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default OurService