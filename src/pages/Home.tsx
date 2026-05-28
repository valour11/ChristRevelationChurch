import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  BookOpen,
  MessageSquare,
  Users,
  Lightbulb,
  ArrowRight,
  Quote,
  Facebook,
  Youtube,
  Clock,
  Sun,
  Moon,
  ExternalLink,
  Calendar,
  Heart,
  Shield,
  Sparkles
} from 'lucide-react';
import bantar from "../assets/bantar.jpg";
import heroimg from "../assets/hero-img2.png";
import prayerWatch from "../assets/daily-prayer-watch.jpeg";
import careerBreakthrough from "../assets/testimony/career-breakthrough.jpeg";
import anointingOil from "../assets/testimony/annointing-oil.jpeg";
import deliveredFromAlcohol from "../assets/testimony/delivered-from-alchohol.png";
import intlJob from "../assets/testimony/intl-job.png";

const programs = [
  {
    title: "Christ's Revelation School of Ministry",
    description: "Comprehensive training program designed to develop spiritual leaders and equip them with biblical knowledge.",
    icon: <BookOpen className="w-6 h-6" />,
    link: "/school",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Prayer Ministry",
    description: "Submit prayer requests and receive intercession support from our dedicated prayer team.",
    icon: <MessageSquare className="w-6 h-6" />,
    link: "/prayer-request",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Community Fellowship",
    description: "Join our vibrant community of believers for worship, learning, and spiritual connection.",
    icon: <Users className="w-6 h-6" />,
    link: "/contact",
    color: "bg-green-50 text-green-600"
  },
];

