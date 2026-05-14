import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { MessageSquare, Send, ShieldCheck, Heart, Sparkles, Loader2, CheckCircle, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import heroImg3 from '../assets/hero-img3.png';
import prayer1 from '../assets/prayer-img/WhatsApp Image 2026-04-19 at 2.33.39 PM.jpeg';
import prayer2 from '../assets/prayer-img/WhatsApp Image 2026-04-19 at 2.33.41 PM.jpeg';
import prayer3 from '../assets/prayer-img/WhatsApp Image 2026-04-19 at 2.33.49 PM.jpeg';
import prayer4 from '../assets/prayer-img/WhatsApp Image 2026-04-19 at 2.33.55 PM.jpeg';
import prayer5 from '../assets/prayer-img/file_0000000059887243884af6450dd8a8a6.png';
import prayer6 from '../assets/prayer-img/prayer.jpeg';

const prayerImages = [prayer1, prayer2, prayer3, prayer4, prayer5, prayer6];

export default function PrayerRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % prayerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + prayerImages.length) % prayerImages.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: 'Healing & Health',
    request: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'PrayerRequests',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          category: formData.category,
          request: formData.request
        })
      });
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        category: 'Healing & Health',
        request: ''
      });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      <SEO 
        title="Prayer Requests" 
        description="Submit your prayer requests and join our community of intercessors. We believe in the power of prayer to transform lives."
      />
      {/* Hero / Header */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg3}
            alt="Contact Background"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm"
          >
            <Heart className="w-3 h-3 text-brand" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Prayer Requests</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              How Can We <span className="text-brand">Pray</span> For You?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/40 max-w-2xl mx-auto font-medium"
          >
            Our dedicated prayer team is ready to stand in faith with you. Your requests are handled with divine care and absolute confidentiality.
          </motion.p>
        </div>
      </section>


      {/* <section className="relative pt-32 pb-24 bg-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <img 
            src={heroImg3}
            alt="Prayer Background" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm shadow-glow"
          >
            <Heart className="w-3 h-3 text-brand" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Intercession</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              How Can We <span className="text-brand">Pray</span> For You?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Our dedicated prayer team is ready to stand in faith with you. Your requests are handled with divine care and absolute confidentiality.
          </motion.p>
        </div>
      </section> */}


      {/* image slider */}
      <section className="h-[40vh]">
         <div className="relative group overflow-hidden aspect-[4/3] bg-black/5 border border-brand/10 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={prayerImages[currentImageIndex]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "anticipate" }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {prayerImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          currentImageIndex === index ? 'bg-brand w-6' : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand hover:border-brand"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand hover:border-brand"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
      </section>

      <section className="py-24 relative -mt-16 z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            {/* Left side: Information */}
            <div className="lg:w-2/5">
              <motion.div
                initial={{ opacity: 1, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 md:space-y-12"
              >
               
                <div>
                  <h2 className="text-3xl font-display font-bold text-black mb-6 leading-tight">We Believe in the <br /><span className="text-brand underline decoration-brand/20 underline-offset-8 italic">Power of Prayer</span></h2>
                  <p className="text-text-muted text-lg font-medium leading-relaxed">
                    "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours." — Mark 11:24
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 text-brand group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors">Total Confidentiality</h4>
                      <p className="text-text-muted font-medium leading-relaxed">Your requests are sacred and only shared with our trusted intercessory team.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 text-brand group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors">Strategic Intercession</h4>
                      <p className="text-text-muted font-medium leading-relaxed">We don't just read requests; we wage spiritual warfare for your breakthrough.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-10 bg-black rounded-[32px] md:rounded-[40px] text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full" />
                  <div className="relative z-10">
                    <h5 className="text-xl font-display font-bold mb-4 flex items-center gap-3">
                      Need One on One Prayer? <Sparkles className="w-4 h-4 text-brand" />
                    </h5>
                    <p className="text-white/50 text-sm font-medium leading-relaxed mb-6">Need One on One Prayer? Call us directly.</p>
                    <span className="text-2xl font-display font-bold text-brand">+237 6 73 58 74 63</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-3/5 w-full bg-white p-6 sm:p-8 md:p-16 rounded-[32px] md:rounded-[48px] card-shadow border border-brand/5 relative"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="John"
                          className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="Doe"
                          className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 disabled:opacity-50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        placeholder="john@example.com"
                        className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Prayer Category</label>
                      <div className="relative">
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black appearance-none cursor-pointer disabled:opacity-50"
                        >
                          <option>Healing & Health</option>
                          <option>Financial Breakthrough</option>
                          <option>Family & Relationships</option>
                          <option>Spiritual Growth</option>
                          <option>Business & Career</option>
                          <option>Other</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Your Request</label>
                      <textarea 
                        name="request"
                        required
                        value={formData.request}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={6}
                        placeholder="Describe your situation and how we can pray for you..."
                        className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 resize-none disabled:opacity-50"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 md:py-6 bg-brand hover:bg-brand-dark text-white rounded-[24px] font-bold font-display transition-all shadow-2xl shadow-brand/30 flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                        <>Submit Prayer Request <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-8"
                  >
                    <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-brand" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-black">Request Received</h3>
                    <p className="text-text-muted text-lg font-medium max-w-sm mx-auto leading-relaxed">
                      Your prayer request has been submitted. Our team will stand in faith with you.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-brand font-bold hover:underline"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
