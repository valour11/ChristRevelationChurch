import { motion } from 'motion/react';
import { Users, Target, Heart, Shield, Star, Sparkles, MapPin, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import logo from "../assets/logo.jpeg";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      <SEO
        title="About Christ's Revelation International Church"
        description="Learn about Christ's Revelation International Church, an apostolic ministry founded by Apostle Godwin Bantar. Discover our mission, vision, and impact."
      />
      {/* Hero Section */}
      {/* <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-black text-white pt-20">
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
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Our History & Vision</span>
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
      </section> */}
      <section className="relative pt-32 pb-20 bg-black text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3 h-3 text-brand" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">About Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
          >
            The History of <span className="text-brand">Our Church</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/40 max-w-2xl mx-auto font-medium"
          >
            Discover the story of Christ's Revelation International Church, an apostolic ministry founded by Apostle Godwin Bantar. Learn about our mission, vision, and impact.
          </motion.p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-32 px-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 lg:sticky lg:top-32"
            >
              <div className="relative">
                <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl shadow-brand/10 border border-brand/5 w-[600px] h-[600px]">
                  <img
                    src={logo}
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
                  The History of <br />Our Church
                </h2>
                {/* Vision , Mission and Values */}
                <div className="space-y-6 text-text-muted text-lg leading-relaxed font-medium">
                  {/* Vision */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-black mb-4">Vision</h3>
                    <p>
                      To bring Christ's Kingdom to man through the revelation of His written Word, the demonstration of His power and getting them ready for His second coming
                    </p>
                  </div>
                  {/* Mission */}
                  <div>
                    <h3 className="text-2xl font-display font-bold text-black mb-4">Mission</h3>
                    <p>
                      Revealing Christ Jesus; Revealing His Kingdom.
                    </p>
                  </div>

                </div>
                <div className="space-y-6 text-text-muted text-lg leading-relaxed font-medium">
                  <h3 className="text-2xl font-display font-bold text-black mb-2 mt-4">About Us</h3>
                  <p>
                    Christ's Revelation International Church is a dynamic and Spirit-filled ministry founded on the 13th of August 2022 in a humble residence in Yaoundé by Apostle Godwin Bantar. What began as a small gathering of believers with a passion for God has rapidly grown into a global revival movement impacting lives through the power of the Gospel, fervent prayer, and the revelation of Jesus Christ.
                  </p>
                  <p>
                    Built upon a deep burden for lost souls and a passion for revival, the church is committed to spreading the message of salvation, holiness, deliverance, and spiritual transformation to the nations. Through consistent online ministry activities, powerful teachings, live services, evangelism, and discipleship programs, Christ's Revelation International Church continues to reach thousands across different parts of the world. The ministry's growth has been fueled by the unwavering zeal of its founder and pastors, whose dedication to soul-winning and raising disciples has inspired many to encounter God in a fresh and life-changing way.
                  </p>
                  <p>
                    As part of its vision to equip believers for ministry and spiritual leadership, the church established the Christ's Revelation School of Ministry two years ago. The school serves as a training ground for ministers, leaders, and believers who desire deeper revelation, spiritual maturity, and practical ministry empowerment. Through biblical teaching, mentorship, and spiritual impartation, the school is helping raise a generation of kingdom ambassadors prepared to impact their communities and nations for Christ.
                  </p>
                  <p>
                    Beyond the pulpit, Christ's Revelation International Church remains actively involved in community development and humanitarian outreach. The ministry demonstrates the love of Christ through support programs, outreach activities, youth empowerment initiatives, assistance to vulnerable families, and various acts of compassion aimed at transforming lives both spiritually and socially. Today, the church stands as a fast-growing international ministry devoted to revival, discipleship, community transformation, and the advancement of God's Kingdom across the world.
                  </p>
                </div>
              </div>

              <div className="p-10 bg-brand/5 rounded-[40px] border border-brand/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700" />
                <p className="text-black font-bold italic text-xl leading-relaxed relative z-10">
                  "To bring Christ's Kingdom to man through the revelation of His written Word, the demonstration of His power and getting them ready for His second coming."
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-display font-bold text-black mb-6">Ministry Impact</h3>
                <div className="space-y-6 text-text-muted text-lg leading-relaxed font-medium">
                  <p>
                    Through various programs like the Christ's Revelation School of Ministry and the Prayer Ministry, Apostle Bantar has mentored thousands of leaders, helping them discover their spiritual gifts and effectively serve their communities.
                  </p>
                  <p>
                    The ministry focuses on global revival, spiritual excellence, community development, and humanitarian outreach — transforming lives both spiritually and socially.
                  </p>
                  <p className="flex items-start gap-4 p-6 bg-brand/5 rounded-2xl">
                    <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
                    <span className="font-medium">
                      <strong className="text-black">Our Address:</strong> Etoa bridge, Yaoundé, Center Region, Cameroon
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-24 bg-[#fafafa] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Principles</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Christ's Love", desc: "Demonstrating the unconditional love of Christ in all we do.", icon: <Heart className="w-6 h-6" /> },
              { title: "Mutual Respect", desc: "Honoring one another as members of the body of Christ.", icon: <Users className="w-6 h-6" /> },
              { title: "Peace", desc: "Pursuing peace and reconciliation in our community and beyond.", icon: <Shield className="w-6 h-6" /> },
              { title: "Righteousness", desc: "Standing firm in the righteousness of Christ and His Word.", icon: <Star className="w-6 h-6" /> },
              { title: "Unity", desc: "Walking together in the unity of the Spirit and the bond of peace.", icon: <Users className="w-6 h-6" /> },
              { title: "Humility", desc: "Serving God and humanity with a humble and contrite heart.", icon: <Target className="w-6 h-6" /> },
              { title: "Generosity", desc: "Giving freely as we have received from the Lord.", icon: <Heart className="w-6 h-6" /> }
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
