import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            alt="About Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Apostle Godwin BANTAR
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A life dedicated to spiritual transformation, leadership development, and empowering believers worldwide.
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 sticky top-32"
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Apostle Godwin BANTAR" 
                className="rounded-3xl shadow-2xl w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-8 text-slate-600 text-lg leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-slate-900">Spiritual Journey & Vision</h2>
              <p>
                Apostle Godwin BANTAR is a visionary leader, prophetic voice, and dedicated servant of God. With a ministry spanning over two decades, he has been at the forefront of spiritual awakening and leadership transformation in Africa and beyond.
              </p>
              <p>
                His journey began with a profound calling to equip the body of Christ with biblical truth and spiritual excellence. This calling led to the establishment of the Apostle Godwin BANTAR Ministry, which has grown into a global community of believers.
              </p>
              <div className="p-8 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
                <p className="text-blue-900 font-medium italic">
                  "Our mission is to empower lives through faith, spiritual growth, and transformative leadership education. We believe that every believer has a unique purpose and potential in Christ."
                </p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Ministry Impact</h3>
              <p>
                Through various programs like the Leadership School and Prayer Ministry, Apostle Bantar has mentored thousands of leaders, helping them discover their spiritual gifts and effectively serve their communities.
              </p>
              <p>
                The ministry's focus on community development and spiritual excellence has resulted in numerous testimonies of transformed lives, restored families, and empowered leaders who are making a significant impact in their respective spheres of influence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Biblical Truth", desc: "Unwavering commitment to the Word of God as our ultimate authority." },
              { title: "Spiritual Excellence", desc: "Striving for the highest standards in our spiritual walk and service." },
              { title: "Leadership", desc: "Developing and empowering the next generation of spiritual leaders." },
              { title: "Community", desc: "Fostering a vibrant and supportive community of believers." },
              { title: "Integrity", desc: "Living a life of honesty, transparency, and moral uprightness." },
              { title: "Service", desc: "Dedicated to serving God and His people with humility and love." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-xl font-bold mb-4 text-blue-600">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
