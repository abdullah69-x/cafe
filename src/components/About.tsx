import React from 'react';
import { ArrowRight, Coffee, Heart, Leaf, MapPin, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

export const About: React.FC<AboutProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. EDITORIAL HEADER */}
      <section className="bg-[#1C130E] text-[#F5EFEB] py-16 lg:py-24 border-b border-[#2C1D16] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1920&q=80"
            alt="Barista brewing coffee"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E] via-[#1C130E]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4A373] text-sm font-handwriting">
            <span>✦</span>
            <span>Our Heritage & Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#F9F5F0] tracking-tight leading-tight">
            Built by hand, fueled by passion, <br />
            <span className="italic font-normal text-[#D4A373]">rooted in community.</span>
          </h1>

          <p className="text-[#C8B6A8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We believe great coffee is never just about beans and hot water—it is about the feeling of coming home to a warm table.
          </p>
        </div>
      </section>

      {/* 2. THE FOUNDERS' STORY & LETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#E5DAD0] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                  alt="Pouring espresso"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E5DAD0] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                  alt="Freshly baked pastries"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden border border-[#E5DAD0] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
                  alt="Café atmosphere"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E5DAD0] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                  alt="Coffee beans close up"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#8C5336] text-sm font-semibold tracking-wider uppercase">
              <span>Our Origins</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29201B] leading-snug">
              From a modest kitchen roaster to Blossom District's morning sanctuary.
            </h2>

            <p className="text-xs sm:text-sm text-[#6D5A50] leading-relaxed">
              Founded in 2018 by siblings Maya and Julian, Bean & Leaf was born out of a simple conviction: that coffee should be roasted with respect for the farmers who grow it, and pastries should be baked fresh every single morning using organic local grains.
            </p>

            <p className="text-xs sm:text-sm text-[#6D5A50] leading-relaxed">
              {CAFE_INFO.story}
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF5F0] border border-[#E8DFD6] space-y-2">
              <p className="font-serif text-base italic text-[#29201B]">
                “We wanted to create a place where time slows down. Where you can sit with a book for hours, or chat with our baristas about single-origin bean notes.”
              </p>
              <div className="text-xs font-semibold text-[#8C5336]">— Maya & Julian, Founders</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE PILLARS OF OUR CRAFT */}
      <section className="bg-[#FAF3EC] py-20 border-y border-[#EAE1D7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <div className="text-[#8C5336] text-xs font-semibold tracking-wider uppercase">
              Our Core Beliefs
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29201B]">
              What We Stand For Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFDFB] p-8 rounded-3xl border border-[#E5DAD0] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#8C5336] text-white flex items-center justify-center font-serif text-lg font-bold">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#29201B]">Ethical Direct Trade</h3>
              <p className="text-xs sm:text-sm text-[#6D5A50] leading-relaxed">
                We partner directly with family-owned farms in Ethiopia, Colombia, and Guatemala, ensuring fair wages, sustainable farming, and superior single-origin lots.
              </p>
            </div>

            <div className="bg-[#FFFDFB] p-8 rounded-3xl border border-[#E5DAD0] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#3B4A3F] text-white flex items-center justify-center font-serif text-lg font-bold">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#29201B]">Hearth & Sourdough</h3>
              <p className="text-xs sm:text-sm text-[#6D5A50] leading-relaxed">
                Our bakery oven fires up at 4:30 AM every morning. We use wild yeast starters fermented over 36 hours for maximum flavor, crisp crusts, and gentle digestion.
              </p>
            </div>

            <div className="bg-[#FFFDFB] p-8 rounded-3xl border border-[#E5DAD0] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#A66D4E] text-white flex items-center justify-center font-serif text-lg font-bold">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#29201B]">Genuine Hospitality</h3>
              <p className="text-xs sm:text-sm text-[#6D5A50] leading-relaxed">
                There are no strangers here, only friends we haven't served yet. Whether you need a quiet corner for work or a sunny window seat to watch the rain, you belong here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29201B]">
          Come join us for a morning cup.
        </h2>
        <p className="text-sm text-[#6D5A50] max-w-lg mx-auto leading-relaxed">
          Explore our breakfast plates, single-origin pour overs, and fresh daily pastries.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setActiveTab('menu')}
            className="px-8 py-3.5 rounded-xl bg-[#8C5336] hover:bg-[#9E603F] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
          >
            Explore Café Menu
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="px-8 py-3.5 rounded-xl bg-[#FAF5F0] hover:bg-[#F2ECE4] text-[#29201B] text-xs font-semibold uppercase tracking-wider transition-all border border-[#E2D8CC]"
          >
            Get Directions & Hours
          </button>
        </div>
      </section>
    </div>
  );
};
