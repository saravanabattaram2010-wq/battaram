import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff6b00]">
              Smart Living Starts Here
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.7 }}
            className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9]"
          >
            Automate <br />
            <span className="text-gradient-orange italic">Your Home.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="text-lg md:text-xl text-white/60 max-w-md font-sans font-light leading-relaxed"
          >
            Experience the future of living with seamless, intelligent control over your lights, fans, sockets, and more. Apple-level precision for your smart home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.1 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#plans"
              className="btn-orange orange-glow flex items-center gap-2"
            >
              Explore Plans <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 rounded-full text-xs uppercase tracking-[2px] hover:bg-white/5 transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="pt-8 border-t border-white/10 flex items-center gap-6 w-full"
          >
            <div>
              <p className="text-3xl font-display font-light">2+</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Homes Automated</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-display font-light text-orange flex items-center gap-1"><Zap className="w-6 h-6 fill-orange text-orange"/> Fast</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Growing Rapidly</p>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.8 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative glass p-4">
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] m-4 pointer-events-none z-20" />
            
            {/* Interactive Smart Home Graphic */}
            <div className="w-full h-full bg-gradient-to-br from-black to-zinc-900 rounded-[1.5rem] relative overflow-hidden flex flex-col p-8">
              
              <div className="flex justify-between items-center mb-12">
                <div className="text-sm font-mono text-white/40">LIVING ROOM</div>
                <div className="w-12 h-6 rounded-full bg-orange/20 border border-orange/30 p-1 flex items-center shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                  <motion.div 
                    className="w-4 h-4 bg-orange rounded-full"
                    animate={{ x: [0, 18, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  { name: "Main Lights", status: "ON", value: "85%", active: true },
                  { name: "AC Unit", status: "ON", value: "24°C", active: true },
                  { name: "Ceiling Fan", status: "OFF", value: "0%", active: false },
                  { name: "Sockets", status: "ON", value: "Active", active: true }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className={`rounded-xl p-4 flex flex-col justify-between ${item.active ? 'bg-white/10 border border-white/20' : 'bg-white/5 border border-white/5'}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-orange shadow-[0_0_8px_#ff6b00]' : 'bg-white/20'}`} />
                      <span className="text-xs font-mono text-white/60">{item.status}</span>
                    </div>
                    <div>
                      <p className={`text-2xl font-light ${item.active ? 'text-white' : 'text-white/40'}`}>{item.value}</p>
                      <p className="text-xs text-white/50 uppercase mt-1">{item.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Voice wave animation */}
              <div className="mt-8 h-12 flex items-center justify-center gap-1 opacity-50">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-white rounded-full"
                    animate={{ 
                      height: ["10%", "100%", "10%"] 
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.05
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
