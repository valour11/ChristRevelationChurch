import { motion } from 'motion/react';
import { ShoppingCart, Search, Filter } from 'lucide-react';

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
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Spiritual Resources Store</h1>
              <p className="text-slate-600">Explore books, courses, and teachings to deepen your spiritual journey.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                />
              </div>
              <button className="p-3 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors">
                <Filter className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="p-4 bg-white text-slate-900 rounded-md shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full text-slate-900 uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{product.title}</h3>
                <p className="text-sm text-slate-500 mb-2">{product.author}</p>
                <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
