import { motion } from "motion/react";
import { User } from "lucide-react";

const team = [
  {
    name: "Saravana Kumar Battaram",
    role: "CEO & Founder",
    desc: "Diploma in Electrical Engineering, focused on smart home innovation.",
  },
  {
    name: "Samhit Kumar Battaram",
    role: "Managing Director",
    desc: "Handles operations and accounts.",
  },
  {
    name: "Syed Abdul Khuddus",
    role: "Advertising Head",
    desc: "Handles editing, direction, and marketing.",
  },
  {
    name: "Ahil MD",
    role: "Software Department",
    desc: "Works on programming and smart control systems.",
  },
];

export function Team() {
  return (
    <section id="about" className="py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-orange text-sm font-bold tracking-widest uppercase mb-4 block">About Samsar</span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8">
              Pioneering <span className="text-gold italic">Intelligent</span> Habitats.
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We exclusively specialize in home automation. No industrial robotics, no general AI—just pure, laser-focused innovation for the modern living space. We believe that your home should adapt to you, anticipating your needs through seamless voice and app controls.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-transparent blur-3xl opacity-50" />
            <div className="glass p-8 rounded-3xl relative">
              <h3 className="text-2xl font-light mb-2">Saravana Kumar Battaram</h3>
              <p className="text-orange text-sm mb-6 uppercase tracking-wider font-mono">CEO & Founder</p>
              <p className="text-white/70 italic text-lg leading-relaxed">
                "With a foundation in Electrical Engineering, our mission has always been to bring accessible, reliable, and premium smart home solutions to every household. Smart living isn't a luxury of the future; it's the standard of today."
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-2">Our Team</h2>
          <div className="w-20 h-1 bg-orange" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange/10 to-transparent rounded-bl-full transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:border-orange transition-colors">
                <User className="w-5 h-5 text-white/50 group-hover:text-orange transition-colors" />
              </div>
              
              <h3 className="text-lg font-medium mb-1 relative z-10">{member.name}</h3>
              <p className="text-xs font-mono text-orange uppercase tracking-wider mb-4 relative z-10">{member.role}</p>
              <p className="text-sm text-white/50 font-light leading-relaxed mt-auto relative z-10">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
