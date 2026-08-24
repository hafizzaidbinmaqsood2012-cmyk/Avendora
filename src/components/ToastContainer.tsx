import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles, CheckCircle2, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto flex items-start gap-3 bg-white text-[#111111] p-4 rounded-none border border-[#E2E8F0] border-l-4 border-l-[#0F2C59] shadow-xl"
          >
            <div className="mt-0.5 text-[#0F2C59] shrink-0">
              {toast.type === 'navy' ? (
                <Sparkles className="w-4 h-4" />
              ) : toast.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ) : (
                <Info className="w-4 h-4 text-[#0F2C59]" />
              )}
            </div>
            <div className="flex-1 text-xs tracking-wide leading-relaxed font-sans text-[#111111] font-medium">
              {toast.message}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[#94A3B8] hover:text-[#111111] transition-colors -mr-1 -mt-1 p-1 cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
