import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Curious Wisdom,Worthy Heights",
  description: "以知为光,向远而行",

  // 引入文艺字体（中英文完美适配）
  head: [
    // 中文：思源宋体 Noto Serif SC（文艺优雅）
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap",
      },
    ],
    // 英文：Playfair Display（高级衬线体，搭配你的英文标题）
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap",
      },
    ],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});