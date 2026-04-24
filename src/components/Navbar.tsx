import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Plans", href: "#plans" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "py-4 glass border-b border-white/5" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange to-gold flex items-center justify-center font-display font-bold text-black text-xl overflow-hidden">
            <img src="/SA.png" alt="SA" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = 'SA'; }} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Samsar<br/>Automations</span>
            <span className="inline-block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-orange">Samsar<br/>Automations</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="border border-white/20 rounded-full px-5 py-2 text-[10px] uppercase tracking-[2px] font-bold hover:bg-white hover:text-black cursor-none transition-all"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-3xl font-display font-medium text-white/80 hover:text-orange"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
