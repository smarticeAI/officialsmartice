/* Footer component for SmartICE website */
/* v1.2.0 - Updated contact info: new email, dual phone numbers, multiple addresses */

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { categories } from "@/data/products";

const footerLinks = {
  products: categories.map((c) => ({
    label: c.name,
    href: `/products#${c.id}`,
  })),
  company: [
    { label: "关于我们", href: "/about" },
    { label: "客户案例", href: "/cases" },
    { label: "解决方案", href: "/solutions" },
    { label: "联系我们", href: "/contact" },
  ],
  legal: [
    { label: "隐私政策", href: "/privacy" },
    { label: "服务条款", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0F1C] border-t border-[rgba(75,85,99,0.4)]">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/smartice_logo.jpeg"
                  alt="SmartICE Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-[#F9FAFB]">SmartICE</span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              用 AI 技术赋能餐饮运营，让中小餐饮企业也能享受大型连锁的数字化管理能力。
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hengd2@outlook.com"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#3B82F6] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hengd2@outlook.com
              </a>
              <div className="flex items-start gap-3 text-[#9CA3AF] text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+8618576644936" className="block hover:text-[#3B82F6] transition-colors">
                    +86 18576644936
                  </a>
                  <a href="tel:+12179740277" className="block hover:text-[#3B82F6] transition-colors">
                    +1 2179740277
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#9CA3AF] text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>四川/广东/上海</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#F9FAFB] font-semibold mb-6">产品中心</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#F9FAFB] font-semibold mb-6">公司</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#3B82F6] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-[#F9FAFB] font-semibold mb-6">合作品牌</h3>
            <ul className="space-y-3">
              <li className="text-[#9CA3AF] text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                野百灵贵州酸汤
              </li>
              <li className="text-[#9CA3AF] text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                宁桂杏山野烤肉
              </li>
              <li className="text-[#9CA3AF] text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                邦兰铺泰国料理
              </li>
              <li className="text-[#6B7280] text-sm mt-4">
                共计 10+ 家门店
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[rgba(75,85,99,0.4)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-sm">
              © {new Date().getFullYear()} SmartICE. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#6B7280] hover:text-[#9CA3AF] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
