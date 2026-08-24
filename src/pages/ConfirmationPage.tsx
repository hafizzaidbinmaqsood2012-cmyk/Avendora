import React from 'react';
import { useShop } from '../context/ShopContext';
import {
  CheckCircle2,
  Printer,
  ShoppingBag,
  Truck,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ConfirmationPageProps {
  orderId?: string;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ orderId }) => {
  const { currentOrder, orders, orderHistory, navigateTo } = useShop();
  const allOrders = orders || orderHistory || [];

  const order =
    currentOrder ||
    (orderId ? allOrders.find((o) => o.id === orderId) : null) ||
    allOrders[0] ||
    null;

  if (!order) {
    return (
      <div className="bg-white text-[#111111] min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-[#F8FAFC] border border-[#E2E8F0] p-8 text-center shadow-xs">
          <h2 className="font-serif text-2xl font-black text-[#111111] mb-3">No Order Found</h2>
          <p className="text-xs text-[#64748B] font-sans mb-6">
            We could not find an active order confirmation.
          </p>
          <button
            type="button"
            onClick={() => navigateTo('home')}
            className="bg-[#0F2C59] text-white hover:bg-[#0A1E3F] px-6 py-3 text-xs uppercase font-sans tracking-[0.15em] font-bold cursor-pointer shadow-xs"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white text-[#111111] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header Banner */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 sm:p-12 text-center mb-10 relative overflow-hidden shadow-xs">
          <div className="w-16 h-16 rounded-full bg-[#F0F4F8] border-2 border-[#0F2C59] flex items-center justify-center mx-auto mb-4 text-[#0F2C59]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-[11px] uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold block mb-1">
            Order Confirmed
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#111111] mb-3">
            Thank You, {order.customer.firstName}!
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] font-sans max-w-lg mx-auto leading-relaxed">
            Your perfume order has been received and is now being carefully prepared and packed for secure dispatch.
          </p>

          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-white border border-[#CBD5E1] text-xs font-sans text-[#475569]">
            <span>Order Number:</span>
            <span className="font-mono font-bold text-[#0F2C59] tracking-wider">
              {order.id}
            </span>
          </div>
        </div>

        {/* Order Status & Timeline */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
            <h2 className="font-serif text-xl font-bold text-[#111111] flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#0F2C59]" />
              Fulfillment & Delivery Status
            </h2>
            <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1 font-sans font-bold">
              Processing Order
            </span>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white border border-[#0F2C59]">
              <span className="text-[10px] uppercase font-sans tracking-[0.1em] text-[#0F2C59] font-bold block mb-1">
                Step 1 • Completed
              </span>
              <p className="font-serif text-xs font-bold text-[#111111]">Order Placed</p>
              <span className="text-[10px] text-[#64748B] font-sans">{order.date}</span>
            </div>

            <div className="p-3 bg-white border border-[#0F2C59]">
              <span className="text-[10px] uppercase font-sans tracking-[0.1em] text-[#0F2C59] font-bold block mb-1">
                Step 2 • Active
              </span>
              <p className="font-serif text-xs font-bold text-[#111111]">Quality Inspection</p>
              <span className="text-[10px] text-[#64748B] font-sans">AVENDORA Warehouse</span>
            </div>

            <div className="p-3 bg-white border border-[#E2E8F0] opacity-60">
              <span className="text-[10px] uppercase font-sans tracking-[0.1em] text-[#64748B] font-bold block mb-1">
                Step 3 • Upcoming
              </span>
              <p className="font-serif text-xs font-bold text-[#475569]">Handed to Courier</p>
              <span className="text-[10px] text-[#64748B] font-sans">Estimated 24-48 hrs</span>
            </div>

            <div className="p-3 bg-white border border-[#E2E8F0] opacity-60">
              <span className="text-[10px] uppercase font-sans tracking-[0.1em] text-[#64748B] font-bold block mb-1">
                Step 4 • Upcoming
              </span>
              <p className="font-serif text-xs font-bold text-[#475569]">Delivered</p>
              <span className="text-[10px] text-[#64748B] font-sans">Doorstep Delivery</span>
            </div>
          </div>
        </div>

        {/* Receipt & Itemized Manifest */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-10 mb-10 space-y-8 shadow-xs print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E8F0] pb-6 gap-4">
            <div>
              <span className="font-sans tracking-[0.3em] uppercase text-sm font-black text-[#111111] block">
                AVENDORA
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-sans">
                Luxury Perfumes • Official Order Invoice
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="bg-white border border-[#CBD5E1] text-[#111111] hover:border-[#0F2C59] px-4 py-2 text-xs font-sans uppercase tracking-[0.1em] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Official Invoice</span>
              </button>
            </div>
          </div>

          {/* Customer & Shipping Summary Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-sans">
            <div className="p-4 bg-white border border-[#E2E8F0] space-y-1">
              <span className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#64748B] font-bold block mb-1">
                Recipient & Destination
              </span>
              <p className="font-bold text-[#111111]">
                {order.customer.firstName} {order.customer.lastName}
              </p>
              <p className="text-[#475569]">{order.customer.address}</p>
              {order.customer.apartment && <p className="text-[#475569]">{order.customer.apartment}</p>}
              <p className="text-[#475569]">
                {order.customer.city}, {order.customer.postalCode} • {order.customer.country}
              </p>
              <p className="text-[#64748B] text-[11px] pt-1">
                {order.customer.email} • {order.customer.phone}
              </p>
            </div>

            <div className="p-4 bg-white border border-[#E2E8F0] space-y-1">
              <span className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#64748B] font-bold block mb-1">
                Courier & Payment Details
              </span>
              <p className="font-bold text-[#111111]">Method: {order.shippingMethod}</p>
              <p className="text-[#475569]">Payment: {order.paymentMethod}</p>
              <p className="text-[#475569]">Date: {order.date}</p>
              <p className="text-emerald-700 text-[11px] pt-1 flex items-center gap-1 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified & Insured Shipment</span>
              </p>
            </div>
          </div>

          {/* Items Table */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#111111] mb-4">
              Ordered Fragrances
            </h3>
            <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
              {order.items.map((item) => (
                <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.primaryImage}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-16 object-cover bg-white border border-[#E2E8F0]"
                    />
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#0F2C59] font-bold block">
                        {item.product.categoryLabel}
                      </span>
                      <h4 className="font-serif text-sm font-bold text-[#111111]">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#64748B] font-sans">
                        {item.selectedSize.size} ({item.selectedSize.volume}) × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="font-serif text-sm font-bold text-[#111111]">
                    PKR {(item.selectedSize.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Complimentary Discovery Samples */}
          {order.selectedSamples && order.selectedSamples.length > 0 && (
            <div className="p-4 bg-white border border-[#E2E8F0] text-xs font-sans">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#0F2C59] font-bold block mb-1">
                Complimentary 2ml Discovery Sample Vials Included:
              </span>
              <div className="flex flex-wrap gap-2">
                {order.selectedSamples.map((s, i) => (
                  <span
                    key={i}
                    className="bg-[#F8FAFC] border border-[#CBD5E1] px-3 py-1 text-[#475569] text-[11px] flex items-center gap-1.5 font-semibold"
                  >
                    <Sparkles className="w-3 h-3 text-[#0F2C59]" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Gift Inscription if any */}
          {order.giftNote && (
            <div className="p-4 bg-white border-l-2 border-[#0F2C59] text-xs font-sans">
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#64748B] block mb-1">
                Custom Gift Card Message:
              </span>
              <p className="font-serif italic text-sm text-[#111111]">&ldquo;{order.giftNote}&rdquo;</p>
            </div>
          )}

          {/* Totals Calculation */}
          <div className="border-t border-[#E2E8F0] pt-4 space-y-2 text-xs font-sans max-w-xs ml-auto">
            <div className="flex justify-between text-[#64748B]">
              <span>Subtotal</span>
              <span className="text-[#111111] font-bold">PKR {order.subtotal.toLocaleString()}</span>
            </div>
            {order.discountAmount > 0 && (
              <div className="flex justify-between text-[#0F2C59] font-bold">
                <span>Discount</span>
                <span>-PKR {order.discountAmount.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-[#64748B]">
              <span>Delivery</span>
              <span className="text-[#111111] font-bold">
                {order.shippingFee === 0 ? 'Free' : `PKR ${order.shippingFee.toLocaleString()}`}
              </span>
            </div>
            <div className="flex justify-between text-[#64748B]">
              <span>Taxes</span>
              <span className="text-[#111111] font-bold">PKR {order.tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-base font-serif font-black text-[#111111] border-t border-[#E2E8F0] pt-2">
              <span>Total</span>
              <span className="text-[#0F2C59]">PKR {order.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Continue Exploring CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => navigateTo('shop')}
            className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white px-8 py-3.5 text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shadow-[#0F2C59]/15"
          >
            <span>Continue Shopping AVENDORA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
