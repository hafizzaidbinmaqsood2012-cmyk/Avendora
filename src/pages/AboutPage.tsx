import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useShop();

  return (
    <div className="bg-white text-[#111111] min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] bg-[#F8FAFC] text-[#111111] flex items-center justify-center text-center overflow-hidden border-b border-[#E2E8F0]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=2000&q=85"
            alt="AVENDORA Atelier"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-15 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="text-xs uppercase font-sans tracking-[0.3em] text-[#0F2C59] font-bold block mb-3">
            Since 1928 • Fine Fragrance Atelier
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#111111] font-black mb-5 leading-tight">
            The Philosophy of Pure Botanical Extrait
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#0F2C59] max-w-2xl mx-auto leading-relaxed">
            &ldquo;We do not formulate scents to follow passing trends; we distill enduring liquid poetry from nature&apos;s rarest botanical treasures.&rdquo;
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#0F2C59]" />
              <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold">
                Haute Parfumerie Heritage
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-black leading-tight">
              Nearly a Century of Masterful Perfumery
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
              Founded amidst the historic floral hills of Grasse in 1928 by master botanist Henri Avendora, our house was born from a singular obsession: to create pure, rich perfume extracts using sovereign-grade raw materials.
            </p>

            <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
              While mass market perfumery diluted formulations to high alcohol volumes and synthetic substitutes, AVENDORA preserved the historic tradition of cold-maceration, aging our concentrates for nine uninterrupted months in cellar amphorae.
            </p>

            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E2E8F0] text-center">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#0F2C59] block font-black">
                  32%
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.1em] text-[#64748B] font-bold">
                  Pure Oil Extrait
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#0F2C59] block font-black">
                  9 Mo.
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.1em] text-[#64748B] font-bold">
                  Cold Maceration
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#0F2C59] block font-black">
                  100%
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.1em] text-[#64748B] font-bold">
                  Traceable Botanicals
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-2 bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=85"
                alt="Rose Harvest"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-3 text-center">
                <span className="font-serif italic text-xs text-[#64748B]">
                  The May Rose (Rosa Centifolia) harvest at the AVENDORA floral estate in Provence.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of AVENDORA */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold block mb-2">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-black">
              The Four Pillars of High Artistry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E2E8F0] p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F0F4F8] border border-[#0F2C59] flex items-center justify-center text-[#0F2C59]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Sovereign Raw Materials</h3>
              <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                Cambodian agarwood, Florentine iris, and royal Mysore sandalwood sustainably harvested with full fair-trade compensation.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F0F4F8] border border-[#0F2C59] flex items-center justify-center text-[#0F2C59]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Extrait Concentration</h3>
              <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                Every bottle contains 30% to 32% pure aromatic oil concentration, yielding an intimate 14+ hour projection that evolves naturally.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F0F4F8] border border-[#0F2C59] flex items-center justify-center text-[#0F2C59]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Artisanal Flacon Glass</h3>
              <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                Heavyweight crystal bottles hand-polished by master glassmakers and sealed with genuine metallic caps and precision atomizers.
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#F0F4F8] border border-[#0F2C59] flex items-center justify-center text-[#0F2C59]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Batch Numbering</h3>
              <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                Because natural harvests vary with seasons and sunshine, every limited release batch is individual and numbered for provenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Master Perfumers Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold block mb-2">
            The Noses
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-black">
            The Master Perfumers
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans mt-2">
            Fine fragrance creators composing signature scents exclusively for AVENDORA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 text-center space-y-4 shadow-xs">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#0F2C59]">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                alt="Madame Geneviève Avendora"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Geneviève Avendora</h3>
              <span className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#0F2C59] font-bold block">
                Lead Nose & Floral Specialist
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-sans leading-relaxed">
              Pioneer of cold-press floral concretes and creator of &ldquo;Rose Impériale Extrait&rdquo; and &ldquo;Musc Céleste&rdquo;.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 text-center space-y-4 shadow-xs">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#0F2C59]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Henri de Saint-Germain"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Henri de Saint-Germain</h3>
              <span className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#0F2C59] font-bold block">
                Oud & Oriental Resins Master
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-sans leading-relaxed">
              Spent 15 years in Southeast Asia cataloging vintage agarwood strains before formulating &ldquo;Oud Souverain&rdquo;.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 text-center space-y-4 shadow-xs">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#0F2C59]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                alt="Marc-Antoine Laurent"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#111111]">Marc-Antoine Laurent</h3>
              <span className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#0F2C59] font-bold block">
                Woody & Smoky Architect
              </span>
            </div>
            <p className="text-xs text-[#64748B] font-sans leading-relaxed">
              Master of rare Mysore sandalwood and smoke-distilled Haitian vetiver compositions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 sm:py-16 bg-[#F8FAFC] border-t border-[#E2E8F0] text-[#111111] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-[11px] uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold block mb-2">
            Begin Your Fragrance Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-black mb-6">
            Experience Our Rare Formulations
          </h2>
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white px-8 py-3.5 text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shadow-[#0F2C59]/15"
          >
            <span>Explore All Perfumes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
