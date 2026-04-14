import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Handshake, Globe, Users, Heart, ShieldCheck, MessageSquare, PhoneCall, Camera, Send } from 'lucide-react';

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

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd2d71242b5e?auto=format&fit=crop&q=80&w=2000" 
            alt="Partnership" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-bold mb-8"
          >
            <Handshake className="w-4 h-4" /> Partner With Us
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Christ’s Revelation International Church</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            This department of the ministry is for those who believe in the grace of GOD at work in the life of his servant, Apostle Godwin Bantar. Join us as a personal covenant with the almighty GOD.
          </p>
          <div className="flex justify-center gap-6 text-blue-400 font-mono text-sm">
            <span>Matthew 10:41-42</span>
            <span>Philippians 4:10-20</span>
          </div>
        </div>
      </section>

      {/* Why Partner? / Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Covenant of Partnership</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">By virtue of this engagement, every faithful partner receives dedicated spiritual support and direct access to the ministry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "24/7 Access", 
                desc: "Right to call our lines 24/7 for prayers, counseling, and direct one-on-one prayers with the man of GOD.", 
                icon: <PhoneCall className="w-8 h-8 text-blue-600" /> 
              },
              { 
                title: "Pertinent Prayer", 
                desc: "Apostle Godwin Bantar and the Intercessors will always pray over your two most pertinent prayer points.", 
                icon: <MessageSquare className="w-8 h-8 text-blue-600" /> 
              },
              { 
                title: "Place of Prayer", 
                desc: "Your picture will be placed in our dedicated place of prayer for continuous intercession.", 
                icon: <Camera className="w-8 h-8 text-blue-600" /> 
              },
              { 
                title: "Global Impact", 
                desc: "Expand the impact of GOD’s work through the hand of His servant across the nations.", 
                icon: <Globe className="w-8 h-8 text-blue-600" /> 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Levels of Partnership</h2>
            <div className="inline-flex p-1 bg-slate-200 rounded-xl">
              <button 
                onClick={() => setRegion('Cameroon')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${region === 'Cameroon' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Cameroon
              </button>
              <button 
                onClick={() => setRegion('International')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${region === 'International' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                International
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(region === 'Cameroon' ? cameroonLevels : internationalLevels).map((tier, i) => (
              <motion.div 
                key={tier.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-3xl bg-white border ${i === 1 ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-100 shadow-sm'} relative overflow-hidden`}
              >
                {i === 1 && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-bl-xl">
                    RECOMMENDED
                  </div>
                )}
                <h4 className="text-xl font-bold mb-2 text-slate-900">{tier.name}</h4>
                <div className="mb-8">
                  <div className="text-2xl font-bold text-blue-600">{tier.range}</div>
                  <div className="text-slate-500 text-sm mt-1">Monthly Pledge</div>
                </div>
                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Registration Fee</span>
                    <span className="font-bold text-slate-900">{tier.registration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="p-8 md:p-12 border-b border-slate-800">
                <h2 className="text-3xl font-bold text-white mb-4">Partnership Form</h2>
                <p className="text-slate-400">Please fill out your personal information to formalize your partnership covenant.</p>
              </div>
              <form className="p-8 md:p-12 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Full Names</label>
                    <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Email Address</label>
                    <input type="email" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Country of Origin</label>
                    <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Your home country" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Country of Residence</label>
                    <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Where you live now" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Town or Region</label>
                    <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="City / State" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Contact Number(s)</label>
                    <input type="tel" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="+123..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Occupation</label>
                    <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Your profession" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Monthly Pledge ({region === 'Cameroon' ? 'fcfa' : 'USD $'})</label>
                    <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Amount" />
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-3 text-blue-400">
                    <ShieldCheck className="w-5 h-5" />
                    <h4 className="font-bold">Prayer Points Covenant</h4>
                  </div>
                  <p className="text-slate-400 text-sm italic">Write two very pertinent prayer points that you want GOD to do for you based on the covenant of this partnership engagement. Apostle Godwin Bantar and the Intercessors will always pray over them.</p>
                  <div className="space-y-4">
                    <textarea rows={3} className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none" placeholder="Prayer Point 1"></textarea>
                    <textarea rows={3} className="w-full bg-slate-800 border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none" placeholder="Prayer Point 2"></textarea>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-300">Upload Your Picture</label>
                  <div className="border-2 border-dashed border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500 transition-all cursor-pointer group">
                    <Camera className="w-10 h-10 text-slate-500 mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
                    <p className="text-slate-400 text-sm">Click or drag to upload your picture for the place of prayer</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>

                <button className="w-full py-5 bg-blue-600 text-white rounded-md font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20">
                  Submit Partnership Engagement <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
