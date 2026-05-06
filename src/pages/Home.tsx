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
  Youtube
} from 'lucide-react';
import bantar from "..//assets/bantar.jpg";

const programs = [
  {
    title: "Leadership School",
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
        title="Apostle Godwin Bantar Ministries" 
        description="Experience transformative faith and leadership with Apostle Godwin Bantar. Empowering lives through intentional community and spiritual excellence."
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            referrerPolicy="no-referrer"
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
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[1.05] tracking-tight text-center"
            >
              Apostle Godwin <br />
              <span className="text-brand">BANTAR</span> Ministry
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl leading-relaxed font-medium text-center"
            >
              Empowering lives through faith, spiritual growth, and transformative leadership education. Join thousands of believers on their journey to spiritual excellence.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                to="/partnership" 
                className="group px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-2xl font-bold transition-all shadow-2xl shadow-brand/40 flex items-center justify-center gap-3 active:scale-95"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/partnership" 
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold backdrop-blur-md transition-all flex items-center justify-center active:scale-95"
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
                className="group p-10 bg-white rounded-[32px] border border-brand/5 card-shadow hover:border-brand/20 transition-all flex flex-col h-full active:scale-[0.98]"
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

      {/* Apostle Section */}
      <section className="py-15 md:px-32 px-6 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
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
                    <div className="text-2xl font-bold text-black">15+</div>
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
                  With years of dedicated service to God and His people, Apostle Godwin BANTAR has established a ministry focused on spiritual transformation and community development. His vision is to empower believers to reach their full potential in Christ.
                </p>
                <p>
                  Through prophetic ministry, teaching, and pastoral care, the ministry has touched thousands of lives, creating a thriving community committed to biblical truth and spiritual excellence.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <Link 
                  to="/about" 
                  className="px-10 py-5 bg-black text-white rounded-2xl font-bold hover:bg-brand transition-all shadow-xl shadow-black/10 active:scale-95"
                >
                  Full Biography
                </Link>
                <div className="h-12 w-[1px] bg-brand/20" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Connect</span>
                  <div className="flex gap-4 mt-2">
                    <Facebook className="w-5 h-5 text-brand hover:scale-110 transition-transform cursor-pointer" />
                    <Youtube className="w-5 h-5 text-brand hover:scale-110 transition-transform cursor-pointer" />
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
                className="p-12 bg-white rounded-[40px] relative card-shadow border border-brand/5"
              >
                <Quote className="absolute top-12 right-12 w-16 h-16 text-brand/5" />
                <div className="flex gap-1 mb-8">
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
      <section className="py-32 relative overflow-hidden bg-brand">
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-white leading-tight">
              Become a <span className="text-black/20">Kingdom</span> Partner
            </h2>
            <p className="text-xl text-white/80 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Join our mission to spread God's word and impact lives globally. Your partnership makes a real difference in the lives of thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/partnership" 
                className="px-12 py-5 bg-white text-brand rounded-2xl font-bold hover:bg-brand-light transition-all shadow-2xl shadow-black/10 active:scale-95"
              >
                Learn About Partnership
              </Link>
              <Link 
                to="/contact" 
                className="px-12 py-5 bg-brand-dark text-white rounded-2xl font-bold hover:bg-brand-dark/80 transition-all border border-white/20 active:scale-95"
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
