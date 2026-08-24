import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { PERFUMES_DATA } from '../data/perfumes';
import { ProductCard } from '../components/ProductCard';
import {
  User,
  Lock,
  Mail,
  Heart,
  Package,
  Sparkles,
  LogOut,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface AuthPageProps {
  initialMode?: 'login' | 'signup';
}

export const AuthPage: React.FC<AuthPageProps> = ({ initialMode = 'login' }) => {
  const {
    user,
    orders,
    wishlist,
    login,
    logout,
    register,
    navigateTo,
    showToast,
  } = useShop();

  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'profile'>('orders');

  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      showToast('Please enter your email and password.', 'info');
      return;
    }
    const success = login(loginEmail, loginPassword);
    if (success) {
      showToast(`Welcome back, ${loginEmail.split('@')[0]}.`, 'navy');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      showToast('Please provide your name, email, and password.', 'info');
      return;
    }
    register(regName, regEmail, regPassword);
    showToast(`Your AVENDORA account has been created. Welcome, ${regName}.`, 'navy');
  };

  const wishedPerfumes = PERFUMES_DATA.filter((p) => wishlist.includes(p.id));

  // If user is logged in, show Account Portal
  if (user) {
    return (
      <div className="bg-white text-[#111111] min-h-screen py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F0F4F8] text-[#0F2C59] border-2 border-[#0F2C59] flex items-center justify-center font-serif text-2xl font-black">
                {user.name.charAt(0)}
              </div>
              <div>
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#0F2C59] font-bold block">
                  AVENDORA Member
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-black text-[#111111]">
                  Hello, {user.name}
                </h1>
                <span className="text-xs text-[#64748B] font-sans">{user.email}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={logout}
              className="border border-[#CBD5E1] hover:border-[#0F2C59] text-[#475569] hover:text-[#0F2C59] px-5 py-2.5 text-xs uppercase font-sans tracking-[0.15em] font-bold transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer bg-white"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Account Navigation Tabs */}
          <div className="flex border-b border-[#E2E8F0] gap-6 text-xs uppercase font-sans tracking-[0.2em] mb-8 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('orders')}
              className={`pb-3 font-bold transition-colors relative flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'orders' ? 'text-[#0F2C59]' : 'text-[#64748B] hover:text-[#111111]'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Order History ({orders.length})</span>
              {activeTab === 'orders' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0F2C59]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('wishlist')}
              className={`pb-3 font-bold transition-colors relative flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'wishlist' ? 'text-[#0F2C59]' : 'text-[#64748B] hover:text-[#111111]'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Wishlist ({wishlist.length})</span>
              {activeTab === 'wishlist' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0F2C59]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className={`pb-3 font-bold transition-colors relative flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeTab === 'profile' ? 'text-[#0F2C59]' : 'text-[#64748B] hover:text-[#111111]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Member Benefits</span>
              {activeTab === 'profile' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0F2C59]" />
              )}
            </button>
          </div>

          {/* Tab 1: Orders History */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              {orders.length === 0 ? (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-10 sm:p-12 text-center shadow-xs">
                  <Package className="w-10 h-10 text-[#0F2C59] mx-auto mb-3" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mb-2">No Past Orders</h3>
                  <p className="text-xs text-[#64748B] font-sans mb-6">
                    You haven&apos;t placed any orders yet.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigateTo('shop')}
                    className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white px-6 py-3 text-xs uppercase font-sans tracking-[0.15em] font-bold cursor-pointer transition-colors shadow-md shadow-[#0F2C59]/15"
                  >
                    Explore Perfumes
                  </button>
                </div>
              ) : (
                orders.map((ord) => (
                  <div
                    key={ord.id}
                    className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 space-y-4 shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E8F0] pb-3 gap-2">
                      <div>
                        <span className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#64748B] block font-bold">
                          Order Number
                        </span>
                        <span className="font-mono font-bold text-sm text-[#0F2C59]">
                          {ord.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-sans">
                        <span className="text-[#64748B]">{ord.date}</span>
                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 font-bold">
                          {ord.status}
                        </span>
                        <span className="font-serif font-bold text-sm text-[#111111]">
                          PKR {ord.total.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="divide-y divide-[#E2E8F0]">
                      {ord.items.map((item) => (
                        <div key={item.id} className="py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.product.primaryImage}
                              alt={item.product.name}
                              referrerPolicy="no-referrer"
                              className="w-10 h-12 object-cover bg-white border border-[#E2E8F0]"
                            />
                            <div>
                              <h4 className="font-serif text-sm font-bold text-[#111111]">
                                {item.product.name}
                              </h4>
                              <span className="text-[10px] text-[#64748B] font-sans">
                                {item.selectedSize.size} • Qty: {item.quantity}
                              </span>
                            </div>
                          </div>
                          <span className="font-serif text-xs font-bold text-[#111111]">
                            PKR {(item.selectedSize.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => navigateTo('confirmation', { orderId: ord.id })}
                        className="text-xs uppercase font-sans tracking-[0.1em] text-[#0F2C59] font-bold hover:underline cursor-pointer"
                      >
                        View Official Receipt & Tracking →
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Tab 2: Wishlist */}
          {activeTab === 'wishlist' && (
            <div>
              {wishedPerfumes.length === 0 ? (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-10 sm:p-12 text-center shadow-xs">
                  <Heart className="w-10 h-10 text-[#0F2C59] mx-auto mb-3" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mb-2">
                    Your Wishlist is Empty
                  </h3>
                  <p className="text-xs text-[#64748B] font-sans mb-6">
                    Click the heart icon on any perfume to save it to your wishlist.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigateTo('shop')}
                    className="bg-[#0F2C59] hover:bg-[#0A1E3F] text-white px-6 py-3 text-xs uppercase font-sans tracking-[0.15em] font-bold cursor-pointer transition-colors shadow-md shadow-[#0F2C59]/15"
                  >
                    Discover Perfumes
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {wishedPerfumes.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Member Privileges */}
          {activeTab === 'profile' && (
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 max-w-2xl space-y-6 shadow-xs">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] border-b border-[#E2E8F0] pb-3">
                Your Member Benefits
              </h3>
              <div className="space-y-4 text-xs font-sans text-[#475569]">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">
                      Priority Access to Limited Batches:
                    </span>
                    Receive advance notification before new limited harvest batches are released.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">
                      Complimentary Delivery:
                    </span>
                    Free courier shipping on all orders over PKR 5,000.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0F2C59] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] block">
                      Special Discount Voucher:
                    </span>
                    Use coupon code <strong className="font-mono text-[#0F2C59]">AVENDORA15</strong> at checkout for 15% off your order.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Not logged in: Show Login / Register Card
  return (
    <div className="bg-[#F8FAFC] text-[#111111] min-h-screen py-12 sm:py-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white border border-[#E2E8F0] p-8 sm:p-10 shadow-sm">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <span className="font-sans tracking-[0.3em] uppercase text-sm font-black text-[#111111] block mb-1">
            AVENDORA
          </span>
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#0F2C59] font-bold block mb-4">
            Luxury Perfumes
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-black text-[#111111]">
            {mode === 'login' ? 'Account Sign In' : 'Create Account'}
          </h1>
          <p className="text-xs text-[#64748B] font-sans mt-2">
            {mode === 'login'
              ? 'Access your orders, saved addresses, and wishlist.'
              : 'Join AVENDORA for order tracking and exclusive offers.'}
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-[#E2E8F0] mb-6">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 pb-3 text-xs uppercase font-sans tracking-[0.15em] font-bold text-center transition-colors relative cursor-pointer ${
              mode === 'login' ? 'text-[#0F2C59]' : 'text-[#64748B] hover:text-[#111111]'
            }`}
          >
            Sign In
            {mode === 'login' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0F2C59]" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 pb-3 text-xs uppercase font-sans tracking-[0.15em] font-bold text-center transition-colors relative cursor-pointer ${
              mode === 'signup' ? 'text-[#0F2C59]' : 'text-[#64748B] hover:text-[#111111]'
            }`}
          >
            Create Account
            {mode === 'signup' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0F2C59]" />
            )}
          </button>
        </div>

        {/* Login Form */}
        {mode === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs p-3 pl-10 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                  required
                />
                <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs uppercase font-sans tracking-[0.12em] text-[#475569] font-semibold">
                  Password
                </label>
                <a href="#contact" className="text-[11px] text-[#0F2C59] hover:underline font-sans">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs p-3 pl-10 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                  required
                />
                <Lock className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F2C59] hover:bg-[#0A1E3F] text-white py-3.5 text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#0F2C59]/15"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Sign Up Form */
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  placeholder="Tariq Malik"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs p-3 pl-10 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                  required
                />
                <User className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  placeholder="tariq@example.com"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs p-3 pl-10 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                  required
                />
                <Mail className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-sans tracking-[0.12em] text-[#475569] mb-1 font-semibold">
                Create Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] text-xs p-3 pl-10 text-[#111111] focus:outline-none focus:border-[#0F2C59]"
                  required
                />
                <Lock className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F2C59] hover:bg-[#0A1E3F] text-white py-3.5 text-xs uppercase font-sans tracking-[0.2em] font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#0F2C59]/15"
            >
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Privacy Guarantee */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-center text-[11px] text-[#64748B] font-sans">
          <p>
            By signing in, you agree to AVENDORA&apos;s Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
