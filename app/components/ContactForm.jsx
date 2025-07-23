'use client';

import React, { useState } from 'react';
import { Send, User, Mail, Phone, FileText, MessageSquare, MapPin, Calendar, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    preferredContact: 'email',
    country: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const serviceOptions = [
    'MEA Attestation',
    'Embassy Attestation',
    'Apostille Services',
    'HRD/Home Attestation',
    'Chamber of Commerce Attestation',
    'Translation Services',
    'Visa Assistance',
    'Travel Documentation',
    'Other Services'
  ];

  const urgencyOptions = [
    { value: 'normal', label: 'Normal (7-10 days)' },
    { value: 'urgent', label: 'Urgent (3-5 days)' },
    { value: 'express', label: 'Express (1-2 days)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your inquiry! We will get back to you within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          service: '',
          message: '',
          preferredContact: 'email',
          country: '',
          urgency: 'normal'
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your form. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A9DB2] to-[#0881A3] p-6 text-white">
        <h3 className="text-2xl font-medium flex items-center gap-3">
          <MessageSquare className="w-6 h-6" />
          Send Us a Message
        </h3>
        <p className="text-white/90 mt-2">Fill out the form below and we'll get back to you as soon as possible</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
              Country
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all"
                placeholder="Enter your country"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
              Service Required *
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleInputChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all appearance-none bg-white"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
              Urgency Level
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all appearance-none bg-white"
              >
                {urgencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="mt-6">
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all"
            placeholder="Brief subject of your inquiry"
          />
        </div>

        {/* Message */}
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A9DB2] focus:border-transparent transition-all resize-vertical"
            placeholder="Please provide details about your document attestation or service requirements..."
          />
        </div>

        {/* Preferred Contact Method */}
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Preferred Contact Method
          </label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                formData.preferredContact === 'email' 
                  ? 'border-[#0A9DB2] bg-blue-50 text-[#0A9DB2]' 
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              }`}>
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </div>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                formData.preferredContact === 'phone' 
                  ? 'border-[#0A9DB2] bg-blue-50 text-[#0A9DB2]' 
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              }`}>
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </div>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="whatsapp"
                checked={formData.preferredContact === 'whatsapp'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                formData.preferredContact === 'whatsapp' 
                  ? 'border-[#0A9DB2] bg-blue-50 text-[#0A9DB2]' 
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              }`}>
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </div>
            </label>
          </div>
        </div>

        {/* Submit Status */}
        {submitStatus.message && (
          <div className={`mt-6 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#0A9DB2] to-[#0881A3] hover:from-[#098da0] hover:to-[#076e7a] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Or contact us directly:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="tel:+917878868595" className="text-[#0A9DB2] hover:underline">+91 7878868595</a>
            <span>•</span>
            <a href="mailto:info@meaexpert.com" className="text-[#0A9DB2] hover:underline">info@meaexpert.com</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 