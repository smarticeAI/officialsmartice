/* CTA section for SmartICE homepage */
/* v1.0.0 - Call-to-action with gradient background */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1C]" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/15 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#2563EB]/10 text-[#3B82F6] mb-6">
            开始使用
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-6">
            准备好让 AI 赋能您的餐厅了吗？
          </h2>

          {/* Description */}
          <p className="text-lg text-[#9CA3AF] mb-10 max-w-2xl mx-auto">
            预约一次免费演示，了解 SmartICE 如何帮助您的餐厅提升运营效率、降低管理成本
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
            >
              预约演示
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:contact@smartice.ai"
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              联系我们
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#6B7280] text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#10B981]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              免费演示
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#10B981]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              定制化方案
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#10B981]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              7×24 技术支持
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
