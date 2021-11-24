const {fs, path} = require('@vuepress/shared-utils');

module.exports = ctx => ({
    dest: 'site',
    port: 8081,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '记在小本本上',
            description: 'Java 基础，面经手册，Go语言教程，MySql从入门到实战，Redis从入门到入土，设计模式，杂文，摄影...'
        }
    },
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
        [
            "script",
            {
                "data-ad-client": "ca-pub-2245427233262012",
                async: true,
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            }
        ]
    ],
    theme: '@vuepress/default',
    themeConfig: {
        repo: 'vuejs/vuepress',
        sidebar: 'auto',
        editLinks: true,
        docsDir: 'packages/docs/docs',
        // #697 Provided by the official algolia team.
        algolia: ctx.isProd ? ({
            apiKey: '3a539aab83105f01761a137c61004d85',
            indexName: 'vuepress'
        }) : null,
        smoothScroll: true,
        locales: {
            sidebar: 'auto',
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh'),
                sidebar: {
                    '/notes/': getNotesBar(),
                    '/api/': getApiSidebar(),
                    '/guide/': getGuideSidebar('指南', '深入'),
                    '/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
                    '/theme/': getThemeSidebar('主题', '介绍'),
                    '/redis/': getRedisSidebar('Redis从底层到原理', '目录', 'Redis从实战到入土'),
                    '/golang/': getGolangSidebar('Golang入门教程', '介绍'),
                    '/mianshi/': getMianShiSidebar('面试知识点总结'),
                    '/docker/': getDockerSidebar('Docker操作手册', '介绍'),
                    '/mysql/': getMysqlSidebar('Mysql基础必知', '目录', 'Mysql实战必会')
                }
            }
        }
    },
    plugins: [
        ['vuepress-plugin-table-of-contents',true],
        ['vuepress-plugin-right-anchor', {
            showDepth: 2,
            expand: {
                trigger: 'hover',
                clickModeDefaultOpen: true
            },
        }],
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }],
        /*[
            'gitalk-maker',
            {
                gitalkConfig: {
                    clientID: 'clientID',
                    clientSecret: 'clientSecret',
                    repo: 'vuepress-plugin-gitalk-maker',
                    owner: 'zln',
                    admin: ['zln'],
                    // id: location.pathname, // 无法配置默认用 location.pathname
                    distractionFreeMode: false, // Facebook-like distraction free mode
                    clientID: zhuliangnan,

                },
            },
        ],*/
        ['@vuepress/medium-zoom', true],
        ["vuepress-plugin-tags"],
        ['@xiaopanda/vuepress-plugin-code-copy'],
            ['@vuepress/google-analytics', {
            ga: 'UA-128189152-1'
        }],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>'
        }],
       /* [
            'sitemap', {
               hostname: 'http://110.42.180.176/'
            }

        ],*/
     /*   ['disqus' , {

        }]*/
      /*  [
            "music-bar",
            {
                playList: [],
                platform: [
                    {
                        name: "music.163.com",
                        playListIDs: ["4909779787"]
                    }
                ]
            }
        ],*/
        ['flowchart'],
        [ 'vuepress-plugin-global-toc' ]

    ],
    extraWatchFiles: [
        '.vuepress/nav/zh.js'
    ]
});

function getNotesBar() {
    return [
        {
            title: '职场故事',
            collapsable: false,
            children: [
                '',
                '程序员和数学',
                'using-a-theme',
                'writing-a-theme'
            ]
        }
    ]
}

function getApiSidebar() {
    return [
        'cli',
        'node'
    ]
}

function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'directory-structure',
                'basic-config',
                'assets',
                'markdown',
                'using-vue',
                'i18n',
                'deploy'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'frontmatter',
                'permalinks',
                'markdown-slot',
                'global-computed'
            ]
        }
    ]
}

const officalPlugins = fs
    .readdirSync(path.resolve(__dirname, '../plugin/official'))
    .map(filename => 'official/' + filename.slice(0, -3))
    .sort();

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
    return [
        {
            title: pluginTitle,
            collapsable: false,
            children: [
                ['', pluginIntro],
                'using-a-plugin',
                'writing-a-plugin',
                'life-cycle',
                'option-api',
                'context-api'
            ]
        },
        {
            title: officialPluginTitle,
            collapsable: false,
            children: officalPlugins
        }
    ]
}

function getThemeSidebar(groupA, introductionA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['', introductionA],
                'using-a-theme',
                'writing-a-theme',
                'option-api',
                'default-theme-config',
                'blog-theme',
                'inheritance'
            ]
        }
    ]
}

function getMysqlSidebar(groupA, introductionA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['', introductionA],
                '基础架构：一条SQL查询语句是如何执行的？',
                '日志系统：一条SQL更新语句是如何执行的？',
                '事务隔离：为什么你改了我还看不见？',
                '深入浅出索引一',
                '深入浅出索引二',
                '全局锁和表锁 ：给表加个字段怎么有这么多阻碍？',
                '行锁功过：怎么减少行锁对性能的影响？',
                '事务到底是隔离的还是不隔离的？'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                '基础架构：一条SQL查询语句是如何执行的？'
            ]
        }
    ]
}

function getRedisSidebar(groupA, introductionA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['', introductionA],
                'Redis的两大维度，三大主线',
                '问题查找：Redis问题查找画像图',
                '基本架构：一个K-V数据库应该包含哪些',
                '底层数据结构：Redis快在哪里，又有哪些慢操作？',
                '高性IO模型：为什么单线程Redis能那么快',
                'AOF日志：宕机了，Redis如何避免数据丢失',
                'RDB内存快照：宕机后，Redis如何快速恢复？',
                '主从机制：主从库如何实现数据一致？',
                '哨兵机制：主库挂了，如何不间断服务',
                '哨兵集群：哨兵挂了，主从库还能切换吗？',
                '切片集群：数据增多了，是该加内存还是加实例？'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                '“万金油”的String，为什么不好用了？'
            ]
        }
    ]
}


function getGolangSidebar(groupA, introductionA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['', introductionA],
                'Go的安装与配置',
                'Go的数据类型以及变量声明',
                '常量和类型转换',
                '条件 选择 循环',
                'range的使用',
                '数组和切片深入解析',
                'Map深入解析',
                '结构体深入解析',
                '函数深入分析',
                'Go的接口及Go中标准接口库,类型断言的使用',
                '浅析Goroutines和Channels'
            ]
        }
    ]
}

function getMianShiSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                'MySql篇'
            ]
        }
    ]
}


function getDockerSidebar(groupA, introductionA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['', introductionA],
                'Docker基础命令',
                'Docker配置Redis自启动'
            ]
        }
    ]
}




