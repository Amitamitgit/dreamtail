"use client"
import React from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
 

const AboutPage = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We're <span style={{ color: secondaryColor }}>Dream Tails</span> - Redefining Pet Care
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Founded with a simple mission: to make every pet's life healthier, happier, and more fulfilling. 
                We believe pets aren't just animals; they're family.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/about-hero.jpg" 
                  alt="Happy pets with their owners" 
                  className="w-full h-96 object-cover"
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-32"
                ></div>
              </div>
              <div 
                className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full opacity-10"
                style={{ backgroundColor: primaryColor }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 text-white"
                   style={{ backgroundColor: secondaryColor }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide premium-quality pet care products and services that enhance the well-being of pets across India. 
                We're committed to innovation, sustainability, and creating meaningful connections between pets and their families.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 text-white"
                   style={{ backgroundColor: primaryColor }}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted and comprehensive pet care ecosystem, where every pet owner finds everything 
                they need to give their furry friends the life they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span style={{ color: secondaryColor }}>Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Dream Tails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pet-First Approach",
                description: "Every decision we make prioritizes pet health and happiness above all else.",
                icon: "❤️"
              },
              {
                title: "Quality Assurance",
                description: "We source and create only the highest quality products, vetted by experts.",
                icon: "⭐"
              },
              {
                title: "Community Driven",
                description: "Building a supportive community of pet lovers who share knowledge and experiences.",
                icon: "👥"
              },
              {
                title: "Sustainable Future",
                description: "Committed to eco-friendly practices and sustainable pet care solutions.",
                icon: "🌱"
              },
              {
                title: "Innovation & Growth",
                description: "Constantly evolving to bring you the latest in pet care technology and services.",
                icon: "🚀"
              },
              {
                title: "Transparent Operations",
                description: "Honest pricing, clear communication, and ethical business practices.",
                icon: "🔍"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/History */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our <span style={{ color: primaryColor }}>Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
                 style={{ backgroundColor: secondaryColor, opacity: 0.2 }}></div>
            
            {[
              { year: "2018", title: "The Beginning", description: "Founded with a single pet store in Bangalore" },
              { year: "2019", title: "Expansion", description: "Launched e-commerce platform and expanded to 5 cities" },
              { year: "2020", title: "Digital Growth", description: "Reached 100,000+ happy pet families nationwide" },
              { year: "2022", title: "Innovation", description: "Introduced HUFT Spa and Pharmacy services" },
              { year: "2023", title: "Recognition", description: "Awarded 'Best Pet Care Brand' by Pet Industry Awards" }
            ].map((milestone, index) => (
              <div 
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-2"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                <div className="relative z-10">
                  <div 
                    className="w-6 h-6 rounded-full border-4 border-white shadow-md"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span style={{ color: secondaryColor }}>Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate pet lovers behind Dream Tails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Aarav Sharma", role: "Founder & CEO", bio: "Pet wellness enthusiast with 15+ years experience" },
              { name: "Priya Patel", role: "Head of Product", bio: "Veterinary nutrition specialist" },
              { name: "Rohan Verma", role: "Operations Director", bio: "Supply chain and logistics expert" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <div 
                    className="w-full h-full flex items-center justify-center text-4xl font-bold text-white"
                    style={{ backgroundColor: index === 0 ? secondaryColor : primaryColor }}
                  >
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p 
                  className="font-medium mb-3"
                  style={{ color: secondaryColor }}
                >{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
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
                Join Our Pet Loving Community
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Be part of a growing family that puts pets first. Together, we can make a difference in every pet's life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-3 bg-white rounded-lg font-semibold transition-all hover:scale-105"
                  style={{ color: secondaryColor }}
                >
                  Shop Now
                </button>
                <button 
                  className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-semibold text-white transition-all hover:bg-white/10"
                >
                  Contact Us
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

export default AboutPage