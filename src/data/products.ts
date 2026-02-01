/* SmartICE Product Data - Complete product matrix */
/* v1.1.0 - Removed AI crawler, renamed data products */

import {
  Mic,
  MapPin,
  ClipboardList,
  MessageSquare,
  Radio,
  Eye,
  ShoppingCart,
  BookOpen,
  Users,
  FileQuestion,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  description: string;
  painPoint: string;
  features: string[];
  techHighlights: string[];
  icon: LucideIcon;
  category: ProductCategory;
  color: "blue" | "orange" | "purple" | "green";
}

export type ProductCategory =
  | "operations"
  | "collection"
  | "data"
  | "marketing";

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "operations",
    name: "核心运营",
    nameEn: "Operations",
    description: "门店日常运营的数字化管理",
    icon: "🎯",
    color: "blue",
  },
  {
    id: "collection",
    name: "智能采集",
    nameEn: "Smart Collection",
    description: "AI驱动的多维度数据采集",
    icon: "🎤",
    color: "purple",
  },
  {
    id: "data",
    name: "数据采集",
    nameEn: "Data Crawling",
    description: "全平台数据自动化抓取",
    icon: "📊",
    color: "green",
  },
  {
    id: "marketing",
    name: "营销管理",
    nameEn: "Marketing",
    description: "达人合作与顾客反馈管理",
    icon: "📈",
    color: "orange",
  },
];

