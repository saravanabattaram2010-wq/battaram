import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone, Instagram, Youtube, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-orange text-sm font-bold tracking-widest uppercase mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-8">
              Let's build your <span className="text-white/50">smart home.</span>
            </h2>
            <p className="text-white/50 mb-12 max-w-md">
              Ready to upgrade your living space? Fill out the form or reach us directly. Our team is ready to design the perfect automation system for you.
            </p>

            <div className="space-y-6 mb-12">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-orange transition-colors">
                  <Phone className="w-5 h-5 text-white/70 group-hover:text-orange transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="font-medium">+91 00000 00000</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-orange transition-colors">
                  <MessageCircle className="w-5 h-5 text-white/70 group-hover:text-orange transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="font-medium">Direct Chat Support</p>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-orange hover:text-black hover:border-orange transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-orange hover:text-black hover:border-orange transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">First Name</label>
                  <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-orange transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/50 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-orange transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/50 uppercase tracking-widest">Email</label>
                <input type="email" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-orange transition-colors" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/50 uppercase tracking-widest">Interested Plan</label>
                <select className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-orange transition-colors text-white/50 [&>option]:bg-zinc-900 [&>option]:text-white cursor-none">
                  <option>Basic (₹2,999)</option>
                  <option>Premium (₹3,499)</option>
                  <option>Diamond / Custom</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/50 uppercase tracking-widest">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-orange transition-colors resize-none" placeholder="Tell us about your home..." />
              </div>
              <button type="submit" className="mt-4 btn-orange orange-glow flex items-center justify-center gap-2 text-xs hover:scale-[1.02]">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 w-full text-center text-white/40 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Samsar Automations. All rights reserved.</p>
        <div className="flex gap-4 font-mono text-xs uppercase tracking-wider">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
