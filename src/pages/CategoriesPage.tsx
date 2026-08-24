import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES_DATA, PERFUMES_DATA } from '../data/perfumes';
import { ArrowRight, Sparkles, Droplets, Leaf, Flame, Feather } from 'lucide-react';
import { motion } from 'motion/react';

export const CategoriesPage: React.FC = () => {
  const { navigateTo } = useShop();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'oud':
        return <Flame className="w-5 h-5 text-[#0F2C59]" />;
      case 'musk':
        return <Feather className="w-5 h-5 text-[#0F2C59]" />;
      case 'floral':
        return <Droplets className="w-5 h-5 text-[#0F2C59]" />;
      case 'woody':
        return <Leaf className="w-5 h-5 text-[#0F2C59]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0F2C59]" />;
    }
  };

  return (
    <div className="bg-white text-[#111111] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#64748B] mb-2">
            <span className="cursor-pointer hover:text-[#0F2C59]" onClick={() => navigateTo('home')}>
              Home
            </span>
            <span>/</span>
            <span className="text-[#0F2C59] font-bold">Fragrance Families</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] mb-4">
            The AVENDORA Fragrance Families
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans leading-relaxed">
            Every perfume at AVENDORA is crafted from exceptional natural ingredients including Cambodian Oud, Turkish Rose, French Iris, and Royal Mysore Sandalwood.
          </p>
        </div>

        {/* Categories Showcase Grid */}
        <div className="space-y-12 sm:space-y-16">
          {CATEGORIES_DATA.map((cat, idx) => {
            const perfumesInCat = PERFUMES_DATA.filter((p) => p.category === cat.id);
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-xs ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Hero Image Col */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-white ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-4 left-4 text-white lg:hidden">
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-blue-200 block font-bold">
                      {cat.perfumeCount} Fragrances
                    </span>
                    <h3 className="font-serif text-2xl font-bold">{cat.name}</h3>
                  </div>
                </div>

                {/* Content Col */}
                <div
                  className={`lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {getCategoryIcon(cat.id)}
                      <span className="text-[11px] uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold">
                        {cat.tagline}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-3 sm:mb-4">
                      {cat.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    {/* Featured Fragrances in this Category */}
                    <div className="border-t border-[#E2E8F0] pt-4 mb-6">
                      <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#64748B] block mb-3 font-bold">
                        Featured Creations ({perfumesInCat.length})
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {perfumesInCat.map((p) => (
                          <div
                            key={p.id}
                            onClick={() => navigateTo('product', { id: p.id })}
                            className="p-2.5 bg-white border border-[#E2E8F0] hover:border-[#0F2C59] cursor-pointer transition-colors group shadow-2xs"
                          >
                            <span className="font-serif text-xs text-[#111111] group-hover:text-[#0F2C59] block truncate font-medium">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-[#64748B] font-sans">
                              From PKR {p.sizes[0].price.toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => navigateTo(`category-${cat.id}`)}
                      className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white px-7 py-3 text-xs uppercase font-sans tracking-[0.18em] font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#0F2C59]/15"
                    >
                      <span>Explore {cat.name.replace('The ', '')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
