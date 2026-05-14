import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle,
  Download,
  FileText,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import foundationCourse from "../assets/FOUNDATION CLASS COURSE (1).docx";
import heroImg from "../assets/hero-img3.png";

export default function NewConvert() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    testimony: '',
    prayerNeeds: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          formType: 'NewConverts',
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          testimony: formData.testimony,
          prayerNeeds: formData.prayerNeeds
        })
      });
      setIsSuccess(true);
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
        title="New Beginning — Christ's Revelation International Church"
        description="Welcome to the family of God. Share your testimony, connect with us, and download the Foundation Class Course to begin your spiritual journey."
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="New Beginning"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm"
            >
              <Heart className="w-3 h-3 text-brand" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">New Creation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight"
            >
              Welcome to the{' '}
              <span className="text-brand">Family</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"
              <br />
              <span className="text-white/40 text-sm">— 2 Corinthians 5:17</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Your New Journey</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6 leading-tight">
                  Share Your{' '}
                  <span className="text-brand">Testimony</span>
                </h2>
                <p className="text-text-muted text-lg font-medium leading-relaxed mb-10">
                  We would love to hear about your decision to follow Christ. Fill in the form and one of our team members will reach out to connect with you, pray with you, and guide you in your new walk with God.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: <Heart className="w-5 h-5" />, title: "You Are Loved", desc: "God's love for you is unconditional and everlasting." },
                    { icon: <BookOpen className="w-5 h-5" />, title: "Start Learning", desc: "Download the Foundation Class Course to grow in your faith." },
                    { icon: <MessageSquare className="w-5 h-5" />, title: "Get Connected", desc: "Join our community and be linked with a spiritual mentor." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 text-brand group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-black mb-1">{item.title}</h4>
                        <p className="text-text-muted text-sm font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-[#fafafa] rounded-[40px] border border-brand/5 card-shadow">
                    <div className="flex items-center gap-3 mb-8">
                      <Heart className="w-5 h-5 text-brand" />
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">New Convert Form</span>
                    </div>

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black disabled:opacity-50"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black disabled:opacity-50"
                              placeholder="email@example.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black disabled:opacity-50"
                              placeholder="+237..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Country / City</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                          <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black disabled:opacity-50"
                            placeholder="Yaoundé, Cameroon"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">How did you give your life to Christ?</label>
                        <div className="relative">
                          <BookOpen className="absolute left-4 top-4 w-4 h-4 text-text-muted/40" />
                          <textarea
                            name="testimony"
                            value={formData.testimony}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            rows={4}
                            className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 resize-none disabled:opacity-50"
                            placeholder="Share your story..."
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-black uppercase tracking-widest ml-1">Prayer Needs</label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-text-muted/40" />
                          <textarea
                            name="prayerNeeds"
                            value={formData.prayerNeeds}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            rows={3}
                            className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-brand/5 focus:bg-white focus:ring-2 focus:ring-brand focus:border-transparent focus:outline-none transition-all font-medium text-black placeholder:text-text-muted/40 resize-none disabled:opacity-50"
                            placeholder="How can we pray for you?"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-brand hover:bg-brand-dark text-white rounded-xl font-bold transition-all shadow-xl shadow-brand/20 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 mt-8"
                      >
                        {isSubmitting ? (
                          <>Processing... <Loader2 className="w-5 h-5 animate-spin" /></>
                        ) : (
                          <>Share My Testimony <Send className="w-5 h-5" /></>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 md:p-16 bg-[#fafafa] rounded-[40px] border border-brand/5 card-shadow text-center"
                  >
                    <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10 text-brand" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-black mb-4">Welcome to the Family!</h3>
                    <p className="text-text-muted text-lg font-medium max-w-md mx-auto leading-relaxed mb-4">
                      Thank you for sharing your testimony. A member of our team will reach out to you soon.
                    </p>
                    <p className="text-text-muted text-base mb-10">
                      In the meantime, download the Foundation Class Course below to begin your spiritual journey.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          location: '',
                          testimony: '',
                          prayerNeeds: ''
                        });
                      }}
                      className="px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-brand transition-all active:scale-95"
                    >
                      Fill Again
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Class Course Download */}
      <section className="py-20 md:py-32 px-6 bg-[#fafafa] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-[48px] p-12 md:p-16 border border-brand/10 text-center relative overflow-hidden card-shadow"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-brand rounded-[24px] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand/20">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">
                Foundation Class Course
              </h3>
              <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                Begin your spiritual journey with the Foundation Class Course. This comprehensive guide will establish you in the foundational truths of the faith and help you grow in your relationship with God.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href={foundationCourse}
                  download
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold transition-all shadow-2xl shadow-brand/20 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  Download Course
                </a>
                <a
                  href="https://youtube.com/@apostlegodwinbantar?si=8aUrpJCLHljxW-tA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-black hover:bg-brand-dark text-white rounded-2xl font-bold transition-all shadow-2xl active:scale-95"
                >
                  Watch Teachings
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 md:px-32 px-6 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Next Steps</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6 leading-tight">
              Grow in Your{' '}
              <span className="text-brand">Faith</span>
            </h2>
            <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto">
              Here are some ways to continue your spiritual journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Join the School of Ministry",
                desc: "Enroll in CRISOM for in-depth biblical training and spiritual development.",
                link: "/school",
                label: "Learn More"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Submit Prayer Requests",
                desc: "Share your prayer needs with our dedicated intercession team.",
                link: "/prayer-request",
                label: "Request Prayer"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Become a Partner",
                desc: "Partner with us to spread the gospel and impact lives globally.",
                link: "/partnership",
                label: "Partner With Us"
              }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-[#fafafa] rounded-[32px] border border-brand/5 card-shadow hover:border-brand/20 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-black mb-3">{item.title}</h3>
                <p className="text-text-muted font-medium leading-relaxed mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-brand font-bold text-sm group-hover:gap-3 transition-all">
                  {item.label} <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
