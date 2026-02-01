/* About page for SmartICE website */
/* v1.0.0 - Company introduction and team */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "专注餐饮",
    description: "深耕餐饮行业，理解真实痛点，提供针对性解决方案",
    color: "from-[#2563EB] to-[#1D4ED8]",
  },
  {
    icon: Lightbulb,
    title: "AI 驱动",
    description: "集成顶级 AI 能力，让技术真正服务于业务",
    color: "from-[#F97316] to-[#EA580C]",
  },
  {
    icon: Users,
    title: "客户至上",
    description: "与客户共同成长，持续迭代优化产品",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    icon: Rocket,
    title: "快速迭代",
    description: "敏捷开发，快速响应市场需求和客户反馈",
    color: "from-[#7C3AED] to-[#6D28D9]",
  },
];

const milestones = [
  {
    year: "2024",
    title: "项目启动",
    description: "SmartICE 项目正式启动，开始为餐饮企业提供 AI 解决方案",
  },
  {
    year: "2024",
    title: "首个客户",
    description: "与野百灵贵州酸汤达成合作，部署智能库存系统",
  },
  {
    year: "2025",
    title: "产品矩阵",
    description: "完成 11 个智能系统的开发，覆盖餐饮运营全链路",
  },
  {
    year: "2025",
    title: "规模扩展",
    description: "服务品牌扩展至 3 个，覆盖门店超过 10 家",
  },
];

export default function AboutPage() {
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
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#7C3AED]/10 text-[#8B5CF6] mb-4">
              关于我们
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-6">
              用 AI 赋能餐饮
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              SmartICE 致力于为中小餐饮企业提供定制化 AI SaaS 解决方案，
              让每一家餐厅都能享受大型连锁的数字化管理能力
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#111827]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#2563EB]/10 text-[#3B82F6] mb-4">
                我们的使命
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] mb-6">
                让中小餐饮企业也能享受数字化红利
              </h2>
              <p className="text-[#9CA3AF] leading-relaxed mb-6">
                在餐饮行业，大型连锁品牌往往拥有完善的数字化管理系统，而中小餐饮企业却因为成本和技术门槛，
                难以享受到数字化带来的效率提升。
              </p>
              <p className="text-[#9CA3AF] leading-relaxed mb-6">
                SmartICE 的诞生，就是为了打破这一壁垒。我们将最前沿的 AI 技术与餐饮场景深度结合，
                打造出一套即插即用、成本可控的智能管理系统，让每一家餐厅都能轻松实现数字化转型。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-lg bg-[#1F2937] text-[#F9FAFB]">
                  <span className="text-2xl font-bold text-[#3B82F6]">11</span>
                  <span className="text-sm text-[#9CA3AF] ml-2">智能系统</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#1F2937] text-[#F9FAFB]">
                  <span className="text-2xl font-bold text-[#F97316]">3+</span>
                  <span className="text-sm text-[#9CA3AF] ml-2">合作品牌</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#1F2937] text-[#F9FAFB]">
                  <span className="text-2xl font-bold text-[#10B981]">10+</span>
                  <span className="text-sm text-[#9CA3AF] ml-2">覆盖门店</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#2563EB]/20 to-[#F97316]/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🍜</div>
                  <div className="text-2xl font-bold text-[#F9FAFB] mb-2">
                    AI + 餐饮
                  </div>
                  <div className="text-[#9CA3AF]">
                    让运营更智能
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#0A0F1C]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#F97316]/10 text-[#F97316] mb-4">
              核心价值观
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB]">
              我们坚信的理念
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6 text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#111827]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#10B981]/10 text-[#10B981] mb-4">
              发展历程
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB]">
              我们的成长之路
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[rgba(75,85,99,0.4)] md:-translate-x-px" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#2563EB] -translate-x-1.5 md:-translate-x-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="card p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#2563EB]/10 text-[#3B82F6] mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              加入我们的客户大家庭
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8">
              与野百灵、宁桂杏、邦兰铺等品牌一起，开启 AI 餐饮新时代
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              联系我们
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
