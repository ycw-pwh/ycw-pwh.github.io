import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "开始",
    icon: "blog",
    link: "/"
  },
  //无嵌套菜单
  {
    text: "测试",
    icon: "blogger",
    children: [
      {text: "intro",icon: "blog",link: "/intro.md"},
      {text: "Happy Match",icon: "blog",link: "https://ycw-pwh.com/HappyMatch.html"},
    ],
  },
  //基础多菜单
  {
    text: "分组菜单",
    icon: "blog",
    children: [
      {
        text: "分组1",
        children:[
          {text: "intro",icon: "blog",link: "/intro.md"},
          {text: "Happy Match",icon: "blog",link: "https://ycw-pwh.com/HappyMatch.html"},
        ]
      },
      {
        text:"分组2",
        children:[
          {text: "disable",icon: "blog",link: "/demo/disable.md"},
          {text: "encrypt",icon: "blog",link: "/demo/encrypt.md"},
        ]
      }
    ],
  },
  //嵌套菜单
]);
