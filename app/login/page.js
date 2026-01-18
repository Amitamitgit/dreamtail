"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../layout/Header'

const Login = () => {
  const primaryColor = 'rgb(217, 80, 96)';
  const secondaryColor = 'rgb(0, 105, 96)';
  
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const otpInputs = useRef([]);
  const intervalRef = useRef(null);

  // Start timer when OTP step begins
  useEffect(() => {
    if (step === 2 && !isTimerActive) {
      setIsTimerActive(true);
      setTimer(60);
    }
  }, [step]);

  // Handle timer countdown
  useEffect(() => {
    if (isTimerActive && timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTimerActive, timer]);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    setError('');
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }

    if (newOtp.every(digit => digit !== '') && index === 5) {
      handleOtpSubmit();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleSendOtp = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      setSuccessMessage(`OTP sent to +91 ${mobileNumber}`);
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1500);
  };

  const handleResendOtp = () => {
    if (!isTimerActive) {
      setTimer(60);
      setIsTimerActive(true);
      setError('');
      setSuccessMessage('OTP resent successfully!');
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  const handleOtpSubmit = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Please enter the 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      setSuccessMessage('Login successful!');
      
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }, 1500);
  };

  const handleReset = () => {
    setStep(1);
    setMobileNumber('');
    setOtp(['', '', '', '', '', '']);
    setTimer(60);
    setIsTimerActive(false);
    setError('');
    setSuccessMessage('');
    setIsLoading(false);
  };

  const socialLogins = [
    { name: 'Google', icon: 'G', color: '#DB4437', bgColor: '#fee' },
    { name: 'Facebook', icon: 'f', color: '#4267B2', bgColor: '#eef' },
    { name: 'Apple', icon: 'A', color: '#000000', bgColor: '#eee' }
  ];

  return (
    <>
      <Header />
      
      {/* Modern Hero Section */}
      

      {/* Modern Login Container */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating Card Container */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-gradient-to-r from-secondary/5 to-primary/5 blur-xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-0">
              

              {/* Content Area */}
              <div className="p-8">
                {/* Step 1: Mobile Number */}
                {step === 1 && (
                  <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      Enter Your Mobile Number
                    </h2>
                    <p className="text-gray-600 mb-8">
                      We'll send a verification code to your mobile number
                    </p>

                    <div className="space-y-6">
                      {/* Modern Mobile Input */}
                      <div className="group">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Mobile Number
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                            <span className="text-lg font-bold text-gray-800">+91</span>
                            <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-gray-400 mx-4"></div>
                          </div>
                          <input
                            type="tel"
                            value={mobileNumber}
                            onChange={handleMobileChange}
                            maxLength="10"
                            placeholder="Enter 10-digit number"
                            className="w-full pl-24 pr-4 py-5 border-2 rounded-2xl focus:outline-none focus:ring-4 transition-all duration-300 text-lg font-medium group-hover:border-primary/50"
                            style={{ 
                              borderColor: error ? '#ef4444' : '#e5e7eb',
                              focusBorderColor: primaryColor,
                              focusRingColor: primaryColor + '40'
                            }}
                            disabled={isLoading}
                          />
                          {mobileNumber && (
                            <button
                              onClick={() => setMobileNumber('')}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">
                            Enter without country code
                          </span>
                          <span className="text-xs font-medium" style={{ color: secondaryColor }}>
                            {mobileNumber.length}/10
                          </span>
                        </div>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl">
                          <p className="text-red-700 flex items-center">
                            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {error}
                          </p>
                        </div>
                      )}

                      {/* Terms */}
                      <div className="flex items-start bg-gray-50 p-4 rounded-2xl">
                        <input
                          type="checkbox"
                          id="terms"
                          className="mt-1 w-5 h-5 rounded-lg"
                          style={{ accentColor: secondaryColor }}
                          defaultChecked
                        />
                        <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                          I agree to receive updates via WhatsApp & SMS. By continuing, I accept the{' '}
                          <a href="#" className="font-semibold" style={{ color: secondaryColor }}>
                            Terms of Service
                          </a>{' '}
                          &{' '}
                          <a href="#" className="font-semibold" style={{ color: secondaryColor }}>
                            Privacy Policy
                          </a>
                        </label>
                      </div>

                      {/* Send OTP Button */}
                      <button
                        onClick={handleSendOtp}
                        disabled={isLoading || !mobileNumber || mobileNumber.length !== 10}
                        className={`w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 transform ${
                          isLoading || !mobileNumber || mobileNumber.length !== 10
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]'
                        } shadow-lg`}
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                          boxShadow: `0 10px 30px -5px ${primaryColor}40`
                        }}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending OTP...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Continue
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        )}
                      </button>

                      {/* Divider with Text */}
                      <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 bg-white text-gray-500 font-medium">Or login with</span>
                        </div>
                      </div>

                      

                      {/* Sign Up Link */}
                      <div className="text-center pt-6 border-t border-gray-100">
                        <p className="text-gray-600">
                          New to Dream Tails?{' '}
                          <button
                            onClick={() => router.push('/signup')}
                            className="font-bold hover:underline"
                            style={{ color: secondaryColor }}
                          >
                            Create an account
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: OTP Verification */}
                {step === 2 && (
                  <div className="animate-fadeIn">
                    <button
                      onClick={handleReset}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center mr-3 group-hover:border-gray-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="font-medium">Change number</div>
                        <div className="text-sm text-gray-500">+91 {mobileNumber}</div>
                      </div>
                    </button>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Enter Verification Code
                    </h2>
                    <p className="text-gray-600 mb-8">
                      We've sent a 6-digit code to{' '}
                      <span className="font-bold text-gray-900">+91 {mobileNumber}</span>
                    </p>

                    {/* Success Message */}
                    {successMessage && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl">
                        <p className="text-green-700 flex items-center">
                          <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {successMessage}
                        </p>
                      </div>
                    )}

                    <div className="space-y-8">
                      {/* Modern OTP Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-6">
                          6-digit OTP Code
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="flex justify-between space-x-3 mb-6">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              ref={(el) => otpInputs.current[index] = el}
                              type="text"
                              value={digit}
                              onChange={(e) => handleOtpChange(index, e.target.value)}
                              onKeyDown={(e) => handleOtpKeyDown(index, e)}
                              maxLength="1"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              className="w-16 h-20 text-center text-3xl font-bold border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-offset-2 transition-all duration-200"
                              style={{ 
                                borderColor: error ? '#ef4444' : (digit ? secondaryColor : '#e5e7eb'),
                                backgroundColor: digit ? '#f8fafc' : 'white',
                                focusBorderColor: primaryColor,
                                focusRingColor: primaryColor + '40'
                              }}
                              disabled={isLoading}
                            />
                          ))}
                        </div>

                        {/* Timer and Resend */}
                        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl">
                          <div className="flex items-center">
                            <svg className={`w-5 h-5 mr-3 ${isTimerActive ? 'text-primary animate-pulse' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {isTimerActive ? (
                              <div>
                                <div className="text-sm text-gray-600">Resend code in</div>
                                <div className="font-bold text-lg" style={{ color: primaryColor }}>
                                  00:{timer.toString().padStart(2, '0')}
                                </div>
                              </div>
                            ) : (
                              <div className="text-gray-600">Didn't receive the code?</div>
                            )}
                          </div>
                          <button
                            onClick={handleResendOtp}
                            disabled={isTimerActive || isLoading}
                            className={`px-6 py-3 rounded-xl font-medium transition-all ${
                              isTimerActive || isLoading
                                ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400'
                                : 'hover:scale-105 active:scale-95'
                            }`}
                            style={{ 
                              backgroundColor: !isTimerActive && !isLoading ? secondaryColor + '10' : undefined,
                              color: !isTimerActive && !isLoading ? secondaryColor : undefined
                            }}
                          >
                            Resend OTP
                          </button>
                        </div>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl">
                          <p className="text-red-700 flex items-center">
                            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {error}
                          </p>
                        </div>
                      )}

                      {/* Verify Button */}
                      <button
                        onClick={handleOtpSubmit}
                        disabled={isLoading || otp.some(digit => digit === '')}
                        className={`w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 transform ${
                          isLoading || otp.some(digit => digit === '')
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]'
                        } shadow-lg`}
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                          boxShadow: `0 10px 30px -5px ${primaryColor}40`
                        }}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Verifying...
                          </span>
                        ) : (
                          'Verify & Login'
                        )}
                      </button>

                      {/* Support */}
                      <div className="text-center">
                        <p className="text-sm text-gray-500">
                          Need help?{' '}
                          <button
                            onClick={() => alert('Customer support would be contacted')}
                            className="font-medium hover:underline"
                            style={{ color: secondaryColor }}
                          >
                            Contact our support team
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                  <div className="animate-fadeIn text-center py-8">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl"></div>
                      </div>
                      <div 
                        className="relative w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center text-white shadow-2xl"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                          boxShadow: `0 20px 60px -10px ${primaryColor}40`
                        }}
                      >
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Welcome Back!
                    </h2>
                    
                    <p className="text-gray-600 mb-10 max-w-md mx-auto">
                      You've successfully logged in to your Dream Tails account. Redirecting you to your dashboard...
                    </p>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-10 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-2000 ease-out"
                        style={{ 
                          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                          width: '100%'
                        }}
                      ></div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => router.push('/')}
                        className="py-4 rounded-2xl font-medium border-2 transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
                        style={{ 
                          borderColor: secondaryColor,
                          color: secondaryColor
                        }}
                      >
                        Go to Homepage
                      </button>
                      <button
                        onClick={() => router.push('/my-account')}
                        className="py-4 rounded-2xl font-medium text-white transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                          boxShadow: `0 10px 30px -5px ${primaryColor}40`
                        }}
                      >
                        My Account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Fast Checkout',
                description: 'Save payment methods for instant purchases'
              },
              {
                icon: '🎯',
                title: 'Personalized',
                description: 'Tailored recommendations for your pets'
              },
              {
                icon: '🔔',
                title: 'Smart Alerts',
                description: 'Vaccination reminders & order updates'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Security Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center bg-gray-50 px-6 py-3 rounded-full">
              <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">
                Your data is protected with bank-level security
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-xl font-bold">DT</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Dream Tails</div>
                  <div className="text-sm text-gray-400">Happy Pets, Happy Life</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                India's most trusted pet care platform, delivering happiness to your doorstep.
              </p>
            </div>
            
            {[
              {
                title: 'Quick Links',
                links: ['Shop Products', 'Book Services', 'Track Order', 'Find Stores']
              },
              {
                title: 'Support',
                links: ['Help Center', 'Contact Us', 'Shipping Info', 'Returns']
              },
              {
                title: 'Connect',
                links: ['1800-123-4567', 'support@dreamtails.com', 'Live Chat', 'Follow Us']
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dream Tails. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Secure OTP verification • Privacy protected • PCI DSS compliant
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </>
  )
}

export default Login