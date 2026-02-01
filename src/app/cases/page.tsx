/* Cases page for SmartICE website */
/* v1.0.0 - Customer case studies */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Store, Calendar, TrendingUp } from "lucide-react";

const cases = [
  {
    id: "yebailing",
    brand: "野百灵贵州酸汤",
    logo: "🍲",
    location: "绵阳 · 德阳",
    stores: 5,
    since: "2024",
    description:
      "野百灵是一家专注贵州酸汤火锅的连锁品牌，以正宗贵州风味和新鲜食材著称。随着门店扩张，传统的管理方式已无法满足需求。",
    challenge:
      "门店数量增加后，采购数据分散、各店运营状态难以实时掌握、顾客反馈无法系统化分析。",
    solution: [
      "部署智能库存录入系统，语音录入采购数据",
      "使用开闭店打卡系统，实时监控各门店状态",
      "引入智能桌访系统，AI 分析顾客反馈",
    ],
    results: [
      { metric: "采购效率", value: "+300%", desc: "语音录入替代手写" },
      { metric: "管理效率", value: "+200%", desc: "实时掌握门店状态" },
      { metric: "反馈收集", value: "+500%", desc: "系统化收集分析" },
    ],
    products: ["智能库存录入", "开闭店打卡", "智能桌访"],
    color: "from-[#F97316] to-[#EA580C]",
    bgColor: "bg-[#F97316]/10",
  },
  {
    id: "ningguixing",
    brand: "宁桂杏山野烤肉",
    logo: "🥩",
    location: "绵阳",
    stores: 3,
    since: "2024",
    description:
      "宁桂杏是一家主打山野风味烤肉的特色餐厅，以独特的腌制工艺和优质肉品闻名。",
    challenge:
      "烤肉店服务流程长，员工培训成本高；肉类食材成本高，需要精细化管理；服务盲区影响顾客体验。",
    solution: [
      "使用运营任务管理系统，标准化服务流程",
      "部署开闭店打卡系统，任务完成质量可追溯",
      "引入视觉监控系统，实时分析服务覆盖",
    ],
    results: [
      { metric: "培训成本", value: "-50%", desc: "标准化流程降低培训" },
      { metric: "服务响应", value: "+150%", desc: "实时监控服务盲区" },
      { metric: "任务完成", value: "98%", desc: "任务完成率提升" },
    ],
    products: ["开闭店打卡", "运营任务管理", "视觉监控"],
    color: "from-[#2563EB] to-[#1D4ED8]",
    bgColor: "bg-[#2563EB]/10",
  },
  {
    id: "banglanpu",
    brand: "邦兰铺泰国料理",
    logo: "🍜",
    location: "绵阳",
    stores: 2,
    since: "2025",
    description:
      "邦兰铺是一家正宗泰国料理餐厅，以地道的泰式风味和精致的用餐环境吸引了大量年轻消费者。",
    challenge:
      "泰国料理需要持续的营销推广，达人合作数据分散；竞品动态难以追踪；顾客口味反馈需要快速响应。",
    solution: [
      "使用小红书数据爬虫，追踪竞品营销动态",
      "部署 KOL 管理系统，统一管理达人合作",
      "引入问卷调查系统，收集顾客满意度",
    ],
    results: [
      { metric: "营销效率", value: "+200%", desc: "数据驱动营销决策" },
      { metric: "达人管理", value: "100%", desc: "合作数据统一管理" },
      { metric: "反馈收集", value: "+400%", desc: "问卷自动化收集" },
    ],
    products: ["小红书数据", "KOL管理", "问卷调查"],
    color: "from-[#10B981] to-[#059669]",
    bgColor: "bg-[#10B981]/10",
  },
];

export default function CasesPage() {
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
              客户案例
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-6">
              他们的成功故事
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              看看我们的客户如何通过 SmartICE 提升运营效率、降低管理成本
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      {cases.map((caseItem, index) => (
        <section
          key={caseItem.id}
          id={caseItem.id}
          className="section-padding relative"
        >
          <div
            className={`absolute inset-0 ${
              index % 2 === 0 ? "bg-[#111827]" : "bg-[#0A0F1C]"
            }`}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <span className="text-6xl">{caseItem.logo}</span>
                <div>
                  <h2 className="text-3xl font-bold text-[#F9FAFB]">
                    {caseItem.brand}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {caseItem.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Store className="w-4 h-4" />
                      {caseItem.stores} 家门店
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {caseItem.since} 年合作
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[#9CA3AF] max-w-3xl">{caseItem.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-[#F9FAFB] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#EF4444]/10 flex items-center justify-center text-[#EF4444]">
                    !
                  </span>
                  面临挑战
                </h3>
                <p className="text-[#9CA3AF] text-sm">{caseItem.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-[#F9FAFB] mb-4 flex items-center gap-2">
                  <span
                    className={`w-8 h-8 rounded-lg ${caseItem.bgColor} flex items-center justify-center`}
                  >
                    ✓
                  </span>
                  解决方案
                </h3>
                <ul className="space-y-2">
                  {caseItem.solution.map((item, i) => (
                    <li key={i} className="text-[#9CA3AF] text-sm flex gap-2">
                      <span className="text-[#10B981]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Products */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-[#F9FAFB] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#3B82F6]">
                    ⚡
                  </span>
                  使用产品
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseItem.products.map((product, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-sm ${caseItem.bgColor} text-[#F9FAFB]`}
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 card p-6"
            >
              <h3 className="text-lg font-semibold text-[#F9FAFB] mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#10B981]" />
                实施效果
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {caseItem.results.map((result, i) => (
                  <div key={i} className="text-center">
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${caseItem.color} bg-clip-text text-transparent mb-1`}
                    >
                      {result.value}
                    </div>
                    <div className="text-sm font-medium text-[#F9FAFB]">
                      {result.metric}
                    </div>
                    <div className="text-xs text-[#6B7280]">{result.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

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
              成为下一个成功案例
            </h2>
            <p className="text-lg text-[#9CA3AF] mb-8">
              预约演示，了解 SmartICE 如何帮助您的餐厅实现数字化转型
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
