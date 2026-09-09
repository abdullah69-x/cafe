import React, { useState } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartItems: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsReservationOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  cartItems,
  setIsCartOpen,
  setIsReservationOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'menu', label: 'Café Menu' },
    { id: 'contact', label: 'Visit & Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1E140F] text-[#F5EFEB] border-b border-[#3A271E] shadow-lg">
      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#8C5336] to-[#5C321E] flex items-center justify-center text-[#F5EFEB] shadow-md border border-[#A66D4E]/40 group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-[#F5EFEB]" />
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#F9F5F0] group-hover:text-[#D4A373] transition-colors leading-none block">
                Bean & Leaf
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A68A78] font-medium block mt-1">
                Boutique Roasters & Bakery
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all relative ${
                  activeTab === link.id
                    ? 'text-[#F5EFEB] bg-[#2E1E17] border border-[#523729]'
                    : 'text-[#C4B2A7] hover:text-[#F5EFEB] hover:bg-[#281A13]'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#D4A373] rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setIsReservationOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#3B4A3F] hover:bg-[#46574B] text-[#E8EFE9] transition-all border border-[#516656] shadow-sm hover:shadow"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-300" />
              <span>Table Booking</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#8C5336] hover:bg-[#9E603F] text-[#FFF] transition-all shadow-sm border border-[#AA6A47]"
              aria-label="View Order"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Pickup Order</span>
              {totalCartCount > 0 && (
                <span className="bg-[#D4A373] text-[#1E140F] text-xs font-bold px-1.5 py-0.5 rounded-full shadow ml-1">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-[#2E1E17] text-[#D4A373] border border-[#483023]"
              aria-label="View Order"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4A373] text-[#1E140F] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#2E1E17] text-[#C4B2A7] hover:text-[#F5EFEB] border border-[#483023] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#180F0B] border-t border-[#2E1E17] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                handleNavClick(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeTab === link.id
                  ? 'bg-[#2E1E17] text-[#D4A373] font-semibold border border-[#4E3224]'
                  : 'text-[#C4B2A7] hover:bg-[#221510] hover:text-[#F5EFEB]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#2C1C15] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsReservationOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#3B4A3F] text-[#E8EFE9]"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Book a Table</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
