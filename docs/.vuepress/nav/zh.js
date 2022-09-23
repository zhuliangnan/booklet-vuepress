module.exports = [
   /* {
        text: 'notes',
        link: '/notes/'
    },*/
    {
        text: 'Java开发避坑指南📝',
        link: '/java-guide/'
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
        text: '编程语言☕',
        ariaLabel: '编程语言☕',
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
                    },
                    {
                        text: 'spring项目中手动获取bean🤠',
                        link: '/java-note/spring项目中手动获取bean.md'
                    }

                ]
            },
            {
                text: 'Gradle(杂谈)',
                items: [
                    {
                        text: 'Idea实现gradle打jar包😺',
                        link: '/gradle-note/Idea实现gradle打jar包.md'
                    }
                ]
            }
        ]
    },
    {
        text: '中间件🀄',
        ariaLabel: '中间件🀄',
        items: [
            {
                text: 'Redis',
                items: [
                    {
                        text: 'Redis基础到实战(详细)🎮',
                        link: '/redis/'
                    },
                    {
                        text: 'Redis操作速查手册🍒',
                        link: '/redis/other/Redis操作速查手册.md'
                    }
                ]
            }
        ]
    },
    {
        text: '算法⏳',
        ariaLabel: '算法⏳',
        items: [
            {
                text: '算法',
                items: [
                    {
                        text: 'LeetCode',
                        link: '/leetcode/'
                    },
                    {
                        text: '剑指offer',
                        link: '/tooffer/'
                    }
                ]
            }
        ]
    },
    {
        text: '数据库💊',
        ariaLabel: '数据库💊',
        items: [
            {
                text: 'Mysql',
                items: [
                    {
                        text: 'Mysql基础到实战(详细)🕹️',
                        link: '/mysql/'
                    }
                ]
            },
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
                        text: 'ORA-01756报错的解决方案中文编码错误🥝',
                        link: '/oracle-note/ORA-01756报错的解决方案中文编码错误.md'
                    }
                ]
            }
        ]
    },
    {
        text: '容器🐳',
        ariaLabel: '容器🐳',
        items: [
            {
                text: 'docker🐳',
                items: [
                    {
                        text: 'docker操作手册🎉',
                        link: '/docker/'
                    }
                ]
            },
            {
                text: 'docker(杂谈)🐬',
                items: [
                    {
                        text: 'Docker时间与linux不一致🐠',
                        link: '/docker-note/Docker时间与linux不一致.md'
                    }
                ]
            }
        ]
    },
    {
        text: '小册|部署|PDF📜',
        ariaLabel: '小册|部署|PDF📜',
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
                    },
                    {
                        text: 'zookeeper环境安装(linux)🦕',
                        link: '/linux/deploy/zookeeper环境安装.md'
                    },
                    {
                        text: 'KafKa安装教程(Linux)🍉',
                        link: '/linux/deploy/KafKa安装教程.md'
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
        text: '其他💬',
        ariaLabel: '其他💬',
        items: [
            {
                text: 'git',
                items: [
                    {
                        text: 'git-clone-10054或者443问题🥥',
                        link: '/git/git-clone-10054或者443问题.md'
                    }
                ]
            },
            {
                text: '工作流',
                items: [
                    {
                        text: 'Flowable工作流快速入门🎉',
                        link: '/flowable/Flowable工作流快速入门.md'
                    }
                ]
            },
            {
                text: 'npm',
                items: [
                    {
                        text: 'webpack-dev-server不是内部或外部命令，也不是可运行的程序🥥',
                        link: '/front/webpack-dev-server不是内部或外部命令，也不是可运行的程序.md'
                    }
                ]
            },
            {
                text: 'ES',
                items: [
                    {
                        text: 'elasticsearch空index搜索排序报错问题:No mapping found for occurTime in order to sort on🥥',
                        link: '/front/elasticsearch空index搜索排序报错问题Nomapping found for occurTime in order to sort on.md'
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
