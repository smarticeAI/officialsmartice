/* Solutions page for SmartICE website */
/* v1.0.0 - Industry-specific solutions */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const solutions = [
  {
    id: "hotpot",
    name: "火锅店解决方案",
    icon: "🍲",
    description: "针对火锅店高翻台率、食材损耗大、服务要求高的特点，提供全方位智能管理",
    painPoints: [
      "食材种类多，采购管理复杂",
      "翻台率高，服务响应要求快",
      "顾客反馈难以系统化收集",
      "多门店数据难以统一管理",
    ],
    products: [
      { name: "智能库存录入", desc: "语音录入采购数据，自动结构化" },
      { name: "开闭店打卡", desc: "实时掌握各门店运营状态" },
      { name: "智能桌访", desc: "AI 分析顾客反馈，发现菜品问题" },
      { name: "视觉监控", desc: "实时分析桌台状态和服务覆盖" },
    ],
    color: "from-[#F97316] to-[#EA580C]",
    bgColor: "bg-[#F97316]/10",
    textColor: "text-[#F97316]",
  },
  {
    id: "bbq",
    name: "烤肉店解决方案",
    icon: "🥩",
    description: "针对烤肉店食材成本高、服务流程长、员工培训难的特点，提供精细化运营工具",
    painPoints: [
      "肉类食材成本高，损耗控制难",
      "服务流程长，员工培训成本高",
      "用餐时间长，翻台效率低",
      "员工沟通效率影响服务质量",
    ],
    products: [
      { name: "智能库存录入", desc: "精确记录肉类采购，控制成本" },
      { name: "运营任务管理", desc: "标准化服务流程，降低培训成本" },
      { name: "通讯监听", desc: "分析员工沟通，提升服务效率" },
      { name: "视觉监控", desc: "监控用餐进度，优化翻台" },
    ],
    color: "from-[#2563EB] to-[#1D4ED8]",
    bgColor: "bg-[#2563EB]/10",
    textColor: "text-[#3B82F6]",
  },
  {
    id: "thai",
    name: "泰国料理解决方案",
    icon: "🍜",
    description: "针对泰国料理食材特殊、口味调整频繁、营销需求强的特点，提供差异化管理方案",
    painPoints: [
      "特殊食材采购渠道复杂",
      "口味调整需要快速响应顾客反馈",
      "需要持续的营销推广",
      "达人合作数据分散",
    ],
    products: [
      { name: "智能库存录入", desc: "管理特殊食材采购" },
      { name: "智能桌访", desc: "快速收集口味反馈" },
      { name: "小红书数据", desc: "追踪竞品营销动态" },
      { name: "KOL管理", desc: "统一管理达人合作" },
    ],
    color: "from-[#10B981] to-[#059669]",
    bgColor: "bg-[#10B981]/10",
    textColor: "text-[#10B981]",
  },
];

export default function SolutionsPage() {
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
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#10B981]/10 text-[#10B981] mb-4">
              解决方案
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-6">
              为您的餐厅量身定制
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              不同类型的餐厅有不同的运营痛点，我们提供针对性的解决方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className="section-padding relative"
        >
          <div
            className={`absolute inset-0 ${
              index % 2 === 0 ? "bg-[#111827]" : "bg-[#0A0F1C]"
            }`}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl">{solution.icon}</span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB]">
                      {solution.name}
                    </h2>
                  </div>
                </div>

                <p className="text-[#9CA3AF] mb-6">{solution.description}</p>

                {/* Pain points */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#6B7280] uppercase tracking-wider mb-3">
                    行业痛点
                  </h3>
                  <div className="space-y-2">
                    {solution.painPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-[#EF4444] mt-1">•</span>
                        <span className="text-[#9CA3AF]">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`btn-primary inline-flex items-center gap-2 bg-gradient-to-r ${solution.color}`}
                >
                  咨询方案
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Products */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-[#F9FAFB] mb-4">
                    推荐产品组合
                  </h3>
                  <div className="space-y-4">
                    {solution.products.map((product, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-[#1F2937]"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg ${solution.bgColor} flex items-center justify-center flex-shrink-0`}
                        >
                          <Check className={`w-4 h-4 ${solution.textColor}`} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#F9FAFB]">
                            {product.name}
                          </div>
                          <div className="text-xs text-[#6B7280]">
                            {product.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0F1C]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F97316]/15 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] mb-6">
              没有找到适合的方案？
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8">
              我们可以根据您的具体需求，定制专属解决方案
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              联系我们定制方案
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
