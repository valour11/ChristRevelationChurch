import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                BANTAR <span className="font-light">Ministry</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering lives through faith, learning, and community. Join us on this spiritual journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/store" className="hover:text-blue-500 transition-colors">Store</Link></li>
              <li><Link to="/school" className="hover:text-blue-500 transition-colors">Leadership School</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><Link to="/prayer-request" className="hover:text-blue-500 transition-colors">Prayer Requests</Link></li>
              <li><Link to="/partnership" className="hover:text-blue-500 transition-colors">Become a Partner</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/login" className="hover:text-blue-500 transition-colors">Sign In</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:contact@bantar.org" className="hover:text-blue-500 transition-colors">contact@bantar.org</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:+237673587463" className="hover:text-blue-500 transition-colors">+237 6 73 58 74 63</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Yaoundé, Cameroon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Apostle Godwin BANTAR Ministry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
