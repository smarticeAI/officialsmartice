/* Product Matrix section for SmartICE homepage */
/* v1.0.0 - Interactive product category cards with hover effects */

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, products, type ProductCategory } from "@/data/products";
import { cn } from "@/lib/utils";

const categoryColors: Record<ProductCategory, { bg: string; border: string; text: string }> = {
  operations: {
    bg: "from-[#2563EB]/10 to-[#1D4ED8]/5",
    border: "hover:border-[#2563EB]/50",
    text: "text-[#3B82F6]",
  },
  collection: {
    bg: "from-[#7C3AED]/10 to-[#6D28D9]/5",
    border: "hover:border-[#7C3AED]/50",
    text: "text-[#8B5CF6]",
  },
  data: {
    bg: "from-[#10B981]/10 to-[#059669]/5",
    border: "hover:border-[#10B981]/50",
    text: "text-[#10B981]",
  },
  marketing: {
    bg: "from-[#F97316]/10 to-[#EA580C]/5",
    border: "hover:border-[#F97316]/50",
    text: "text-[#F97316]",
  },
};

export default function ProductMatrix() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#111827] to-[#0A0F1C]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#2563EB]/10 text-[#3B82F6] mb-4">
            产品矩阵
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            11 个智能系统
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            覆盖餐饮运营全链路，从门店管理到数据分析，一站式解决方案
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => {
            const categoryProducts = products.filter(
              (p) => p.category === category.id
            );
            const colors = categoryColors[category.id];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className={cn(
                  "card p-6 cursor-pointer group",
                  colors.border,
                  activeCategory === category.id && "border-opacity-100"
                )}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center text-2xl",
                        `bg-gradient-to-br ${colors.bg}`
                      )}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#F9FAFB] mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#6B7280]">
                        {category.nameEn}
                      </p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      `bg-gradient-to-r ${colors.bg}`,
                      colors.text
                    )}
                  >
                    {categoryProducts.length} 个系统
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#9CA3AF] mb-6">{category.description}</p>

                {/* Products list */}
                <div className="space-y-3 mb-6">
                  {categoryProducts.map((product) => {
                    const Icon = product.icon;
                    return (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[#1F2937]/50 group-hover:bg-[#1F2937] transition-colors"
                      >
                        <Icon className={cn("w-5 h-5", colors.text)} />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-[#F9FAFB]">
                            {product.name}
                          </div>
                          <div className="text-xs text-[#6B7280] truncate">
                            {product.tagline}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Link */}
                <Link
                  href={`/products#${category.id}`}
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                    colors.text,
                    "hover:underline"
                  )}
                >
                  查看详情
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/products" className="btn-primary inline-flex items-center gap-2">
            查看全部产品
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
