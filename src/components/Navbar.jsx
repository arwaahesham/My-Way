'use client';
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "من نحن", href: "#about" },
    { name: "منتجاتنا", href: "#products" }, 
    { name: "تواصل معنا", href: "#contact" },
  ];

  // 🔒 منع السكرول لما المينيو مفتوحة
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full h-20 bg-[#C4006B] flex justify-between items-center px-6 md:px-8 z-50 shadow-md">

      {/* Logo */}
      <a href="#home" aria-label="العودة إلى الصفحة الرئيسية">
        <Image
          src="/logo.png"
          alt="شعار ماي واي"
          width={64}
          height={64}
          className="w-14 md:w-16 transition-transform duration-300 hover:scale-110"
        />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white text-lg">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            <a href={link.href}>
              {link.name}
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden text-white z-[60]">
        {isOpen ? (
          <X size={30} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={30} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-[#C4006B] z-50 flex flex-col items-center justify-center gap-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl font-medium"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;