import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // استيراد

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["الرئيسية", "من نحن","منتجاتنا", "تواصل معنا"];

  return (
    <nav className="fixed top-0 w-full h-20 bg-[#C4006B] flex justify-between items-center px-8 z-50 shadow-md">

      {/* Logo */}
      <div>
        <img
          src="./logo.png"
          alt="logo"
          className="w-16 transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-white text-lg">
        {links.map((link) => (
          <li key={link} className="relative group">
            <a href={`#${link.toLowerCase()}`}>
              {link}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden text-white">
        {isOpen ? (
          <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="absolute top-20 left-0 w-full bg-[#C4006B] flex flex-col items-center gap-6 py-6 md:hidden"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