const testimonials = [
  {
    name: "Tshepiso Clifford",
    location: "South Africa",
    category: "Career Breakthrough",
    content: "After years of joblessness, I reached out to the ministry. The man of God prayed for me and prophesied about a job that was coming. In a few days, a very big company called me and offered a job I never expected.",
    image: careerBreakthrough
  },
  {
    name: "Madame Pamela",
    location: "",
    category: "Anointing Oil",
    content: "I was suffering deadly conspiracies, financial poverty and my husband was addicted to drunkenness. The man of God prayed for me and blessed my oil. Things started turning around — my husband stopped drinking, I was delivered from conspiracies, and my finances are stabilizing.",
    image: anointingOil
  },
  {
    name: "Madame Wandiko Juliet",
    location: "",
    category: "Delivered from Alcohol",
    content: "I couldn't pass a day without drinking beer. But when I started listening to the messages of the man of God, the urge for alcohol was totally killed. I go for months now without even thinking about it.",
    image: deliveredFromAlcohol
  },
  {
    name: "Karen Lusaka",
    location: "Zambia",
    category: "International Job",
    content: "After the man of God prayed for me, I was delivered from stagnation, spiritual husband and joblessness. I received an open door to travel to and work in Dubai.",
    image: intlJob
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]">
      <SEO
        title="Christ's Revelation International Church"
        description="Experience transformative faith and leadership with Apostle Godwin Bantar. Empowering lives through intentional community and spiritual excellence."
      />
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden bg-black text-white pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroimg}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center items-center">
          <div className="max-w-4xl flex justify-center items-center flex-col">
            

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 md:mb-8 leading-[1.05] tracking-tight text-center"
            >
              Christ's Revelation{' '}
              <br className="hidden sm:block" />
              <span className="text-brand">International Church</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/60 mb-8 md:mb-12 max-w-2xl leading-relaxed font-medium text-center px-4"
            >
              Revelation through the Written Word, the demonstration of His power and getting men ready for His second coming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                to="/partnership"
                className="group px-6 py-4 md:px-6 md:py-3 bg-brand hover:bg-brand/80 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-[#000080]/40 flex items-center justify-center gap-3 active:scale-95 w-full sm:w-auto"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/partnership"
                className="px-8 py-4 md:px-10 md:py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold backdrop-blur-md transition-all flex items-center justify-center active:scale-95 w-full sm:w-auto"
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-[-45px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent" />
        </motion.div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 md:px-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Our Impact</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black leading-tight">
                Programs & Spiritual <br />Services for You
              </h2>
            </div>
            <p className="text-text-muted max-w-sm text-lg leading-relaxed">
              Discover various ways to grow spiritually and connect with our faith community through tailored resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 md:p-10 bg-white rounded-[32px] border border-brand/5 card-shadow hover:border-brand/20 transition-all flex flex-col h-full active:scale-[0.98]"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:rotate-3 shadow-lg ${program.color.replace('blue', 'brand').replace('purple', 'brand').replace('green', 'brand').replace('amber', 'brand').replace('rose', 'brand').replace('indigo', 'brand')}`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-black">{program.title}</h3>
                <p className="text-text-muted mb-10 leading-relaxed font-medium">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Prayer Watch */}
      <section className="py-20 md:px-32 px-6 bg-[#fafafa] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Daily Connection</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-black mb-6">Daily Prayer Watch</h2>
              <p className="text-text-muted text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                Join the man of God daily for powerful prayer sessions as we seek the face of the Lord together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-brand/10">
                  <img
                    src={prayerWatch}
                    alt="Daily Prayer Watch"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand/10 rounded-full blur-3xl -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                {/* Morning Session */}
                <div className="p-8 bg-white rounded-[32px] border border-brand/5 card-shadow group hover:border-brand/20 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                      <Sun className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold text-black">Morning Session</h4>
                      <p className="text-sm font-medium text-text-muted">Start your day with power</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-text-muted">
                    <Clock className="w-5 h-5 text-brand" />
                    <span className="font-bold text-lg text-black">11:00 AM — 12:30 PM</span>
                  </div>
                </div>

                {/* Night Session */}
                <div className="p-8 bg-white rounded-[32px] border border-brand/5 card-shadow group hover:border-brand/20 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                      <Moon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold text-black">Night Session</h4>
                      <p className="text-sm font-medium text-text-muted">End your day in prayer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-text-muted">
                    <Clock className="w-5 h-5 text-brand" />
                    <span className="font-bold text-lg text-black">11:30 PM — 12:30 AM</span>
                  </div>
                </div>

                {/* Live Stream Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61555677206385&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-5 bg-[#1877F2] text-white rounded-2xl font-bold hover:bg-[#166fe5] transition-all shadow-xl active:scale-95"
                  >
                    <Facebook className="w-5 h-5" />
                    Watch on Facebook
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                  <a
                    href="https://youtube.com/@apostlegodwinbantar?si=8aUrpJCLHljxW-tA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-5 bg-[#FF0000] text-white rounded-2xl font-bold hover:bg-[#CC0000] transition-all shadow-xl active:scale-95"
                  >
                    <Youtube className="w-5 h-5" />
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Apostle Section */}
      <section className="py-15 md:px-24 px-6 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              // className="lg:w-1/2 relative"
              className="lg:w-1/2 lg:sticky lg:top-32 relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-brand/20">
                <img
                  src={bantar}
                  alt="Apostle Godwin BANTAR"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand/5 rounded-full blur-3xl transition-all" />

              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-brand/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">4+</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Years Ministry</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Our Founder</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-black leading-tight">
                Apostle Godwin <span className="text-brand">BANTAR</span>
              </h2>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed font-medium">
                <p>
                  Apostle Godwin Bantar is a purpose-driven Cameroonian leader from Nkambe, in the Donga Mantung Division of the North West Region of Cameroon. He was born and raised by his parents, Pa Joseph Mbunwe and Ma Odilia Munkeng, who are both now resting in the Lord.
                </p>
                <p>
                  Apostle Godwin Bantar is a called and ordained servant of God, faithfully serving in the office of an apostle. He is widely known for his passion for revival and his dedication to advancing the Kingdom of God through ministry, leadership, and evangelism.
                </p>
                <p>
                  Driven by a strong burden for spiritual awakening, he founded Christ's Revelation International Church, a growing Christian church movement headquartered in Yaoundé, Cameroon. Through his ministry, many lives have been impacted spiritually, socially, and economically.
                </p>
                <p>
                  Beyond ministry, Apostle Godwin Bantar is also a passionate entrepreneur involved in multiple business and community development initiatives. He is especially recognized for his compassion toward the less privileged. Over the years, he and his congregation have consistently organized empowerment and humanitarian activities aimed at supporting vulnerable individuals both within the church and in the wider community.
                </p>
                <p>
                  He is happily married to Pastor Mrs. Ethel Bantar, and together they are blessed with three wonderful children: one son and two daughters.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-12 w-[1px] bg-brand/20" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Connect</span>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.facebook.com/profile.php?id=61555677206385&mibextid=ZbWKwL"><Facebook className="w-5 h-5 text-brand hover:scale-110 transition-transform cursor-pointer" /></a>
                    <a href="https://youtube.com/@apostlegodwinbantar?si=8aUrpJCLHljxW-tA"><Youtube className="w-5 h-5 text-brand hover:scale-110 transition-transform cursor-pointer" /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Testimonials */}
      <section className="py-20 md:px-32 px-6 bg-[#fafafa] overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Testimonies</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-black">Stories of Transformation</h2>
            <p className="text-text-muted text-lg font-medium">Hear from members of our community about their spiritual journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white rounded-[32px] overflow-hidden card-shadow border border-brand/5 group hover:border-brand/20 transition-all"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="px-4 py-1.5 bg-brand text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
                      {t.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <Quote className="w-8 h-8 text-brand/10 mb-4" />
                  <p className="text-base md:text-lg text-black leading-relaxed mb-8 font-medium italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-brand/20 flex-shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-black">{t.name}</h4>
                      {t.location && (
                        <p className="text-xs text-text-muted font-medium">{t.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Ministry */}
      <section className="py-20 md:px-32 px-6 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">Youth Ministry</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Empowering the <span className="text-brand">Next Generation</span>
            </h2>
            <p className="text-white/50 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Building spiritual leaders, nurturing God-given talents, and fostering a vibrant youth community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              { icon: <Calendar className="w-5 h-5" />, title: "Youth Thursday", desc: "Every first Thursday of the month." },
              { icon: <Sparkles className="w-5 h-5" />, title: "Youth Week", desc: "Every Pentecost week." },
              { icon: <Heart className="w-5 h-5" />, title: "Youth Evangelism", desc: "Every Sunday afternoon." },
              { icon: <Lightbulb className="w-5 h-5" />, title: "Talents & Empowerment Workshop", desc: "Quarterly." },
              { icon: <Users className="w-5 h-5" />, title: "Youth Retreat", desc: "Twice a year." },
              { icon: <Shield className="w-5 h-5" />, title: "Mental Health & Guidance", desc: "Fight against depression, peer pressure, and waywardness." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] hover:bg-white/10 hover:border-brand/30 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand/15 flex items-center justify-center text-brand mb-4 group-hover:scale-110 transition-transform group-hover:bg-brand/25">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-10 md:p-14 bg-gradient-to-br from-brand/15 to-brand/5 border border-brand/20 rounded-[32px] backdrop-blur-md"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-5">
              Need Guidance?
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed text-base md:text-lg">
              Are you suffering from any of the above? Do you doubt if you will make it as a youth who needs guidance? Register for the Youth Online Family and you will automatically be linked with a godly youth leader who will strengthen you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white rounded-2xl font-bold hover:bg-brand/70 transition-all active:scale-95 shadow-xl shadow-brand/30"
            >
              Register for Youth Online Family
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-10 md:py-15 relative overflow-hidden bg-brand">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.1),transparent)]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 md:mb-8 text-white leading-tight">
                Become a <span className="text-blue-700">Kingdom</span> Partner
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              Join our mission to spread God's word and impact lives globally. Your partnership makes a real difference in the lives of thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/partnership"
                className="px-8 md:px-12 py-4 md:py-5 bg-white text-brand rounded-2xl font-bold hover:bg-brand-light transition-all shadow-2xl shadow-black/10 active:scale-95 w-full sm:w-auto text-center"
              >
                Learn About Partnership
              </Link>
              <Link
                to="/contact"
                className="px-8 md:px-12 py-4 md:py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-dark/80 transition-all border border-white/20 active:scale-95 w-full sm:w-auto text-center"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
