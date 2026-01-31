import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePageContext } from "vike-react/usePageContext";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { urlPathname } = usePageContext();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Startseite", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Über Uns", href: "/ueber-uns" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return urlPathname === "/";
    return urlPathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 overflow-visible",
        "transition-[background-color,box-shadow,border-color,height] duration-300",
        isScrolled
          ? "h-20 bg-white/85 backdrop-blur-md shadow-sm border-b border-lavender-light/50"
          : "h-24 bg-white/35 backdrop-blur-md border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "flex items-center justify-center shrink-0",
              // wichtig: keine w-15/h-15 (Tailwind Standard), lieber feste Werte:
              isScrolled ? "w-[56px] h-[56px]" : "w-[64px] h-[64px]"
            )}
          >
            <motion.img
              src="/logo.webp"
              alt="PrimaDent Logo"
              className="w-full h-full object-contain"
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>

          <span className="text-2xl font-heading font-bold text-gray-700 tracking-tight leading-none">
            Prima<span className="text-lavender">Dent</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-lavender relative",
                isActive(link.href) ? "text-lavender" : "text-gray-primary"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lavender rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+4952215074"
            className="text-gray-primary hover:text-lavender transition-colors font-medium text-sm flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>05221 50742</span>
          </a>
          <a href="/kontakt">
            <Button size="sm" variant="primary">
              Kontakt
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-lavender"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-lavender-light overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 border-l-2 pl-4 transition-all",
                    isActive(link.href)
                      ? "border-lavender text-lavender bg-lavender-pale/30"
                      : "border-transparent text-gray-primary"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full justify-center mt-4">
                  Kontaktieren Sie uns
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;