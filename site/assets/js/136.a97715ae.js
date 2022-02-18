(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{495:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"主题的继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题的继承"}},[t._v("#")]),t._v(" 主题的继承 "),a("Badge",{attrs:{type:"warning",text:"beta"}})],1),t._v(" "),a("h2",{attrs:{id:"动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("我们有两个主要的理由来支持这个特性：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("VuePress 为开发者提供了一个"),a("RouterLink",{attrs:{to:"/theme/default-theme-config.html"}},[t._v("默认主题")]),t._v("，它能在大多数场景下满足了文档编写者的需求。即便如此，仍然还是会有不少用户选择将其 eject 出来进行修改，即使他们可能只是想要修改其中的某个组件。")],1)]),t._v(" "),a("li",[a("p",[t._v("在 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/custom-themes.html#site-and-page-metadata",target:"_blank",rel:"noopener noreferrer"}},[t._v("0.x"),a("OutboundLink")],1),t._v(" 中，主题的入口只需要一个 "),a("code",[t._v("Layout.vue")]),t._v("，所以我们可以通过包装另一个主题的 "),a("code",[t._v("Layout.vue")]),t._v(" 来实现简单的拓展。")]),t._v(" "),a("p",[t._v("到了 1.x 中，一个主题的元素开始变得复杂，我们开始有了"),a("RouterLink",{attrs:{to:"/theme/option-api.html"}},[t._v("主题级别的配置")]),t._v("，它支持为主题添加插件、自定义 GlobalLayout 等。除此之外，我们还有一些引入了主题开发的 "),a("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#目录结构"}},[t._v("目录结构的约定")]),t._v("，如 "),a("code",[t._v("styles/index.styl")]),t._v("，在这样的背景下，我们无法使用 0.x 的方式来实现继承了。")],1)])]),t._v(" "),a("p",[t._v("因此，我们需要提供一种合理、可靠的主题继承方案。")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("为了介绍本节，我们先几个基本概念：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("原子主题")]),t._v("：即父主题，类似默认主题这种完全从头实现的主题。")]),t._v(" "),a("li",[a("strong",[t._v("派生主题")]),t._v("：即子主题，基于父主题创建的主题；")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("主题继承暂时不支持高阶继承，也就是说，一个派生主题无法被继承。")])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("假设你想创建一个继承自 VuePress 默认主题的派生主题，你只需要在你的主题配置中配置 "),a("RouterLink",{attrs:{to:"/theme/option-api.html#extend"}},[t._v("extend")]),t._v(" 选项：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/theme/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  extend"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/theme-default'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"继承策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承策略"}},[t._v("#")]),t._v(" 继承策略")]),t._v(" "),a("p",[t._v('父主题的所有能力都会"传递"给子主题，对于文件级别的约定，子主题可以通过在同样的位置创建同名文件来覆盖它；对于某些主题配置选项，如 '),a("RouterLink",{attrs:{to:"/theme/option-api.html#globallayout"}},[t._v("globalLayout")]),t._v("，子主题也可以通过同名配置来覆盖它。")],1),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/theme/writing-a-theme.html#目录结构"}},[t._v("文件级别的约定")]),t._v("如下：")],1),t._v(" "),a("ul",[a("li",[a("strong",[t._v("全局组件")]),t._v("，即放置在 "),a("code",[t._v("theme/global-components")]),t._v(" 中的 Vue 组件。")]),t._v(" "),a("li",[a("strong",[t._v("组件")]),t._v("，即放置在 "),a("code",[t._v("theme/components")]),t._v(" 中的 Vue 组件。")]),t._v(" "),a("li",[a("strong",[t._v("全局的样式和调色板")]),t._v("，即放置在 "),a("code",[t._v("theme/styles")]),t._v(" 中的 "),a("code",[t._v("index.styl")]),t._v(" 和 "),a("code",[t._v("palette.styl")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("HTML 模板")]),t._v("，即放置在 "),a("code",[t._v("theme/templates")]),t._v(" 中的 "),a("code",[t._v("dev.html")]),t._v(" 和 "),a("code",[t._v("ssr.html")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("主题水平的客户端增强文件")]),t._v("，即 "),a("code",[t._v("theme/enhanceApp.js")])])]),t._v(" "),a("p",[t._v("对于主题配置，能被子主题覆盖的配置选项如下：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/theme/option-api.html#devtemplate"}},[t._v("devTemplate")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/theme/option-api.html#ssrtemplate"}},[t._v("ssrTemplate")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/theme/option-api.html#globallayout"}},[t._v("globalLayout")])],1)]),t._v(" "),a("p",[t._v("无法被子主题覆盖的主题配置选项如下：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/theme/option-api.html#extend"}},[t._v("extend")])],1)]),t._v(" "),a("p",[t._v("需要特殊处理的主题选项：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/theme/option-api.html#plugins"}},[t._v("plugins")]),t._v("：参见 "),a("a",{attrs:{href:"#%E6%8F%92%E4%BB%B6%E7%9A%84%E8%A6%86%E7%9B%96"}},[t._v("插件的覆盖")]),t._v("。")],1)]),t._v(" "),a("h2",{attrs:{id:"插件的覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件的覆盖"}},[t._v("#")]),t._v(" 插件的覆盖")]),t._v(" "),a("p",[t._v("对于父主题中的 "),a("RouterLink",{attrs:{to:"/theme/option-api.html#plugins"}},[t._v("plugins")]),t._v(", 子主题不会直接覆盖它，但是插件的选项可以通过创建同名的插件配置来覆盖。")],1),t._v(" "),a("p",[t._v("举例来说，如果父主题具有如下配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parentThemePath/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      searchMaxSuggestions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("那么子主题可以通过如下方式来修改该插件的默认值：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/theme/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      searchMaxSuggestions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("也可以选择禁用它：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/theme/index.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/search'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("一般情况下，你都不需要这样做，除非你明确知道禁用父主题中的插件不会带来问题。")])]),t._v(" "),a("h2",{attrs:{id:"组件的覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的覆盖"}},[t._v("#")]),t._v(" 组件的覆盖")]),t._v(" "),a("p",[t._v("你可能想要在子主题中覆盖父主题中的同名组件，默认情况下，当父主题中的组件都使用相对路径引用其他组件时，你将不可能做到这一点，因为你无法在运行时修改父主题的代码。")]),t._v(" "),a("p",[t._v("VuePress 则通过一种巧妙的方式实现了这种需求，但这对父主题有一定的要求——"),a("strong",[t._v("所有的组件都必须使用 "),a("code",[t._v("@theme")]),t._v(" 别名来引用其他组件")]),t._v("。")]),t._v(" "),a("p",[t._v("举例来说，如果你正在开发的一个原子主题的结构如下：")]),t._v(" "),a("pre",{staticClass:"vue-container"},[a("code",[a("p",[t._v("theme\n├── components\n│   ├── "),a("code",[t._v("Home.vue")]),t._v("\n│   ├── "),a("code",[t._v("Navbar.vue")]),t._v("\n│   └── "),a("code",[t._v("Sidebar.vue")]),t._v("\n├── layouts\n│   ├── "),a("code",[t._v("404.vue")]),t._v("\n│   └── "),a("code",[t._v("Layout.vue")]),t._v("\n├── package.json\n└── index.js")]),t._v("\n")])]),a("p",[t._v("那么，在该主题中的任意 Vue 组件中，"),a("strong",[t._v("你都应该通过 "),a("code",[t._v("@theme")]),t._v(" 来访问主题根目录")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Navbar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@theme/components/Navbar.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("在这样的前提下，当你在子主题中同样的位置创建一个 "),a("code",[t._v("Navbar")]),t._v(" 组件时：")]),t._v(" "),a("pre",{staticClass:"vue-container"},[a("code",[a("p",[t._v("theme\n└── components\n   └── "),a("code",[t._v("Navbar.vue")])]),t._v("\n")])]),a("p",[a("code",[t._v("@theme/components/Navbar.vue")]),t._v(" 会自动地映射到子主题中的 Navbar 组件，当你移除这个组件时，"),a("code",[t._v("@theme/components/Navbar.vue")]),t._v(" 又会自动恢复为父主题中的 Navbar 组件。")]),t._v(" "),a("p",[t._v("如此一来，就可以实现轻松地“篡改”一个原子主题的某个部分。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ol",[a("li",[t._v("组件的覆盖，最好直接基于父主题中对应组件的代码来修改；")]),t._v(" "),a("li",[t._v("目前，在本地开发子主题，每次创建或移除组件时，你需要手动重启 Dev Server。")])])]),t._v(" "),a("h2",{attrs:{id:"访问父主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问父主题"}},[t._v("#")]),t._v(" 访问父主题")]),t._v(" "),a("p",[t._v("你可以使用 "),a("code",[t._v("@parent-theme")]),t._v(" 来访问父主题的根路径，下述示例展示了在子主题中创建一个同名的布局组件，并简单使用父主题中的 slot，"),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/theme-vue"),a("OutboundLink")],1),t._v(" 便是通过这种方式创造的。")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- .vuepress/theme/components/Foo.vue --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ParentLayout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ParentLayout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ParentLayout "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@parent-theme/layouts/Layout.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Foo "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@theme/components/Foo.vue'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ParentLayout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Foo\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);