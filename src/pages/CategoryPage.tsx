import React from 'react';
import { useShop } from '../context/ShopContext';
import { PERFUMES_DATA, CATEGORIES_DATA } from '../data/perfumes';
import { ScentCategory } from '../types';
import { ProductCard } from '../components/ProductCard';

interface CategoryPageProps {
  category: ScentCategory;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const { navigateTo } = useShop();

  const categoryMeta = CATEGORIES_DATA.find((c) => c.id === category) || CATEGORIES_DATA[0];
  const perfumes = PERFUMES_DATA.filter((p) => p.category === category);

  const getCollectionAromaNotes = () => {
    switch (category) {
      case 'oud':
        return [
          { title: 'Wild Cambodian Agarwood', desc: 'Sustainably sourced mature heartwood with warm balsamic resin.' },
          { title: 'Pure Saffron & Leather', desc: 'Hand-harvested stigmas yielding a rich and regal spicy depth.' },
          { title: 'Rich Frankincense & Amber', desc: 'Noble resins delivering deep and meditative smoke nuances.' },
        ];
      case 'musk':
        return [
          { title: 'White Silk Skin Musks', desc: 'Clean, velvety musks that bond effortlessly with personal skin chemistry.' },
          { title: 'Crisp Bergamot & Aldehydes', desc: 'Sparkling effervescent notes evoking morning freshness.' },
          { title: 'Powdery Florentine Iris', desc: 'Smooth, aristocratic iris creating an ethereal, luminous veil.' },
        ];
      case 'floral':
        return [
          { title: 'Damascus & Turkish Rose', desc: 'Over 300,000 hand-picked petals distilled into pure concentrated essence.' },
          { title: 'Night-Blooming Jasmine', desc: 'Plucked at dawn to preserve heady floral nectar and sweetness.' },
          { title: 'Soft Magnolia Petals', desc: 'Delicate citrusy white floral tones adding modern elegance.' },
        ];
      case 'woody':
        return [
          { title: 'Atlas & Virginia Cedar', desc: 'Rich mountain cedarwood delivering architectural stability and warmth.' },
          { title: 'Mysore Sandalwood', desc: 'Ultra-creamy, butter-soft sustainable heartwood distillation.' },
          { title: 'Smoky Vetiver Roots', desc: 'Deep earthy roots imparting smoky, mineral-rich sophistication.' },
        ];
    }
  };

  return (
    <div className="bg-white text-[#111111] min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[40vh] sm:min-h-[45vh] bg-[#F8FAFC] text-[#111111] flex items-center overflow-hidden border-b border-[#E2E8F0]">
        <div className="absolute inset-0 z-0">
          <img
            src={categoryMeta.heroImage}
            alt={categoryMeta.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-15 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
          <div className="max-w-2xl space-y-3 sm:space-y-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#64748B]">
              <span className="cursor-pointer hover:text-[#0F2C59]" onClick={() => navigateTo('home')}>
                Home
              </span>
              <span>/</span>
              <span className="cursor-pointer hover:text-[#0F2C59]" onClick={() => navigateTo('categories')}>
                Collections
              </span>
              <span>/</span>
              <span className="text-[#0F2C59] font-bold">{categoryMeta.name}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-black">
              {categoryMeta.name}
            </h1>

            <p className="font-serif italic text-base sm:text-lg text-[#0F2C59]">
              {categoryMeta.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed max-w-xl">
              {categoryMeta.description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-sans uppercase tracking-[0.15em] text-[#64748B]">
              <span className="font-semibold text-[#111111]">{perfumes.length} Formulations</span>
              <span>•</span>
              <span>30–32% Extrait Concentration</span>
              <span>•</span>
              <span>Aged Maceration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Pillars */}
      <section className="py-10 sm:py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getCollectionAromaNotes().map((note, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] p-5 shadow-xs">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#0F2C59] font-bold block mb-1">
                  Signature Accord 0{i + 1}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#111111] mb-1.5">{note.title}</h4>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">{note.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fragrances Catalog for this Category */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="text-[11px] uppercase font-sans tracking-[0.2em] text-[#0F2C59] font-bold block mb-1">
              Curated Vault
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
              The Complete {categoryMeta.name}
            </h2>
          </div>
          <span className="text-xs text-[#64748B] font-sans mt-2 sm:mt-0 font-medium">
            {perfumes.length} Fragrances
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perfumes.map((perfume) => (
            <ProductCard key={perfume.id} product={perfume} />
          ))}
        </div>
      </section>

      {/* Other Collections Navigation */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] text-[#111111] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold block mb-2">
            Explore Alternate Fragrance Universes
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-8">
            Discover Other AVENDORA Collections
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {CATEGORIES_DATA.filter((c) => c.id !== category).map((other) => (
              <div
                key={other.id}
                onClick={() => navigateTo(`category-${other.id}`)}
                className="bg-white border border-[#E2E8F0] hover:border-[#0F2C59] p-5 cursor-pointer transition-all text-left group shadow-xs hover:shadow-sm"
              >
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#0F2C59] font-bold block mb-1">
                  Collection
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#0F2C59] transition-colors mb-1">
                  {other.name}
                </h4>
                <p className="text-xs text-[#64748B] font-sans line-clamp-1">{other.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
