import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Curious Wisdom,Worthy Heights",
  description: "以知为光,向远而行",

  theme,
  head:[
    ["link",{rel:"icon",href:"/favcion.ico"}],//href 改成自己的图标路径
  ],
  //网站简介，说明
  locales:{
    "/":{
      lang: "zh-CN",
      title: "Curious Wisdom,Worthy Heights",
      description: "以知为光,向远而行",
    }
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  //主题渲染的大纲级别
  markdown:{
    headers:{
      level:[2,3,4,5,6],
    }
  }
});