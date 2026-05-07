import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  BookOpen,
  MessageSquare,
  Users,
  ShoppingBag,
  Lightbulb,
  Mail,
  ArrowRight,
  Quote,
  Facebook,
  Youtube,
  Clock,
  Sun,
  Moon,
  ExternalLink
} from 'lucide-react';
import bantar from "../assets/bantar.jpg";
import heroimg from "../assets/hero-img.jpeg";
import prayerWatch from "../assets/daily-prayer-watch.jpeg";

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
  {
    title: "Store & Resources",
    description: "Access books, teachings, and resources to deepen your spiritual understanding and growth.",
    icon: <ShoppingBag className="w-6 h-6" />,
    link: "/store",
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Spiritual Insights",
    description: "Receive daily devotionals and teachings to inspire and strengthen your faith journey.",
    icon: <Lightbulb className="w-6 h-6" />,
    link: "/",
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for inquiries, partnerships, or general information.",
    icon: <Mail className="w-6 h-6" />,
    link: "/contact",
    color: "bg-indigo-50 text-indigo-600"
  }
];

const testimonials = [
  {
    name: "John Doe",
    role: "Community Member",
    content: "The leadership school has completely transformed my perspective on ministry and service."
  },
  {
    name: "Sarah Smith",
    role: "Partner",
    content: "Being part of this ministry has been a blessing. The spiritual insights are truly life-changing."
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
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 20 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-8 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand">Spiritual Excellence & Leadership</span>
            </motion.div> */}

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
                className="group px-6 py-4 md:px-6 md:py-3 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold transition-all shadow-2xl shadow-brand/40 flex items-center justify-center gap-3 active:scale-95 w-full sm:w-auto"
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
                {/* <div className="mt-auto">
                  <Link 
                    to={program.link} 
                    className="inline-flex items-center gap-2 text-brand font-bold py-2 border-b-2 border-transparent hover:border-brand transition-all group/link"
                  >
                    Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div> */}
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
                {/* <Link
                  to="/about"
                  className="px-10 py-5 bg-black text-white rounded-2xl font-bold hover:bg-brand transition-all shadow-xl shadow-black/10 active:scale-95"
                >
                  Full Biography
                </Link> */}
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
                className="p-6 md:p-12 bg-white rounded-[32px] md:rounded-[40px] relative card-shadow border border-brand/5"
              >
                <Quote className="absolute top-6 right-6 md:top-12 md:right-12 w-10 h-10 md:w-16 md:h-16 text-brand/5" />
                <div className="flex gap-1 mb-6 md:mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-brand/20" />
                  ))}
                </div>
                <p className="text-xl text-black leading-relaxed mb-10 font-medium italic">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-black">{t.name}</h4>
                    <p className="text-xs text-brand font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-brand">
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
                Become a <span className="text-black/20">Kingdom</span> Partner
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
