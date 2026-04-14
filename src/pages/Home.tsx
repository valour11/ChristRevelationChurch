import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  MessageSquare, 
  Users, 
  ShoppingBag, 
  Lightbulb, 
  Mail,
  ArrowRight,
  Quote
} from 'lucide-react';

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
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Apostle Godwin BANTAR Ministry
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering lives through faith, spiritual growth, and transformative leadership education. Join thousands of believers on their journey to spiritual excellence.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/partnership" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-all transform hover:scale-105"
            >
              Explore Our Programs
            </Link>
            <Link 
              to="/partnership" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-md font-semibold backdrop-blur-sm transition-all transform hover:scale-105"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Programs & Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover various ways to grow spiritually and connect with our faith community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{program.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Link 
                  to={program.link} 
                  className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
                >
                  Explore {program.title.split(' ')[0]} <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apostle Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Apostle Godwin BANTAR" 
                  className="rounded-3xl shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 rounded-3xl -z-0 opacity-10" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Apostle Godwin BANTAR</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  With years of dedicated service to God and His people, Apostle Godwin BANTAR has established a ministry focused on spiritual transformation and community development. His vision is to empower believers to reach their full potential in Christ.
                </p>
                <p>
                  Through prophetic ministry, teaching, and pastoral care, the ministry has touched thousands of lives, creating a thriving community committed to biblical truth and spiritual excellence.
                </p>
              </div>
              <Link 
                to="/about" 
                className="mt-8 inline-block px-8 py-4 bg-slate-900 text-white rounded-md font-semibold hover:bg-slate-800 transition-all"
              >
                Learn Full Biography
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Testimonies of Faith</h2>
            <p className="text-slate-600">Hear from members of our community about their spiritual transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 bg-slate-50 rounded-3xl relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-200" />
                <p className="text-xl text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-slate-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Become a Partner</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our mission to spread God's word and impact lives globally. Your partnership makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/partnership" 
              className="px-10 py-4 bg-white text-blue-600 rounded-md font-bold hover:bg-blue-50 transition-all"
            >
              Learn About Partnership
            </Link>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-blue-700 text-white rounded-md font-bold hover:bg-blue-800 transition-all border border-blue-500"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
