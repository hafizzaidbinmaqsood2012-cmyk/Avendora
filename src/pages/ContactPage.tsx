import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Private Fragrance Consultation',
    preferredBoutique: 'Karachi Flagship — Clifton',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please provide your name, email, and message.', 'info');
      return;
    }

    setSubmitted(true);
    showToast('Your concierge inquiry has been sent to our customer care team.', 'navy');
  };

  const boutiques = [
    {
      city: 'Karachi Flagship',
      address: 'Ocean Mall, Clifton Block 9, Karachi, Pakistan',
      hours: 'Mon – Sat: 11:00 AM – 10:00 PM',
      phone: '+92 21 3514 8000',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    },
    {
      city: 'Lahore Boutique',
      address: 'Gulberg III, MM Alam Road, Lahore, Pakistan',
      hours: 'Mon – Sat: 11:00 AM – 10:00 PM',
      phone: '+92 42 3578 9000',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    },
    {
      city: 'Islamabad Salon',
      address: 'Beverly Centre, Blue Area, Islamabad, Pakistan',
      hours: 'Mon – Sat: 11:00 AM – 9:00 PM',
      phone: '+92 51 2801 500',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
    },
    {
      city: 'Dubai Fashion Avenue',
      address: 'The Dubai Mall, Fashion Avenue, Dubai, UAE',
      hours: 'Daily: 10:00 AM – 11:00 PM',
      phone: '+971 4 362 7500',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="bg-white text-[#111111] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#0F2C59] font-bold block mb-2">
            Luxury Fragrance Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] mb-4">
            Contact & Private Consultations
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans leading-relaxed">
            Whether you seek personal fragrance recommendations, bespoke wedding orders, or corporate gift inquiries, our fragrance advisors are at your service.
          </p>
        </div>

        {/* 2-Column Contact Form & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Left: Concierge Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-10 shadow-xs">
            <h2 className="font-serif text-2xl font-bold text-[#111111] mb-2">
              Send a Message
            </h2>
            <p className="text-xs text-[#64748B] font-sans mb-6">
              Our dedicated fragrance concierge responds to all inquiries within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 bg-white border border-[#0F2C59] text-center space-y-3 shadow-xs">
                <CheckCircle2 className="w-10 h-10 text-[#0F2C59] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#111111]">Inquiry Received</h3>
                <p className="text-xs text-[#475569] font-sans max-w-md mx-auto">
                  Thank you, {formData.name}. Your message has been received. A Fragrance Advisor will contact you shortly at {formData.email}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      inquiryType: 'Private Fragrance Consultation',
                      preferredBoutique: 'Karachi Flagship — Clifton',
                      message: '',
                    });
                  }}
                  className="mt-4 text-xs uppercase font-sans tracking-[0.15em] text-[#0F2C59] font-bold underline cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Malik"
                      className="w-full bg-white border border-[#CBD5E1] text-xs p-3 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tariq@example.com"
                      className="w-full bg-white border border-[#CBD5E1] text-xs p-3 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-white border border-[#CBD5E1] text-xs p-3 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                    >
                      <option value="Private Fragrance Consultation">Private Fragrance Consultation</option>
                      <option value="Bespoke Wedding & Event Orders">Bespoke Event Orders</option>
                      <option value="Order & Delivery Assistance">Order & Delivery Assistance</option>
                      <option value="Corporate Gifting & Bulk Orders">Corporate Gifting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                      Preferred Boutique
                    </label>
                    <select
                      value={formData.preferredBoutique}
                      onChange={(e) => setFormData({ ...formData, preferredBoutique: e.target.value })}
                      className="w-full bg-white border border-[#CBD5E1] text-xs p-3 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                    >
                      <option value="Karachi Flagship — Clifton">Karachi Flagship — Clifton</option>
                      <option value="Lahore Boutique — MM Alam">Lahore Boutique — MM Alam</option>
                      <option value="Islamabad Salon — Blue Area">Islamabad Salon — Blue Area</option>
                      <option value="Dubai Fashion Avenue">Dubai Fashion Avenue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify how we may assist your fragrance selection..."
                    className="w-full bg-white border border-[#CBD5E1] text-xs p-3 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white px-8 py-3.5 text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#0F2C59]/15"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Direct Concierge Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-[#111111] border-b border-[#E2E8F0] pb-3">
                Direct Contact
              </h3>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">Flagship Boutique</span>
                    <span className="text-[#64748B]">Ocean Mall, Clifton Block 9, Karachi, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">Customer Service Phone</span>
                    <span className="text-[#64748B]">+92 21 3514 8000 (Mon–Sat 10am–8pm PKT)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">Client Inquiries Email</span>
                    <span className="text-[#64748B]">concierge@avendora.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">Private Appointments</span>
                    <span className="text-[#64748B]">Available upon request at all boutique salons</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#E2E8F0] text-xs font-sans text-[#475569] leading-relaxed">
                <span className="text-[#0F2C59] font-bold block mb-1">
                  Complimentary Scent Consultations:
                </span>
                Visit any of our boutique locations for an olfactory testing session and personal recommendation by our master fragrance specialists.
              </div>
            </div>
          </div>
        </div>

        {/* Boutiques Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold block mb-1">
              Boutiques
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#111111]">
              Our Flagship Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boutiques.map((b, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden group shadow-xs">
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={b.image}
                    alt={b.city}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-1.5 text-xs font-sans">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#111111]">{b.city}</h3>
                  <p className="text-[#64748B]">{b.address}</p>
                  <p className="text-[11px] text-[#94A3B8]">{b.hours}</p>
                  <p className="text-[11px] text-[#0F2C59] font-bold">{b.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
