import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Search, Filter, ShoppingBag, Sparkles, Star, X, Plus, Minus, Trash2, CreditCard, Loader2, CheckCircle, Send } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "The Path to Spiritual Excellence",
    author: "Apostle Godwin BANTAR",
    price: 25.00,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Leadership in Ministry",
    author: "Apostle Godwin BANTAR",
    price: 30.00,
    category: "Books",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Foundations of Faith",
    author: "Apostle Godwin BANTAR",
    price: 20.00,
    category: "Courses",
    image: "https://images.unsplash.com/photo-1512232357379-5b5c672a3c0a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "Prophetic Insights",
    author: "Apostle Godwin BANTAR",
    price: 15.00,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400"
  }
];

type Product = (typeof products)[0];

interface CartItem extends Product {
  quantity: number;
}

export default function Store() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const addToCart = (product: (typeof products)[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate Payment Processing
      await new Promise(resolve => setTimeout(resolve, 2500));
      setIsSuccess(true);
      setCart([]);
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6 backdrop-blur-sm"
              >
                <ShoppingBag className="w-3 h-3 text-brand" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Spiritual Resources</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
              >
                Ministry <span className="text-brand">Store</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/40 font-medium"
              >
                Explore transformative books, courses, and teachings to deepen your spiritual walk.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 w-full lg:w-auto"
            >
              <div className="relative flex-grow lg:flex-grow-0">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search resources..." 
                  className="w-full lg:w-80 pl-12 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all placeholder:text-white/20 font-medium text-white"
                />
              </div>
              <button className="p-5 bg-brand text-white rounded-2xl hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 active:scale-95">
                <Filter className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-[#fafafa] p-4 rounded-[40px] border border-brand/5 hover:bg-white hover:shadow-2xl transition-all duration-500 active:scale-[0.98]"
              >
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full py-5 bg-white text-black rounded-2xl font-bold font-display shadow-2xl flex items-center justify-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand hover:text-white active:scale-95"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-5 py-2 bg-white text-black text-[10px] font-bold rounded-xl uppercase tracking-[0.2em] shadow-xl border border-brand/5">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-2 pb-4 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-3 text-brand text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                    <span className="ml-1 font-bold text-text-muted">5.0</span>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-[0.2em] mb-6">{product.author}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand uppercase tracking-widest block">Price</span>
                      <span className="text-2xl font-display font-bold text-black">${product.price.toFixed(2)}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-brand transition-all active:scale-95 shadow-xl shadow-black/10"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Cart Drawer */}
      <AnimatePresence mode="wait">
        {isCartOpen && (
          <div className="fixed inset-0 z-[100] overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-8 border-b border-brand/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-black">Your Cart</h3>
                    <p className="text-xs font-bold text-brand uppercase tracking-widest">{cart.length} resources selected</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-3 rounded-xl bg-[#fafafa] hover:bg-brand/10 hover:text-brand transition-all active:scale-90"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-brand" />
                    </div>
                    <h4 className="text-2xl font-display font-bold text-black mb-4">Purchase Success!</h4>
                    <p className="text-text-muted font-medium mb-8 max-w-[240px]">
                      Thank you for your order. Your resources will be available in your portal shortly.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSuccess(false);
                        setIsCartOpen(false);
                      }}
                      className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-brand transition-all active:scale-95"
                    >
                      Continue Shopping
                    </button>
                  </motion.div>
                ) : cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-text-muted py-20">
                    <div className="w-20 h-20 bg-[#fafafa] rounded-full flex items-center justify-center mb-6">
                      <ShoppingBag className="w-8 h-8 opacity-20" />
                    </div>
                    <p className="font-bold uppercase tracking-widest text-xs mb-2">Cart is empty</p>
                    <p className="text-sm">Start adding resources to your cart.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <motion.div 
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-6 p-4 rounded-3xl bg-[#fafafa] border border-brand/5 group"
                      >
                        <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 shadow-sm">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 className="font-display font-bold text-black mb-1 line-clamp-1">{item.title}</h4>
                          <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-3">${item.price.toFixed(2)}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-brand/5 shadow-sm">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-6 h-6 flex items-center justify-center hover:text-brand transition-colors"
                              >
                                <Minus className="w-3.2 h-3.2" />
                              </button>
                              <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-6 h-6 flex items-center justify-center hover:text-brand transition-colors"
                              >
                                <Plus className="w-3.2 h-3.2" />
                              </button>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="w-10 h-10 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-xl transition-all active:scale-90"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer / Checkout */}
              {!isSuccess && cart.length > 0 && (
                <div className="p-8 border-t border-brand/5 bg-white space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-text-muted font-medium">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-text-muted font-medium pb-4 border-b border-dashed border-brand/10">
                      <span>Handling</span>
                      <span className="text-brand">Free</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xl font-display font-bold text-black">Total Amount</span>
                      <span className="text-2xl font-display font-bold text-brand">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div className="relative">
                      <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input 
                        type="text" 
                        required
                        placeholder="Card Details (Mock Payment)"
                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:outline-none transition-all font-medium text-sm"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-black hover:bg-brand text-white rounded-xl font-bold font-display shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                        <>Pay Now & Secure Resources <Send className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                  <p className="text-[10px] text-center text-text-muted font-bold uppercase tracking-widest">
                    Secure 256-bit SSL encrypted payment
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
