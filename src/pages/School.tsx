import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Clock, Users, Award, BookOpen, Star, Sparkles, GraduationCap, X, Send, Loader2, CheckCircle } from 'lucide-react';
import schoolImg from "../assets/bibleSchool.jpeg";

export default function School() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    level: 'Level 1',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Enrollment Submitted:', formData);
      setIsSuccess(true);
      // Don't reset immediately so user sees success
    } catch (error) {
      console.error('Enrollment failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsEnrollModalOpen(false);
    // Reset state after animation
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        level: 'Level 1',
        reason: ''
      });
    }, 300);
  };
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000" 
            alt="School Background" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm"
            >
              <GraduationCap className="w-3 h-3 text-brand" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Ministry Academy</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tight"
            >
              Leadership <span className="text-brand">School</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 mb-12 max-w-2xl leading-relaxed font-medium"
            >
              Equipping the next generation of spiritual leaders with biblical wisdom, practical skills, and prophetic insight for global impact.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsEnrollModalOpen(true)}
              className="px-10 py-5 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold transition-all shadow-2xl shadow-brand/40 active:scale-95 flex items-center gap-3"
            >
              Enroll Now <Sparkles className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative -mt-10 z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Students", value: "5000+" },
              { label: "Courses", value: "50+" },
              { label: "Countries", value: "30+" },
              { label: "Graduates", value: "2000+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl card-shadow border border-brand/5 text-center flex flex-col justify-center"
              >
                <div className="text-4xl font-display font-bold text-brand mb-2">{stat.value}</div>
                <div className="text-text-muted text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* About School of ministry */}
      <section className="py-8 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            {/* <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Pathway</span> */}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">About School of Ministry</h2>
            <p className="text-text-muted text-lg font-medium max-w-4xl mx-auto">May the peace of the Lord be with you, beloved in Christ Jesus. You are welcome to <strong className="text-brand">Christ's Revelation School of Ministry</strong>. We are the Discipleship department of Christ's Revelation Int'l Church, the objective of this school of ministry is to raise a generation of men and women who carry an unusual passion for God, people with undivided focus on God and for his purpose in the earth. God gave this mandate to his servant, the apostle over this commission and assured him in his own word "no one who passes through your hands shall be the same". It was back in 2013 when he was alone with the Lord in the wilderness seeking his face to get his mind about his generation, in an encounter, God handed him this vocation and many other things which may be personal, still about his generation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { level: "Level 1", title: "Foundations of Faith", modules: ["Biblical Interpretation", "Character Development", "Dynamics of Prayer"] },
              { level: "Level 2", title: "Ministry Essentials", modules: ["Homiletics & Preaching", "Pastoral Care", "Church Management"] },
              { level: "Level 3", title: "Advanced Leadership", modules: ["Strategic Planning", "Missions & Evangelism", "Prophetic Ministry"] }
            ].map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 bg-white rounded-[48px] card-shadow border border-brand/5 hover:border-brand/20 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-brand font-bold text-[10px] uppercase tracking-[0.3em]">{c.level}</span>
                  <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-10 text-black group-hover:text-brand transition-colors">{c.title}</h3>
                <ul className="space-y-6">
                  {c.modules.map((m, j) => (
                    <li key={j} className="flex items-center gap-4 text-text-muted font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Education</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-black leading-tight">Why Join Our <br />Leadership School?</h2>
              
              <div className="space-y-8">
                {[
                  { title: "Biblical Foundation", desc: "Deep dive into the scriptures with expert theological guidance.", icon: <BookOpen className="w-6 h-6" /> },
                  { title: "Practical Training", desc: "Learn real-world ministry skills from experienced leaders.", icon: <Award className="w-6 h-6" /> },
                  { title: "Prophetic Mentorship", desc: "Receive personal guidance and spiritual activation.", icon: <Star className="w-6 h-6" /> },
                  { title: "Global Community", desc: "Connect with fellow students and leaders worldwide.", icon: <Users className="w-6 h-6" /> }
                ].map((f, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 text-brand group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-black mb-2 group-hover:text-brand transition-colors">{f.title}</h4>
                      <p className="text-text-muted font-medium leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border border-brand/5">
                <img 
                  src={schoolImg} 
                  alt="Classroom" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 p-10 bg-white rounded-[32px] shadow-2xl z-20 hidden md:block border border-brand/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-brand rounded-full animate-pulse shadow-glow" />
                  <span className="font-bold text-black uppercase tracking-widest text-xs">Live Session</span>
                </div>
                <p className="text-sm font-medium text-text-muted leading-relaxed">Join 150+ other students right now in the portal.</p>
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-10 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Pathway</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">Our Curriculum</h2>
            <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto">A comprehensive and structured path to spiritual leadership excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { level: "Level 1", title: "Foundations of Faith", modules: ["Biblical Interpretation", "Character Development", "Dynamics of Prayer"] },
              { level: "Level 2", title: "Ministry Essentials", modules: ["Homiletics & Preaching", "Pastoral Care", "Church Management"] },
              { level: "Level 3", title: "Advanced Leadership", modules: ["Strategic Planning", "Missions & Evangelism", "Prophetic Ministry"] }
            ].map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 bg-white rounded-[48px] card-shadow border border-brand/5 hover:border-brand/20 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-brand font-bold text-[10px] uppercase tracking-[0.3em]">{c.level}</span>
                  <div className="w-8 h-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-10 text-black group-hover:text-brand transition-colors">{c.title}</h3>
                <ul className="space-y-6">
                  {c.modules.map((m, j) => (
                    <li key={j} className="flex items-center gap-4 text-text-muted font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Enrollment Modal */}
      <AnimatePresence>
        {isEnrollModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={closeModal}
                className="absolute top-8 right-8 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-black" />
              </button>

              {!isSuccess ? (
                <div className="p-12 md:p-16">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-brand" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Enrollment Form</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-black mb-10 leading-tight">Join the Leadership <span className="text-brand">School</span></h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Full Names</label>
                        <input 
                          type="text" 
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 rounded-xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black disabled:opacity-50"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 rounded-xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black disabled:opacity-50"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 rounded-xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black disabled:opacity-50"
                          placeholder="+237..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Enrollment Level</label>
                        <select 
                          name="level"
                          value={formData.level}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-6 py-4 rounded-xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black appearance-none cursor-pointer disabled:opacity-50"
                        >
                          <option>Level 1 - Foundations</option>
                          <option>Level 2 - Essentials</option>
                          <option>Level 3 - Advanced</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Reason for Joining</label>
                      <textarea 
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={4}
                        className="w-full px-6 py-4 rounded-xl bg-[#fafafa] border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 resize-none disabled:opacity-50"
                        placeholder="Tell us briefly about your motivation..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold transition-all shadow-xl shadow-brand/20 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                      ) : (
                        <>Submit Application <Send className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-16 md:p-24 text-center">
                  <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-brand" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-black mb-4">Application Received!</h3>
                  <p className="text-text-muted text-lg font-medium max-w-sm mx-auto leading-relaxed mb-10">
                    Thank you for applying to the Christ's Revelation School of Ministry. We will review your application and contact you soon.
                  </p>
                  <button 
                    onClick={closeModal}
                    className="px-12 py-4 bg-black text-white rounded-xl font-bold hover:bg-brand transition-all active:scale-95"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
