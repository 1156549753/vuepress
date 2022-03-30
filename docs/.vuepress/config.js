module.exports = {
    title: 'vuepress 组件文档模拟实操',
    description: 'Just playing around',
    base: '/',
    port: '8080',
    themeConfig: {
        nav:[ // 配置顶部导航栏
            {
                text:'首页',
                link:'/'
            },
            {
                text:'组件',
                link:'/comps/'
            },
        ],
        sidebar: { //配置侧边栏部分
            '/comps/':['/comps/','/comps/select.md']
        }
    },
    head: [],
    plugins: ['demo-container'], // 配置插件
    markdown: {},
    chainWebpack (config) {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features');
      },
    
}