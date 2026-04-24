import { motion } from "motion/react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    subtitle: "Single Room Automation - Basic",
    price: "₹2,999",
    features: [
      "Light Control",
      "Fan Control",
      "Timer",
      "App Control",
      "1 Year Warranty"
    ],
    highlight: false,
  },
  {
    name: "Premium",
    subtitle: "Single Room Automation - Premium",
    price: "₹3,499",
    features: [
      "Light Control",
      "Fan Control",
      "Socket Control",
      "Timer",
      "Voice Control (Alexa/Google)",
      "App Control",
      "Premium Switch Plates"
    ],
    highlight: true,
  },
  {
    name: "Diamond",
    subtitle: "Full Home Automation",
    price: "Custom",
    features: [
      "1 BHK / 2 BHK / 3 BHK options",
      "All Premium Features",
      "Security Integration",
      "Climate Control",
      "Geyser & Heavy Appliance Control",
      "Custom Scene Programming",
      "Priority Support"
    ],
    highlight: false,
  }
];

export function Plans() {
  return (
    <section id="plans" className="py-32 relative z-10 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-4">Transparent <span className="text-orange">Pricing</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Future-proof your home with our straightforward, zero-hidden-fee automation packages.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col h-full ${
                plan.highlight 
                  ? 'glass border-gold orange-glow p-8' 
                  : 'glass p-8'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange text-black font-medium text-xs rounded-full flex items-center gap-1 shadow-lg shadow-orange/30">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-medium mb-1">{plan.name}</h3>
                <p className="text-xs text-white/50 uppercase tracking-widest min-h-[32px]">{plan.subtitle}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-display font-light">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-white/40 text-sm">/room</span>}
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-orange' : 'text-white/30'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.price === "Custom" ? "#contact" : "https://wa.me/YOUR_PHONE_NUMBER"}
                className={`w-full py-3 text-center transition-all cursor-none ${
                  plan.highlight
                    ? 'btn-orange flex justify-center text-xs'
                    : 'bg-white/10 rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-[#ff6b00] hover:text-black'
                }`}
              >
                {plan.price === "Custom" ? "Contact for Quote" : "Choose " + plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
