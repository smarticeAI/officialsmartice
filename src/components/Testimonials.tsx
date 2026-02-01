/* Testimonials section for SmartICE homepage */
/* v1.0.0 - Customer case studies with brand showcase */

"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    brand: "野百灵贵州酸汤",
    location: "绵阳 · 德阳",
    stores: 5,
    quote:
      "智能库存系统让我们的采购效率提升了 3 倍，语音录入太方便了，厨师长再也不用手写采购单。",
    author: "张总",
    role: "品牌创始人",
    products: ["智能库存录入", "开闭店打卡", "智能桌访"],
    color: "from-[#F97316] to-[#EA580C]",
  },
  {
    brand: "宁桂杏山野烤肉",
    location: "绵阳",
    stores: 3,
    quote:
      "KBD 系统让我在家也能看到每个店的开闭店情况，任务完成质量一目了然，管理轻松多了。",
    author: "李总",
    role: "运营总监",
    products: ["开闭店打卡", "运营任务管理", "视觉监控"],
    color: "from-[#2563EB] to-[#1D4ED8]",
  },
  {
    brand: "邦兰铺泰国料理",
    location: "绵阳",
    stores: 2,
    quote:
      "小红书数据爬虫帮我们追踪竞品动态，KOL 管理系统让达人合作数据不再散落各处。",
    author: "王总",
    role: "市场负责人",
    products: ["小红书数据", "KOL管理", "问卷调查"],
    color: "from-[#10B981] to-[#059669]",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] via-[#0A0F1C] to-[#111827]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#10B981]/10 text-[#10B981] mb-4">
            客户案例
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            他们都在用 SmartICE
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            来自真实客户的反馈，见证 AI 如何改变餐饮运营
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card p-6 flex flex-col"
            >
              {/* Brand header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div
                    className={`inline-block px-3 py-1 rounded-lg text-sm font-medium bg-gradient-to-r ${item.color} text-white mb-2`}
                  >
                    {item.brand}
                  </div>
                  <div className="text-sm text-[#6B7280]">
                    {item.location} · {item.stores} 家门店
                  </div>
                </div>
                <Quote className="w-8 h-8 text-[#2563EB]/30" />
              </div>

              {/* Quote */}
              <blockquote className="text-[#F9FAFB] leading-relaxed mb-6 flex-1">
                "{item.quote}"
              </blockquote>

              {/* Products used */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.products.map((product, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md text-xs bg-[#1F2937] text-[#9CA3AF]"
                  >
                    {product}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(75,85,99,0.4)]">
                <div>
                  <div className="text-sm font-medium text-[#F9FAFB]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#6B7280]">{item.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F97316] text-[#F97316]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3+", label: "合作品牌" },
              { value: "10+", label: "覆盖门店" },
              { value: "100%", label: "客户续约率" },
              { value: "7×24", label: "技术支持" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
