import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { COMPLIMENTARY_SAMPLES_LIST } from '../data/perfumes';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Gift,
  ShieldCheck,
  Tag,
  Check,
  X,
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    cartCount,
    subtotal,
    discountAmount,
    discountCode,
    shippingFee,
    tax,
    cartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyPromoCode,
    removePromoCode,
    selectedSamples,
    toggleSample,
    giftNote,
    setGiftNote,
    navigateTo,
  } = useShop();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError?: boolean } | null>(null);
  const [isGiftNoteOpen, setIsGiftNoteOpen] = useState(giftNote.length > 0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    if (res.success) {
      setPromoMessage({ text: res.message });
      setPromoInput('');
    } else {
      setPromoMessage({ text: res.message, isError: true });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white min-h-[75vh] flex items-center justify-center py-20 px-4 text-[#111111]">
        <div className="max-w-md w-full bg-[#F8FAFC] border border-[#E2E8F0] p-10 text-center shadow-xs">
          <div className="w-16 h-16 bg-white border border-[#E2E8F0] flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8 text-[#0F2C59]" />
          </div>
          <h1 className="font-serif text-3xl font-black text-[#111111] mb-2">
            Your Shopping Bag is Empty
          </h1>
          <p className="text-xs text-[#64748B] font-sans mb-8 leading-relaxed">
            Discover our collection of Oud, Musk, Floral, and Woody perfumes to find your signature fragrance.
          </p>
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="w-full bg-[#0F2C59] hover:bg-[#0A1E3F] text-white py-3.5 px-6 text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Explore All Perfumes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#111111] min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E2E8F0] pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-sans tracking-[0.2em] text-[#64748B] mb-2">
              <span className="cursor-pointer hover:text-[#0F2C59]" onClick={() => navigateTo('home')}>
                Home
              </span>
              <span>/</span>
              <span className="text-[#0F2C59] font-bold">Shopping Bag</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#111111]">
              Your Selection ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </h1>
          </div>

          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="text-xs uppercase font-sans tracking-[0.15em] text-[#111111] hover:text-[#0F2C59] font-bold flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Cart Items & Samples */}
          <div className="lg:col-span-8 space-y-8">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-12 text-[11px] uppercase font-sans tracking-[0.2em] text-[#64748B] pb-3 border-b border-[#E2E8F0]">
              <span className="col-span-6">Product</span>
              <span className="col-span-2 text-center">Size</span>
              <span className="col-span-2 text-center">Quantity</span>
              <span className="col-span-2 text-right">Subtotal</span>
            </div>

            {/* Cart Items List */}
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center shadow-xs"
                >
                  {/* Product Info */}
                  <div className="sm:col-span-6 flex gap-4 items-center">
                    <div
                      onClick={() => navigateTo('product', { id: item.product.id })}
                      className="w-20 h-24 bg-white shrink-0 overflow-hidden cursor-pointer border border-[#E2E8F0]"
                    >
                      <img
                        src={item.product.primaryImage}
                        alt={item.product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#0F2C59] font-bold block">
                        {item.product.categoryLabel}
                      </span>
                      <h3
                        onClick={() => navigateTo('product', { id: item.product.id })}
                        className="font-serif text-base text-[#111111] hover:text-[#0F2C59] cursor-pointer font-bold"
                      >
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-[#64748B] font-sans">
                        {item.product.characteristics.concentration}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-[11px] text-red-600 hover:text-red-800 font-sans mt-2 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Size & Unit Price */}
                  <div className="sm:col-span-2 text-center flex sm:flex-col justify-between sm:justify-center text-xs font-sans text-[#475569]">
                    <span className="sm:hidden text-[#64748B]">Size:</span>
                    <div>
                      <span className="font-bold text-[#111111] block">{item.selectedSize.size}</span>
                      <span className="text-[11px] text-[#64748B]">PKR {item.selectedSize.price.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="sm:col-span-2 flex justify-between sm:justify-center items-center">
                    <span className="sm:hidden text-xs text-[#64748B] font-sans">Quantity:</span>
                    <div className="flex items-center border border-[#CBD5E1] bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1.5 text-[#475569] hover:text-[#111111] cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-sans font-bold text-[#111111]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1.5 text-[#475569] hover:text-[#111111] cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="sm:col-span-2 text-right flex sm:block justify-between items-center border-t sm:border-t-0 border-[#E2E8F0] pt-2 sm:pt-0">
                    <span className="sm:hidden text-xs text-[#64748B] font-sans">Total:</span>
                    <span className="font-serif text-base font-bold text-[#111111]">
                      PKR {(item.selectedSize.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={clearCart}
                className="text-xs uppercase font-sans tracking-[0.1em] text-[#64748B] hover:text-red-600 cursor-pointer"
              >
                Clear Entire Bag
              </button>
            </div>

            {/* 2 Complimentary Samples Selector */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3 border-b border-[#E2E8F0] pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0F2C59]" />
                  <h3 className="font-serif text-lg font-bold text-[#111111]">
                    Select 2 Free Discovery Samples
                  </h3>
                </div>
                <span className="text-xs bg-[#0F2C59] text-white px-2.5 py-1 font-sans font-bold">
                  {selectedSamples.length} / 2 Selected
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-sans mb-4 leading-relaxed">
                As a complimentary benefit, each order includes two 2ml Extrait de Parfum discovery sample vials of your choice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPLIMENTARY_SAMPLES_LIST.map((sample) => {
                  const isSelected = selectedSamples.includes(sample);
                  return (
                    <div
                      key={sample}
                      onClick={() => toggleSample(sample)}
                      className={`p-3 border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#F0F4F8] border-[#0F2C59] text-[#0F2C59]'
                          : 'bg-white border-[#E2E8F0] text-[#475569] hover:border-[#0F2C59]'
                      }`}
                    >
                      <span className="font-serif text-xs font-semibold">{sample}</span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#0F2C59] border-[#0F2C59] text-white'
                            : 'border-[#CBD5E1]'
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gift Note */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#0F2C59]" />
                  <h3 className="font-serif text-lg font-bold text-[#111111]">
                    Complimentary Gift Card & Ribbon
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGiftNoteOpen(!isGiftNoteOpen)}
                  className="text-xs text-[#0F2C59] uppercase font-sans tracking-[0.1em] font-bold hover:underline cursor-pointer"
                >
                  {isGiftNoteOpen ? 'Hide' : 'Add Gift Message'}
                </button>
              </div>

              {isGiftNoteOpen && (
                <div className="mt-4 pt-4 border-t border-[#E2E8F0] space-y-2">
                  <p className="text-xs text-[#64748B] font-sans">
                    Your personal message will be printed and included with the fragrance gift package.
                  </p>
                  <textarea
                    rows={3}
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="Write your gift message here (optional)..."
                    className="w-full bg-white border border-[#CBD5E1] text-xs p-3 text-[#111111] focus:outline-none focus:border-[#0F2C59] font-serif italic"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 space-y-6 shadow-xs">
              <h2 className="font-serif text-xl font-bold text-[#111111] border-b border-[#E2E8F0] pb-3">
                Order Summary
              </h2>

              {/* Promo Code Box */}
              <div>
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <label className="block text-xs uppercase font-sans tracking-[0.15em] text-[#475569] font-semibold">
                    Discount or Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="e.g. AVENDORA15"
                      className="flex-1 bg-white border border-[#CBD5E1] text-xs px-3 py-2 uppercase tracking-wider font-mono text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                    />
                    <button
                      type="submit"
                      className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white px-4 py-2 text-xs uppercase font-sans tracking-[0.1em] font-bold transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </form>

                {discountCode && (
                  <div className="mt-2.5 p-2 bg-[#F0F4F8] border border-[#D8E2ED] flex items-center justify-between text-xs text-[#0F2C59] font-sans">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Code &ldquo;{discountCode}&rdquo; Applied</span>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-[#64748B] hover:text-red-600 p-0.5 cursor-pointer"
                      title="Remove promo code"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {promoMessage && (
                  <p
                    className={`text-[11px] font-sans mt-1.5 ${
                      promoMessage.isError ? 'text-red-600' : 'text-emerald-700 font-bold'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
              </div>

              {/* Calculations List */}
              <div className="space-y-3 text-xs font-sans border-t border-[#E2E8F0] pt-4">
                <div className="flex justify-between text-[#64748B]">
                  <span>Subtotal</span>
                  <span className="text-[#111111] font-bold">PKR {subtotal.toLocaleString()}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#0F2C59] font-bold">
                    <span>Discount ({discountCode})</span>
                    <span>-PKR {discountAmount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#64748B]">
                  <span>Shipping</span>
                  <span className="text-[#111111] font-bold">
                    {shippingFee === 0 ? 'Free' : `PKR ${shippingFee.toLocaleString()}`}
                  </span>
                </div>

                <div className="flex justify-between text-[#64748B]">
                  <span>Estimated Tax</span>
                  <span className="text-[#111111] font-bold">PKR {tax.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-base font-serif font-black text-[#111111] border-t border-[#E2E8F0] pt-3">
                  <span>Grand Total</span>
                  <span className="text-[#0F2C59]">PKR {cartTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => navigateTo('checkout')}
                  className="w-full bg-[#0F2C59] hover:bg-[#0A1E3F] text-white py-4 text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#0F2C59]/15"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2 text-[11px] text-[#64748B] font-sans">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F2C59] shrink-0" />
                  <span>Secure Checkout & Authentic Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0F2C59] shrink-0" />
                  <span>Free 2x 2ml Discovery Extrait Sample Vials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
