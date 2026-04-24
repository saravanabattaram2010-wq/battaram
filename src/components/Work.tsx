import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Work() {
  return (
    <section id="work" className="py-32 relative z-10 w-full overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-7xl font-display font-medium tracking-tight mb-4">Our Work</h2>
            <p className="text-white/50 max-w-md">Real transformations. Witness how we turn ordinary spaces into intelligent environments.</p>
          </div>
          <button className="flex items-center gap-2 text-orange hover:text-gold transition-colors pb-2 border-b border-orange/30 hover:border-gold">
            View full gallery <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          {/* Main big image */}
          <motion.div 
            className="md:col-span-8 relative rounded-3xl overflow-hidden group bg-zinc-900 min-h-[300px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            {/* Placeholder for real image, using CSS gradient to simulate premium photo */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono mb-3 inline-block">BEFORE & AFTER</span>
              <h3 className="text-2xl font-medium">Modern Living Room</h3>
              <p className="text-white/60 text-sm mt-2">Full ambient light & climate integration.</p>
            </div>
          </motion.div>

          {/* Side stack */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div 
              className="flex-1 relative rounded-3xl overflow-hidden group bg-zinc-900 min-h-[200px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-lg font-medium">Smart Bedroom</h3>
              </div>
            </motion.div>

            <motion.div 
              className="flex-1 relative rounded-3xl overflow-hidden group bg-zinc-900 min-h-[200px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-lg font-medium">Automated Kitchen</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
