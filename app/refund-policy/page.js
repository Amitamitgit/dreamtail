"use client"
import React, { useState } from 'react'
 
import Footer from '../layout/Footer';
import Header from '../layout/Header';

const RefundPolicy = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';
  
  const [activeSection, setActiveSection] = useState('overview');
  const [refundForm, setRefundForm] = useState({
    orderId: '',
    email: '',
    reason: '',
    productType: '',
    description: '',
    attachments: []
  });

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'timeframe', title: 'Timeframe' },
    { id: 'process', title: 'Refund Process' },
    { id: 'products', title: 'Product-Specific Rules' },
    { id: 'services', title: 'Service Refunds' },
    { id: 'damaged', title: 'Damaged Items' },
    { id: 'non-refundable', title: 'Non-Refundable Items' },
    { id: 'cancellations', title: 'Order Cancellations' },
    { id: 'contact', title: 'Contact Support' }
  ];

  const refundReasons = [
    'Product damaged during delivery',
    'Wrong product delivered',
    'Product defective or not working',
    'Changed my mind',
    'Product different from description',
    'Received incomplete order',
    'Expired product received',
    'Other reason'
  ];

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setRefundForm({
      ...refundForm,
      attachments: [...refundForm.attachments, ...files]
    });
  };

  const removeAttachment = (index) => {
    const newAttachments = [...refundForm.attachments];
    newAttachments.splice(index, 1);
    setRefundForm({
      ...refundForm,
      attachments: newAttachments
    });
  };

  const handleSubmitRefund = (e) => {
    e.preventDefault();
    // Handle refund request submission
    console.log('Refund request:', refundForm);
    alert('Refund request submitted! Our team will contact you within 24 hours.');
    setRefundForm({
      orderId: '',
      email: '',
      reason: '',
      productType: '',
      description: '',
      attachments: []
    });
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
              Hassle-Free Returns
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund & <span style={{ color: primaryColor }}>Return Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Easy returns and quick refunds for your peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stat: '7 Days', label: 'Return Window' },
              { stat: '24 Hours', label: 'Refund Initiation' },
              { stat: '7-10 Days', label: 'Refund Processing' },
              { stat: 'Free Returns', label: 'For Defective Items' }
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
                  <div 
                    className="p-4 rounded-lg mb-4"
                    style={{ backgroundColor: primaryColor + '15' }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                    <p className="text-sm text-gray-600">
                      Start a refund request below or contact our support team.
                    </p>
                  </div>
                  <button
                    onClick={() => document.getElementById('refund-form').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-2 rounded-lg font-medium text-white text-sm"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Start Refund Request
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
                    <h2 className="text-2xl font-bold text-gray-900">Policy Overview</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      At Dream Tails, we strive to ensure complete satisfaction with your purchase. 
                      This Refund Policy outlines the terms and conditions for returns, exchanges, 
                      and refunds for products and services purchased through our platform.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Key Principles</h4>
                      <ul className="list-disc pl-5 space-y-1 text-blue-700">
                        <li>Hassle-free returns for eligible products</li>
                        <li>Quick refund processing times</li>
                        <li>Free returns for defective or damaged items</li>
                        <li>Transparent policies with no hidden charges</li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold">✓</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Easy Returns</h4>
                        </div>
                        <p className="text-sm text-gray-600">Simple online return process</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold">✓</span>
                          </div>
                          <h4 className="font-semibold text-gray-900">Full Refunds</h4>
                        </div>
                        <p className="text-sm text-gray-600">100% refund for eligible returns</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Eligibility Criteria */}
                <section id="eligibility" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Eligibility Criteria</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Condition
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Eligible for Return
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Notes
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            {
                              condition: 'Unopened & Unused',
                              eligible: 'Yes',
                              notes: 'Original packaging must be intact'
                            },
                            {
                              condition: 'Defective Product',
                              eligible: 'Yes',
                              notes: 'Free return shipping'
                            },
                            {
                              condition: 'Wrong Item Delivered',
                              eligible: 'Yes',
                              notes: 'Free return & replacement'
                            },
                            {
                              condition: 'Changed Mind',
                              eligible: 'Yes',
                              notes: 'Customer pays return shipping'
                            },
                            {
                              condition: 'Opened & Used',
                              eligible: 'No',
                              notes: 'Except for defective items'
                            },
                            {
                              condition: 'Past 7 Days',
                              eligible: 'No',
                              notes: 'From delivery date'
                            }
                          ].map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-medium text-gray-900">{item.condition}</td>
                              <td className="px-4 py-3">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  item.eligible === 'Yes' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {item.eligible}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-gray-700">{item.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
                      <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                        <li>Products must be in original condition with all tags attached</li>
                        <li>Proof of purchase (order number) is required</li>
                        <li>Some items may have special return conditions</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Timeframe */}
                <section id="timeframe" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Refund Timeframe</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Return Window</h3>
                        <p className="text-gray-600">
                          You have <strong>7 days</strong> from the date of delivery to initiate a return request.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          step: '1',
                          title: 'Return Initiation',
                          time: 'Within 24 hours',
                          description: 'After we receive your request'
                        },
                        {
                          step: '2',
                          title: 'Pickup/Return',
                          time: '1-3 business days',
                          description: 'For eligible returns'
                        },
                        {
                          step: '3',
                          title: 'Refund Processing',
                          time: '7-10 business days',
                          description: 'After we receive the item'
                        }
                      ].map((step) => (
                        <div key={step.step} className="text-center border border-gray-200 rounded-lg p-4">
                          <div 
                            className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: primaryColor }}
                          >
                            {step.step}
                          </div>
                          <h4 className="font-semibold text-gray-900">{step.title}</h4>
                          <div 
                            className="text-lg font-bold my-2"
                            style={{ color: secondaryColor }}
                          >
                            {step.time}
                          </div>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Payment Method Refund Times</h4>
                      <ul className="space-y-2 text-green-700">
                        <li><strong>Credit/Debit Cards:</strong> 7-10 business days</li>
                        <li><strong>Net Banking:</strong> 3-5 business days</li>
                        <li><strong>UPI:</strong> 24-48 hours</li>
                        <li><strong>Wallet:</strong> 2-3 business days</li>
                        <li><strong>Cash on Delivery:</strong> Bank transfer within 5-7 days</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Refund Process */}
                <section id="process" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Refund Process</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Process</h3>
                      <ol className="list-decimal pl-5 space-y-4">
                        <li>
                          <strong>Submit Return Request:</strong> Fill out the refund form below or contact customer support
                        </li>
                        <li>
                          <strong>Receive Return Authorization:</strong> We'll email you a Return Authorization Number (RAN)
                        </li>
                        <li>
                          <strong>Package the Item:</strong> Include all original accessories, tags, and packaging
                        </li>
                        <li>
                          <strong>Schedule Pickup:</strong> We'll arrange a pickup for eligible returns
                        </li>
                        <li>
                          <strong>Quality Check:</strong> We'll inspect the returned item
                        </li>
                        <li>
                          <strong>Refund Initiation:</strong> Refund processed after successful inspection
                        </li>
                        <li>
                          <strong>Confirmation:</strong> You'll receive email confirmation once refund is processed
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          What to Include
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Original invoice copy</li>
                          <li>• All original packaging</li>
                          <li>• Product tags and labels</li>
                          <li>• All accessories and freebies</li>
                          <li>• Return form (if provided)</li>
                        </ul>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          What Not to Include
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Damaged packaging</li>
                          <li>• Missing accessories</li>
                          <li>• Used or worn items</li>
                          <li>• Items without tags</li>
                          <li>• Non-original items</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Product-Specific Rules */}
                <section id="products" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      5
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Product-Specific Rules</h2>
                  </div>
                  
                  <div className="space-y-6 text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          category: 'Pet Food',
                          returnable: 'No',
                          reason: 'Perishable item',
                          icon: '🍗'
                        },
                        {
                          category: 'Grooming Tools',
                          returnable: 'Yes*',
                          reason: 'Unused condition only',
                          icon: '✂️'
                        },
                        {
                          category: 'Pet Apparel',
                          returnable: 'Yes',
                          reason: 'With tags attached',
                          icon: '👕'
                        },
                        {
                          category: 'Medication',
                          returnable: 'No',
                          reason: 'Regulatory restrictions',
                          icon: '💊'
                        },
                        {
                          category: 'Toys',
                          returnable: 'Yes',
                          reason: 'Unopened packaging',
                          icon: '🎾'
                        },
                        {
                          category: 'Electronics',
                          returnable: 'Yes*',
                          reason: '15-day replacement only',
                          icon: '🔌'
                        }
                      ].map((product, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="text-2xl mb-2">{product.icon}</div>
                          <h4 className="font-semibold text-gray-900">{product.category}</h4>
                          <div className="flex items-center mt-2">
                            <span className={`text-sm font-medium px-2 py-1 rounded ${
                              product.returnable === 'Yes' 
                                ? 'bg-green-100 text-green-800' 
                                : product.returnable === 'Yes*'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {product.returnable}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{product.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Service Refunds */}
                <section id="services" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      6
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Service Refunds</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Service Cancellation Policy</h4>
                      <p className="text-purple-700">
                        For grooming, training, boarding, and other services, the following refund policy applies:
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Service Type
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Cancellation Notice
                            </th>
                            <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                              Refund Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            {
                              service: 'Grooming Appointment',
                              notice: '24 hours before',
                              refund: '100% refund'
                            },
                            {
                              service: 'Training Session',
                              notice: '48 hours before',
                              refund: '100% refund'
                            },
                            {
                              service: 'Boarding/Stay',
                              notice: '72 hours before',
                              refund: '50% refund'
                            },
                            {
                              service: 'Day Care',
                              notice: '24 hours before',
                              refund: '100% refund'
                            },
                            {
                              service: 'Veterinary Consultation',
                              notice: '12 hours before',
                              refund: '100% refund'
                            }
                          ].map((service, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-medium text-gray-900">{service.service}</td>
                              <td className="px-4 py-3 text-gray-700">{service.notice}</td>
                              <td className="px-4 py-3">
                                <span className="font-medium text-green-600">{service.refund}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
                      <h4 className="font-semibold text-red-800 mb-2">Late Cancellations & No-Shows</h4>
                      <p className="text-red-700">
                        Cancellations made after the notice period or no-shows may result in 
                        forfeiture of the service fee or a cancellation charge of up to 50%.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Damaged Items */}
                <section id="damaged" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      7
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Damaged or Defective Items</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">What to Do If You Receive a Damaged Item</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-blue-700">
                        <li>Do not accept delivery if damage is visible</li>
                        <li>Take clear photos of the damaged packaging and product</li>
                        <li>Contact us within 24 hours of delivery</li>
                        <li>Keep all packaging materials</li>
                        <li>Do not use or discard the damaged item</li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                        <h4 className="font-semibold text-gray-900 mb-3">Free Replacement</h4>
                        <p className="text-gray-600">
                          We offer free replacement for damaged or defective items within 7 days of delivery.
                        </p>
                        <div className="mt-3">
                          <span className="text-sm font-medium text-green-600">
                            • No return shipping charges<br/>
                            • Priority processing<br/>
                            • Same-day dispatch for in-stock items
                          </span>
                        </div>
                      </div>
                      <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                        <h4 className="font-semibold text-gray-900 mb-3">Refund Option</h4>
                        <p className="text-gray-600">
                          You may choose a full refund instead of replacement for damaged items.
                        </p>
                        <div className="mt-3">
                          <span className="text-sm font-medium text-blue-600">
                            • 100% refund including shipping<br/>
                            • Processed within 24 hours<br/>
                            • To original payment method
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Non-Refundable Items */}
                <section id="non-refundable" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      8
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Non-Refundable Items</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Items Not Eligible for Return</h4>
                      <ul className="list-disc pl-5 space-y-2 text-red-700">
                        <li><strong>Perishable items:</strong> Pet food, treats, and supplements</li>
                        <li><strong>Personalized products:</strong> Custom tags, engraved items</li>
                        <li><strong>Hygiene products:</strong> Grooming tools, feeding bowls after use</li>
                        <li><strong>Digital products:</strong> E-books, online courses</li>
                        <li><strong>Gift cards and vouchers:</strong> Non-transferable and non-refundable</li>
                        <li><strong>Clearance or sale items:</strong> Marked as "Final Sale"</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Exceptions</h4>
                      <p className="text-yellow-700">
                        Even non-returnable items may be eligible for refund or replacement if:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-yellow-700 mt-2">
                        <li>The item is defective or damaged upon arrival</li>
                        <li>Wrong item was delivered</li>
                        <li>Item expired before the expiry date mentioned</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Order Cancellations */}
                <section id="cancellations" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      9
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Order Cancellations</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          status: 'Order Placed',
                          cancellation: '100% refund',
                          time: 'Within 1 hour'
                        },
                        {
                          status: 'Order Processing',
                          cancellation: '100% refund',
                          time: 'Before shipping'
                        },
                        {
                          status: 'Order Shipped',
                          cancellation: 'After return',
                          time: 'Return required'
                        }
                      ].map((status, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 text-center">
                          <h4 className="font-semibold text-gray-900 mb-2">{status.status}</h4>
                          <div 
                            className="text-lg font-bold mb-2"
                            style={{ color: secondaryColor }}
                          >
                            {status.cancellation}
                          </div>
                          <p className="text-sm text-gray-600">{status.time}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">How to Cancel an Order</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                        <li>Go to "My Orders" in your account</li>
                        <li>Select the order you want to cancel</li>
                        <li>Click "Cancel Order" button</li>
                        <li>Select cancellation reason</li>
                        <li>Receive confirmation email</li>
                      </ol>
                      <p className="text-sm text-gray-500 mt-3">
                        For orders that have already shipped, you can refuse delivery or return the item after delivery.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact Support */}
                <section id="contact" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      10
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Support</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div 
                      className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                      style={{ borderLeftColor: primaryColor, borderLeftWidth: '4px' }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Refund & Return Support</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                          <div className="space-y-3">
                            <p className="flex items-center">
                              <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              returns@dreamtails.com
                            </p>
                            <p className="flex items-center">
                              <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              +91 1800-123-4567 (Returns Department)
                            </p>
                            <p className="flex items-center">
                              <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Mon-Sat: 9:00 AM - 8:00 PM
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Email: Within 12 hours</li>
                            <li>• Phone: Immediate during business hours</li>
                            <li>• WhatsApp: Within 2 hours</li>
                            <li>• Live Chat: Immediate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Refund Request Form */}
                <div id="refund-form" className="mt-12 pt-8 border-t border-gray-200 scroll-mt-24">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Refund Request</h3>
                    
                    <form onSubmit={handleSubmitRefund} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Order ID *
                          </label>
                          <input
                            type="text"
                            name="orderId"
                            value={refundForm.orderId}
                            onChange={(e) => setRefundForm({...refundForm, orderId: e.target.value})}
                            required
                            placeholder="e.g., DT2023123456"
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
                            value={refundForm.email}
                            onChange={(e) => setRefundForm({...refundForm, email: e.target.value})}
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
                          Reason for Return *
                        </label>
                        <select
                          name="reason"
                          value={refundForm.reason}
                          onChange={(e) => setRefundForm({...refundForm, reason: e.target.value})}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none"
                          style={{ 
                            borderColor: secondaryColor,
                            focusRingColor: primaryColor 
                          }}
                        >
                          <option value="">Select a reason</option>
                          {refundReasons.map((reason, index) => (
                            <option key={index} value={reason}>{reason}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Product Type *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['Pet Food', 'Accessories', 'Toys', 'Grooming', 'Apparel', 'Medication', 'Electronics', 'Other'].map((type) => (
                            <label key={type} className="relative">
                              <input
                                type="radio"
                                name="productType"
                                value={type}
                                checked={refundForm.productType === type}
                                onChange={(e) => setRefundForm({...refundForm, productType: e.target.value})}
                                required
                                className="sr-only"
                              />
                              <div className={`text-center py-3 rounded-lg cursor-pointer transition-all ${
                                refundForm.productType === type 
                                  ? 'text-white' 
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              style={{ 
                                backgroundColor: refundForm.productType === type ? secondaryColor : 'transparent',
                                border: refundForm.productType === type ? 'none' : '1px solid #d1d5db'
                              }}>
                                {type}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Detailed Description *
                        </label>
                        <textarea
                          name="description"
                          value={refundForm.description}
                          onChange={(e) => setRefundForm({...refundForm, description: e.target.value})}
                          required
                          rows="4"
                          placeholder="Please describe the issue in detail..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                          style={{ 
                            borderColor: secondaryColor,
                            focusRingColor: primaryColor 
                          }}
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Photos (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            id="file-upload"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label htmlFor="file-upload" className="cursor-pointer">
                            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="text-gray-600">Click to upload photos of the product</p>
                            <p className="text-sm text-gray-500 mt-1">Max 5 files, 5MB each</p>
                          </label>
                        </div>
                        
                        {/* File Preview */}
                        {refundForm.attachments.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-medium text-gray-900 mb-2">Attached Files:</h4>
                            <div className="space-y-2">
                              {refundForm.attachments.map((file, index) => (
                                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                                  <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                    <span className="text-sm text-gray-700">{file.name}</span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeAttachment(index)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <p className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Response within 24 hours
                          </p>
                          <p className="flex items-center mt-1">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            No hidden charges
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                          style={{ backgroundColor: primaryColor }}
                        >
                          Submit Refund Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Refund Policy <span style={{ color: primaryColor }}>FAQs</span>
            </h2>
            <p className="text-gray-600">
              Quick answers to common refund and return questions
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to receive my refund?",
                answer: "Refunds are typically processed within 7-10 business days after we receive and inspect the returned item. The time it takes for the refund to appear in your account depends on your payment method."
              },
              {
                question: "Do I have to pay for return shipping?",
                answer: "For defective, damaged, or wrong items, we provide free return shipping. For returns due to change of mind, customers are responsible for return shipping costs."
              },
              {
                question: "Can I exchange an item instead of getting a refund?",
                answer: "Yes! You can request an exchange for a different size, color, or product. The exchange process is similar to returns, and we'll ship the replacement item once we receive your return."
              },
              {
                question: "What if I received a gift that I want to return?",
                answer: "Gift returns are accepted within 7 days of delivery. The refund will be issued to the original payment method. Please contact our support team for gift return instructions."
              },
              {
                question: "How do I track my refund status?",
                answer: "You can track your refund status in your account under 'My Returns'. We'll also send email updates at each stage of the process."
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
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default RefundPolicy