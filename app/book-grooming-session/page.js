"use client";
import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { FaPaw, FaArrowRight, FaCat, FaDog, FaVenus, FaMars, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

const BookGroomingSession = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    petType: "",
    name: "",
    breed: "",
    gender: "",
    size: "",
    aggression: "normal",
    age: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    specialInstructions: "",
    groomingPackage: ""
  });

  const buttonStyle = (active) =>
    `border-2 rounded-xl px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-3
     ${active 
        ? "border-orange-500 bg-orange-50 text-orange-600 shadow-md transform scale-[1.02]" 
        : "border-gray-200 hover:border-orange-300 hover:bg-gray-50 text-gray-700"
     }`;

  const dogBreeds = [
    "Labrador Retriever", "Golden Retriever", "German Shepherd", "French Bulldog", 
    "Bulldog", "Poodle", "Beagle", "Rottweiler", "Yorkshire Terrier", "Boxer",
    "Dachshund", "Siberian Husky", "Great Dane", "Doberman", "Shih Tzu", "Other"
  ];

  const catBreeds = [
    "Persian", "Maine Coon", "Siamese", "Ragdoll", "Bengal", "British Shorthair",
    "Abyssinian", "Scottish Fold", "Sphynx", "Russian Blue", "Birman", "Other"
  ];

  const groomingPackages = [
    { id: "spa", name: "Spa Bath", price: "₹800", duration: "60-90 mins" },
    { id: "full", name: "Full Service", price: "₹1,499", duration: "2-3 hours", popular: true },
    { id: "transformation", name: "Transformation", price: "₹1,199", duration: "2-2.5 hours" }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
    alert("Booking request submitted successfully!");
  };

  return (
    <>
      <Header />

      {/* Progress Bar */}
      {/* <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-600">
              Step {step} of 3
            </div>
            <div className="text-sm font-semibold text-orange-600">
              {step === 1 && "Pet Details"}
              {step === 2 && "Owner & Schedule"}
              {step === 3 && "Confirm Booking"}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      </div> */}

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-2 flex items-center justify-center gap-3">
            <FaPaw className="text-orange-500" />
            Book a Grooming Session
            <FaPaw className="text-orange-500" />
          </h1>
          <p className="text-gray-600 text-md">
            Tell us about your furry friend for the perfect grooming experience
          </p>
        </div>

        {/* Step 1: Pet Details */}
        {step === 1 && (
          <div className="space-y-8 animate-fadeIn">
            {/* Pet Type */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <FaPaw className="text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">What type of pet?</h2>
                  <p className="text-gray-500 text-sm">Select your pet type</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`${buttonStyle(form.petType === "dog")} flex-col py-2`}
                  onClick={() => setForm({ ...form, petType: "dog", breed: "" })}
                >
                  <FaDog style={{color:"orange"}} className="text-2xl mb-2" />
                  <span className="text-lg">Dog</span>
                  <span className="text-sm text-gray-500 mt-1">Best friend grooming</span>
                </button>
                <button
                  type="button"
                  className={`${buttonStyle(form.petType === "cat")} flex-col py-2`}
                  onClick={() => setForm({ ...form, petType: "cat", breed: "" })}
                >
                  <FaCat style={{color:"orange"}} className="text-2xl mb-2" />
                  <span className="text-lg">Cat</span>
                  <span className="text-sm text-gray-500 mt-1">Feline spa treatment</span>
                </button>
              </div>
            </div>

            {/* Pet Name */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <label className="block mb-4">
                <span className="text-lg font-bold flex items-center gap-2">
                  🏷️ Name of your pet
                </span>
                <span className="text-gray-500 text-sm">What does your pet like to be called?</span>
              </label>
              <input
                type="text"
                placeholder="e.g., Max, Luna, Charlie..."
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Breed Selection */}
           {form.petType && (
  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
    <label className="block mb-4">
      <span className="text-lg font-bold flex items-center gap-2">
        🐕‍🦺 Breed of your pet
      </span>
      <span className="text-gray-500 text-sm">Select or specify breed</span>
    </label>
    
    {/* Debug display */}
    <div className="text-xs text-gray-500 mb-2">
      Pet Type: {form.petType} | 
      Dog Breeds: {dogBreeds.length} | 
      Cat Breeds: {catBreeds.length}
    </div>
    
    <div className="relative">
      <select
        value={form.breed || ""}
        onChange={(e) => {
          console.log("Selected breed:", e.target.value);
          setForm({ ...form, breed: e.target.value });
        }}
        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none appearance-none bg-white"
      >
        <option value="">Select a breed</option>
        {form.petType === "dog" 
          ? dogBreeds.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))
          : catBreeds.map((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))
        }
      </select>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    {form.breed === "Other" && (
      <input
        type="text"
        placeholder="Please specify breed"
        className="w-full mt-4 border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
        onChange={(e) => setForm({ ...form, breed: e.target.value })}
      />
    )}
  </div>
)}

            {/* Gender & Size */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Gender */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  ⚤ Gender of your pet
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className={`${buttonStyle(form.gender === "female")} flex-col py-4`}
                    onClick={() => setForm({ ...form, gender: "female" })}
                  >
                    <FaVenus className="text-2xl text-pink-500" />
                    <span>Female</span>
                  </button>
                  <button
                    type="button"
                    className={`${buttonStyle(form.gender === "male")} flex-col py-4`}
                    onClick={() => setForm({ ...form, gender: "male" })}
                  >
                    <FaMars className="text-2xl text-blue-500" />
                    <span>Male</span>
                  </button>
                </div>
              </div>

              {/* Size */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold mb-4">📏 Size of your Pet</h3>
                <div className="grid grid-cols-3 gap-3">
                  {["small", "medium", "large"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`${buttonStyle(form.size === size)} flex-col py-4`}
                      onClick={() => setForm({ ...form, size })}
                    >
                      <div className={`rounded-full mb-2 ${
                        size === "small" ? "w-8 h-8 bg-blue-100" :
                        size === "medium" ? "w-10 h-10 bg-green-100" :
                        "w-12 h-12 bg-red-100"
                      }`}></div>
                      <span className="capitalize">{size}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Aggression & Age */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Aggression */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  ⚠️ How aggressive is your pet?
                  <FaInfoCircle className="text-gray-400 text-sm cursor-help" title="This helps our groomers prepare accordingly" />
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {["low", "normal", "high"].map((level) => (
                    <button
                      key={level}
                      type="button"
                      className={`px-4 py-3 border rounded-lg font-medium transition ${
                        form.aggression === level 
                          ? level === "low" ? "bg-green-100 border-green-500 text-green-700" :
                            level === "normal" ? "bg-yellow-100 border-yellow-500 text-yellow-700" :
                            "bg-red-100 border-red-500 text-red-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setForm({ ...form, aggression: level })}
                    >
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Age */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold mb-4">🎂 How old is your pet?</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "< 3 Months", value: "0-3", desc: "Puppy/Kitten" },
                    { label: "1 - 10 Years", value: "1-10", desc: "Adult" },
                    { label: "11+ Years", value: "11+", desc: "Senior" },
                  ].map((age) => (
                    <button
                      key={age.value}
                      type="button"
                      className={`${buttonStyle(form.age === age.value)} flex-col py-4`}
                      onClick={() => setForm({ ...form, age: age.value })}
                    >
                      <span className="font-bold">{age.label}</span>
                      <span className="text-xs text-gray-500">{age.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <div></div>
              <button
                type="button"
                onClick={handleNext}
                disabled={!form.petType || !form.name || !form.breed}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Continue to Schedule
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Owner & Schedule */}
        {step === 2 && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6 border border-orange-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-orange-300">
                  <FaPaw className="text-orange-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Meet {form.name || "your pet"}!</h3>
                  <p className="text-gray-600">
                    {form.breed} • {form.size ? form.size.charAt(0).toUpperCase() + form.size.slice(1) : ""} • {form.gender}
                  </p>
                </div>
              </div>
            </div>

            {/* Owner Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">📝 Your Contact Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    value={form.ownerName}
                    onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">📍 Service Address</h2>
              <textarea
                placeholder="Enter your complete address for grooming service..."
                rows="3"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaCalendarAlt className="text-orange-500" />
                Schedule Appointment
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Preferred Time</label>
                  <select
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  >
                    <option value="">Select time slot</option>
                    <option>9:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 1:00 PM</option>
                    <option>1:00 PM - 3:00 PM</option>
                    <option>3:00 PM - 5:00 PM</option>
                    <option>5:00 PM - 7:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Package Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">📦 Select Grooming Package</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {groomingPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`border-2 rounded-xl p-5 cursor-pointer transition-all ${
                      form.groomingPackage === pkg.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:border-orange-300"
                    } ${pkg.popular ? "relative" : ""}`}
                    onClick={() => setForm({ ...form, groomingPackage: pkg.id })}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        MOST POPULAR
                      </span>
                    )}
                    <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                    <div className="text-sm text-gray-500 mb-3">{pkg.duration}</div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      form.groomingPackage === pkg.id 
                        ? "bg-orange-500 border-orange-500" 
                        : "border-gray-300"
                    }`}>
                      {form.groomingPackage === pkg.id && (
                        <span className="text-white text-sm">✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">💬 Special Instructions (Optional)</h2>
              <textarea
                placeholder="Any specific requirements, allergies, or concerns we should know about?"
                rows="3"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                value={form.specialInstructions}
                onChange={(e) => setForm({ ...form, specialInstructions: e.target.value })}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <button
                type="button"
                onClick={handleBack}
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition"
              >
                ← Back to Pet Details
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!form.ownerName || !form.phone || !form.address || !form.date || !form.time || !form.groomingPackage}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Review & Confirm
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPaw className="text-green-600 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Ready to Book!</h2>
              <p className="text-gray-600 text-lg">
                Please review all details before confirming your booking
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Pet Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b">🐾 Pet Summary</h3>
                <div className="space-y-4">
                  <DetailRow label="Pet Type" value={form.petType} />
                  <DetailRow label="Name" value={form.name} />
                  <DetailRow label="Breed" value={form.breed} />
                  <DetailRow label="Gender" value={form.gender} />
                  <DetailRow label="Size" value={form.size} />
                  <DetailRow label="Age" value={form.age} />
                  <DetailRow label="Aggression Level" value={form.aggression} />
                </div>
              </div>

              {/* Booking Details */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b">📋 Booking Details</h3>
                <div className="space-y-4">
                  <DetailRow label="Owner" value={form.ownerName} />
                  <DetailRow label="Phone" value={form.phone} />
                  <DetailRow label="Email" value={form.email} />
                  <DetailRow label="Address" value={form.address} />
                  <DetailRow label="Date" value={form.date} />
                  <DetailRow label="Time" value={form.time} />
                  <DetailRow label="Package" value={
                    groomingPackages.find(p => p.id === form.groomingPackage)?.name
                  } />
                  {form.specialInstructions && (
                    <DetailRow label="Special Instructions" value={form.specialInstructions} />
                  )}
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-bold mb-6">💰 Price Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Grooming Package</span>
                  <span className="font-bold">
                    {groomingPackages.find(p => p.id === form.groomingPackage)?.price}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span>Home Service Charge</span>
                  <span className="font-bold">₹150</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-green-600 font-bold">First-time Discount (15%)</span>
                  <span className="text-green-600 font-bold">-₹{(parseInt(groomingPackages.find(p => p.id === form.groomingPackage)?.price.replace(/[^0-9]/g, '')) * 0.15 || 0)}</span>
                </div>
                <div className="flex justify-between items-center py-3 text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-2xl text-orange-600">
                    ₹{(parseInt(groomingPackages.find(p => p.id === form.groomingPackage)?.price.replace(/[^0-9]/g, '')) || 0) + 150 - (parseInt(groomingPackages.find(p => p.id === form.groomingPackage)?.price.replace(/[^0-9]/g, '')) * 0.15 || 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Terms & Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t">
              <div className="flex items-start gap-3">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the terms of service and understand that cancellations 
                  must be made at least 24 hours in advance.
                </label>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-bold transition"
                >
                  ← Edit Details
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg hover:shadow-xl transition"
                >
                  <FaPaw />
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-0">
    <span className="text-gray-600">{label}:</span>
    <span className="font-medium">{value || "Not specified"}</span>
  </div>
);

export default BookGroomingSession;