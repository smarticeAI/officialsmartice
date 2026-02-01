/* Products page for SmartICE website */
/* v1.0.0 - Complete product showcase with category sections */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  categories,
  products,
  type ProductCategory,
} from "@/data/products";
import { cn } from "@/lib/utils";

const categoryColors: Record<
  ProductCategory,
  { gradient: string; bg: string; text: string; border: string }
> = {
  operations: {
    gradient: "from-[#2563EB] to-[#1D4ED8]",
    bg: "bg-[#2563EB]/10",
    text: "text-[#3B82F6]",
    border: "border-[#2563EB]/30",
  },
  collection: {
    gradient: "from-[#7C3AED] to-[#6D28D9]",
    bg: "bg-[#7C3AED]/10",
    text: "text-[#8B5CF6]",
    border: "border-[#7C3AED]/30",
  },
  data: {
    gradient: "from-[#10B981] to-[#059669]",
    bg: "bg-[#10B981]/10",
    text: "text-[#10B981]",
    border: "border-[#10B981]/30",
  },
  marketing: {
    gradient: "from-[#F97316] to-[#EA580C]",
    bg: "bg-[#F97316]/10",
    text: "text-[#F97316]",
    border: "border-[#F97316]/30",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#2563EB]/10 text-[#3B82F6] mb-4">
              产品中心
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-6">
              11 个智能系统
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              覆盖餐饮运营全链路，从门店管理到数据分析，一站式 AI 解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((category, categoryIndex) => {
        const categoryProducts = products.filter(
          (p) => p.category === category.id
        );
        const colors = categoryColors[category.id];

        return (
          <section
            key={category.id}
            id={category.id}
            className="section-padding relative"
          >
            {/* Background alternation */}
            <div
              className={cn(
                "absolute inset-0",
                categoryIndex % 2 === 0
                  ? "bg-[#0A0F1C]"
                  : "bg-[#111827]"
              )}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-[#F9FAFB]">
                      {category.name}
                    </h2>
                    <p className="text-[#6B7280]">{category.nameEn}</p>
                  </div>
                </div>
                <p className="text-[#9CA3AF] text-lg max-w-2xl">
                  {category.description}
                </p>
              </motion.div>

              {/* Products grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={cn(
                        "card p-6 flex flex-col",
                        `hover:${colors.border}`
                      )}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center",
                            `bg-gradient-to-br ${colors.gradient}`
                          )}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#F9FAFB]">
                            {product.name}
                          </h3>
                          <p className="text-sm text-[#6B7280]">
                            {product.nameEn}
                          </p>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className={cn("text-sm font-medium mb-3", colors.text)}>
                        {product.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-[#9CA3AF] text-sm mb-4 flex-1">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check
                              className={cn("w-4 h-4 mt-0.5 flex-shrink-0", colors.text)}
                            />
                            <span className="text-[#9CA3AF]">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech highlights */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(75,85,99,0.4)]">
                        {product.techHighlights.map((tech, i) => (
                          <span
                            key={i}
                            className={cn(
                              "px-2 py-1 rounded-md text-xs",
                              colors.bg,
                              colors.text
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0F1C]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] mb-6">
              找到适合您的解决方案
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8">
              预约一次免费演示，我们的顾问将为您推荐最适合的产品组合
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              预约演示
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
