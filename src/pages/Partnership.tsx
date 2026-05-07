import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { Handshake, Globe, Users, Heart, ShieldCheck, MessageSquare, PhoneCall, Camera, Send, Sparkles, CheckCircle2, Loader2, CheckCircle } from 'lucide-react';

const cameroonLevels = [
  { name: "SILVER", range: "5,000 to 20,000 fcfa", registration: "5,000 fcfa" },
  { name: "GOLD", range: "25,000 to 50,000 fcfa", registration: "5,000 fcfa" },
  { name: "DIAMOND", range: "60,000 to 100,000 fcfa", registration: "5,000 fcfa" }
];

const internationalLevels = [
  { name: "SILVER", range: "$50 to $200", registration: "$25" },
  { name: "GOLD", range: "$250 to $500", registration: "$25" },
  { name: "DIAMOND", range: "$550 to $1,000", registration: "$25" }
];

export default function Partnership() {
  const [region, setRegion] = useState<'Cameroon' | 'International'>('International');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryOfOrigin: '',
    countryOfResidence: '',
    townOrRegion: '',
    contactNumber: '',
    occupation: '',
    monthlyPledge: '',
    prayerPoint1: '',
    prayerPoint2: '',
    picture: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, picture: e.target.files![0] }));
    }
  };

  const handleLevelSelect = (range: string) => {
    const amount = range.split(' to ')[0] || range;
    setFormData(prev => ({ ...prev, monthlyPledge: amount }));
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form Submitted:', formData);
      setIsSuccess(true);
      // Reset form after success
      setFormData({
        fullName: '',
        email: '',
        countryOfOrigin: '',
        countryOfResidence: '',
        townOrRegion: '',
        contactNumber: '',
        occupation: '',
        monthlyPledge: '',
        prayerPoint1: '',
        prayerPoint2: '',
        picture: null
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
        title="Kingdom Partnership" 
        description="Partner with Apostle Godwin Bantar Ministries. Support our mission to spread God's word and impact lives globally through your generosity."
      />
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black text-white pt-30">
        <div className="absolute inset-0 z-0 text-white">
          {/* <img 
            src="https://images.unsplash.com/photo-1559027615-cd2d71242b5e?auto=format&fit=crop&q=80&w=2000" 
            alt="Partnership" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            referrerPolicy="no-referrer"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] tracking-[0.3em] font-bold mb-8 backdrop-blur-sm"
            >
              <Handshake className="w-3 h-3" /> Partner With Us
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight tracking-tight"
            >
              Christ’s Revelation <br />International Church
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
            >
              This department of the ministry is for those who believe in the grace of GOD at work in the life of his servant, Apostle Godwin Bantar. Join us as a personal covenant with the almighty GOD.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-8 text-brand font-bold text-xs uppercase tracking-widest mb-6"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Matthew 10:41-42</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Philippians 4:10-20</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner? / Benefits */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Benefits</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-black">The Covenant of Partnership</h2>
            <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto">By virtue of this engagement, every faithful partner receives dedicated spiritual support and direct access to the ministry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "24/7 Access", 
                desc: "Right to call our lines 24/7 for prayers, counseling, and direct one-on-one prayers with the man of GOD.", 
                icon: <PhoneCall className="w-8 h-8" /> 
              },
              { 
                title: "Pertinent Prayer", 
                desc: "Apostle Godwin Bantar and the Intercessors will always pray over your two most pertinent prayer points.", 
                icon: <MessageSquare className="w-8 h-8" /> 
              },
              { 
                title: "Place of Prayer", 
                desc: "Your picture will be placed in our dedicated place of prayer for continuous intercession.", 
                icon: <Camera className="w-8 h-8" /> 
              },
              { 
                title: "Global Impact", 
                desc: "Expand the impact of GOD’s work through the hand of His servant across the nations.", 
                icon: <Globe className="w-8 h-8" /> 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-[#fafafa] rounded-[40px] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-brand/10 active:scale-[0.98]"
              >
                <div className="w-16 h-16 rounded-[24px] bg-brand text-white flex items-center justify-center mb-8 shadow-lg shadow-brand/20 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-display font-bold mb-4 text-black">{item.title}</h4>
                <p className="text-text-muted leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-12 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Tiers</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-black">Levels of Partnership</h2>
            
            <div className="inline-flex p-1.5 bg-brand/10 rounded-2xl backdrop-blur-sm">
              <button 
                onClick={() => setRegion('Cameroon')}
                className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${region === 'Cameroon' ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'text-brand hover:text-brand-dark'}`}
              >
                Cameroon
              </button>
              <button 
                onClick={() => setRegion('International')}
                className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${region === 'International' ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'text-brand hover:text-brand-dark'}`}
              >
                International
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {(region === 'Cameroon' ? cameroonLevels : internationalLevels).map((tier, i) => (
              <motion.div 
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group p-12 rounded-[48px] bg-white border ${i === 1 ? 'border-brand shadow-2xl scale-105 z-10' : 'border-brand/5 shadow-xl'} relative overflow-hidden active:scale-[0.98] transition-all`}
              >
                {i === 1 && (
                  <div className="absolute top-0 right-0 px-6 py-2 bg-brand text-white text-[10px] font-bold tracking-[0.2em] rounded-bl-3xl uppercase">
                    Recommended
                  </div>
                )}
                
                <h4 className="text-xs font-bold tracking-[0.3em] text-brand/60 mb-8 uppercase">{tier.name}</h4>
                
                <div className="mb-10">
                  <div className="text-3xl md:text-4xl font-display font-bold text-black mb-2">{tier.range}</div>
                  <div className="text-text-muted text-sm font-bold uppercase tracking-widest opacity-60">Monthly Pledge</div>
                </div>

                <div className="pt-8 border-t border-brand/5 mb-10">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted font-medium">Registration Fee</span>
                    <span className="font-bold text-black text-lg">{tier.registration}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleLevelSelect(tier.range)}
                  className={`w-full py-5 rounded-2xl font-bold transition-all active:scale-95 ${i === 1 ? 'bg-brand text-white shadow-xl shadow-brand/20 hover:bg-brand-dark' : 'bg-black text-white hover:bg-brand'}`}
                >
                  Select Level
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-black rounded-[48px] overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="p-12 md:p-16 border-b border-white/5 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-brand" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Registration</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Partnership Form</h2>
                <p className="text-white/40 text-lg font-medium max-w-2xl">Please fill out your personal information to formalize your partnership covenant.</p>
              </div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    className="p-12 md:p-16 space-y-12 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Full Names</label>
                        <input 
                          type="text" 
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="Enter your full name" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="email@example.com" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Country of Origin</label>
                        <input 
                          type="text" 
                          name="countryOfOrigin"
                          value={formData.countryOfOrigin}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="Your home country" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Country of Residence</label>
                        <input 
                          type="text" 
                          name="countryOfResidence"
                          value={formData.countryOfResidence}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="Where you live now" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Town or Region</label>
                        <input 
                          type="text" 
                          name="townOrRegion"
                          value={formData.townOrRegion}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="City / State" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Contact Number(s)</label>
                        <input 
                          type="tel" 
                          name="contactNumber"
                          required
                          value={formData.contactNumber}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="+123..." 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Occupation</label>
                        <input 
                          type="text" 
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="Your profession" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Monthly Pledge ({region === 'Cameroon' ? 'fcfa' : 'USD $'})</label>
                        <input 
                          type="text" 
                          name="monthlyPledge"
                          required
                          value={formData.monthlyPledge}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full bg-white/5 border border-white/10 rounded-[20px] px-6 py-5 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium disabled:opacity-50" 
                          placeholder="Amount" 
                        />
                      </div>
                    </div>

                    <div className="space-y-8 pt-12 border-t border-white/5">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-6 h-6 text-brand" />
                        <h4 className="text-2xl font-display font-bold text-white">Prayer Points Covenant</h4>
                      </div>
                      <p className="text-white/40 text-lg leading-relaxed font-medium italic">Write two very pertinent prayer points that you want GOD to do for you based on the covenant of this partnership engagement. Apostle Godwin Bantar and the Intercessors will always pray over them.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <textarea 
                          name="prayerPoint1"
                          required
                          value={formData.prayerPoint1}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          rows={4} 
                          className="w-full bg-white/5 border border-white/10 rounded-[24px] px-6 py-6 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium resize-none shadow-inner disabled:opacity-50" 
                          placeholder="Prayer Point 1"
                        ></textarea>
                        <textarea 
                          name="prayerPoint2"
                          required
                          value={formData.prayerPoint2}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          rows={4} 
                          className="w-full bg-white/5 border border-white/10 rounded-[24px] px-6 py-6 text-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all placeholder:text-white/20 font-medium resize-none shadow-inner disabled:opacity-50" 
                          placeholder="Prayer Point 2"
                        ></textarea>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <label className="text-xs font-bold text-white/40 uppercase tracking-widest px-1">Picture for Intercession</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-[32px] p-12 text-center transition-all cursor-pointer group ${formData.picture ? 'border-brand bg-brand/5' : 'border-white/10 hover:border-brand hover:bg-brand/5'}`}
                      >
                        <Camera className={`w-12 h-12 mx-auto mb-4 transition-all group-hover:scale-110 ${formData.picture ? 'text-brand' : 'text-white/20 group-hover:text-brand'}`} />
                        <p className="text-white/40 font-medium">
                          {formData.picture ? `Selected: ${formData.picture.name}` : 'Click or drag to upload your picture for the place of prayer'}
                        </p>
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden" 
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-brand hover:bg-brand-dark text-white rounded-[24px] font-bold text-xl transition-all flex items-center justify-center gap-4 shadow-2xl shadow-brand/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>Processing... <Loader2 className="w-6 h-6 animate-spin" /></>
                      ) : (
                        <>Submit <Send className="w-6 h-6" /></>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 md:p-24 text-center space-y-8 relative z-10"
                  >
                    <div className="w-24 h-24 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-brand" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Covenant Formalized!</h3>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
                      Thank you for partnering with us. Your registration has been received, and our intercessors are already standing in gap for your prayer points.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all"
                    >
                      Register Another Partner
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
