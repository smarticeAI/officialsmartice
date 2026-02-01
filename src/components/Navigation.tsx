/* Navigation component for SmartICE website */
/* v1.1.0 - Updated with official logo */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";

const navLinks = [
  { href: "/", label: "首页" },
  {
    href: "/products",
    label: "产品中心",
    hasDropdown: true,
  },
  { href: "/solutions", label: "解决方案" },
  { href: "/cases", label: "客户案例" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-strong py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden">
              <Image
                src="/smartice_logo.jpeg"
                alt="SmartICE Logo"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#F9FAFB] tracking-tight">
                SmartICE
              </span>
              <span className="text-[10px] text-[#9CA3AF] tracking-wider uppercase">
                AI餐饮解决方案
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setIsProductsOpen(true)
                }
                onMouseLeave={() =>
                  link.hasDropdown && setIsProductsOpen(false)
                }
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    "text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5",
                    "flex items-center gap-1"
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isProductsOpen && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Products Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 glass-strong rounded-xl p-2 shadow-2xl"
                      >
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/products#${category.id}`}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <span className="text-2xl">{category.icon}</span>
                            <div>
                              <div className="text-sm font-medium text-[#F9FAFB] group-hover:text-[#3B82F6] transition-colors">
                                {category.name}
                              </div>
                              <div className="text-xs text-[#6B7280]">
                                {category.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              预约演示
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#F9FAFB]" />
            ) : (
              <Menu className="w-6 h-6 text-[#F9FAFB]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="glass rounded-xl p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-white/5 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-[rgba(75,85,99,0.4)]">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center block"
                  >
                    预约演示
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
