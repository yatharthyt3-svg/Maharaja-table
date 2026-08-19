import React, { useState, useMemo } from 'react';
import { Utensils, Search, Flame, Sparkles, Filter, Wine, Info } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuCategory, MenuItem, DietaryType } from '../types';
import { ambientSound } from '../utils/soundEffects';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Creations', count: MENU_ITEMS.length },
    { id: 'appetizers', label: 'Appetizers & Kebabs', count: MENU_ITEMS.filter(i => i.category === 'appetizers').length },
    { id: 'main', label: 'Royal Curries & Mains', count: MENU_ITEMS.filter(i => i.category === 'main').length },
    { id: 'biryani', label: 'Dum Biryanis', count: MENU_ITEMS.filter(i => i.category === 'biryani').length },
    { id: 'tandoor', label: 'Tandoor & Live Grills', count: MENU_ITEMS.filter(i => i.category === 'tandoor').length },
    { id: 'breads', label: 'Artisanal Breads', count: MENU_ITEMS.filter(i => i.category === 'breads').length },
    { id: 'desserts', label: 'Shahi Desserts', count: MENU_ITEMS.filter(i => i.category === 'desserts').length },
    { id: 'beverages', label: 'Cocktails & Infusions', count: MENU_ITEMS.filter(i => i.category === 'beverages').length },
  ];

  const dietaryOptions: DietaryType[] = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Halal',
    'Chef Special',
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      // Dietary filter
      const matchesDietary = selectedDietary === 'All' || item.dietary.includes(selectedDietary as DietaryType);
      // Search filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hindiName && item.hindiName.includes(searchQuery)) ||
        item.originRegion.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-[#140f0c] border-t border-[#d4af37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#221a15]/80 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Utensils className="w-3.5 h-3.5" />
            <span>Grand Royal Repertoire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Culinary <span className="gold-gradient-text italic font-serif">Masterpieces</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-6"></div>
          <p className="text-sm sm:text-base text-[#ebdcc9]/75 font-light leading-relaxed">
            A celebration of imperial gastronomy from the Mughal courts of Awadh to the spice valleys of Kashmir and coastal Malabar.
          </p>
        </div>

        {/* Search & Dietary Bar */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]/70" />
            <input
              type="text"
              placeholder="Search dishes, spices, regions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#1e1713] border border-[#d4af37]/25 text-white text-xs sm:text-sm placeholder-[#ebdcc9]/40 focus:outline-none focus:border-[#d4af37] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#ebdcc9]/50 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dietary Filters */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center md:justify-end w-full">
            <span className="text-[11px] uppercase tracking-wider text-[#ebdcc9]/50 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#d4af37]" />
              Filter:
            </span>
            <button
              onClick={() => {
                ambientSound.playChime();
                setSelectedDietary('All');
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedDietary === 'All'
                  ? 'bg-[#d4af37] text-[#140f0c] font-bold shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#201813] text-[#ebdcc9]/70 hover:text-white border border-[#d4af37]/15'
              }`}
            >
              All Diets
            </button>
            {dietaryOptions.map((diet) => (
              <button
                key={diet}
                onClick={() => {
                  ambientSound.playChime();
                  setSelectedDietary(diet === selectedDietary ? 'All' : diet);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedDietary === diet
                    ? 'bg-[#d4af37] text-[#140f0c] font-bold shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#201813] text-[#ebdcc9]/70 hover:text-white border border-[#d4af37]/15'
                }`}
              >
                {diet}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                ambientSound.playChime();
                setSelectedCategory(cat.id);
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8624] text-[#140f0c] shadow-lg shadow-[#d4af37]/30 scale-105'
                  : 'bg-[#1e1713] text-[#ebdcc9]/70 hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id ? 'bg-[#140f0c]/20 text-[#140f0c]' : 'bg-[#2a2019] text-[#d4af37]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#1a1410] rounded-2xl border border-[#d4af37]/15">
            <Utensils className="w-10 h-10 text-[#d4af37]/40 mx-auto mb-4" />
            <h3 className="font-serif text-xl text-white mb-2">No Royal Dishes Found</h3>
            <p className="text-xs text-[#ebdcc9]/60 max-w-sm mx-auto mb-6">
              Try adjusting your search query or removing dietary filters to explore our full menu.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDietary('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#d4af37] text-[#140f0c] text-xs uppercase tracking-widest font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  ambientSound.playChime();
                  onSelectItem(item);
                }}
                className="group relative bg-[#1c1511] rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/60 overflow-hidden shadow-xl shadow-black/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
              >
                {/* Image & Price Header */}
                <div className="relative h-52 overflow-hidden bg-[#241c16]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1511] via-transparent to-black/30"></div>

                  {/* Hindi Title Badge */}
                  {item.hindiName && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#140f0c]/80 backdrop-blur-md border border-[#d4af37]/30 text-[11px] text-[#d4af37] font-medium font-serif">
                      {item.hindiName}
                    </span>
                  )}

                  {/* Price Tag */}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#d4af37] text-[#140f0c] text-xs font-black tracking-wider shadow-lg">
                    {item.formattedPrice}
                  </span>

                  {/* Signature Star Badge */}
                  {item.isSignature && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[10px] bg-red-900/90 text-amber-200 border border-amber-400/40 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Signature Heritage</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#ebdcc9]/70 line-clamp-2 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Dietary Chips & Spice level indicator */}
                  <div className="pt-3 border-t border-[#d4af37]/15">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      {/* Spice Level Indicator */}
                      <div className="flex items-center gap-1 text-[10px] text-[#ebdcc9]/70" title={`Spice Level: ${item.spiceLevel}/4`}>
                        <span className="text-[#ebdcc9]/50 uppercase tracking-widest text-[9px]">Spice:</span>
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Flame
                            key={i}
                            className={`w-3 h-3 ${
                              i < item.spiceLevel ? 'text-amber-500 fill-amber-500' : 'text-stone-700'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Origin */}
                      <span className="text-[10px] text-[#d4af37]/90 font-medium">
                        {item.originRegion}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {item.dietary.slice(0, 2).map((d) => (
                          <span
                            key={d}
                            className="text-[9px] px-2 py-0.5 rounded-full bg-[#2a2019] text-[#ebdcc9]/80 border border-[#d4af37]/15 font-medium"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      <span className="text-[11px] text-[#d4af37] font-semibold group-hover:underline flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
