import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20">
                <span className="text-white font-display font-bold text-2xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-white leading-tight tracking-tight">
                  BANTAR
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-brand">
                  Ministries
                </span>
              </div>
            </Link>
            <p className="text-white/50 leading-relaxed text-sm">
              Empowering lives through faith, transformative leadership, and intentional community. Join us as we strive for spiritual excellence together.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-6">
              <li><Link to="/" className="hover:text-brand transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand transition-colors text-sm">About Apostle Godwin</Link></li>
              <li><Link to="/school" className="hover:text-brand transition-colors text-sm">Leadership School</Link></li>
              <li><Link to="/partnership" className="hover:text-brand transition-colors text-sm">Partnership</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-8 uppercase tracking-widest text-sm">Resources</h4>
            <ul className="space-y-6">
              <li><Link to="/store" className="hover:text-brand transition-colors text-sm">Store & Media</Link></li>
              <li><Link to="/prayer-request" className="hover:text-brand transition-colors text-sm">Prayer Command</Link></li>
              <li><Link to="/contact" className="hover:text-brand transition-colors text-sm">Get in Touch</Link></li>
              <li><Link to="/login" className="hover:text-brand transition-colors text-sm">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-8 uppercase tracking-widest text-sm">Contact Information</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-brand tracking-widest mb-1">Email</span>
                  <a href="mailto:contact@bantar.org" className="text-white hover:text-brand transition-colors text-sm">contact@bantar.org</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-brand tracking-widest mb-1">Phone</span>
                  <a href="tel:+237673587463" className="text-white hover:text-brand transition-colors text-sm">+237 6 73 58 74 63</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 italic font-medium">© {new Date().getFullYear()} Apostle Godwin BANTAR Ministry. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/20">
            <a href="#" className="hover:text-brand">Privacy Policy</a>
            <a href="#" className="hover:text-brand">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
