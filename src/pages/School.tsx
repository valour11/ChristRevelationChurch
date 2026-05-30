import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Users, Award, BookOpen, Star, Sparkles, GraduationCap, X, Send, Loader2, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
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
          formType: 'Enrollments',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          level: formData.level,
          reason: formData.reason
        })
      });
      setIsSuccess(true);
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
    level: 'Full Program (9 Months)',
        reason: ''
      });
    }, 300);
  };
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      <SEO 
        title="Christ's Revelation School of Ministry (CRISOM)" 
        description="Enroll in Christ's Revelation School of Ministry (CRISOM). Equip yourself with transformative leadership skills and spiritual depth."
      />
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
          <div className="max-w-8xl mt-10 px-4 sm:px-6 lg:px-24 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-5xl md:text-7xl font-display font-bold mb-6 md:mb-8 leading-tight tracking-tight"
            >
              Christ Revelation{' '}
              <br className="hidden sm:block" /><span className="text-brand">School Of Ministry</span><span className="block sm:inline">(CRISOM)</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-xl text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            >
             Raising Kingdom Leaders for Global Impact
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsEnrollModalOpen(true)}
              className="px-10 py-3 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold transition-all shadow-2xl shadow-brand/40 active:scale-95 flex items-center justify-center gap-3 mb-6 mx-auto cursor-pointer"
            >
              Enroll Now <Sparkles className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>
        {/* About School of Ministry */}
      <section className="py-14 px-4 sm:px-6 lg:px-24 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">About</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">Program <span className='text-brand'>Overview</span></h2>
            <p className="text-text-muted text-lg font-medium max-w-4xl mx-auto">
              The Christ’s Revelation School of Ministry (CRSM) is a comprehensive, Spirit-led training institute designed to equip believers with sound doctrine, practical ministry skills, and transformational leadership capacity for effective service in the Kingdom of God.
              This 9-month intensive program, divided into two trimesters of 4.5 months each, combines theological depth, spiritual formation, and hands-on ministry experience. It is structured to raise ministers, leaders, and kingdom influencers who will advance the Gospel locally and globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <GraduationCap className="w-6 h-6" />, title: "Program Structure", items: ["Duration: 9 Months", "Two Trimesters (4.5 Months Each)", "Diploma in Ministry & Kingdom Leadership"] },
              { icon: <BookOpen className="w-6 h-6" />, title: "Teaching Methodology", items: ["Classroom Teaching", "Practical Ministry Engagement", "Group Discussions & Case Studies", "Mentorship & Spiritual Oversight", "Field Evangelism & Outreach"] },
              { icon: <Award className="w-6 h-6" />, title: "Assessment & Outcomes", items: ["Written Assignments & Reports", "Sermon Presentations", "Final Ministry Project", "Graduates demonstrate biblical depth, leadership capacity, and spiritual maturity"] }
            ].map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 md:p-10 bg-white rounded-[32px] md:rounded-[48px] card-shadow border border-brand/5 hover:border-brand/20 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {c.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-6 text-black group-hover:text-brand transition-colors">{c.title}</h3>
                <ul className="space-y-4">
                  {c.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-text-muted font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand/40 mt-2 shrink-0" />
                      <span>{item}</span>
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
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Education</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-10 text-black leading-tight">Why Join <br />Our School Of Ministry?</h2>
              
              <div className="space-y-8">
                {[
                  { title: "Biblical Foundation", desc: "Deep dive into the scriptures with expert theological guidance.", icon: <BookOpen className="w-6 h-6" /> },
                  { title: "Practical Training", desc: "Learn real-world ministry skills from experienced leaders.", icon: <Award className="w-6 h-6" /> },
                  { title: "Apostolic Mentorship", desc: "Receive personal guidance and spiritual activation.", icon: <Star className="w-6 h-6" /> },
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
            <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto">A comprehensive 16-course curriculum across two trimesters, designed to raise kingdom leaders for global impact.</p>
          </div>

          {[
            {
              trimester: "Trimester One",
              subtitle: "Foundations of Ministry & Kingdom Life",
              courses: [
                { number: 1, title: "Introduction to Service", topics: ["The call to serve in God's Kingdom", "The heart and attitude of a servant", "Servanthood as a pathway to leadership"] },
                { number: 2, title: "Ministry Foundations", topics: ["Understanding divine calling", "Spiritual authority and submission", "Character formation in ministry"] },
                { number: 3, title: "The Cost of True Discipleship", topics: ["Biblical requirements of discipleship", "Sacrifice, discipline, and obedience", "Endurance in ministry"] },
                { number: 4, title: "The Ministry of Intercession", topics: ["Principles of effective prayer", "Standing in the gap", "Prophetic intercession and spiritual burden"] },
                { number: 5, title: "Territorial Takeover", topics: ["Spiritual warfare principles", "Understanding territories and altars", "Kingdom influence in regions and communities"] },
                { number: 6, title: "Evangelism and Discipleship", topics: ["Personal and corporate evangelism strategies", "Soul winning techniques", "Follow-up and disciple-making systems"] },
                { number: 7, title: "The Kingdom of God", topics: ["Definition of the Kingdom", "Kingdom Culture — values, lifestyle, and conduct", "Kingdom Legal System — spiritual laws and principles", "Kingdom Citizenship — rights, responsibilities, and identity", "Kingdom Mindset — renewing the mind for dominion", "Kingdom Responsibility — stewardship and accountability", "Kingdom Financial Management Plan — biblical principles of wealth"] },
                { number: 8, title: "Ministry Ethics", topics: ["Integrity in ministry", "Accountability and transparency", "Moral conduct and leadership responsibility"] }
              ]
            },
            {
              trimester: "Trimester Two",
              subtitle: "Practical Ministry, Leadership & Application",
              courses: [
                { number: 9, title: "Pastoral Ministry", topics: ["Shepherding principles", "Counseling basics", "Hospital visitation", "Conflict resolution", "Conducting funerals and weddings"] },
                { number: 10, title: "Christian Counseling", topics: ["Biblical counseling principles", "Family counseling", "Youth counseling", "Crisis counseling"] },
                { number: 11, title: "Christian Doctrine", topics: ["Doctrine of God — nature and attributes", "Humanity and Sin — the fall and its implications", "Salvation — redemption, grace, and justification"] },
                { number: 12, title: "The Message (Preaching & Communication)", topics: ["Sermon preparation", "Expository preaching", "Topical preaching", "Delivery and communication skills"] },
                { number: 13, title: "Ministry Structure", topics: ["Vision development and strategic planning", "Team building and leadership development", "Organizational leadership"] },
                { number: 14, title: "Apologetics", topics: ["Defending the Christian faith", "Identifying cults and false doctrines", "Addressing contemporary issues"] },
                { number: 15, title: "Church Administration", topics: ["Church finance and budgeting", "Governance structures", "Legal and ethical considerations"] },
                { number: 16, title: "Marketplace Ministry", topics: ["Integrating faith and work", "Business ethics", "Income generation for ministry sustainability", "Community transformation and development"] }
              ]
            }
          ].map((t, ti) => (
            <motion.div
              key={ti}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ti * 0.15 }}
              className="mb-16 last:mb-0"
            >
              <div className="text-center mb-12">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-3 block">{t.trimester}</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-black">{t.subtitle}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.courses.map((course, ci) => (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.03 }}
                    className="group bg-white rounded-2xl p-5 card-shadow border border-brand/5 hover:border-brand/20 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold text-brand bg-brand/5 px-2 py-1 rounded-md">Course {course.number}</span>
                    </div>
                    <h4 className="text-base font-display font-bold text-black mb-3 group-hover:text-brand transition-colors">{course.title}</h4>
                    <ul className="space-y-1.5">
                      {course.topics.map((topic, ji) => (
                        <li key={ji} className="flex items-start gap-2 text-xs text-text-muted font-medium">
                          <div className="w-1 h-1 rounded-full bg-brand/30 mt-1.5 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Program Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-14 bg-white rounded-[32px] md:rounded-[48px] card-shadow border border-brand/5 text-center max-w-4xl mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mx-auto mb-6">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-black mb-6">Program Outcomes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                "Demonstrate strong biblical and doctrinal understanding",
                "Operate effectively in ministry and leadership roles",
                "Preach and teach with clarity and power",
                "Engage in community and marketplace transformation",
                "Exhibit integrity, discipline, and spiritual maturity",
                "Advance the Kingdom of God with wisdom and authority"
              ].map((outcome, i) => (
                <div key={i} className="flex items-start gap-3 text-text-muted font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Enrollment Modal */}
      <AnimatePresence>
        {isEnrollModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
              className="relative w-full max-w-2xl bg-white rounded-[40px] overflow-hidden shadow-2xl my-8 sm:my-0"
            >
              <button 
                onClick={closeModal}
                className="absolute top-8 right-8 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-black" />
              </button>

              {!isSuccess ? (
                <div className="p-6 sm:p-8 md:p-16">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-brand" />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Enrollment Form</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-black mb-6 md:mb-10 leading-tight">Join Christ's Revelation <span className="text-brand">School of Ministry</span></h3>
                  
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
                            <option>Full Program (9 Months)</option>
                            <option>Trimester 1 — Foundations of Ministry</option>
                            <option>Trimester 2 — Practical Ministry</option>
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
                <div className="p-8 md:p-24 text-center">
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
