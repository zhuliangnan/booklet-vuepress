module.exports = [
   /* {
        text: 'notes',
        link: '/notes/'
    },*/
    {
        text: '指南',
        link: '/guide/'
    },
    /*{
        text: '配置',
        link: '/config/'
    },
    {
        text: '插件',
        link: '/plugin/'
    },
    {
        text: '主题',
        link: '/theme/'
    },*/
    {
        text: '编程语言',
        ariaLabel: '编程语言',
        items: [
            {
                text: 'Golang',
                items: [
                    {
                        text: 'Golang入门基础教程🧑‍🚀',
                        link: '/golang/'
                    }
                ]
            },
            {
                text: 'Golang(杂谈)',
                items: [
                    {
                        text: 'GoLand 控制台输出中文乱码的解决方案👿',
                        link: '/golang-note/GoLand 控制台输出中文乱码的解决方案.md'
                    },
                    {
                        text: 'Go语言生成二维码🤖',
                        link: '/golang-note/Go语言生成二维码.md'
                    },
                    {
                        text: 'Golang 新手可能会踩的 50+ 个坑👽',
                        link: '/golang-note/Golang 新手可能会踩的 50+ 个坑.md'
                    },
                    {
                        text: 'GoLand 解决无法导入自定义包的问题🤬',
                        link: '/golang-note/GoLand 解决无法导入自定义包的问题.md'
                    }
                ]
            },
            {
                text: 'Java(杂谈)',
                items: [
                    {
                        text: 'Springboot引用外部jar包并打包成jar程序运行😺',
                        link: '/java-note/Springboot引用外部jar包并打包成jar程序运行.md'
                    },
                    {
                        text: 'Error:java: 无效的源发行版: 11错误🙀',
                        link: '/java-note/Error-java无效的源发行版11错误.md'
                    },
                    {
                        text: '基于Spring Aop实现用户操作日志监控🙉',
                        link: '/java-note/基于Spring Aop实现用户操作日志监控.md'
                    },
                    {
                        text: 'fastjson基本使用🤠',
                        link: '/java-note/fastjson基本使用.md'
                    }


                ]
            }
        ]
    },
    {
        text: '中间件',
        ariaLabel: '中间件',
        items: [
            {
                text: 'Redis',
                items: [
                    {
                        text: 'Redis基础到实战(保姆级)🎉',
                        link: '/redis/'
                    },
                    {
                        text: 'Redis操作速查手册🍒',
                        link: '/redis/other/Redis操作速查手册.md'
                    }
                ]
            },
            {
                text: '其他',
                items: [
                    {
                        text: '从 0.x 迁移',
                        link: '/zh/miscellaneous/migration-guide.html'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                    }
                ]
            }
        ]
    },
    {
        text: '数据库',
        ariaLabel: '中间件',
        items: [
            {
                text: 'Mysql(杂谈)',
                items: [
                    {
                        text: 'MySQL索引及实际应用🎉',
                        link: '/mysql-note/MySQL索引及实际应用.md'
                    }
                ]
            },
            {
                text: 'Oracle(杂谈)',
                items: [
                    {
                        text: '从 0.x 迁移',
                        link: '/zh/miscellaneous/migration-guide.html'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                    }
                ]
            }
        ]
    },
    {
        text: '小册|部署|PDF',
        ariaLabel: '小册|部署|PDF',
        items: [
            {
                text: 'Linux',
                items: [
                    {
                        text: 'Linux常用操作速查❤🐦',
                        link: '/linux/Linux常用操作速查.md'
                    }
                ]
            },
            {
                text: 'Linux小册(环境安装)',
                items: [
                    {
                        text: 'java环境安装🌱',
                        link: '/linux/deploy/java环境安装.md'
                    },
                    {
                        text: 'redis环境安装(docker)🐳',
                        link: '/linux/deploy/redis环境安装.md'
                    }
                ]
            },
            {
                text: 'PDF',
                items: [
                    {
                        text: '面试知识点💤💭',
                        link: '/mianshi/'
                    }
                ]
            }
        ]
    },
    {
        text: '摄影📷🎥',
        ariaLabel: '摄影📷🎥',
        items: [
            {
                text: '照片',
                items: [
                    {
                        text: '近期拍摄的相片(后期)🏳️‍',
                        link: '/camera/'
                    }
                ]
            },
            {
                text: '摄影',
                items: [
                    {
                        text: '近期拍摄的视频🏴‍',
                        link: '/movie_camera/'
                    }
                ]
            },
            {
                text: '杂谈',
                items: [
                    {
                        text: '后期调色🐳‍',
                        link: '/camera_color/后期调色.md'
                    }
                ]
            }
        ]
    }
    /*{
        text: '了解更多',
        ariaLabel: '了解更多',
        items: [
            {
                text: 'API',
                items: [
                    {
                        text: 'CLI',
                        link: '/zh/api/cli.html'
                    },
                    {
                        text: 'Node',
                        link: '/zh/api/node.html'
                    }
                ]
            },
            {
                text: '开发指南',
                items: [
                    {
                        text: '本地开发',
                        link: '/zh/miscellaneous/local-development.html'
                    },
                    {
                        text: '设计理念',
                        link: '/zh/miscellaneous/design-concepts.html'
                    },
                    {
                        text: 'FAQ',
                        link: '/zh/faq/'
                    },
                    {
                        text: '术语',
                        link: '/zh/miscellaneous/glossary.html'
                    }
                ]
            },
            {
                text: '其他',
                items: [
                    {
                        text: '从 0.x 迁移',
                        link: '/zh/miscellaneous/migration-guide.html'
                    },
                    {
                        text: 'Changelog',
                        link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                    }
                ]
            }
        ]
    },*/
   /* {
        text: '0.x',
        link: 'https://v0.vuepress.vuejs.org/'
    }*/
];
