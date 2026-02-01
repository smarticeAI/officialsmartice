/* Contact page for SmartICE website */
/* v1.0.2 - Updated contact info: new email, dual phone numbers, WeChat, multiple addresses, removed working hours */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, MessageCircle, X, Copy, Check, MapPin } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    stores: "",
    message: "",
  });

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText("JeremyDh");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#F97316]/10 text-[#F97316] mb-4">
              联系我们
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9FAFB] mb-6">
              开始您的 AI 餐饮之旅
            </h1>
            <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
              预约一次免费演示，了解 SmartICE 如何帮助您的餐厅提升运营效率
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[#111827]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">
                联系方式
              </h2>
              <p className="text-[#9CA3AF] mb-8">
                我们的团队随时准备为您提供帮助。无论是产品咨询、技术支持还是合作洽谈，都欢迎联系我们。
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:hengd2@outlook.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]">邮箱</div>
                    <div className="text-[#F9FAFB] group-hover:text-[#3B82F6] transition-colors">
                      hengd2@outlook.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1F2937]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]">电话</div>
                    <div className="space-y-1">
                      <a href="tel:+8618576644936" className="block text-[#F9FAFB] hover:text-[#10B981] transition-colors">
                        +86 18576644936
                      </a>
                      <a href="tel:+12179740277" className="block text-[#F9FAFB] hover:text-[#10B981] transition-colors">
                        +1 2179740277
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsWeChatOpen(true)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#1F2937] hover:bg-[#374151] transition-colors group text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#07C160] to-[#06AD56] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]">微信</div>
                    <div className="text-[#F9FAFB] group-hover:text-[#07C160] transition-colors">
                      点击添加微信好友
                    </div>
                  </div>
                </button>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#1F2937]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]">办公地点</div>
                    <div className="text-[#F9FAFB]">四川/广东/上海</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F9FAFB] mb-4">
                    提交成功！
                  </h3>
                  <p className="text-[#9CA3AF] mb-6">
                    感谢您的咨询，我们的顾问将在 24 小时内与您联系。
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        phone: "",
                        email: "",
                        stores: "",
                        message: "",
                      });
                    }}
                    className="btn-secondary"
                  >
                    再次提交
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8">
                  <h2 className="text-2xl font-bold text-[#F9FAFB] mb-6">
                    预约演示
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                          姓名 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#1F2937] border border-[rgba(75,85,99,0.4)] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors"
                          placeholder="您的姓名"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                          公司/品牌 *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#1F2937] border border-[rgba(75,85,99,0.4)] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors"
                          placeholder="公司或品牌名称"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                          手机号 *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[#1F2937] border border-[rgba(75,85,99,0.4)] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors"
                          placeholder="您的手机号"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                          邮箱
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#1F2937] border border-[rgba(75,85,99,0.4)] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors"
                          placeholder="您的邮箱"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                        门店数量
                      </label>
                      <select
                        name="stores"
                        value={formData.stores}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#1F2937] border border-[rgba(75,85,99,0.4)] text-[#F9FAFB] focus:border-[#2563EB] focus:outline-none transition-colors"
                      >
                        <option value="">请选择</option>
                        <option value="1-3">1-3 家</option>
                        <option value="4-10">4-10 家</option>
                        <option value="11-30">11-30 家</option>
                        <option value="30+">30 家以上</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#9CA3AF] mb-2">
                        您的需求
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-[#1F2937] border border-[rgba(75,85,99,0.4)] text-[#F9FAFB] placeholder-[#6B7280] focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
                        placeholder="请简单描述您的需求或感兴趣的产品..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      提交咨询
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WeChat Modal */}
      <AnimatePresence>
        {isWeChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsWeChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#1F2937] rounded-2xl p-8 max-w-sm w-full border border-[rgba(75,85,99,0.4)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsWeChatOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-[#9CA3AF]" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#07C160] to-[#06AD56] flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#F9FAFB] mb-2">
                  添加微信好友
                </h3>
                <p className="text-[#9CA3AF] text-sm mb-6">
                  复制微信号添加好友，获取更多产品信息
                </p>

                <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[#111827] mb-4">
                  <span className="text-lg font-mono text-[#F9FAFB]">JeremyDh</span>
                  <button
                    onClick={handleCopyWeChat}
                    className="p-2 rounded-lg bg-[#07C160] hover:bg-[#06AD56] transition-colors"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>

                {isCopied && (
                  <p className="text-[#07C160] text-sm">已复制到剪贴板</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
