"use client"
import React, { useState } from 'react'
import Header from './Header'

const Shipping = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';
  
  const [activeSection, setActiveSection] = useState('overview');
  const [trackingData, setTrackingData] = useState({
    orderId: '',
    phone: ''
  });
  const [trackingResult, setTrackingResult] = useState(null);
  const [estimateForm, setEstimateForm] = useState({
    pincode: '',
    weight: '',
    serviceType: 'standard'
  });
  const [estimateResult, setEstimateResult] = useState(null);

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'shipping-areas', title: 'Shipping Areas' },
    { id: 'delivery-time', title: 'Delivery Timeframes' },
    { id: 'shipping-costs', title: 'Shipping Costs' },
    { id: 'order-tracking', title: 'Order Tracking' },
    { id: 'shipping-methods', title: 'Shipping Methods' },
    { id: 'special-handling', title: 'Special Handling' },
    { id: 'international', title: 'International Shipping' },
    { id: 'shipping-partners', title: 'Shipping Partners' },
    { id: 'delivery-process', title: 'Delivery Process' },
    { id: 'faq', title: 'FAQs' }
  ];

  const shippingPartners = [
    { name: 'Delhivery', icon: '🚚', coverage: 'All India', time: '2-7 days' },
    { name: 'Blue Dart', icon: '✈️', coverage: 'Metro Cities', time: '1-4 days' },
    { name: 'DTDC', icon: '📦', coverage: 'All India', time: '3-8 days' },
    { name: 'XpressBees', icon: '🐝', coverage: 'Tier 1-2 Cities', time: '3-6 days' },
    { name: 'Ekart', icon: '📮', coverage: 'All India', time: '4-10 days' },
    { name: 'Shiprocket', icon: '🚀', coverage: 'All India', time: '3-7 days' }
  ];

  const handleTrackOrder = (e) => {
    e.preventDefault();
    // Simulate tracking API call
    const mockTrackingData = {
      orderId: trackingData.orderId,
      status: 'In Transit',
      estimatedDelivery: '2024-12-28',
      currentLocation: 'Bangalore Hub',
      timeline: [
        { date: '2024-12-20', time: '10:30 AM', status: 'Order Placed', location: 'Bangalore' },
        { date: '2024-12-21', time: '2:15 PM', status: 'Order Processed', location: 'Dream Tails Warehouse' },
        { date: '2024-12-22', time: '11:00 AM', status: 'Shipped', location: 'Bangalore Hub' },
        { date: '2024-12-23', time: '3:45 PM', status: 'In Transit', location: 'En Route' }
      ]
    };
    setTrackingResult(mockTrackingData);
  };

  const calculateShippingEstimate = (e) => {
    e.preventDefault();
    // Simulate shipping calculation
    const baseCost = 49;
    const weightCost = parseInt(estimateForm.weight) * 10;
    const serviceMultiplier = estimateForm.serviceType === 'express' ? 1.5 : 1;
    const total = Math.round((baseCost + weightCost) * serviceMultiplier);
    
    setEstimateResult({
      cost: total,
      deliveryDays: estimateForm.serviceType === 'express' ? '2-3 days' : '5-7 days',
      serviceType: estimateForm.serviceType === 'express' ? 'Express Delivery' : 'Standard Delivery'
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'In Transit': return 'bg-blue-100 text-blue-800';
      case 'Out for Delivery': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white"
              style={{ backgroundColor: primaryColor }}
            >
              Fast & Reliable Delivery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Shipping & <span style={{ color: primaryColor }}>Delivery Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver happiness to your doorstep across India
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '500+', label: 'Cities Covered' },
              { stat: '2-7 Days', label: 'Delivery Time' },
              { stat: '₹49', label: 'Starting Cost' },
              { stat: '24/7', label: 'Tracking Support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-2xl font-bold mb-2"
                  style={{ color: secondaryColor }}
                >
                  {item.stat}
                </div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tracking Widget */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-8 border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Track Your <span style={{ color: secondaryColor }}>Order</span>
            </h2>
            <form onSubmit={handleTrackOrder} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order ID *
                  </label>
                  <input
                    type="text"
                    value={trackingData.orderId}
                    onChange={(e) => setTrackingData({...trackingData, orderId: e.target.value})}
                    placeholder="e.g., DT2023123456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      borderColor: secondaryColor,
                      focusRingColor: primaryColor 
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Registered Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={trackingData.phone}
                    onChange={(e) => setTrackingData({...trackingData, phone: e.target.value})}
                    placeholder="e.g., 9876543210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      borderColor: secondaryColor,
                      focusRingColor: primaryColor 
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: secondaryColor }}
              >
                Track Order
              </button>
            </form>

            {trackingResult && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tracking Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Order Status</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(trackingResult.status)}`}>
                      {trackingResult.status}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Estimated Delivery</div>
                    <div className="font-medium text-gray-900">{trackingResult.estimatedDelivery}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Current Location</div>
                    <div className="font-medium text-gray-900">{trackingResult.currentLocation}</div>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-4">Shipment Timeline</h4>
                <div className="space-y-4">
                  {trackingResult.timeline.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                        index === trackingResult.timeline.length - 1 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium text-gray-900">{step.status}</div>
                            <div className="text-sm text-gray-500">{step.location}</div>
                          </div>
                          <div className="text-sm text-gray-500">
                            {step.date} at {step.time}
                          </div>
                        </div>
                        {index < trackingResult.timeline.length - 1 && (
                          <div className="h-6 border-l-2 border-gray-300 ml-4 mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" style={{ color: secondaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Policy Sections
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setActiveSection(section.id);
                        document.getElementById(section.id)?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ 
                        backgroundColor: activeSection === section.id ? secondaryColor : 'transparent'
                      }}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: primaryColor + '15' }}>
                    <h4 className="font-semibold text-gray-900 mb-2">Shipping Calculator</h4>
                    <p className="text-sm text-gray-600">
                      Estimate shipping cost to your location
                    </p>
                  </div>
                  <button
                    onClick={() => document.getElementById('shipping-calculator').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-2 rounded-lg font-medium text-white text-sm"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Calculate Shipping
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                {/* Overview */}
                <section id="overview" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      1
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipping Policy Overview</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      At Dream Tails, we understand that you're excited to receive your pet products. 
                      Our shipping policy is designed to ensure your orders reach you safely, quickly, 
                      and efficiently across India.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Our Commitment</h4>
                      <ul className="list-disc pl-5 space-y-1 text-blue-700">
                        <li>Safe and secure packaging for all products</li>
                        <li>Real-time tracking for all shipments</li>
                        <li>Multiple shipping options to suit your needs</li>
                        <li>Transparent pricing with no hidden charges</li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold">✓</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Safe Packaging</h4>
                        </div>
                        <p className="text-sm text-gray-600">Pet-friendly and secure packaging</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold">✓</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Timely Delivery</h4>
                        </div>
                        <p className="text-sm text-gray-600">On-time delivery guarantee</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Shipping Areas */}
                <section id="shipping-areas" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipping Areas & Coverage</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Serviceable Pincodes</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          {
                            type: 'Standard Delivery',
                            areas: 'All India (25,000+ pincodes)',
                            icon: '🇮🇳'
                          },
                          {
                            type: 'Express Delivery',
                            areas: 'Metro & Tier 1 Cities (50+ cities)',
                            icon: '🚀'
                          },
                          {
                            type: 'Same-Day Delivery',
                            areas: 'Select Metro Cities (8 cities)',
                            icon: '⚡'
                          }
                        ].map((area, index) => (
                          <div key={index} className="text-center border border-gray-200 rounded-lg p-4">
                            <div className="text-3xl mb-2">{area.icon}</div>
                            <h4 className="font-semibold text-gray-900 mb-2">{area.type}</h4>
                            <p className="text-sm text-gray-600">{area.areas}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Region
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Coverage
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Delivery Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            {
                              region: 'Metro Cities',
                              coverage: 'Bangalore, Mumbai, Delhi, etc.',
                              time: '2-4 business days'
                            },
                            {
                              region: 'Tier 1 Cities',
                              coverage: 'Hyderabad, Pune, Chennai, etc.',
                              time: '3-5 business days'
                            },
                            {
                              region: 'Tier 2 Cities',
                              coverage: 'Jaipur, Lucknow, Kochi, etc.',
                              time: '4-6 business days'
                            },
                            {
                              region: 'Tier 3 Cities & Rural',
                              coverage: 'Remaining serviceable areas',
                              time: '5-7 business days'
                            }
                          ].map((region, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-medium text-gray-900">{region.region}</td>
                              <td className="px-4 py-3 text-gray-700">{region.coverage}</td>
                              <td className="px-4 py-3">
                                <span className="font-medium" style={{ color: secondaryColor }}>
                                  {region.time}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Remote Area Delivery</h4>
                      <p className="text-yellow-700">
                        For remote locations and areas with limited courier service, delivery may take 
                        additional 2-3 business days. Contact our support team to check serviceability 
                        for your specific location.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Delivery Timeframes */}
                <section id="delivery-time" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Delivery Timeframes</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          type: 'Standard Delivery',
                          time: '5-7 Business Days',
                          cost: '₹49 onwards',
                          features: ['Free above ₹999', 'Tracking included', 'All India']
                        },
                        {
                          type: 'Express Delivery',
                          time: '2-4 Business Days',
                          cost: '₹99 onwards',
                          features: ['Priority handling', 'Real-time tracking', 'Metro & Tier 1']
                        },
                        {
                          type: 'Same-Day Delivery',
                          time: 'Within 24 Hours',
                          cost: '₹199 onwards',
                          features: ['Order before 12 PM', 'Limited cities', 'Instant updates']
                        }
                      ].map((service, index) => (
                        <div key={index} className={`border rounded-xl p-5 ${
                          index === 1 ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                        }`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.type}</h3>
                          <div 
                            className="text-2xl font-bold mb-4"
                            style={{ color: secondaryColor }}
                          >
                            {service.time}
                          </div>
                          <div className="text-lg font-semibold text-gray-900 mb-4">{service.cost}</div>
                          <ul className="space-y-2">
                            {service.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-center text-sm text-gray-600">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Factors Affecting Delivery Time</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                              Weather conditions and natural disasters
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                              Public holidays and festivals
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                              Remote location accessibility
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                              Courier service disruptions
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                              Customs clearance (for international)
                            </li>
                            <li className="flex items-center">
                              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                              Incorrect address details
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Shipping Costs */}
                <section id="shipping-costs" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipping Costs & Charges</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Order Value
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Standard Shipping
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Express Shipping
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Same-Day Delivery
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            {
                              value: 'Below ₹499',
                              standard: '₹79',
                              express: '₹149',
                              sameDay: '₹249'
                            },
                            {
                              value: '₹499 - ₹999',
                              standard: '₹49',
                              express: '₹99',
                              sameDay: '₹199'
                            },
                            {
                              value: '₹999 - ₹1999',
                              standard: 'FREE',
                              express: '₹49',
                              sameDay: '₹149'
                            },
                            {
                              value: 'Above ₹1999',
                              standard: 'FREE',
                              express: 'FREE',
                              sameDay: '₹99'
                            }
                          ].map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-medium text-gray-900">{row.value}</td>
                              <td className="px-4 py-3">
                                <span className={`font-medium ${
                                  row.standard === 'FREE' ? 'text-green-600' : 'text-gray-900'
                                }`}>
                                  {row.standard}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <span className={`font-medium ${
                                  row.express === 'FREE' ? 'text-green-600' : 'text-gray-900'
                                }`}>
                                  {row.express}
                                </span>
                              </td>
                              <td className="px-4 py-3">
                                <span className="font-medium text-gray-900">{row.sameDay}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Free Shipping Conditions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-green-700">
                        <li>Orders above ₹999 qualify for free standard shipping</li>
                        <li>Orders above ₹1999 qualify for free express shipping</li>
                        <li>Free shipping applies to all serviceable areas in India</li>
                        <li>Additional charges may apply for remote locations</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Additional Charges</h4>
                      <ul className="list-disc pl-5 space-y-1 text-red-700">
                        <li>Cash on Delivery (COD) fee: ₹29 per order</li>
                        <li>Remote area surcharge: ₹49 - ₹199 (based on location)</li>
                        <li>Oversized/heavy items: Additional ₹99 - ₹499</li>
                        <li>Address correction fee: ₹49 (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Shipping Calculator */}
                <div id="shipping-calculator" className="mb-12 scroll-mt-24">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Shipping Cost Calculator</h3>
                    
                    <form onSubmit={calculateShippingEstimate} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Delivery Pincode *
                          </label>
                          <input
                            type="text"
                            value={estimateForm.pincode}
                            onChange={(e) => setEstimateForm({...estimateForm, pincode: e.target.value})}
                            required
                            placeholder="e.g., 560034"
                            maxLength="6"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                            style={{ 
                              borderColor: secondaryColor,
                              focusRingColor: primaryColor 
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Approximate Weight *
                          </label>
                          <select
                            value={estimateForm.weight}
                            onChange={(e) => setEstimateForm({...estimateForm, weight: e.target.value})}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent appearance-none"
                            style={{ 
                              borderColor: secondaryColor,
                              focusRingColor: primaryColor 
                            }}
                          >
                            <option value="">Select weight</option>
                            <option value="0.5">Up to 0.5 kg</option>
                            <option value="1">0.5 - 1 kg</option>
                            <option value="2">1 - 2 kg</option>
                            <option value="5">2 - 5 kg</option>
                            <option value="10">5 - 10 kg</option>
                            <option value="20">Above 10 kg</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Type *
                          </label>
                          <select
                            value={estimateForm.serviceType}
                            onChange={(e) => setEstimateForm({...estimateForm, serviceType: e.target.value})}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent appearance-none"
                            style={{ 
                              borderColor: secondaryColor,
                              focusRingColor: primaryColor 
                            }}
                          >
                            <option value="standard">Standard Delivery</option>
                            <option value="express">Express Delivery</option>
                            <option value="same-day">Same-Day Delivery</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                        style={{ backgroundColor: primaryColor }}
                      >
                        Calculate Shipping Cost
                      </button>
                    </form>

                    {estimateResult && (
                      <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Estimated Shipping Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <div className="text-sm text-gray-500 mb-1">Estimated Cost</div>
                            <div className="text-2xl font-bold" style={{ color: secondaryColor }}>
                              ₹{estimateResult.cost}
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <div className="text-sm text-gray-500 mb-1">Delivery Time</div>
                            <div className="text-lg font-bold text-gray-900">{estimateResult.deliveryDays}</div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <div className="text-sm text-gray-500 mb-1">Service Type</div>
                            <div className="text-lg font-bold text-gray-900">{estimateResult.serviceType}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-4 text-center">
                          * This is an estimate. Final cost may vary based on exact weight and dimensions.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Shipping Methods */}
                <section id="shipping-methods" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      5
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipping Methods</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-xl p-5">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <span className="text-blue-600 text-xl">📦</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Regular Shipping</h3>
                            <p className="text-sm text-gray-600">Most economical option</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Doorstep delivery
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Tracking provided
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Multiple delivery attempts
                          </li>
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-xl p-5">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <span className="text-green-600 text-xl">🚚</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Express Shipping</h3>
                            <p className="text-sm text-gray-600">Faster delivery option</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Priority handling
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Real-time tracking
                          </li>
                          <li className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Weekend deliveries available
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                          <span className="text-purple-600 text-xl">⚡</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Same-Day Delivery</h3>
                          <p className="text-sm text-gray-600">Ultra-fast delivery</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Available Cities</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Bangalore</li>
                            <li>• Mumbai</li>
                            <li>• Delhi/NCR</li>
                            <li>• Hyderabad</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Conditions</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Order before 12:00 PM</li>
                            <li>• Available items only</li>
                            <li>• Serviceable pincodes</li>
                            <li>• Additional charges apply</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Shipping Partners */}
                <section id="shipping-partners" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      6
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipping Partners</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <p>
                      We partner with India's leading logistics companies to ensure reliable and 
                      efficient delivery of your orders. Our partners are selected based on their 
                      service quality, coverage, and reliability.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                      {shippingPartners.map((partner, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 text-center">
                          <div className="text-2xl mb-2">{partner.icon}</div>
                          <h4 className="font-semibold text-gray-900 mb-1">{partner.name}</h4>
                          <p className="text-xs text-gray-500 mb-1">{partner.coverage}</p>
                          <p className="text-xs font-medium" style={{ color: secondaryColor }}>
                            {partner.time}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Partner Selection</h4>
                      <p className="text-gray-600">
                        We automatically assign the most efficient shipping partner based on your 
                        delivery location, package type, and delivery preference. You can view the 
                        assigned partner in your order tracking details.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Special Handling */}
                <section id="special-handling" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      7
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Special Handling & Items</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          type: 'Perishable Items',
                          icon: '❄️',
                          handling: 'Special cold chain packaging',
                          restrictions: 'Express shipping only'
                        },
                        {
                          type: 'Fragile Items',
                          icon: '⚠️',
                          handling: 'Extra protective packaging',
                          restrictions: 'Fragile handling surcharge'
                        },
                        {
                          type: 'Heavy Items',
                          icon: '⚖️',
                          handling: 'Special handling required',
                          restrictions: 'Additional shipping charges'
                        },
                        {
                          type: 'Live Plants',
                          icon: '🌱',
                          handling: 'Special care packaging',
                          restrictions: 'Limited service areas'
                        }
                      ].map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl p-4">
                          <div className="flex items-center mb-3">
                            <div className="text-2xl mr-3">{item.icon}</div>
                            <h4 className="font-semibold text-gray-900">{item.type}</h4>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            <strong>Handling:</strong> {item.handling}
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Restrictions:</strong> {item.restrictions}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Restricted Items</h4>
                      <p className="text-red-700">
                        Some items cannot be shipped due to regulatory restrictions, including:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-red-700 mt-2">
                        <li>Certain pet medications requiring prescriptions</li>
                        <li>Hazardous materials and chemicals</li>
                        <li>Items prohibited by shipping carriers</li>
                        <li>Live animals (except authorized breeders)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Delivery Process */}
                <section id="delivery-process" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      8
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Delivery Process & Guidelines</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Delivery Process</h3>
                      <ol className="list-decimal pl-5 space-y-4">
                        <li>
                          <strong>Order Processing:</strong> We process orders within 24 hours (48 hours during sales)
                        </li>
                        <li>
                          <strong>Packaging:</strong> Items are carefully packaged with appropriate materials
                        </li>
                        <li>
                          <strong>Handover to Courier:</strong> Package handed to shipping partner with tracking
                        </li>
                        <li>
                          <strong>In Transit:</strong> Real-time tracking updates available
                        </li>
                        <li>
                          <strong>Out for Delivery:</strong> You'll receive an SMS/email notification
                        </li>
                        <li>
                          <strong>Delivery Attempt:</strong> Courier attempts delivery (3 attempts maximum)
                        </li>
                        <li>
                          <strong>Delivery Completion:</strong> Package delivered against signature/OTP
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-green-200 rounded-xl p-4 bg-green-50">
                        <h4 className="font-semibold text-gray-900 mb-3">Delivery Instructions</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            Ensure someone is available at the delivery address
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            Keep your phone accessible for delivery calls
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            Check package condition before accepting
                          </li>
                          <li className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            Keep order details ready for verification
                          </li>
                        </ul>
                      </div>
                      <div className="border border-red-200 rounded-xl p-4 bg-red-50">
                        <h4 className="font-semibold text-gray-900 mb-3">Failed Delivery</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-center">
                            <span className="text-red-600 mr-2">✗</span>
                            Package returned after 3 failed attempts
                          </li>
                          <li className="flex items-center">
                            <span className="text-red-600 mr-2">✗</span>
                            Additional charges for re-shipping
                          </li>
                          <li className="flex items-center">
                            <span className="text-red-600 mr-2">✗</span>
                            Wrong address leads to return
                          </li>
                          <li className="flex items-center">
                            <span className="text-red-600 mr-2">✗</span>
                            Refusal to accept leads to cancellation
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      9
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Shipping FAQs</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        question: "How can I change my delivery address after placing an order?",
                        answer: "You can change your delivery address within 1 hour of placing the order by contacting our customer support. After that, changes may not be possible as the order would have been processed."
                      },
                      {
                        question: "What happens if I'm not available during delivery?",
                        answer: "The courier will attempt delivery 3 times on consecutive days. If unsuccessful, the package will be returned to us, and you'll be charged for re-shipping if you still want the order."
                      },
                      {
                        question: "Do you deliver on weekends and holidays?",
                        answer: "Yes, we deliver on weekends in most metro cities. Delivery may be delayed on national holidays. Express and same-day services include weekend delivery."
                      },
                      {
                        question: "Can I track my order in real-time?",
                        answer: "Yes, once your order is shipped, you'll receive a tracking link via SMS and email. You can track your order in real-time on our website or the courier's website."
                      },
                      {
                        question: "What is your packaging policy for fragile items?",
                        answer: "Fragile items are packed with extra cushioning, bubble wrap, and marked with 'Fragile' stickers. We use double-wall corrugated boxes for maximum protection."
                      },
                      {
                        question: "How are shipping costs calculated?",
                        answer: "Shipping costs are calculated based on package weight, dimensions, delivery location, and shipping method selected. Use our shipping calculator for an estimate."
                      }
                    ].map((faq, index) => (
                      <div 
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                          <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                        </div>
                        <div className="px-6 py-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Contact Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div 
                    className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                    style={{ borderLeftColor: primaryColor, borderLeftWidth: '4px' }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Need Shipping Help?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Contact Shipping Support</h4>
                        <div className="space-y-3">
                          <p className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            shipping@dreamtails.com
                          </p>
                          <p className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 1800-123-4567 (Shipping Department)
                          </p>
                          <p className="flex items-center text-gray-600">
                            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Mon-Sun: 8:00 AM - 10:00 PM
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li><a href="#" className="hover:text-gray-900 transition-colors">Track Order</a></li>
                          <li><a href="#" className="hover:text-gray-900 transition-colors">Shipping Calculator</a></li>
                          <li><a href="#" className="hover:text-gray-900 transition-colors">Serviceable Pincodes</a></li>
                          <li><a href="#" className="hover:text-gray-900 transition-colors">Delivery Status</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Order for Your Pet?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Enjoy fast, reliable shipping with real-time tracking across India.
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
                  Track Your Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/dreamtaillogo.png" 
                  alt="Dream Tails Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold">Dream Tails</span>
              </div>
              <p className="text-gray-400">
                Delivering happiness to pets across India.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Shipping Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Delivery Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Shipping Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>📧 shipping@dreamtails.com</li>
                <li>📞 +91 1800-123-4567</li>
                <li>📍 Bangalore, India</li>
                <li>⏰ 8:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Dream Tails. All rights reserved.</p>
            <p className="text-sm mt-2">
              This Shipping Policy was last updated on {new Date().toLocaleDateString('en-IN')}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Shipping