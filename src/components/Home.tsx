import React from 'react';
import { ArrowRight, Plus, MapPin, Clock, Sparkles, Heart, Utensils, Check } from 'lucide-react';
import { MENU_ITEMS, DAILY_SPECIALS, TESTIMONIALS, CAFE_INFO } from '../data';
import { MenuItem } from '../types';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onAddToCart: (item: MenuItem) => void;
  setIsReservationOpen: (open: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({
  setActiveTab,
  onAddToCart,
  setIsReservationOpen,
}) => {
  const popularItems = MENU_ITEMS.filter((item) => item.popular);
  const [addedItem, setAddedItem] = React.useState<string | null>(null);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative bg-[#1A120E] text-[#F5EFEB] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#2C1D16]">
        {/* Subtle background glow and texture */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=80"
            alt="Warm café interior"
            className="w-full h-full object-cover filter saturate-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A120E] via-[#1A120E]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Warm handwritten note */}
              <div className="inline-flex items-center gap-2 text-[#D4A373] text-sm sm:text-base font-handwriting tracking-wide">
                <span>✦</span>
                <span>Freshly ground espresso & slow mornings in Blossom District</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F9F5F0] leading-[1.08]">
                Morning light, <br />
                <span className="italic font-normal text-[#E2B792]">slow roasts</span> & <br />
                warm hearth bread.
              </h1>

              <p className="text-base sm:text-lg text-[#C8B6A8] max-w-xl leading-relaxed font-normal">
                A quiet neighborhood gathering place where single-origin coffees meet handmade sourdough pastries. No rush, no artificial bustle—just authentic craft and heartfelt warmth.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('menu')}
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#8C5336] hover:bg-[#9E603F] text-[#FFF] font-medium text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <span>Explore Café Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2C382F] hover:bg-[#38483C] text-[#E0ECE2] font-medium text-sm transition-all border border-[#445548]"
                >
                  <span>Reserve a Quiet Table</span>
                </button>
              </div>

              {/* Real café details pill strip */}
              <div className="pt-6 border-t border-[#2E1E16] flex flex-wrap gap-6 text-xs text-[#A89689]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></span>
                  <span>Ethiopia & Colombia micro-lots</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></span>
                  <span>Sourdough bakery fresh at 6:30 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Pet-friendly garden terrace</span>
                </div>
              </div>
            </div>

            {/* Right Column: Tactile Hero Frame */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* Decorative border frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2E1E17] bg-[#221712]">
                  <img
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80"
                    alt="Latte art poured in ceramic cup"
                    className="w-full h-96 object-cover"
                  />
                  {/* Floating chalkboard badge */}
                  <div className="p-5 bg-[#1B110D] border-t border-[#382319] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold">
                        Today's Barista Pour
                      </span>
                      <span className="text-sm font-bold text-[#F5EFEB]">$5.25</span>
                    </div>
                    <p className="font-serif text-lg font-bold text-[#F9F5F0]">
                      Honey Lavender Cortado
                    </p>
                    <p className="text-xs text-[#A89689] italic font-handwriting text-base">
                      “Notes of wildflower honey, sweet orange peel & bergamot”
                    </p>
                  </div>
                </div>

                {/* Floating handwritten stamp */}
                <div className="absolute -bottom-5 -right-4 bg-[#8C5336] text-[#FFF] px-4 py-2 rounded-2xl shadow-xl border-2 border-[#1A120E] font-handwriting text-lg rotate-3 hidden sm:block">
                  Roasted in-house weekly ☕
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHALKBOARD MORNING SPECIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#8C5336] text-sm font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Today at the Counter</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29201B]">
            Morning Specials & Roasts
          </h2>
          <p className="text-xs sm:text-sm text-[#7D6B60] leading-relaxed">
            Handwritten on our chalkboard at sunrise. Prepared in limited batches until sold out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DAILY_SPECIALS.map((special) => (
            <div
              key={special.id}
              className="bg-[#211713] text-[#F5EFEB] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-[#38251B] relative overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              {/* Subtle top chalkboard accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8C5336] via-[#D4A373] to-[#8C5336]"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#322118] text-[#D4A373] text-[11px] font-semibold tracking-wide border border-[#483023]">
                    {special.badge}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#F9F5F0]">
                    {special.price}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#FAF6F0] leading-snug">
                  {special.title}
                </h3>

                <p className="text-xs text-[#B5A194] leading-relaxed">
                  {special.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#362319] space-y-4">
                <div className="bg-[#18100C] p-3.5 rounded-2xl border border-[#2D1D15]">
                  <p className="text-[11px] text-[#C2AFA3] italic font-handwriting text-sm">
                    Barista note: “{special.baristaNote}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POPULAR ARTISANAL FAVORITES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-[#8C5336] text-xs font-semibold tracking-wider uppercase mb-1">
              Neighborhood Favorites
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#29201B]">
              Beloved Café Classics
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('menu')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C5336] hover:text-[#5C321E] transition-colors self-start sm:self-auto"
          >
            <span>View Full Menu & Drinks</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDFB] rounded-3xl overflow-hidden shadow-sm border border-[#E2D8CC] flex flex-col justify-between group hover:shadow-md transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-[#F2ECE4]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.dietary && item.dietary.length > 0 && (
                  <span className="absolute top-3 left-3 bg-[#1C130E]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-xl text-[10px] font-medium">
                    {item.dietary[0]}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 bg-[#FAF7F2] text-[#29201B] font-serif font-bold text-sm px-3 py-1 rounded-xl shadow">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#29201B] group-hover:text-[#8C5336] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#7D6B60] mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EBE3] flex items-center justify-between">
                  <span className="text-[11px] text-[#9E8B80] truncate max-w-[140px]">
                    {item.tastingNotes}
                  </span>
                  <button
                    onClick={() => handleAdd(item)}
                    className="p-2.5 rounded-xl bg-[#FAF5F0] hover:bg-[#8C5336] text-[#8C5336] hover:text-white transition-colors border border-[#E2D8CC]"
                    aria-label={`Add ${item.name} to order`}
                  >
                    {addedItem === item.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ATMOSPHERE & COMMUNITY SECTION */}
      <section className="bg-[#1C130E] text-[#F5EFEB] py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[#D4A373] text-sm font-handwriting">
                <span>✦</span>
                <span>Our Philosophy & Space</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F9F5F0]">
                Designed for slow conversations & focused mornings.
              </h2>
              <p className="text-xs sm:text-sm text-[#C8B6A8] leading-relaxed">
                {CAFE_INFO.story}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#35241B]">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#D4A373]">7:00 AM</div>
                  <div className="text-xs text-[#A89689] mt-1">Daily bakery oven ignition</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#D4A373]">100%</div>
                  <div className="text-xs text-[#A89689] mt-1">Ethical direct-trade beans</div>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#33231B] hover:bg-[#433026] text-[#F5EFEB] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#4A3225]"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#38261C]">
                  <img
                    src="https://images.unsplash.com/photo-1507133754641-356c32103f6f?auto=format&fit=crop&w=600&q=80"
                    alt="Cozy café corner with plants"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#38261C]">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
                    alt="Freshly baked pastries"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden border border-[#38261C]">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                    alt="Pour over coffee being brewed"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#38261C]">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                    alt="Warm communal café table"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEIGHBORHOOD TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-[#8C5336] text-sm font-semibold tracking-wider uppercase">
            <Heart className="w-4 h-4 text-rose-700" />
            <span>Kind Words</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#29201B]">
            From Our Regulars & Neighbors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFDFB] rounded-3xl p-8 shadow-sm border border-[#E2D8CC] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex text-amber-600 space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#59463B] leading-relaxed italic">
                  “{t.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE3] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#D9CEBF]"
                />
                <div>
                  <div className="font-serif font-bold text-sm text-[#29201B]">{t.name}</div>
                  <div className="text-[11px] text-[#8C7A70]">{t.role}</div>
                  <div className="text-[10px] text-[#8C5336] mt-0.5 font-medium">
                    Favorite order: {t.favoriteOrder}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
