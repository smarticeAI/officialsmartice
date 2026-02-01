/* Features section for SmartICE homepage */
/* v1.0.0 - Highlight key differentiators with animated icons */

"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Smartphone,
  Cloud,
  Brain,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI 驱动",
    description: "集成讯飞、Gemini、Claude 等顶级 AI 能力，让数据自动结构化、分析、洞察",
    color: "from-[#2563EB] to-[#1D4ED8]",
  },
  {
    icon: Zap,
    title: "即插即用",
    description: "无需复杂部署，扫码即用。PWA 支持离线，网络不稳也能正常工作",
    color: "from-[#F97316] to-[#EA580C]",
  },
  {
    icon: Shield,
    title: "数据安全",
    description: "Supabase 云端存储，RLS 行级安全策略，数据隔离，权限可控",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    icon: Smartphone,
    title: "移动优先",
    description: "所有系统均支持移动端，店长手机随时查看，不受地点限制",
    color: "from-[#7C3AED] to-[#6D28D9]",
  },
  {
    icon: Cloud,
    title: "实时同步",
    description: "多门店数据实时同步，总部一屏掌握全局，异常即时告警",
    color: "from-[#EC4899] to-[#DB2777]",
  },
  {
    icon: BarChart3,
    title: "数据可视化",
    description: "丰富的数据看板，趋势分析、对比分析，让数据说话",
    color: "from-[#06B6D4] to-[#0891B2]",
  },
];

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0F1C]" />
      <div className="absolute inset-0 mesh-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#F97316]/10 text-[#F97316] mb-4">
            为什么选择我们
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9FAFB] mb-4">
            专为餐饮行业打造
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            深耕餐饮场景，理解行业痛点，提供真正解决问题的工具
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 group"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#F9FAFB] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
