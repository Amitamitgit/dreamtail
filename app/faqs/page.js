"use client"
import React, { useState } from 'react'
 
import Footer from '../layout/Footer';
import Header from '../layout/Header';

const Faqs = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqs, setOpenFaqs] = useState([]);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    category: '',
    question: ''
  });

  const categories = [
    { id: 'all', name: 'All FAQs', icon: '📋', count: 50 },
    { id: 'orders', name: 'Orders & Payments', icon: '🛒', count: 12 },
    { id: 'shipping', name: 'Shipping & Delivery', icon: '🚚', count: 10 },
    { id: 'returns', name: 'Returns & Refunds', icon: '↩️', count: 8 },
    { id: 'products', name: 'Products & Services', icon: '🐕', count: 9 },
    { id: 'account', name: 'Account & Security', icon: '👤', count: 6 },
    { id: 'pet-care', name: 'Pet Care Advice', icon: '❤️', count: 5 }
  ];

  const faqs = [
    // Orders & Payments
    {
      id: 1,
      category: 'orders',
      question: 'How do I place an order?',
      answer: 'To place an order: 1) Browse products and add items to cart 2) Click the cart icon 3) Proceed to checkout 4) Enter shipping details 5) Select payment method 6) Review and confirm order. You will receive an order confirmation email once your order is successfully placed.',
      tags: ['ordering', 'checkout', 'payment']
    },
    {
      id: 2,
      category: 'orders',
      question: 'What payment methods do you accept?',
      answer: 'We accept: Credit/Debit Cards (Visa, MasterCard, Rupay), Net Banking, UPI (Google Pay, PhonePe, Paytm), Digital Wallets, Cash on Delivery (COD) for orders up to ₹5000, and EMI options through select banks. All payments are processed through secure payment gateways.',
      tags: ['payment', 'COD', 'UPI']
    },
    {
      id: 3,
      category: 'orders',
      question: 'Can I modify or cancel my order?',
      answer: 'Yes, you can modify or cancel your order within 1 hour of placing it. After 1 hour, the order enters processing and cannot be modified. To cancel: Go to "My Orders" → Select order → Click "Cancel Order". For modifications, please contact customer support immediately.',
      tags: ['cancellation', 'modification']
    },
    {
      id: 4,
      category: 'orders',
      question: 'How do I apply a coupon code?',
      answer: 'During checkout, look for the "Apply Coupon Code" field in the order summary section. Enter your coupon code and click "Apply". The discount will be reflected immediately. Note: Only one coupon can be applied per order and some coupons may have minimum order value requirements.',
      tags: ['coupon', 'discount', 'offers']
    },
    {
      id: 5,
      category: 'orders',
      question: 'Is my payment information secure?',
      answer: 'Absolutely. We use SSL encryption and PCI-compliant payment gateways. We do not store your credit card information on our servers. All transactions are processed through secure payment partners that comply with international security standards.',
      tags: ['security', 'payment-security']
    },

    // Shipping & Delivery
    {
      id: 6,
      category: 'shipping',
      question: 'How long does delivery take?',
      answer: 'Delivery times vary by location: Metro cities: 2-4 days, Tier 1 cities: 3-5 days, Tier 2 cities: 4-6 days, Other areas: 5-7 days. Express delivery (2-3 days) and same-day delivery (select cities) are also available. You can track your order in real-time once shipped.',
      tags: ['delivery-time', 'shipping']
    },
    {
      id: 7,
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Currently, we only ship within India. We deliver to over 25,000 pincodes across the country. For international inquiries, please contact our customer support for special arrangements.',
      tags: ['international', 'shipping']
    },
    {
      id: 8,
      category: 'shipping',
      question: 'How can I track my order?',
      answer: 'You can track your order by: 1) Clicking "Track Order" in the header 2) Logging into your account and checking "My Orders" 3) Using the tracking link sent via email/SMS 4) Contacting our customer support with your order ID.',
      tags: ['tracking', 'order-status']
    },
    {
      id: 9,
      category: 'shipping',
      question: 'What are your shipping charges?',
      answer: 'Shipping charges depend on order value and location: Orders below ₹499: ₹79, ₹499-₹999: ₹49, Above ₹999: Free standard shipping. Express delivery charges start at ₹99. Same-day delivery charges start at ₹199. Remote areas may have additional charges.',
      tags: ['shipping-cost', 'charges']
    },
    {
      id: 10,
      category: 'shipping',
      question: 'Can I change my delivery address?',
      answer: 'Yes, you can change your delivery address within 1 hour of placing the order. After that, contact customer support immediately. Once the order is shipped, address changes may not be possible and could incur additional charges.',
      tags: ['address-change', 'delivery']
    },

    // Returns & Refunds
    {
      id: 11,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy from the date of delivery. Products must be unused, in original condition with all tags and packaging intact. Some items like perishable goods, personalized products, and hygiene items are non-returnable. See our Return Policy for details.',
      tags: ['returns', 'policy']
    },
    {
      id: 12,
      category: 'returns',
      question: 'How do I return a product?',
      answer: 'To initiate a return: 1) Go to "My Orders" 2) Select the order 3) Click "Return Item" 4) Select reason and upload photos if needed 5) Submit request. We will approve within 24 hours and arrange pickup. For defective items, returns are free.',
      tags: ['return-process', 'refund']
    },
    {
      id: 13,
      category: 'returns',
      question: 'How long do refunds take?',
      answer: 'Refunds are processed within 7-10 business days after we receive and inspect the returned item. The time to reflect in your account depends on payment method: Cards: 7-10 days, UPI: 24-48 hours, Net Banking: 3-5 days, COD: Bank transfer within 5-7 days.',
      tags: ['refund-time', 'processing']
    },
    {
      id: 14,
      category: 'returns',
      question: 'What if I receive a damaged product?',
      answer: 'If you receive a damaged product: 1) Do not accept delivery if damage is visible 2) Take clear photos of damage 3) Contact us within 24 hours 4) We will arrange free replacement or refund. Keep all packaging materials for inspection.',
      tags: ['damaged', 'defective']
    },

    // Products & Services
    {
      id: 15,
      category: 'products',
      question: 'Are your products safe for pets?',
      answer: 'Yes, all our products are carefully selected and tested for pet safety. We source from reputed brands and manufacturers. For food and treats, we ensure they meet nutritional standards. However, we recommend consulting your vet before introducing new products.',
      tags: ['safety', 'quality', 'pets']
    },
    {
      id: 16,
      category: 'products',
      question: 'Do you sell prescription pet food?',
      answer: 'Yes, we sell prescription diets and specialized pet food. These require a valid veterinary prescription. You can upload the prescription during checkout or send it to pharmacy@dreamtails.com. Our pharmacy team will verify and process your order.',
      tags: ['prescription', 'pharmacy', 'food']
    },
    {
      id: 17,
      category: 'products',
      question: 'How do I choose the right size for my pet?',
      answer: 'We provide detailed size charts for apparel and accessories. Measure your pet\'s neck, chest, length, and weight. Compare with our size guide. If unsure, contact our pet experts via chat or email with your pet\'s measurements for personalized recommendations.',
      tags: ['sizing', 'measurements', 'fit']
    },
    {
      id: 18,
      category: 'products',
      question: 'Are your grooming services available in my area?',
      answer: 'Our grooming services are available in select cities: Bangalore, Mumbai, Delhi, Hyderabad, Chennai, Pune, and Kolkata. You can check availability by entering your pincode on the services booking page. We are expanding to more cities soon.',
      tags: ['grooming', 'services', 'locations']
    },

    // Account & Security
    {
      id: 19,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Login/Sign Up" → "Forgot Password" → Enter your registered email → Check email for reset link → Click link and create new password. If you don\'t receive the email, check spam folder or contact support.',
      tags: ['password', 'login', 'security']
    },
    {
      id: 20,
      category: 'account',
      question: 'Can I have multiple addresses saved?',
      answer: 'Yes, you can save multiple addresses in your address book. Go to "My Account" → "Address Book" → "Add New Address". You can set a default address for shipping and billing. During checkout, you can select from saved addresses.',
      tags: ['address', 'account', 'profile']
    },
    {
      id: 21,
      category: 'account',
      question: 'How do I update my email or phone number?',
      answer: 'Log into your account → "My Profile" → "Edit Profile" → Update email/phone → Save changes. For security, you will need to verify the new email/phone through OTP. Some changes may require contacting customer support.',
      tags: ['profile', 'contact-info', 'update']
    },

    // Pet Care Advice
    {
      id: 22,
      category: 'pet-care',
      question: 'How often should I bathe my dog?',
      answer: 'Generally, dogs should be bathed once a month, but it depends on breed, coat type, and lifestyle. Short-haired breeds: every 2-3 months, Long-haired breeds: every 4-6 weeks, Active/outdoor dogs: more frequently. Over-bathing can strip natural oils.',
      tags: ['bathing', 'grooming', 'dog-care']
    },
    {
      id: 23,
      category: 'pet-care',
      question: 'What should I feed my puppy?',
      answer: 'Puppies need specially formulated puppy food rich in protein and nutrients for growth. Feed 3-4 times daily for first 6 months, then 2-3 times. Always provide fresh water. Consult your vet for specific dietary recommendations based on breed and size.',
      tags: ['puppy', 'feeding', 'nutrition']
    },
    {
      id: 24,
      category: 'pet-care',
      question: 'How can I help my pet during fireworks?',
      answer: '1) Create a safe space indoors 2) Close windows and curtains 3) Play calming music 4) Use anxiety wraps or calming treats 5) Stay calm yourself 6) Distract with toys/treats 7) Consider pheromone diffusers. Consult your vet for severe anxiety.',
      tags: ['anxiety', 'safety', 'behavior']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    console.log('Question submitted:', contactForm);
    alert('Thank you for your question! We will respond within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      category: '',
      question: ''
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
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span style={{ color: primaryColor }}>Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about Dream Tails
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full px-6 py-4 pl-14 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-lg shadow-sm"
              style={{ 
                borderColor: secondaryColor,
                focusRingColor: primaryColor 
              }}
            />
            <svg 
              className="w-6 h-6 absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
              {filteredFaqs.length} results
            </div>
          </div>
          {searchQuery && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setSearchQuery('')}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" style={{ color: secondaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  Categories
                </h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between ${
                        activeCategory === category.id
                          ? 'text-white shadow-sm'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ 
                        backgroundColor: activeCategory === category.id ? secondaryColor : 'transparent'
                      }}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{category.icon}</span>
                        {category.name}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </nav>

                {/* Quick Help */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Quick Help</h4>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Support: 1800-123-4567
                    </a>
                    <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email: support@dreamtails.com
                    </a>
                    <button
                      onClick={() => document.getElementById('ask-question').scrollIntoView({ behavior: 'smooth' })}
                      className="w-full mt-4 py-2 rounded-lg font-medium text-white text-sm"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Ask New Question
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {categories.find(c => c.id === activeCategory)?.name || 'All FAQs'}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {activeCategory === 'all' 
                        ? 'Browse all frequently asked questions'
                        : `Common questions about ${categories.find(c => c.id === activeCategory)?.name.toLowerCase()}`
                      }
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Showing</div>
                    <div className="text-xl font-bold" style={{ color: secondaryColor }}>
                      {filteredFaqs.length} FAQs
                    </div>
                  </div>
                </div>

                {/* FAQs List */}
                <div className="space-y-4">
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq) => (
                      <div 
                        key={faq.id}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          style={{ backgroundColor: openFaqs.includes(faq.id) ? '#f9fafb' : 'transparent' }}
                        >
                          <div className="flex-1">
                            <div className="flex items-start">
                              <div 
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
                                style={{ backgroundColor: secondaryColor }}
                              >
                                Q
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  <span 
                                    className="text-xs px-2 py-1 rounded-full capitalize"
                                    style={{ backgroundColor: primaryColor + '20', color: primaryColor }}
                                  >
                                    {faq.category}
                                  </span>
                                  {faq.tags.slice(0, 2).map((tag, index) => (
                                    <span 
                                      key={index}
                                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                  {faq.tags.length > 2 && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                      +{faq.tags.length - 2} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <svg 
                            className={`w-5 h-5 flex-shrink-0 transition-transform ml-4 ${
                              openFaqs.includes(faq.id) ? 'transform rotate-180' : ''
                            }`}
                            style={{ color: secondaryColor }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {openFaqs.includes(faq.id) && (
                          <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                            <div className="flex">
                              <div 
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
                                style={{ backgroundColor: primaryColor }}
                              >
                                A
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>
                                
                                {/* Helpful Buttons */}
                                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                                  <div className="text-sm text-gray-600">
                                    Was this answer helpful?
                                  </div>
                                  <div className="flex space-x-3">
                                    <button
                                      onClick={() => alert('Thanks for your feedback!')}
                                      className="flex items-center text-sm text-green-600 hover:text-green-700"
                                    >
                                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                      </svg>
                                      Yes
                                    </button>
                                    <button
                                      onClick={() => alert('We\'ll improve this answer. Thanks!')}
                                      className="flex items-center text-sm text-red-600 hover:text-red-700"
                                    >
                                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m-7 10h5a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                      </svg>
                                      No
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                      <p className="text-gray-600 mb-6">
                        We couldn't find any FAQs matching "{searchQuery}"
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setActiveCategory('all');
                        }}
                        className="px-6 py-2 rounded-lg font-medium text-white"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        View All FAQs
                      </button>
                    </div>
                  )}
                </div>

                {/* Popular Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Topics</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'delivery', 'returns', 'payment', 'grooming', 'nutrition', 
                      'tracking', 'cancellation', 'prescription', 'sizing', 'vaccination'
                    ].map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(tag)}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                        style={{ 
                          backgroundColor: secondaryColor + '15',
                          color: secondaryColor
                        }}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ask Question Form */}
                <div id="ask-question" className="mt-12 pt-8 border-t border-gray-200 scroll-mt-24">
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Still Have <span style={{ color: secondaryColor }}>Questions?</span>
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Can't find what you're looking for? Ask our pet experts directly.
                    </p>
                    
                    <form onSubmit={handleSubmitQuestion} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
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
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
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
                          Question Category *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            'Orders', 'Shipping', 'Products', 'Services', 
                            'Account', 'Returns', 'Pet Care', 'Other'
                          ].map((category) => (
                            <label key={category} className="relative">
                              <input
                                type="radio"
                                name="category"
                                value={category.toLowerCase()}
                                checked={contactForm.category === category.toLowerCase()}
                                onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                                required
                                className="sr-only"
                              />
                              <div className={`text-center py-3 rounded-lg cursor-pointer transition-all ${
                                contactForm.category === category.toLowerCase() 
                                  ? 'text-white' 
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              style={{ 
                                backgroundColor: contactForm.category === category.toLowerCase() ? primaryColor : 'transparent',
                                border: contactForm.category === category.toLowerCase() ? 'none' : '1px solid #d1d5db'
                              }}>
                                {category}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Question *
                        </label>
                        <textarea
                          value={contactForm.question}
                          onChange={(e) => setContactForm({...contactForm, question: e.target.value})}
                          required
                          rows="4"
                          placeholder="Describe your question in detail..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                          style={{ 
                            borderColor: secondaryColor,
                            focusRingColor: primaryColor 
                          }}
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
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
                            Answered by pet experts
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
                          style={{ backgroundColor: primaryColor }}
                        >
                          Submit Question
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

      {/* Live Support Banner */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl"
                style={{ backgroundColor: secondaryColor }}
              >
                📞
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Call Support</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for urgent queries</p>
              <div className="text-lg font-semibold" style={{ color: secondaryColor }}>
                1800-123-4567
              </div>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl"
                style={{ backgroundColor: primaryColor }}
              >
                💬
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">Instant answers from our team</p>
              <button
                onClick={() => alert('Live chat would open here')}
                className="px-6 py-2 rounded-lg font-medium text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Start Chat
              </button>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl"
                style={{ backgroundColor: secondaryColor }}
              >
                📧
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-4">Response within 12 hours</p>
              <div className="text-lg font-semibold" style={{ color: secondaryColor }}>
                support@dreamtails.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Help Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'How to Measure Your Pet for Perfect Fit',
                description: 'Complete guide to measuring your pet for apparel and accessories',
                category: 'Pet Care',
                readTime: '3 min read'
              },
              {
                title: 'Understanding Pet Food Labels',
                description: 'Learn how to read and understand pet food nutrition labels',
                category: 'Nutrition',
                readTime: '5 min read'
              },
              {
                title: 'Seasonal Pet Care Guide',
                description: 'Essential tips for pet care during different seasons',
                category: 'Pet Care',
                readTime: '4 min read'
              }
            ].map((article, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ backgroundColor: primaryColor + '20', color: primaryColor }}
                >
                  {article.category}
                </span>
                <h3 className="font-bold text-gray-900 mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.readTime}</span>
                  <button className="text-gray-600 hover:text-gray-900">Read →</button>
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

export default Faqs