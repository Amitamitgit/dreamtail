"use client"
import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);


  const images = [
    "/image/petfood2.avif",
    "/image/petcaringimg1.jpg",
    "/image/petstorefood.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">

        {/* Enhanced Carousel Section */}
        <section className="relative w-full overflow-hidden bg-gray-100">
          <div className="relative h-[500px] md:h-[600px] w-full">

            {/* Carousel Images */}
            <div className="relative w-full h-full">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <img
                    src={src}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              ))}
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-left text-white max-w-md">
                  <h2 className="text-xl font-light mb-4">Treat them to the best!</h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Treats Of The Year <br />2025-26
                  </h1>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-blue-800 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-900 transition duration-300 shadow-lg transform hover:scale-105">
                      Shop Now
                    </button>

                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition z-20 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition z-20 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </section>


        {/* Pet Grooming Enquiry Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  Premium Grooming Services
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Professional Pet <span className="text-emerald-700">Grooming</span> Services
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  Give your furry friend the royal treatment they deserve with our professional grooming services.
                  Our certified groomers use premium products and gentle techniques.
                </p>

                {/* Service Features */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: '✂️', feature: 'Haircut & Styling' },
                    { icon: '🚿', feature: 'Bath & Blow Dry' },
                    { icon: '💅', feature: 'Nail Trimming' },
                    { icon: '👂', feature: 'Ear Cleaning' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-semibold text-gray-800">{item.feature}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <button
                  onClick={() => router.push("/pet-grooming-service")}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Book Grooming Appointment
                </button>
              </div>

              {/* Right Content - Stats & Image */}
              <div className="relative">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-emerald-700 mb-2">5000+</div>
                    <div className="text-gray-600">Pets Groomed</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-teal-700 mb-2">50+</div>
                    <div className="text-gray-600">Certified Groomers</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-emerald-700 mb-2">4.9★</div>
                    <div className="text-gray-600">Customer Rating</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="text-3xl font-bold text-teal-700 mb-2">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>

                {/* Service Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/image/dogs spa.avif"
                    alt="Pet Grooming Service"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-lg font-semibold">Spa & Grooming Packages</div>
                    <div className="text-sm opacity-90">Starting from ₹999</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Winter Collection Section */}
        <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                For The Coldest Winter Yet...
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                We have you covered (and cuddled) all season!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Product Cards */}
              {[
                { img: "/image/dogs spa.avif", label: "Hot", title: "Sweatshirts", desc: "Cozy & comfortable winter wear" },
                { img: "/image/dogs hair cutting.avif", label: "Warm", title: "Blankets", desc: "Soft & warm cuddle companions" },
                { img: "/image/pet food.avif", label: "Cozy", title: "Beds & Mats", desc: "Comfortable sleeping spaces" },
                { img: "/image/petfood2.avif", label: "Style", title: "Jackets", desc: "Stylish & warm outerwear" },
              ].map((product, index) => (
                <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`${product.label === "Hot" ? "bg-red-500" :
                        product.label === "Warm" ? "bg-green-500" :
                          product.label === "Cozy" ? "bg-orange-500" : "bg-purple-500"
                        } text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                        {product.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <div className={`w-12 h-12 ${product.label === "Hot" ? "bg-blue-100" :
                      product.label === "Warm" ? "bg-green-100" :
                        product.label === "Cozy" ? "bg-orange-100" : "bg-purple-100"
                      } rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition duration-300`}>
                      <svg className={`w-6 h-6 ${product.label === "Hot" ? "text-blue-600" :
                        product.label === "Warm" ? "text-green-600" :
                          product.label === "Cozy" ? "text-orange-600" : "text-purple-600"
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13h16 M4 17h16" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
                    <button className={`font-semibold text-sm hover:text-gray-800 transition duration-300 ${product.label === "Hot" ? "text-blue-600" :
                      product.label === "Warm" ? "text-green-600" :
                        product.label === "Cozy" ? "text-orange-600" : "text-purple-600"
                      }`}>
                      Shop Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:shadow-blue-500/25">
                Explore Winter Collection
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* CTA + Cities Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* CTA */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Ready to book your next pet service with <span className="font-bold">DreamTail?</span>
            </h2>
            <button
              onClick={() => router.push("/services")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Book a Pet Care Service
            </button>
          </div>

          {/* Pets Image */}
          <div className="flex justify-center items-end gap-6 mb-20">
            <img
              src="/image/dogandcat.jpg"
              alt="Cat"
              className="w-12 md:w-320"
            />

          </div>

          {/* Cities */}
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-700 mb-12">
            Top-Quality Pet Services Now in Your City
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 text-center">
            {[
              "Ahmedabad",
              "Amritsar",
              "Bengaluru",
              "Bhopal",
              "Chandigarh",
              "Chennai",
              "Coimbatore",
              "Dehradun",
              "Delhi",
              "Goa",
              "Hyderabad",
              "Jaipur",
            ].map((city, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 cursor-pointer hover:scale-110 transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src="/icons/city-icon.svg"
                    alt={city}
                    className="w-8 h-8"
                  />
                </div>
                <p className="text-gray-700 font-medium text-sm">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


export default Home