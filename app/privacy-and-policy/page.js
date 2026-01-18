"use client"
import React, { useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';


const PrivacyandPolicy = () => {
    const primaryColor = 'rgb(217, 80, 96)';
    const secondaryColor = 'rgb(0, 105, 96)';

    const [activeSection, setActiveSection] = useState('introduction');
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false
    });

    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'data-collection', title: 'Data We Collect' },
        { id: 'data-use', title: 'How We Use Data' },
        { id: 'data-sharing', title: 'Data Sharing' },
        { id: 'data-security', title: 'Data Security' },
        { id: 'your-rights', title: 'Your Rights' },
        { id: 'cookies', title: 'Cookies' },
        { id: 'children', title: "Children's Privacy" },
        { id: 'updates', title: 'Policy Updates' },
        { id: 'contact', title: 'Contact Us' }
    ];

    const handleCookieChange = (cookieType) => {
        if (cookieType === 'necessary') return; // Cannot disable necessary cookies

        setCookiePreferences({
            ...cookiePreferences,
            [cookieType]: !cookiePreferences[cookieType]
        });
    };

    const saveCookiePreferences = () => {
        localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
        alert('Cookie preferences saved successfully!');
    };

    const resetCookiePreferences = () => {
        setCookiePreferences({
            necessary: true,
            functional: false,
            analytics: false,
            marketing: false
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
                            Your Privacy Matters
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Privacy <span style={{ color: primaryColor }}>Policy</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            How we protect and use your personal information at Dream Tails
                        </p>
                    </div>
                </div>
            </section>

            {/* Cookie Banner (Sticky at bottom) */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 hidden" id="cookie-banner">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-2">🍪 We Use Cookies</h3>
                            <p className="text-sm text-gray-600">
                                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                                By continuing to use our site, you consent to our use of cookies.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    document.getElementById('cookie-banner').classList.add('hidden');
                                    saveCookiePreferences();
                                }}
                                className="px-4 py-2 rounded-lg font-medium text-white text-sm"
                                style={{ backgroundColor: secondaryColor }}
                            >
                                Accept All
                            </button>
                            <button
                                onClick={() => {
                                    document.getElementById('cookie-banner').classList.add('hidden');
                                    document.getElementById('cookie-settings').classList.remove('hidden');
                                }}
                                className="px-4 py-2 rounded-lg font-medium border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
                            >
                                Customize
                            </button>
                            <button
                                onClick={() => document.getElementById('cookie-banner').classList.add('hidden')}
                                className="px-4 py-2 rounded-lg font-medium text-gray-600 text-sm hover:text-gray-900"
                            >
                                Reject All
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cookie Settings Modal */}
            <div id="cookie-settings" className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Cookie Preferences</h3>
                            <button
                                onClick={() => document.getElementById('cookie-settings').classList.add('hidden')}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Necessary Cookies */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Necessary Cookies</h4>
                                        <p className="text-sm text-gray-600">Always active</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={cookiePreferences.necessary}
                                        disabled
                                        className="w-5 h-5 rounded"
                                        style={{ accentColor: secondaryColor }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    Essential for the website to function properly. Cannot be disabled.
                                </p>
                            </div>

                            {/* Functional Cookies */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Functional Cookies</h4>
                                        <p className="text-sm text-gray-600">Enhance your experience</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={cookiePreferences.functional}
                                        onChange={() => handleCookieChange('functional')}
                                        className="w-5 h-5 rounded cursor-pointer"
                                        style={{ accentColor: secondaryColor }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    Remember your preferences and settings for a better experience.
                                </p>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                                        <p className="text-sm text-gray-600">Help us improve</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={cookiePreferences.analytics}
                                        onChange={() => handleCookieChange('analytics')}
                                        className="w-5 h-5 rounded cursor-pointer"
                                        style={{ accentColor: secondaryColor }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    Help us understand how visitors interact with our website.
                                </p>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                                        <p className="text-sm text-gray-600">Personalized content</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={cookiePreferences.marketing}
                                        onChange={() => handleCookieChange('marketing')}
                                        className="w-5 h-5 rounded cursor-pointer"
                                        style={{ accentColor: secondaryColor }}
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    Track your browsing habits to show relevant advertisements.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                            <button
                                onClick={resetCookiePreferences}
                                className="px-4 py-2 text-gray-700 hover:text-gray-900"
                            >
                                Reset to Default
                            </button>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => document.getElementById('cookie-settings').classList.add('hidden')}
                                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        saveCookiePreferences();
                                        document.getElementById('cookie-settings').classList.add('hidden');
                                    }}
                                    className="px-4 py-2 rounded-lg font-medium text-white"
                                    style={{ backgroundColor: secondaryColor }}
                                >
                                    Save Preferences
                                </button>
                            </div>
                        </div>
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    Quick Navigation
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
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeSection === section.id
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
                                        <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN', {
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
                                        Print Policy
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                                {/* Introduction */}
                                <section id="introduction" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            1
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            Dream Tails ("we," "our," or "us") is committed to protecting your privacy.
                                            This Privacy Policy explains how we collect, use, disclose, and safeguard your
                                            information when you visit our website dreamtails.com, use our mobile application,
                                            or engage with our services.
                                        </p>
                                        <p>
                                            Please read this Privacy Policy carefully. By accessing or using our services,
                                            you agree to the collection and use of information in accordance with this policy.
                                        </p>

                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
                                            <h4 className="font-semibold text-blue-800 mb-2">GDPR & Indian Data Protection</h4>
                                            <p className="text-blue-700 text-sm">
                                                We comply with applicable data protection laws, including the Information
                                                Technology Act, 2000 and Rules made thereunder, and principles of the
                                                General Data Protection Regulation (GDPR) where applicable.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Data We Collect */}
                                <section id="data-collection" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            2
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Data We Collect</h2>
                                    </div>

                                    <div className="space-y-6 text-gray-700">
                                        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                                        <p>
                                            We collect information that can identify you personally, including:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Contact Information:</strong> Name, email address, phone number, shipping address</li>
                                            <li><strong>Account Information:</strong> Username, password, profile picture</li>
                                            <li><strong>Payment Information:</strong> Credit/debit card details (processed securely by payment gateways)</li>
                                            <li><strong>Demographic Information:</strong> Age, gender, location</li>
                                        </ul>

                                        <h3 className="text-lg font-semibold text-gray-900 mt-6">Pet Information</h3>
                                        <p>
                                            To provide personalized services, we may collect:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Pet name, breed, age, and weight</li>
                                            <li>Medical history and vaccination records</li>
                                            <li>Dietary preferences and allergies</li>
                                            <li>Behavioral information</li>
                                        </ul>

                                        <h3 className="text-lg font-semibold text-gray-900 mt-6">Automatically Collected Information</h3>
                                        <p>
                                            When you visit our website, we automatically collect:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                                            <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns</li>
                                            <li><strong>Location Data:</strong> General location based on IP address</li>
                                            <li><strong>Cookies and Tracking Technologies:</strong> See Cookie section below</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* How We Use Data */}
                                <section id="data-use" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            3
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                                    </div>

                                    <div className="space-y-6 text-gray-700">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                {
                                                    icon: '🛒',
                                                    title: 'Order Processing',
                                                    description: 'Process purchases, deliveries, and returns'
                                                },
                                                {
                                                    icon: '👤',
                                                    title: 'Account Management',
                                                    description: 'Create and manage your account'
                                                },
                                                {
                                                    icon: '🐕',
                                                    title: 'Personalized Services',
                                                    description: 'Tailor recommendations for your pet'
                                                },
                                                {
                                                    icon: '📧',
                                                    title: 'Communication',
                                                    description: 'Send order updates and newsletters'
                                                },
                                                {
                                                    icon: '🔒',
                                                    title: 'Security',
                                                    description: 'Protect against fraud and unauthorized access'
                                                },
                                                {
                                                    icon: '📈',
                                                    title: 'Improvement',
                                                    description: 'Enhance our products and services'
                                                }
                                            ].map((use, index) => (
                                                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                                    <div className="text-2xl mb-2">{use.icon}</div>
                                                    <h4 className="font-semibold text-gray-900 mb-1">{use.title}</h4>
                                                    <p className="text-sm text-gray-600">{use.description}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
                                            <h4 className="font-semibold text-green-800 mb-2">Legal Basis for Processing</h4>
                                            <p className="text-green-700 text-sm">
                                                We process your personal data based on: (1) Your consent, (2) Performance of a contract,
                                                (3) Compliance with legal obligations, (4) Legitimate interests.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Data Sharing */}
                                <section id="data-sharing" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            4
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Data Sharing & Disclosure</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <h3 className="text-lg font-semibold text-gray-900">Third-Party Service Providers</h3>
                                        <p>
                                            We may share your information with trusted third parties who assist us in operating
                                            our business, including:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong>Payment Processors:</strong> For secure transaction processing</li>
                                            <li><strong>Shipping Partners:</strong> For order delivery and tracking</li>
                                            <li><strong>Analytics Providers:</strong> To understand website usage patterns</li>
                                            <li><strong>Marketing Partners:</strong> For promotional campaigns (with your consent)</li>
                                        </ul>

                                        <h3 className="text-lg font-semibold text-gray-900 mt-6">Legal Requirements</h3>
                                        <p>
                                            We may disclose your information if required by law or in response to:
                                        </p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>Court orders or legal processes</li>
                                            <li>Government requests or investigations</li>
                                            <li>Protection of our rights, property, or safety</li>
                                        </ul>

                                        <h3 className="text-lg font-semibold text-gray-900 mt-6">Business Transfers</h3>
                                        <p>
                                            In the event of a merger, acquisition, or sale of assets, your information may be
                                            transferred as part of the transaction.
                                        </p>

                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                                            <h4 className="font-semibold text-yellow-800 mb-2">No Sale of Personal Data</h4>
                                            <p className="text-yellow-700 text-sm">
                                                We do not sell, trade, or rent your personal identification information to others.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Data Security */}
                                <section id="data-security" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            5
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            We implement appropriate technical and organizational measures to protect your
                                            personal information against unauthorized access, alteration, disclosure, or destruction.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            {[
                                                'SSL/TLS Encryption',
                                                'Secure Payment Gateways',
                                                'Regular Security Audits',
                                                'Access Controls',
                                                'Data Encryption at Rest',
                                                'Incident Response Plan'
                                            ].map((measure, index) => (
                                                <div key={index} className="flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{measure}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
                                            <h4 className="font-semibold text-red-800 mb-2">Your Responsibility</h4>
                                            <p className="text-red-700 text-sm">
                                                No method of transmission over the Internet is 100% secure. You are responsible
                                                for maintaining the confidentiality of your account credentials.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Your Rights */}
                                <section id="your-rights" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            6
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Your Rights & Choices</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            Depending on your location, you may have certain rights regarding your personal data:
                                        </p>

                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                    <tr>
                                                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                                                            Right
                                                        </th>
                                                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                                                            Description
                                                        </th>
                                                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase">
                                                            How to Exercise
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {[
                                                        {
                                                            right: 'Access',
                                                            description: 'Request a copy of your personal data',
                                                            action: 'Contact privacy@dreamtails.com'
                                                        },
                                                        {
                                                            right: 'Rectification',
                                                            description: 'Correct inaccurate or incomplete data',
                                                            action: 'Update in account settings'
                                                        },
                                                        {
                                                            right: 'Erasure',
                                                            description: 'Request deletion of your data',
                                                            action: 'Submit deletion request'
                                                        },
                                                        {
                                                            right: 'Restriction',
                                                            description: 'Limit processing of your data',
                                                            action: 'Contact privacy@dreamtails.com'
                                                        },
                                                        {
                                                            right: 'Portability',
                                                            description: 'Receive your data in a structured format',
                                                            action: 'Submit data export request'
                                                        },
                                                        {
                                                            right: 'Objection',
                                                            description: 'Object to certain processing activities',
                                                            action: 'Adjust preferences in account'
                                                        }
                                                    ].map((right, index) => (
                                                        <tr key={index} className="hover:bg-gray-50">
                                                            <td className="px-4 py-3 font-medium text-gray-900">{right.right}</td>
                                                            <td className="px-4 py-3 text-gray-700">{right.description}</td>
                                                            <td className="px-4 py-3 text-gray-700">{right.action}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="flex justify-center mt-6">
                                            <button
                                                onClick={() => alert('Data request form would open here')}
                                                className="px-6 py-3 rounded-lg font-medium text-white"
                                                style={{ backgroundColor: secondaryColor }}
                                            >
                                                Submit Data Request
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                {/* Cookies */}
                                <section id="cookies" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            7
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            We use cookies and similar tracking technologies to track activity on our service
                                            and hold certain information.
                                        </p>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h3>
                                            <div className="space-y-3">
                                                {[
                                                    {
                                                        type: 'Essential Cookies',
                                                        purpose: 'Required for basic website functionality',
                                                        duration: 'Session'
                                                    },
                                                    {
                                                        type: 'Preference Cookies',
                                                        purpose: 'Remember your settings and preferences',
                                                        duration: '1 year'
                                                    },
                                                    {
                                                        type: 'Analytics Cookies',
                                                        purpose: 'Help us understand how visitors use our site',
                                                        duration: '2 years'
                                                    },
                                                    {
                                                        type: 'Marketing Cookies',
                                                        purpose: 'Track browsing habits to display relevant ads',
                                                        duration: '1 year'
                                                    }
                                                ].map((cookie, index) => (
                                                    <div key={index} className="flex items-start">
                                                        <div
                                                            className="w-3 h-3 rounded-full mt-1 mr-3 flex-shrink-0"
                                                            style={{ backgroundColor: index === 0 ? secondaryColor : primaryColor }}
                                                        ></div>
                                                        <div>
                                                            <h4 className="font-medium text-gray-900">{cookie.type}</h4>
                                                            <p className="text-sm text-gray-600">{cookie.purpose}</p>
                                                            <p className="text-xs text-gray-500 mt-1">Duration: {cookie.duration}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <h3 className="font-semibold text-gray-900 mb-3">Managing Cookies</h3>
                                            <p>
                                                You can control cookies through your browser settings. However, disabling
                                                essential cookies may affect website functionality.
                                            </p>
                                            <button
                                                onClick={() => document.getElementById('cookie-settings').classList.remove('hidden')}
                                                className="mt-4 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                                            >
                                                Manage Cookie Preferences
                                            </button>
                                        </div>
                                    </div>
                                </section>

                                {/* Children's Privacy */}
                                <section id="children" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            8
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                                            <h4 className="font-semibold text-purple-800 mb-2">Important Notice</h4>
                                            <p className="text-purple-700">
                                                Our services are not directed to individuals under the age of 18. We do not
                                                knowingly collect personal information from children without parental consent.
                                            </p>
                                        </div>

                                        <p>
                                            If you are a parent or guardian and believe your child has provided us with
                                            personal information, please contact us immediately. We will take steps to
                                            remove such information from our records.
                                        </p>
                                    </div>
                                </section>

                                {/* Policy Updates */}
                                <section id="updates" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            9
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Policy Updates</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            We may update this Privacy Policy from time to time. We will notify you of any
                                            changes by posting the new Privacy Policy on this page and updating the
                                            "Effective Date" at the top.
                                        </p>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-semibold text-gray-900 mb-2">Update Notification Methods:</h3>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Email notification for significant changes</li>
                                                <li>In-app notifications for mobile users</li>
                                                <li>Banner notification on our website</li>
                                                <li>Updated date at the top of this policy</li>
                                            </ul>
                                        </div>

                                        <p>
                                            You are advised to review this Privacy Policy periodically for any changes.
                                            Changes to this Privacy Policy are effective when they are posted on this page.
                                        </p>
                                    </div>
                                </section>

                                {/* Contact Us */}
                                <section id="contact" className="mb-12 scroll-mt-24">
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                                            style={{ backgroundColor: secondaryColor }}
                                        >
                                            10
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p>
                                            If you have any questions about this Privacy Policy, please contact our
                                            Data Protection Officer:
                                        </p>

                                        <div
                                            className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200"
                                            style={{ borderLeftColor: primaryColor, borderLeftWidth: '4px' }}
                                        >
                                            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection Officer</h3>
                                            <div className="space-y-3">
                                                <p className="flex items-center">
                                                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    privacy@dreamtails.com
                                                </p>
                                                <p className="flex items-center">
                                                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    +91 1800-123-4567 (Privacy Helpline)
                                                </p>
                                                <p className="flex items-center">
                                                    <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    Dream Tails Privacy Office, Bangalore, Karnataka - 560034
                                                </p>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-gray-200">
                                                <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                                                <p className="text-sm text-gray-600">
                                                    We aim to respond to all privacy-related inquiries within 7 business days.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Consent Section */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <div className="bg-gray-50 rounded-xl p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Your Consent</h3>
                                        <p className="text-gray-700 mb-6">
                                            By using our website and services, you consent to our Privacy Policy and agree
                                            to its terms.
                                        </p>

                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id="privacy-consent"
                                                className="w-5 h-5 rounded mr-3"
                                                style={{ accentColor: secondaryColor }}
                                            />
                                            <label htmlFor="privacy-consent" className="text-gray-700">
                                                I have read and understand the Privacy Policy
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default PrivacyandPolicy