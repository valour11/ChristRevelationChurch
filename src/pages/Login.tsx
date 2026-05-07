import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Mail, Lock, ArrowRight, Github, Sparkles } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfdfd] py-20 px-6 relative overflow-hidden">
      <SEO 
        title="Portal Login" 
        description="Sign in to your Bantar Ministry portal to access exclusive spiritual resources and school of ministry materials."
      />
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white p-6 sm:p-8 md:p-16 rounded-[32px] md:rounded-[48px] card-shadow border border-brand/5 relative z-10"
      >
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center gap-3 mb-10 group">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
              <span className="text-white font-display font-bold text-2xl">B</span>
            </div>
            <span className="font-display font-bold text-2xl text-black tracking-tight">
              BANTAR <span className="text-brand">Ministry</span>
            </span>
          </Link>
          <h1 className="text-4xl font-display font-bold text-black mb-4">Welcome Back</h1>
          <p className="text-text-muted font-medium">Sign in to access your spiritual resources and academy portal.</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-brand transition-colors" />
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40"
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between ml-1">
              <label className="text-xs font-bold text-black uppercase tracking-[0.2em]">Password</label>
              <a href="#" className="text-[10px] font-bold text-brand uppercase tracking-widest hover:underline">Forgot Password?</a>
            </div>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted group-focus-within:text-brand transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40"
              />
            </div>
          </div>
          
          <button className="w-full py-5 bg-black hover:bg-brand text-white rounded-2xl font-bold font-display transition-all shadow-2xl shadow-black/10 flex items-center justify-center gap-3 group active:scale-[0.98]">
            Sign In <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-12 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-brand/5"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-[0.3em]">
            <span className="bg-white px-6 text-text-muted/40">Or continue with</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6">
          <button className="flex items-center justify-center gap-3 py-4 border border-brand/10 rounded-2xl hover:bg-brand/5 transition-all font-bold text-sm text-black">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            Google
          </button>
          <button className="flex items-center justify-center gap-3 py-4 border border-brand/10 rounded-2xl hover:bg-brand/5 transition-all font-bold text-sm text-black">
            <Github className="w-4 h-4" />
            GitHub
          </button>
        </div>

        <p className="mt-12 text-center text-sm font-medium text-text-muted">
          Don't have an account? <a href="#" className="font-bold text-brand hover:underline inline-flex items-center gap-1">Create Account <Sparkles className="w-3 h-3" /></a>
        </p>
      </motion.div>
    </div>
  );
}
