import { motion } from 'motion/react';
import { ShoppingCart, Search, Filter, ShoppingBag, Sparkles, Star } from 'lucide-react';

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

export default function Store() {
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
            {products.map((product, index) => (
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
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <button className="w-full py-5 bg-white text-black rounded-2xl font-bold font-display shadow-2xl flex items-center justify-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand hover:text-white">
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
                  <div className="flex items-center gap-1 mb-3 text-brand">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-[0.2em] mb-6">{product.author}</p>
                  
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-xs font-bold text-brand uppercase tracking-widest block mb-1">Price</span>
                      <span className="text-2xl font-display font-bold text-black">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
