export default defineAppConfig({
  pages: ["pages/home/index", "pages/shopcar/index", "pages/my/index"],
  subpackages: [
    {
      root: "subpackages",
      name: "login",
      pages: [],
      independent: false,
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#000000",
    backgroundColor: "#000000",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
      },
      {
        pagePath: "pages/shopcar/index",
        text: "商城",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
      },
    ],
  },
  usingComponents: {},
});
