import { motion } from 'motion/react';
import { CheckCircle, Clock, Users, Award, BookOpen, Star } from 'lucide-react';

export default function School() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-blue-600 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Leadership School
            </motion.h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Equipping the next generation of spiritual leaders with biblical wisdom, practical skills, and prophetic insight.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-md font-bold hover:bg-blue-50 transition-all">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Students", value: "5000+" },
              { label: "Courses", value: "50+" },
              { label: "Countries", value: "30+" },
              { label: "Graduates", value: "2000+" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Join Our Leadership School?</h2>
              <div className="space-y-6">
                {[
                  { title: "Biblical Foundation", desc: "Deep dive into the scriptures with expert theological guidance.", icon: <BookOpen className="w-6 h-6 text-blue-600" /> },
                  { title: "Practical Training", desc: "Learn real-world ministry skills from experienced leaders.", icon: <Award className="w-6 h-6 text-blue-600" /> },
                  { title: "Prophetic Mentorship", desc: "Receive personal guidance and spiritual activation.", icon: <Star className="w-6 h-6 text-blue-600" /> },
                  { title: "Global Community", desc: "Connect with fellow students and leaders worldwide.", icon: <Users className="w-6 h-6 text-blue-600" /> }
                ].map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{f.title}</h4>
                      <p className="text-slate-600">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Classroom" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 p-6 bg-white rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold text-slate-900">Live Session</span>
                </div>
                <p className="text-sm text-slate-500">Join 150+ others right now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-slate-600">A comprehensive path to spiritual leadership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: "Level 1", title: "Foundations of Faith", modules: ["Biblical Interpretation", "Prayer & Fasting", "Character Development"] },
              { level: "Level 2", title: "Ministry Essentials", modules: ["Homiletics", "Pastoral Care", "Church Administration"] },
              { level: "Level 3", title: "Advanced Leadership", modules: ["Strategic Planning", "Global Missions", "Prophetic Ministry"] }
            ].map((c, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2 block">{c.level}</span>
                <h3 className="text-xl font-bold mb-6">{c.title}</h3>
                <ul className="space-y-4">
                  {c.modules.map((m, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
