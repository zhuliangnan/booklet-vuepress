const {fs, path} = require('@vuepress/shared-utils');
const extendsNetworks = {
    qq: {
        "sharer": "https://connect.qq.com/widget/shareqq/index.html?url=@url&title=@title&source=@title&desc=@description&pics=@media&summary=\"@description\"",
        //"type": "popup",
        "color": "#e9201f",
        "icon": "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M927.742 687.747c-6.87-94.604-70.349-173.86-107.044-214.854 5.094-11.926 17.49-80.957-30.374-128.058.077-1.13.077-2.25.077-3.347 0-185.805-132.253-319.547-298.196-320.155-165.971.61-298.218 134.35-298.218 320.155 0 1.097-.015 2.217.064 3.347-47.864 47.101-35.445 116.132-30.375 128.058-36.67 40.993-100.157 120.25-107.041 214.854-1.24 24.868 2.605 61.095 14.754 77.194 14.802 19.634 55.433-3.94 84.49-66.667 8.084 29.06 26.743 73.421 68.966 129.728-70.66 16.126-90.814 85.817-67.044 123.912 16.765 26.845 55.149 48.924 121.298 48.924 117.69 0 169.667-31.63 192.863-53.657 4.726-4.804 11.547-7.12 20.243-7.139 8.668.018 15.503 2.335 20.215 7.14 23.198 22.025 75.184 53.656 192.848 53.656 66.172 0 104.53-22.08 121.295-48.924 23.778-38.093 3.627-107.787-67.013-123.912 42.222-56.309 60.884-100.669 68.965-129.729 29.064 62.726 69.687 86.3 84.504 66.667 12.136-16.1 15.986-52.326 14.723-77.194\"/></svg>"
    },
    wechat: {
        "type": "qrcode",
        "color": "#1aad19",
        "icon": "<svg viewBox=\"0 0 1170 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M331.429 263.429q0-23.429-14.286-37.715t-37.714-14.285q-24.572 0-43.429 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.429 14.571q23.428 0 37.714-14t14.286-37.428zM756 553.143q0-16-14.571-28.572T704 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T704 594.857q22.857 0 37.429-12.571T756 553.143zM621.143 263.429q0-23.429-14-37.715t-37.429-14.285q-24.571 0-43.428 14.571t-18.857 37.429q0 22.285 18.857 36.857t43.428 14.571q23.429 0 37.429-14t14-37.428zM984 553.143q0-16-14.857-28.572T932 512q-15.429 0-28.286 12.857t-12.857 28.286q0 16 12.857 28.857T932 594.857q22.286 0 37.143-12.571T984 553.143zM832 326.286Q814.286 324 792 324q-96.571 0-177.714 44T486.57 487.143 440 651.429q0 44.571 13.143 86.857-20 1.714-38.857 1.714-14.857 0-28.572-0.857t-31.428-3.714-25.429-4-31.143-6-28.571-6L124.57 792l41.143-124.571Q0 551.429 0 387.429q0-96.572 55.714-177.715T206.571 82t207.715-46.571q100.571 0 190 37.714T754 177.429t78 148.857z m338.286 320.571q0 66.857-39.143 127.714t-106 110.572l31.428 103.428-113.714-62.285q-85.714 21.143-124.571 21.143-96.572 0-177.715-40.286T512.857 797.714t-46.571-150.857T512.857 496t127.714-109.429 177.715-40.285q92 0 173.143 40.285t130 109.715 48.857 150.571z\"></path></svg>"
    }
}
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
                    '/plugin/': getPluginSidebar('插件music.163.co', '介绍', '官方插件'),
                    '/theme/': getThemeSidebar('主题', '介绍'),
                    '/redis/': getRedisSidebar('Redis从底层到原理', '目录', 'Redis从实战到入土'),
                    '/golang/': getGolangSidebar('Golang入门教程', '介绍'),
                    '/mianshi/': getMianShiSidebar('面试知识点总结'),
                    '/docker/': getDockerSidebar('Docker操作手册', '介绍'),
                    '/mysql/': getMysqlSidebar('Mysql基础必知', '目录', 'Mysql实战必会'),
                    '/java-guide/': getJavaGuideSidebar('代码', '设计', '安全'),
                }
            }
        }
    },
    plugins: [
        ['vuepress-plugin-table-of-contents',true],
        ['vuepress-plugin-baidu-autopush'],
        [
            'social-share',
            {
                networks: ['email','qq','wechat'],
                email: 'zhuliangnan7410@163.com',
                /*autoQuote: false,
                isPlain: false,*/
                extendsNetworks,
            },
        ],
        ['vuepress-plugin-right-anchor', {
            showDepth: 3,
            expand: {
                trigger: 'hover',
                clickModeDefaultOpen: true
            },
        }],
        ['vuepress-plugin-baidu-tongji-analytics', {
            key: '10e691116370811bcd77756e9a8c0482',
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
            ga: 'G-K09JSGWC4X' //3068448110
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
        /*[
            'sitemap', {
               hostname: 'http://www.codesuger.com'  //http://www.codesuger.com
            }

        ],*/
     /*   ['disqus' , {

        }]*/
        /*[
            "music-bar",
            {
                platform: [
                    {
                        name: "music.163.com",
                        playListIDs: ["585697274"]
                    }
                ],
                timeOut: 2000,
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

function getJavaGuideSidebar(groupA, groupB ,groupC) {
    return [
        {
            title: groupA,
            sidebarDepth: 2,
            collapsable: false,
            children: [
                '',
                '并发工具类库，线程安全就高枕无忧了吗？',
                '代码加锁：不要让“锁”事成为烦心事',
                '线程池：业务代码最常用也最容易犯错的组件'
            ]
        },
        {
            title: groupB,
            sidebarDepth: 2,
            collapsable: false,
            children: [
            ]
        },
        {
            title: groupC,
            sidebarDepth: 2,
            collapsable: false,
            children: [
            ]
        }
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




