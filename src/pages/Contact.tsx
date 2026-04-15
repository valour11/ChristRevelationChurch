import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm"
          >
            <Mail className="w-3 h-3 text-brand" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Connect With Us</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
          >
            Get In <span className="text-brand">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/40 max-w-2xl mx-auto font-medium"
          >
            Whether you have a question, a testimony, or just want to say hello, we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
              {/* Contact Info - Left Column */}
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-display font-bold text-black mb-10 leading-tight">Global <br />Contact Centers</h2>
                  
                  <div className="space-y-10">
                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 text-brand group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors">Digital Correspondence</h4>
                        <p className="text-text-muted font-medium leading-relaxed">contact@bantar.org</p>
                        <p className="text-text-muted font-medium leading-relaxed">ministry@bantar.org</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 text-brand group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors">Direct Lines</h4>
                        <p className="text-text-muted font-medium leading-relaxed">+237 6 73 58 74 63</p>
                        <p className="text-text-muted font-medium leading-relaxed">+237 6 99 00 11 22</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 text-brand group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors">Regional Presence</h4>
                        <p className="text-text-muted font-medium leading-relaxed">Yaoundé, Cameroon</p>
                        <p className="text-text-muted font-medium leading-relaxed">P.O. Box 1234, Centre Region</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="pt-12 border-t border-brand/5"
                >
                  <h4 className="text-xs font-bold text-black uppercase tracking-[0.2em] mb-8">Prophetic Socials</h4>
                  <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                      <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-[#fafafa] flex items-center justify-center text-text-muted hover:bg-black hover:text-white transition-all duration-300 group shadow-sm">
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Contact Form - Right Column */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 bg-white p-12 md:p-16 rounded-[48px] card-shadow border border-brand/5"
              >
                <form className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Subject</label>
                    <input 
                      type="text" 
                      placeholder="How can we help your spiritual journey?"
                      className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-black uppercase tracking-[0.2em] ml-1">Message</label>
                    <textarea 
                      rows={6}
                      placeholder="Your message to the ministry..."
                      className="w-full px-6 py-5 rounded-2xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full py-6 bg-black hover:bg-brand text-white rounded-[24px] font-bold font-display transition-all shadow-2xl shadow-black/10 flex items-center justify-center gap-3 group active:scale-[0.98]">
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
