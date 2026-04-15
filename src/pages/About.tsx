import { motion } from 'motion/react';
import { Users, Target, Heart, Shield, Star, Sparkles } from 'lucide-react';
import bantar from "../assets/bantar.png";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            alt="About Background" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm mx-auto lg:mx-0"
          >
            <Sparkles className="w-3 h-3 text-brand" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">The Legacy of Faith</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tight"
          >
            About Apostle <br className="hidden md:block" />
            Godwin <span className="text-brand">BANTAR</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl leading-relaxed font-medium"
          >
            A life dedicated to spiritual transformation, leadership development, and empowering believers worldwide to walk in their divine purpose.
          </motion.p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 lg:sticky lg:top-32"
            >
              <div className="relative">
                <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl shadow-brand/10 border border-brand/5">
                  <img 
                    src={bantar} 
                    alt="Apostle Godwin BANTAR" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-12"
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-black leading-tight mb-8">
                  Spiritual Journey <br />& Divine Vision
                </h2>
                <div className="space-y-6 text-text-muted text-lg leading-relaxed font-medium">
                  <p>
                    Apostle Godwin BANTAR is a visionary leader, prophetic voice, and dedicated servant of God. With a ministry spanning over two decades, he has been at the forefront of spiritual awakening and leadership transformation in Africa and beyond.
                  </p>
                  <p>
                    His journey began with a profound calling to equip the body of Christ with biblical truth and spiritual excellence. This calling led to the establishment of the Apostle Godwin BANTAR Ministry, which has grown into a global community of believers.
                  </p>
                </div>
              </div>

              <div className="p-10 bg-brand/5 rounded-[40px] border border-brand/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700" />
                <p className="text-black font-bold italic text-xl leading-relaxed relative z-10">
                  "Our mission is to empower lives through faith, spiritual growth, and transformative leadership education. We believe that every believer has a unique purpose and potential in Christ."
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-display font-bold text-black mb-6">Ministry Impact</h3>
                <div className="space-y-6 text-text-muted text-lg leading-relaxed font-medium">
                  <p>
                    Through various programs like the Leadership School and Prayer Ministry, Apostle Bantar has mentored thousands of leaders, helping them discover their spiritual gifts and effectively serve their communities.
                  </p>
                  <p>
                    The ministry's focus on community development and spiritual excellence has resulted in numerous testimonies of transformed lives, restored families, and empowered leaders who are making a significant impact in their respective spheres of influence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Principles</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Biblical Truth", desc: "Unwavering commitment to the Word of God as our ultimate authority.", icon: <Shield className="w-6 h-6" /> },
              { title: "Spiritual Excellence", desc: "Striving for the highest standards in our spiritual walk and service.", icon: <Star className="w-6 h-6" /> },
              { title: "Leadership", desc: "Developing and empowering the next generation of spiritual leaders.", icon: <Target className="w-6 h-6" /> },
              { title: "Community", desc: "Fostering a vibrant and supportive community of believers.", icon: <Users className="w-6 h-6" /> },
              { title: "Integrity", desc: "Living a life of honesty, transparency, and moral uprightness.", icon: <Heart className="w-6 h-6" /> },
              { title: "Service", desc: "Dedicated to serving God and His people with humility and love.", icon: <Users className="w-6 h-6" /> }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white rounded-[32px] card-shadow border border-brand/5 hover:border-brand/20 transition-all active:scale-[0.98]"
              >
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-display font-bold mb-4 text-black">{value.title}</h4>
                <p className="text-text-muted font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
