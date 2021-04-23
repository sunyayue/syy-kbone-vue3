module.exports = {
  origin: "https://test.miniprogram.com",
  entry: "/",
  router: {
    page1: ["/page1"],
    page2: ["/page2"]
  },
  redirect: {
    notFound: "page1",
    accessDenied: "page1"
  },
  generate: {
    app: "default",
    appWxss: "default",
    autoBuildNpm: "npm",
    globalVars: [
      // ['__VUE_PROD_DEVTOOLS__ ', false],
      // ['__VUE_OPTIONS_API__', true],
      ["SVGElement", null],
      ["VUE_APP_MP", JSON.stringify("miniprogram")]
    ]
  },
  app: {
    backgroundTextStyle: "dark",
    navigationBarTextStyle: "white",
    navigationBarTitleText: "kbone"
  },
  appExtraConfig: {
    sitemapLocation: "sitemap.json"
  },
  global: {
    share: true,
    windowScroll: false,
    backgroundColor: "#F7F7F7",
    rem: true
  },
  pages: {
    page1: {
      extra: {
        navigationStyle: "custom",
        navigationBarTitleText: "首页"
      }
    },
    page2: {
      extra: {
        navigationStyle: "custom",
        navigationBarTitleText: "首页2"
      }
    }
  },
  optimization: {
    domSubTreeLevel: 10,
    elementMultiplexing: true,
    textMultiplexing: true,
    commentMultiplexing: true,
    domExtendMultiplexing: true,
    styleValueReduce: 102400,
    attrValueReduce: 102400
  },
  projectConfig: {
    appid: "appid",
    projectname: "syy-kbone-vue3"
  },
  packageConfig: {
    name: "syy-kbone-vue3"
  },
  // vue-cli 相关配置
  vue: {
    entryFileName: "main.mp.ts",
    cdnPath: "/",
    cdnLimit: 102400
  }
};