export const products: Product[] = [
  // Operations
  {
    id: "inventory-entry",
    name: "智能库存录入",
    nameEn: "InventoryEntry",
    tagline: "告别手写采购单",
    description:
      '说一句"今天买了20斤牛肉，单价35"，AI自动结构化入库。语音录入，解放双手。',
    painPoint: "传统手写采购单效率低、易出错、难统计",
    features: [
      "语音录入：讯飞ASR + AI结构化",
      "手动录入：传统表单方式",
      "数据仪表板：采购数据可视化",
      "RBAC权限：4角色权限管理",
    ],
    techHighlights: ["讯飞语音识别", "阿里云Qwen AI结构化", "Supabase实时同步"],
    icon: Mic,
    category: "operations",
    color: "blue",
  },
  {
    id: "kbd",
    name: "开闭店打卡",
    nameEn: "KBD",
    tagline: "门店状态一目了然",
    description:
      "老板不在店里也能实时掌握各门店开闭店情况，任务完成质量一目了然。",
    painPoint: "多门店管理难以实时掌握各店运营状态",
    features: [
      "4节点打卡：午市/晚市开店闭店",
      "地图可视化：实时显示各门店状态",
      "任务池系统：日常任务 + 临时任务",
      "媒体上传：图片/视频/语音打卡",
    ],
    techHighlights: ["Leaflet地图", "实时状态同步", "PWA离线支持"],
    icon: MapPin,
    category: "operations",
    color: "blue",
  },
  {
    id: "roleplay",
    name: "运营任务管理",
    nameEn: "Roleplay",
    tagline: "餐厅运营标准化",
    description: "每个时段该做什么一清二楚，新员工也能快速上手。",
    painPoint: "餐厅运营流程不标准，新员工培训成本高",
    features: [
      "时期划分：8个时段精细化管理",
      "角色分工：店长、厨师、值班经理",
      "任务审批：值班经理任务需店长审核",
      "移动端PWA：手机随时查看任务",
    ],
    techHighlights: ["PWA离线支持", "实时任务同步", "角色权限管理"],
    icon: ClipboardList,
    category: "operations",
    color: "blue",
  },
  // Collection
  {
    id: "lingtin",
    name: "智能桌访",
    nameEn: "Lingtin",
    tagline: "顾客说了什么？AI帮你记",
    description:
      '店长只需点击录音，AI自动分析情绪、提取菜品反馈、生成改进建议。支持自然语言查询"今天投诉最多的菜是什么？"',
    painPoint: "传统桌访靠记忆，顾客反馈难以系统化分析",
    features: [
      "零操作录音：点击即录",
      "AI自动分析：情绪评分、菜品提及",
      "数据看板：菜品TOP5、情绪概览",
      "AI智库问答：自然语言查询",
    ],
    techHighlights: ["讯飞STT", "Gemini AI分析", "Claude问答"],
    icon: MessageSquare,
    category: "collection",
    color: "purple",
  },
  {
    id: "ear",
    name: "通讯监听",
    nameEn: "Ear",
    tagline: "员工沟通效率分析",
    description: "通过通讯分析找到沟通问题根源，提升服务响应速度。",
    painPoint: "员工沟通效率低，服务响应慢，问题难定位",
    features: [
      "SDR无线电接收：监听员工对讲机",
      "语音转文字：Whisper实时转录",
      "通讯模式分析：发现沟通问题",
      "云端报告：LLM生成洞察报告",
    ],
    techHighlights: ["RTL-SDR硬件", "Whisper语音识别", "LLM分析"],
    icon: Radio,
    category: "collection",
    color: "purple",
  },
  {
    id: "eyes",
    name: "视觉监控",
    nameEn: "Eyes",
    tagline: "监控不再只是录像",
    description: "AI实时分析桌台状态、员工覆盖率，服务盲区自动告警。",
    painPoint: "监控只能事后查看，无法实时发现服务问题",
    features: [
      "桌台状态检测：空闲/用餐/清洁",
      "员工覆盖率分析：服务区域分布",
      "实时告警：服务盲区自动提醒",
      "云端同步：数据自动上传",
    ],
    techHighlights: ["YOLOv8检测", "自训练分类器", "RTX 3060边缘计算"],
    icon: Eye,
    category: "collection",
    color: "purple",
  },
  // Data
  {
    id: "mt",
    name: "美团数据爬虫",
    nameEn: "Mt",
    tagline: "美团数据自动采集",
    description: "不用每天手动导出美团数据，系统自动采集同步到数据库。",
    painPoint: "每天手动导出美团数据，耗时且容易遗漏",
    features: [
      "权益包销售统计",
      "综合营业统计",
      "菜品销售统计",
      "多门店聚合（集团账号）",
    ],
    techHighlights: ["CDP浏览器自动化", "双数据库存储", "定时任务调度"],
    icon: ShoppingCart,
    category: "data",
    color: "green",
  },
  {
    id: "xhsc",
    name: "小红书数据爬虫",
    nameEn: "XHSC",
    tagline: "竞品营销分析",
    description: "竞品在小红书做了什么营销？热门内容是什么？AI帮你分析。",
    painPoint: "竞品动态难以追踪，营销策略缺乏数据支撑",
    features: [
      "多账号管理：浏览器实例隔离",
      "关键词搜索：自动抓取帖子",
      "AI数据清洗：Gemini自动标注",
      "本地图片缓存：CDN图片本地化",
    ],
    techHighlights: ["Playwright多账号", "Gemini Flash标注", "智能去重"],
    icon: BookOpen,
    category: "data",
    color: "green",
  },
  // Marketing
  {
    id: "kol",
    name: "KOL管理",
    nameEn: "KOL",
    tagline: "达人合作数据统一管理",
    description: "达人合作数据散落各处？统一管理追踪效果。",
    painPoint: "达人合作数据分散，效果难以追踪评估",
    features: [
      "博主数据库：粉丝数、互动数据",
      "多平台支持：小红书、点评、抖音、微博",
      "项目分类：按活动期管理",
      "分享功能：生成分享链接",
    ],
    techHighlights: ["Electron桌面端", "Web端双版本", "数据可视化"],
    icon: Users,
    category: "marketing",
    color: "orange",
  },
  {
    id: "echo",
    name: "问卷调查",
    nameEn: "Echo",
    tagline: "桌面扫码，即时评价",
    description: "自动生成QR二维码，放置桌面供顾客扫码评价。数据实时汇总，支持AB测试优化问卷效果。",
    painPoint: "顾客满意度调查难以规模化，数据收集成本高",
    features: [
      "QR码自动生成：一键生成桌面二维码",
      "静态QR码：打印一次永久使用",
      "灵活问卷：多选题、文本题、评分题",
      "AB测试：同一QR码随机展示不同问卷",
    ],
    techHighlights: ["QR码自动生成", "AB测试权重分配", "实时统计"],
    icon: FileQuestion,
    category: "marketing",
    color: "orange",
  },
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getCategoryById = (id: ProductCategory): CategoryInfo | undefined => {
  return categories.find((c) => c.id === id);
};
