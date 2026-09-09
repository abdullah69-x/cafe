import React, { useState } from 'react';
import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';
import { CAFE_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#170E0A] text-[#C4B2A7] border-t border-[#2D1B13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#8C5336] to-[#5C321E] flex items-center justify-center text-[#F5EFEB] shadow border border-[#A66D4E]/30">
                <Coffee className="w-5 h-5 text-[#F5EFEB]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F9F5F0]">
                {CAFE_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#9E8B80] leading-relaxed">
              {CAFE_INFO.tagline}. Handcrafted brews, artisanal pastries, and warm hospitality waiting for you every single day.
            </p>
            <div className="flex space-x-2.5 pt-2">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-xl bg-[#281A13] flex items-center justify-center text-[#D4A373] hover:bg-[#8C5336] hover:text-white transition-colors border border-[#432A1E]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-xl bg-[#281A13] flex items-center justify-center text-[#D4A373] hover:bg-[#8C5336] hover:text-white transition-colors border border-[#432A1E]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-xl bg-[#281A13] flex items-center justify-center text-[#D4A373] hover:bg-[#8C5336] hover:text-white transition-colors border border-[#432A1E]"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F9F5F0]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Welcome & Atmosphere
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Our Story & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('menu')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Breakfast, Lunch & Drinks
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-[#D4A373] transition-colors text-left"
                >
                  Visit & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Address */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F9F5F0]">
              Hours & Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#9E8B80]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A373] shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
                <span>{CAFE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
                <span>{CAFE_INFO.email}</span>
              </div>
              <div className="pt-1 text-[11px] text-[#C4B2A7]">
                <div>Mon–Fri: {CAFE_INFO.hours.weekdays}</div>
                <div>Sat–Sun: {CAFE_INFO.hours.weekends}</div>
              </div>
            </div>
          </div>

          {/* Col 4: Roaster Notes Dispatch */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F9F5F0]">
              Roaster Dispatch
            </h4>
            <p className="text-xs text-[#9E8B80] leading-relaxed">
              Occasional letters about new micro-lot coffee arrivals, morning bakery recipes, and acoustic night dates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-[#1D2B20] p-2.5 rounded-xl border border-[#2B4030]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Welcome to the table!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 rounded-xl bg-[#23150F] border border-[#3E281E] text-xs text-[#F5EFEB] placeholder-[#7D6B60] focus:outline-none focus:border-[#D4A373]"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#8C5336] hover:bg-[#9E603F] text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Join Table Letters
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-[#281812] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#806E64] gap-4">
          <div>
            © {new Date().getFullYear()} {CAFE_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Roasted with care for the neighborhood</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
