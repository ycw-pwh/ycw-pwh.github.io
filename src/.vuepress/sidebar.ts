import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": "structure",
  "/demo/":[
    {text:"disable",icon:"aim",link:"/demo/disable"},
    {text:"encrypt",icon:"aim",link:"/demo/encrypt"},
    {text:"layout",icon:"aim",link:"/demo/layout"},
  ],
//    "/demo/":[
//  "page",//文件名称
//  {
//    text:"disable",
//    //prefix:"demo",//以下所有文件夹都在这个文件夹里面
//    icon:"blog",
//    collapsible: true, //分组是否自动折叠起来
//    children:[
//         {
//            text:"encrypt",
//            icon:"blog",
//            collapsible: true,
//            children:[
//                 "layout",
//                 "markdown",
//            ],
//          },
//        ],
//      },
//    ],    
});
