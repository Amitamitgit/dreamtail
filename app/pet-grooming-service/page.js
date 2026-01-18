"use client";
import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useRouter } from "next/navigation";

const PetGroomingServicePage = () => {
    const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const faqItems = [
    {
      question: "How long does a grooming session take?",
      answer: "Typically 1.5-2.5 hours depending on breed, size, and coat condition."
    },
    {
      question: "Are your groomers certified?",
      answer: "Yes, all our groomers are certified professionals with extensive training."
    },
    {
      question: "What if my pet is anxious or aggressive?",
      answer: "Our groomers are trained to handle anxious pets with gentle techniques."
    },
    {
      question: "Do I need to provide any equipment?",
      answer: "No, our groomers bring all necessary equipment including pet-safe products."
    }
  ];

  return (
    <>
      <Header />

      {/* ENHANCED HERO SECTION */}
      <section className="relative h-[500px] overflow-hidden bg-gray-900 flex items-center">
        <div className="absolute inset-0">
          <img
            src="/image/dogs spa.avif"
            alt="Pet Grooming"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-orange-500/30">
              <span className="text-orange-300 font-medium">📍 Serving Amritsar & Surrounding Areas</span>
            </div>
            
            <h1 className="text-5xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Professional <span className="text-orange-400">Pet Grooming</span> At Your Doorstep
            </h1>
            
            <p className="text-xl mb-5 text-gray-200">
              Stress-free grooming experience for your furry friends. Certified groomers, premium products, and 100% satisfaction guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>router.push("/book-grooming-session")} className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span>🎯</span> Book a Professional Groomer
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                📞 Call Now: +91 XXX-XXX-XXXX
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                <span>Certified Groomers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">✓</div>
                <span>100% Pet-safe Products</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">✓</div>
                <span>Same-day Booking Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How Our <span className="text-orange-500">In-Home Pet Grooming</span> Works
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Simple, convenient, and stress-free process for both you and your pet
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Book Online",
                desc: "Select service, date & time. We're available 7 days a week",
                icon: "📱",
                color: "bg-blue-100"
              },
              {
                step: "02",
                title: "Meet Our Groomer",
                desc: "Certified groomer arrives with all equipment",
                icon: "👨‍⚕️",
                color: "bg-green-100"
              },
              {
                step: "03",
                title: "Relax at Home",
                desc: "Your pet enjoys grooming in familiar environment",
                icon: "🏡",
                color: "bg-purple-100"
              },
              {
                step: "04",
                title: "Happy Pet",
                desc: "Clean, happy pet with no travel stress",
                icon: "🐕",
                color: "bg-orange-100"
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className={`${item.color} rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full`}>
                  <div className="absolute -top-3 left-8 bg-white border px-4 py-1 rounded-full text-sm font-bold">
                    Step {item.step}
                  </div>
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-300 -translate-y-1/2 translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Premium <span className="text-orange-500">Grooming Packages</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored services for every breed and budget
            </p>
            <div className="mt-4">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                🎁 All packages include free consultation
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PackageCard
              title="Spa Bath"
              oldPrice="₹960"
              price="₹800"
              features={[
                "Shampoo & Conditioner",
                "Blow Dry & Brushing",
                "Nail Clipping & Filing",
                "Ear & Eye Cleaning",
                "Paw Massage & Pad Trimming",
                "Cologne Spray",
              ]}
              duration="60-90 mins"
              onSelect={() => setSelectedPackage("Spa Bath")}
            />

            <PackageCard
              highlight
              popular={true}
              title="Full Service"
              oldPrice="₹1798"
              price="₹1,499"
              features={[
                "Full Body Trimming",
                "Bath & Blow Dry",
                "Teeth Cleaning",
                "Anti Tick Treatment",
                "Sanitary Clipping",
                "De-shedding Treatment",
                "Face & Feet Trim",
              ]}
              duration="2-3 hours"
              onSelect={() => setSelectedPackage("Full Service")}
            />

            <PackageCard
              title="Transformation"
              oldPrice="₹1438"
              price="₹1,199"
              features={[
                "Full Body Styling",
                "Ear & Eye Cleaning",
                "Nail Clipping",
                "Scented Bath",
                "Blow Dry & Styling",
                "Bow/Tie Accessory",
              ]}
              duration="2-2.5 hours"
              onSelect={() => setSelectedPackage("Transformation")}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Our Grooming Service?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safety First",
                desc: "Pet-safe products and gentle handling techniques"
              },
              {
                icon: "⭐",
                title: "Expert Groomers",
                desc: "Certified professionals with 5+ years experience"
              },
              {
                icon: "⚡",
                title: "Convenient",
                desc: "Schedule at your preferred time, 7 days a week"
              },
              {
                icon: "💰",
                title: "Best Price",
                desc: "Quality service at competitive prices"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border rounded-2xl p-6 hover:border-orange-300 transition-all duration-300">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-2xl">+</span>
                </div>
                <p className="mt-4 text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready for a Happy, Clean Pet?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book now and get 15% off on your first grooming session!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              📅 Book Appointment Now
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              💬 Chat with Us
            </button>
          </div>
          <p className="mt-8 text-white/80">
            Or call us directly: <span className="font-bold text-xl">+91 98765 43210</span>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

/* ENHANCED PACKAGE CARD COMPONENT */
const PackageCard = ({
  title,
  price,
  oldPrice,
  features,
  highlight,
  popular,
  duration,
  onSelect,
}) => {
  return (
    <div
      className={`relative rounded-3xl border-2 p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col ${
        highlight 
          ? "border-orange-500 bg-gradient-to-b from-orange-50 to-white scale-[1.02]" 
          : "border-gray-200"
      }`}
    >
       

      {highlight && (
        <div className="absolute top-4 right-4">
          <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
            SAVE ₹{(parseInt(oldPrice.replace(/[^0-9]/g, '')) - parseInt(price.replace(/[^0-9]/g, ''))).toLocaleString('en-IN')}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        {duration && (
          <div className="inline-flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
            ⏱️ {duration}
          </div>
        )}
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-gray-400 line-through text-lg">
            {oldPrice}
          </span>
          <span className="text-4xl font-bold text-gray-900">
            {price}
          </span>
          <span className="text-gray-500">/session</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">+ Includes all equipment</p>
      </div>

      <div className="flex-grow mb-8">
        <ul className="space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start text-gray-700">
              <span className="text-green-500 mr-3 mt-1">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={onSelect}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
          highlight 
            ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl" 
            : "bg-gray-900 hover:bg-black text-white"
        }`}
      >
        {highlight ? "🎯 Book This Package" : "Book Now"}
      </button>
      
      {highlight && (
        <p className="text-center text-gray-600 text-sm mt-4">
          ✅ 500+ pets groomed this month
        </p>
      )}
    </div>
  );
};

export default PetGroomingServicePage;