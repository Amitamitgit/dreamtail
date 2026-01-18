"use client"
import React, { useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
 

const TermsandCondition = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';
  
  const [activeSection, setActiveSection] = useState('overview');
  
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'account', title: 'Account Terms' },
    { id: 'orders', title: 'Orders & Payments' },
    { id: 'products', title: 'Product Information' },
    { id: 'returns', title: 'Returns & Refunds' },
    { id: 'services', title: 'Services Terms' },
    { id: 'liability', title: 'Liability' },
    { id: 'privacy', title: 'Privacy' },
    { id: 'changes', title: 'Changes to Terms' }
  ];

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
              Legal Information
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & <span style={{ color: primaryColor }}>Conditions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using Dream Tails services.
            </p>
          </div>
        </div>
      </section>

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
                  Table of Contents
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
                  <p className="text-sm text-gray-600 mb-4">
                    Last updated: {new Date().toLocaleDateString('en-IN', { 
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print this page
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                {/* Introduction */}
                <div className="mb-8">
                  <p className="text-gray-600 mb-6">
                    Welcome to Dream Tails. These Terms and Conditions govern your use of our website, 
                    mobile applications, and services. By accessing or using our services, you agree to 
                    be bound by these Terms.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> These terms affect your legal rights and obligations. 
                      If you do not agree to be bound by all of these terms, do not access or use our services.
                    </p>
                  </div>
                </div>

                {/* Overview Section */}
                <section id="overview" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      1
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Overview & Acceptance</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Dream Tails ("we," "our," or "us") operates the website dreamtails.com and associated 
                      mobile applications (collectively, the "Platform"). These Terms and Conditions ("Terms") 
                      constitute a legally binding agreement between you and Dream Tails.
                    </p>
                    <p>
                      By accessing, browsing, or using the Platform, you acknowledge that you have read, 
                      understood, and agree to be bound by these Terms and our Privacy Policy. If you are 
                      using the Platform on behalf of an organization, you represent that you have the 
                      authority to bind that organization to these Terms.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Points:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>You must be at least 18 years old to use our services</li>
                        <li>You are responsible for maintaining the confidentiality of your account</li>
                        <li>All purchases are subject to availability and confirmation of the order price</li>
                        <li>We reserve the right to refuse service to anyone at any time</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Account Terms */}
                <section id="account" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      2
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Account Terms</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">Account Creation</h3>
                    <p>
                      To access certain features of the Platform, you must register for an account. 
                      You agree to provide accurate, current, and complete information during registration 
                      and to update such information to keep it accurate, current, and complete.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Account Security</h3>
                    <p>
                      You are responsible for safeguarding your password and for all activities that 
                      occur under your account. You agree to notify us immediately of any unauthorized 
                      use of your account.
                    </p>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
                      <h4 className="font-semibold text-red-800 mb-2">Prohibited Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-red-700">
                        <li>Creating multiple accounts for fraudulent purposes</li>
                        <li>Using another user's account without permission</li>
                        <li>Providing false or misleading information</li>
                        <li>Attempting to bypass any security measures</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Orders & Payments */}
                <section id="orders" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      3
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Orders & Payments</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">Order Placement</h3>
                    <p>
                      When you place an order through our Platform, you are making an offer to purchase 
                      the selected products or services. We reserve the right to accept or reject any 
                      order in our sole discretion.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Pricing</h3>
                    <p>
                      All prices are in Indian Rupees (₹) and include applicable taxes unless stated otherwise. 
                      We reserve the right to change prices at any time without prior notice.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Payment Methods</h3>
                    <p>
                      We accept various payment methods including credit/debit cards, net banking, UPI, 
                      and cash on delivery for eligible orders. By providing payment information, you 
                      represent that you are authorized to use the payment method.
                    </p>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
                      <h4 className="font-semibold text-green-800 mb-2">Payment Security:</h4>
                      <p className="text-green-700">
                        All payments are processed through secure payment gateways. We do not store 
                        your complete credit card information on our servers.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Product Information */}
                <section id="products" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      4
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Product Information</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">Accuracy</h3>
                    <p>
                      We strive to ensure that product descriptions, images, and specifications are 
                      accurate. However, we do not warrant that product descriptions or other content 
                      are accurate, complete, reliable, current, or error-free.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Availability</h3>
                    <p>
                      All products are subject to availability. If a product becomes unavailable after 
                      you place an order, we will notify you and provide options for substitution or refund.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Pet Safety</h3>
                    <p>
                      While we carefully select our products, it is your responsibility to ensure that 
                      any product is suitable for your pet. Consult with a veterinarian if you have 
                      concerns about product suitability.
                    </p>
                  </div>
                </section>

                {/* Returns & Refunds */}
                <section id="returns" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      5
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Returns & Refunds</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">Return Policy</h3>
                    <p>
                      We accept returns within 7 days of delivery for unopened and unused products 
                      in their original packaging. Certain products (e.g., perishable items, personalized 
                      products) may not be eligible for return.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Refund Process</h3>
                    <p>
                      Refunds are processed within 7-10 business days after we receive the returned 
                      product. The refund amount will be credited to the original payment method.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Damaged or Defective Products</h3>
                    <p>
                      If you receive a damaged or defective product, please contact our customer 
                      support within 24 hours of delivery. We will arrange for replacement or refund.
                    </p>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Note:</h4>
                      <p className="text-yellow-700">
                        For hygiene reasons, certain pet care products (e.g., grooming tools, 
                        feeding bowls) cannot be returned once opened or used.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Services Terms */}
                <section id="services" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      6
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Services Terms</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">Service Bookings</h3>
                    <p>
                      All service bookings (grooming, training, veterinary, etc.) are subject to 
                      availability and confirmation. We recommend booking appointments in advance.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Cancellation Policy</h3>
                    <p>
                      You may cancel or reschedule appointments up to 24 hours in advance without charge. 
                      Late cancellations or no-shows may be subject to cancellation fees.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Pet Health Requirements</h3>
                    <p>
                      For the safety of all pets, we require proof of current vaccinations for 
                      grooming, boarding, and daycare services. Pets showing signs of illness may 
                      be refused service.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Liability for Pets</h3>
                    <p>
                      While we take utmost care, you understand and agree that we are not liable for 
                      any injury, illness, or escape of your pet while in our care, except in cases 
                      of proven negligence.
                    </p>
                  </div>
                </section>

                {/* Liability */}
                <section id="liability" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      7
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">General Limitation</h3>
                    <p>
                      To the maximum extent permitted by law, Dream Tails shall not be liable for any 
                      indirect, incidental, special, consequential, or punitive damages resulting from 
                      your use of or inability to use the Platform.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Maximum Liability</h3>
                    <p>
                      Our total liability to you for all claims arising from or related to the Platform 
                      or these Terms shall not exceed the amount you have paid to us in the last 6 months.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Indemnification</h3>
                    <p>
                      You agree to indemnify and hold harmless Dream Tails, its officers, directors, 
                      employees, and agents from any claims, damages, losses, liabilities, and expenses 
                      arising from your use of the Platform or violation of these Terms.
                    </p>
                  </div>
                </section>

                {/* Privacy */}
                <section id="privacy" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      8
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Privacy & Data Protection</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Your privacy is important to us. Our Privacy Policy explains how we collect, 
                      use, and protect your personal information. By using our Platform, you consent 
                      to our collection and use of information as described in the Privacy Policy.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Data Security</h3>
                    <p>
                      We implement reasonable security measures to protect your personal information. 
                      However, no method of transmission over the Internet or electronic storage is 
                      100% secure.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Communication</h3>
                    <p>
                      By providing your contact information, you consent to receive transactional and 
                      promotional communications from us. You may opt-out of promotional communications 
                      at any time.
                    </p>
                  </div>
                </section>

                {/* Changes to Terms */}
                <section id="changes" className="mb-12 scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                      style={{ backgroundColor: secondaryColor }}
                    >
                      9
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900">Modifications</h3>
                    <p>
                      We reserve the right to modify these Terms at any time. We will notify you of 
                      significant changes by posting the updated Terms on the Platform or sending you 
                      an email notification.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Continued Use</h3>
                    <p>
                      Your continued use of the Platform after the effective date of the revised Terms 
                      constitutes your acceptance of the changes. If you do not agree to the revised 
                      Terms, you must stop using the Platform.
                    </p>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Governing Law</h3>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of 
                      India, without regard to its conflict of law principles.
                    </p>
                  </div>
                </section>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div 
                    className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                    style={{ borderLeftColor: primaryColor, borderLeftWidth: '4px' }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Contact for Questions
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <p>📧 legal@dreamtails.com</p>
                      <p>📞 +91 1800-123-4567 (Legal Department)</p>
                      <p>📍 Dream Tails Legal Department, Bangalore, Karnataka - 560034</p>
                    </div>
                  </div>
                </div>

                {/* Acceptance Button */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agree-terms"
                        className="w-4 h-4 rounded"
                        style={{ accentColor: secondaryColor }}
                      />
                      <label htmlFor="agree-terms" className="ml-2 text-sm text-gray-700">
                        I have read and agree to the Terms and Conditions
                      </label>
                    </div>
                    <button
                      onClick={() => {
                        const checkbox = document.getElementById('agree-terms');
                        if (checkbox.checked) {
                          alert('Thank you for accepting our Terms and Conditions!');
                          // You can store acceptance in localStorage or send to backend
                          localStorage.setItem('termsAccepted', 'true');
                        } else {
                          alert('Please check the box to accept the Terms and Conditions');
                        }
                      }}
                      className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Accept Terms
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   <Footer/>
    </>
  )
}

export default TermsandCondition