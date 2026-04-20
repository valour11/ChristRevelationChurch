import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/#programs' },
  { name: 'Store', path: '/store' },
  { name: 'School', path: '/school' },
  { name: 'Prayer Request', path: '/prayer-request' },
  { name: 'Partnership', path: '/partnership' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/70 backdrop-blur-lg border-b border-brand/10 py-3 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform overflow-hidden p-0.5">
            <img src={logo} alt="Bantar Ministries Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl leading-tight tracking-tight ${scrolled ? 'text-black' : 'text-white'}`}>
              BANTAR
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${scrolled ? 'text-brand' : 'text-brand-light'}`}>
              Ministries
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-brand/5 hover:text-brand ${
                scrolled ? 'text-text-muted' : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-brand/10">
            <Link
              to="/partnership"
              className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-brand/20 active:scale-95"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'bg-brand/5' : 'bg-white/10'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-brand' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-brand' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 p-6 bg-white rounded-3xl shadow-2xl border border-brand/10 z-50 origin-top"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center justify-between text-base font-semibold text-text-foreground hover:text-brand transition-colors p-4 rounded-2xl hover:bg-brand/5"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-brand/40" />
                </Link>
              ))}
              <Link
                to="/partnership"
                className="mt-4 w-full py-4 bg-brand text-white rounded-2xl text-center font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand/20"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
