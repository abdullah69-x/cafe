import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderPlaced(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDFB] shadow-2xl flex flex-col border-l border-[#E2D8CC]">
          {/* Header */}
          <div className="p-6 bg-[#1C130E] text-[#F5EFEB] flex items-center justify-between border-b border-[#35251C]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#8C5336] flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold">
                  Your Takeaway Order
                </h2>
                <p className="text-[11px] text-[#A89689]">
                  Prepared fresh at the counter
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#A89689] hover:text-white hover:bg-[#2C1F18] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderPlaced ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#EBF3ED] text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#29201B]">
                  Order Sent to Baristas!
                </h3>
                <p className="text-xs text-[#6D5A50] max-w-xs leading-relaxed">
                  Our team has begun steaming your milk and preparing your bakery items. Your order will be ready at the pickup window in 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#8C5336] text-white text-xs font-semibold shadow-sm"
                >
                  Return to Café
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16">
                <div className="w-16 h-16 rounded-2xl bg-[#F4EFEA] text-[#8C5336] flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#29201B]">
                  Your order is empty
                </h3>
                <p className="text-[#8C7A70] text-xs max-w-xs leading-relaxed">
                  Explore our menu to add artisanal coffees, pastries, or fresh brunch plates.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.menuItem.id}
                    className="flex gap-3.5 p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD6] items-center"
                  >
                    <img
                      src={item.menuItem.image}
                      alt={item.menuItem.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-[#29201B] text-sm truncate">
                        {item.menuItem.name}
                      </h4>
                      <p className="text-xs text-[#8C5336] font-semibold mt-0.5">
                        ${item.menuItem.price.toFixed(2)}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                          className="w-6 h-6 rounded-lg bg-[#EDE5DC] hover:bg-[#E0D5C9] text-[#29201B] flex items-center justify-center text-xs transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold w-5 text-center text-[#29201B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                          className="w-6 h-6 rounded-lg bg-[#EDE5DC] hover:bg-[#E0D5C9] text-[#29201B] flex items-center justify-center text-xs transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.menuItem.id)}
                      className="text-[#A89689] hover:text-red-700 p-1.5 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer / Summary */}
          {!orderPlaced && cartItems.length > 0 && (
            <div className="p-6 bg-[#FAF7F2] border-t border-[#E8DFD6] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#6D5A50]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#6D5A50]">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#29201B] font-bold text-base pt-2 border-t border-[#E2D8CC]">
                  <span>Total</span>
                  <span className="text-[#8C5336]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={checkingOut}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#8C5336] hover:bg-[#9E603F] text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-md disabled:opacity-50"
              >
                {checkingOut ? (
                  <span>Sending to Kitchen...</span>
                ) : (
                  <>
                    <span>Place Pickup Order (${total.toFixed(2)})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
