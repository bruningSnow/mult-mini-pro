export default {
  pages: ['pages/example/index'],
  subPackages: [
    {
      root: 'subPages/',
      pages: ['example/index'],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
};
