import { motion, AnimatePresence } from "motion/react";
import { Lightbulb, Fan, Power, Mic, Smartphone, Clock } from "lucide-react";
import { useState } from "react";

const services = [
  { id: "light", icon: Lightbulb, title: "Light Control", desc: "Automate your lighting based on time, occupancy, or mood. Create scenes for movies, reading, or parties instantly." },
  { id: "fan", icon: Fan, title: "Fan Control", desc: "Regulate room temperature intelligently. Control fan speed via app or voice without leaving your bed." },
  { id: "socket", icon: Power, title: "Socket Control", desc: "Make any appliance smart. Schedule your geyser, track energy usage, and prevent phantom power drain." },
  { id: "voice", icon: Mic, title: "Voice Control", desc: "Seamless integration with Alexa and Google Assistant for hands-free control of your entire home." },
  { id: "app", icon: Smartphone, title: "Mobile App Control", desc: "Control your home from anywhere in the world. Monitor status and receive alerts on your smartphone." },
  { id: "timer", icon: Clock, title: "Timer Automation", desc: "Set it and forget it. Schedule appliances and lights to operate automatically based on your daily routine." },
];

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 relative z-10">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-orange/5 via-black to-black -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-orange text-sm font-bold tracking-widest uppercase mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
              Our <span className="text-white/50">Services</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm">
            We focus strictly on the residential ecosystem. Everything you need for a modern smart home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveService(isActive ? null : service.id)}
                className={`glass p-6 cursor-none overflow-hidden transition-all duration-500 ${isActive ? 'ring-1 ring-orange orange-glow' : 'hover:bg-white/5'}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors ${isActive ? 'bg-orange/20' : 'bg-orange/10'}`}>
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <div className="text-[10px] uppercase font-bold text-white/30">0{i + 1}</div>
                  </div>
                  
                  <h3 className="text-sm font-bold mb-1">{service.title}</h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 text-[10px] opacity-40 uppercase tracking-widest mt-2 border-t border-white/10">
                          {service.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
