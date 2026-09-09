import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Compass, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../data';
import { ContactMessage } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  const faqs = [
    {
      q: 'Do you take table reservations in advance?',
      a: 'Yes! Use our Table Booking button at the top, or feel free to walk right in—we always hold our sunlit window booths for walk-in neighbors.',
    },
    {
      q: 'Are there plant-based milks and gluten-free pastries?',
      a: 'Always. We offer creamy house-made oat milk and organic almond milk at no extra penalty fee, plus daily gluten-free pastries and soups.',
    },
    {
      q: 'Is your patio pet-friendly?',
      a: 'Very! Our outdoor garden terrace has fresh water bowls, shade umbrellas, and complimentary organic oat biscuits for polite dogs.',
    },
    {
      q: 'Can I purchase roasted coffee beans for home?',
      a: 'Yes, we sell 250g and 1kg bags of our seasonal single-origin lots. We can grind them fresh for your V60, French press, or espresso setup.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO BANNER */}
      <section className="bg-[#1C130E] text-[#F5EFEB] py-16 lg:py-20 border-b border-[#2C1D16] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
            alt="Café front exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E] via-[#1C130E]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4A373] text-sm font-handwriting">
            <span>✦</span>
            <span>We would love to welcome you</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#F9F5F0] tracking-tight leading-tight">
            Visit & Contact
          </h1>

          <p className="text-[#C8B6A8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Located in the heart of Blossom District. Stop by for morning espresso or drop us a note with any questions.
          </p>
        </div>
      </section>

      {/* 2. INFO CARDS & CONTACT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFDFB] rounded-3xl p-8 border border-[#E2D8CC] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[#8C5336] text-xs font-semibold tracking-wider uppercase">
                  Location & Hours
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#29201B]">
                  Bean & Leaf Café
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#6D5A50]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5F0] text-[#8C5336] flex items-center justify-center shrink-0 border border-[#E2D8CC]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#29201B]">Address</div>
                    <div className="mt-0.5">{CAFE_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5F0] text-[#8C5336] flex items-center justify-center shrink-0 border border-[#E2D8CC]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#29201B]">Phone</div>
                    <div className="mt-0.5">{CAFE_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5F0] text-[#8C5336] flex items-center justify-center shrink-0 border border-[#E2D8CC]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#29201B]">Email</div>
                    <div className="mt-0.5">{CAFE_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-[#F0EBE3]">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5F0] text-[#8C5336] flex items-center justify-center shrink-0 border border-[#E2D8CC]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#29201B]">Opening Hours</div>
                    <div className="mt-1 space-y-1 text-xs text-[#7D6B60]">
                      <div>Mon–Fri: {CAFE_INFO.hours.weekdays}</div>
                      <div>Sat–Sun: {CAFE_INFO.hours.weekends}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Map Card */}
            <div className="rounded-3xl overflow-hidden border border-[#E2D8CC] shadow-sm relative h-64 bg-[#EBE3D8]">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map location preview"
                className="w-full h-full object-cover filter contrast-125 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold">
                  Blossom District
                </span>
                <span className="font-serif text-lg font-bold">142 Artisan Avenue, Corner of 4th Street</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDFB] rounded-3xl p-8 sm:p-10 border border-[#E2D8CC] shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-[#8C5336] text-xs font-semibold tracking-wider uppercase">
                  Send a Message
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#29201B]">
                  Have a Question or Catering Inquiry?
                </h3>
                <p className="text-xs text-[#7D6B60]">
                  Fill out the form below and our team will get back to you within a few hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#EBF3ED] border border-[#C6E2CD] rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you for reaching out to Bean & Leaf. We have received your note and will reply to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-xs text-[#29201B] focus:outline-none focus:border-[#8C5336]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-xs text-[#29201B] focus:outline-none focus:border-[#8C5336]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Private party inquiry, catering, general note..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-xs text-[#29201B] focus:outline-none focus:border-[#8C5336]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#59463B] uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E2D8CC] text-xs text-[#29201B] focus:outline-none focus:border-[#8C5336]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#8C5336] hover:bg-[#9E603F] text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[#8C5336] text-xs font-semibold tracking-wider uppercase">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#29201B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFFDFB] rounded-2xl p-6 border border-[#E2D8CC] shadow-sm space-y-2"
            >
              <h4 className="font-serif text-base font-bold text-[#29201B]">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-[#6D5A50] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
