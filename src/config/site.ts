export type IconName =
  | "home"
  | "grid"
  | "briefcase"
  | "video"
  | "book"
  | "message";

export type SectionKey = "projects" | "experience" | "videos" | "life" | "comments";

export const author = "Fuhai";

export const navigation = [
  { label: "首页", href: "/", icon: "home" },
  { label: "项目", href: "/projects/", icon: "grid" },
  { label: "经历", href: "/experience/", icon: "briefcase" },
  { label: "视频", href: "/videos/", icon: "video" },
  { label: "生活随记", href: "/life/", icon: "book" },
  { label: "评论", href: "/comments/", icon: "message" },
] as const satisfies ReadonlyArray<{
  label: string;
  href: string;
  icon: IconName;
}>;

export const sections: Record<
  SectionKey,
  { title: string; eyebrow: string; description: string; href: string }
> = {
  projects: {
    title: "项目",
    eyebrow: "PROJECTS",
    description: "项目案例、实践过程和技术复盘会整理在这里。",
    href: "/projects/",
  },
  experience: {
    title: "经历",
    eyebrow: "EXPERIENCE",
    description: "学习、研究和工作经历会整理在这里。",
    href: "/experience/",
  },
  videos: {
    title: "视频",
    eyebrow: "VIDEOS",
    description: "演示视频和影像内容会整理在这里。",
    href: "/videos/",
  },
  life: {
    title: "生活随记",
    eyebrow: "LIFE NOTES",
    description: "摄影、旅行和日常记录会整理在这里。",
    href: "/life/",
  },
  comments: {
    title: "评论",
    eyebrow: "COMMENTS",
    description: "留言与评论功能正在准备中。",
    href: "/comments/",
  },
};

// 文章分类（对应内容集合里的 category 字段）→ 展示用中文名
export const categoryLabels: Record<string, string> = {
  project: "项目",
  experience: "经历",
  video: "视频",
  life: "生活",
  note: "笔记",
};

// 项目页的分组（对应 frontmatter 里的 project 字段）
export const projectGroups = [
  {
    key: "weather-agent",
    label: "城市天气 Agent",
    description: "4 个 Agent + RAG 的城市环境智能分析",
  },
  {
    key: "scga",
    label: "SCGA · 车辆重识别",
    description: "车辆重识别方向的研究工作",
  },
  {
    key: "rag",
    label: "RAG 学习与工程实践",
    description: "检索增强生成、向量库与踩坑记录",
  },
  {
    key: "other",
    label: "其他项目",
    description: "其余项目案例与技术复盘",
  },
] as const;

export const hotPosts = [
  { title: "城市天气 Agent 项目整理", views: "16874", hue: "cyan", href: "/posts/weather-agent/" },
  { title: "SCGA 车辆重识别研究笔记", views: "14674", hue: "blue", href: "/posts/scga/" },
  { title: "RAG 学习笔记与工程实践", views: "12891", hue: "yellow", href: "/posts/rag-notes/" },
  { title: "欢迎来到 Fuhai 的 Blog", views: "9812", hue: "red", href: "/posts/welcome/" },
  { title: "Computer Vision 资料索引", views: "7566", hue: "slate", href: "/posts/welcome/" },
] as const;

export const blogInfo = [
  ["文章数目", "12"],
  ["评论数目", "0"],
  ["项目数目", "3"],
] as const;
