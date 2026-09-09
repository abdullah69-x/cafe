/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';
import { CartModal } from './components/CartModal';
import { ReservationModal } from './components/ReservationModal';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);

  const handleAddToCart = (menuItem: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.menuItem.id === menuItem.id);
      if (existing) {
        return prev.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.menuItem.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.menuItem.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29201B] flex flex-col font-sans selection:bg-[#8C5336] selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={scrollToSection}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
        setIsReservationOpen={setIsReservationOpen}
      />

      <main className="flex-1">
        <section id="home">
          <Home
            setActiveTab={scrollToSection}
            onAddToCart={handleAddToCart}
            setIsReservationOpen={setIsReservationOpen}
          />
        </section>

        <section id="about">
          <About setActiveTab={scrollToSection} />
        </section>

        <section id="menu">
          <Menu onAddToCart={handleAddToCart} />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer setActiveTab={scrollToSection} />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
