import { motion } from "motion/react";
import { ShieldCheck, Cpu, Settings, IndianRupee } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ end, label, prefix = "", suffix = "" }: { end: number, label: string, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        setCount(Math.min(end, Math.floor((progress / duration) * end)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-8 glass rounded-2xl">
      <span className="text-5xl md:text-7xl font-display font-light text-gradient-orange mb-2">
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm font-mono tracking-widest uppercase text-white/50">{label}</span>
    </div>
  );
};

const features = [
  { icon: Cpu, title: "Smart Home Expertise", desc: "Specialized exclusively in residential automation systems." },
  { icon: ShieldCheck, title: "Reliable Systems", desc: "Military-grade encryption and 99.9% uptime architecture." },
  { icon: Settings, title: "Easy Control", desc: "Intuitive interfaces designed for everyone in the family." },
  { icon: IndianRupee, title: "Affordable Solutions", desc: "Premium smart home experiences at accessible price points." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative z-10 w-full bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6">Why Choose <span className="text-orange">Us</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">We don't just install gadgets; we design holistic living environments that respond to your needs seamlessly.</p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <Counter end={2} suffix="+" label="Homes Automated" />
          <Counter end={15} suffix="+" label="Happy Customers" />
          <Counter end={100} suffix="%" label="Satisfaction" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-orange transition-colors duration-500">
                  <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
