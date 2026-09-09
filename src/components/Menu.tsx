import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Coffee, Sparkles, LayoutList, LayoutGrid } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'drinks', label: 'Coffee & Drinks' },
    { id: 'breakfast', label: 'Breakfast Hearth' },
    { id: 'lunch', label: 'Lunch & Savory' },
    { id: 'desserts', label: 'Pastries & Sweets' },
  ];

  const dietaryOptions = [
    { id: 'all', label: 'All Diets' },
    { id: 'Vegetarian', label: 'Vegetarian' },
    { id: 'Vegan', label: 'Plant-Based (Vegan)' },
    { id: 'Gluten-Free', label: 'Gluten-Free' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tastingNotes.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDietary =
        selectedDietary === 'all' || (item.dietary && item.dietary.includes(selectedDietary as any));

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1500);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. MENU HERO BANNER */}
      <section className="bg-[#1C130E] text-[#F5EFEB] py-16 lg:py-20 border-b border-[#2C1D16] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80"
            alt="Café drinks and pastries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E] via-[#1C130E]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-[#D4A373] text-sm font-handwriting">
            <span>✦</span>
            <span>Handcrafted Daily from Sunrise</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#F9F5F0] tracking-tight leading-tight">
            Our Café Menu
          </h1>

          <p className="text-[#C8B6A8] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From single-origin pour overs and honey lattes to warm sourdough avocado toast and morning butter croissants.
          </p>
        </div>
      </section>

      {/* 2. CONTROLS: SEARCH, CATEGORIES & DIETARY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#8C5336] text-white shadow-sm'
                    : 'bg-[#FFFDFB] text-[#6D5A50] hover:bg-[#F2ECE4] border border-[#E2D8CC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89689]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, pastries, toast..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFFDFB] border border-[#E2D8CC] text-xs text-[#29201B] placeholder-[#A89689] focus:outline-none focus:border-[#8C5336]"
            />
          </div>
        </div>

        {/* Dietary Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs text-[#6D5A50]">
          <span className="font-semibold text-[#29201B] uppercase tracking-wider text-[11px] mr-1">
            Dietary:
          </span>
          {dietaryOptions.map((diet) => (
            <button
              key={diet.id}
              onClick={() => setSelectedDietary(diet.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedDietary === diet.id
                  ? 'bg-[#3B4A3F] text-white font-medium'
                  : 'bg-[#F2ECE4] hover:bg-[#EBE3D8] text-[#59463B]'
              }`}
            >
              {diet.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MENU ITEMS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#FFFDFB] rounded-3xl border border-[#E2D8CC] space-y-3">
            <Coffee className="w-10 h-10 text-[#A89689] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#29201B]">No menu items found</h3>
            <p className="text-xs text-[#7D6B60]">
              Try adjusting your search query or dietary filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFDFB] rounded-3xl overflow-hidden shadow-sm border border-[#E2D8CC] flex flex-col justify-between group hover:shadow-md transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2ECE4]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.popular && (
                    <span className="absolute top-3 left-3 bg-[#8C5336] text-white px-3 py-1 rounded-xl text-[10px] font-semibold tracking-wide shadow">
                      Popular Favorite
                    </span>
                  )}
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="absolute top-3 right-3 flex gap-1">
                      {item.dietary.map((d, i) => (
                        <span
                          key={i}
                          className="bg-[#1C130E]/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-lg text-[10px] font-medium"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="absolute bottom-3 right-3 bg-[#FFFDFB] text-[#29201B] font-serif font-bold text-sm px-3 py-1 rounded-xl shadow border border-[#E2D8CC]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#29201B] group-hover:text-[#8C5336] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6D5A50] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                    <span className="text-[11px] text-[#A89689] italic">
                      {item.tastingNotes}
                    </span>
                    <button
                      onClick={() => handleAdd(item)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF5F0] hover:bg-[#8C5336] text-[#8C5336] hover:text-white transition-colors text-xs font-semibold border border-[#E2D8CC]"
                    >
                      {addedItemId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
