(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{474:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"程序员和数学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序员和数学"}},[t._v("#")]),t._v(" 程序员和数学")]),t._v(" "),a("p",[t._v("作者：小傅哥\n"),a("br"),t._v("博客："),a("a",{attrs:{href:"https://bugstack.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bugstack.cn"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("沉淀、分享、成长，让自己和他人都能有所收获！😄")])]),t._v(" "),a("h2",{attrs:{id:"一、前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),a("p",[a("code",[t._v("数学离程序员有多近？")])]),t._v(" "),a("p",[t._v("ifelse也好、for循环也罢，代码可以说就是对"),a("strong",[t._v("数学逻辑的具体实现")]),t._v("。所以敲代码的程序员几乎就离不开数学，难易不同而已。")]),t._v(" "),a("p",[t._v("那数学不好就写不了代码吗😳？不，一样可以写代码，可以写出更多的"),a("code",[t._v("CRUD")]),t._v("出来。那你不要总觉得是产品需求简单所以你的实现过程才变成了增删改查，往往也是因为你还不具备可扩展、易维护、高性能的代码实现方案落地能力，才使得你小小年纪写出了更多的"),a("code",[t._v("CRUD")]),t._v("！")]),t._v(" "),a("p",[t._v("与一锥子买卖的小作坊相比，大厂和超级大厂更会注重数学能力。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/7745132909255f75eec729e3fb121144.png",alt:"first 10-digit prime found in consecutive digits of e"}})]),t._v(" "),a("p",[a("strong",[t._v("2004年")]),t._v("，在硅谷的交通动脉 101 公路上突然出现一块巨大的广告牌，上面是一道数学题："),a("code",[t._v("{e 的连续数字中最先出现的 10 位质数}")]),t._v(".com。")]),t._v(" "),a("p",[t._v("广告：这里的 e 是数学常数，自然对数的底数，无限不循环小数。这道题的意思就是，找出 e 中最先出现的 10 位质数，然后可以得出一个网址。进入这个网址会看到 Google 为你出的第二道数学题，成功解锁这步 Google 会告诉你，"),a("code",[t._v("我们或许是”志同道合“的人")]),t._v("，你可以将简历发到这个邮箱，我们一起做点改变世界的事情。")]),t._v(" "),a("p",[a("em",[t._v("计算 e 值可以通过泰勒公式推导出来：e^x≈1 + x + x^2/2! + x^3/3! +……+ x^n/n! (1) 推导计算过程还包括"),a("code",[t._v("埃拉托色尼筛选法(the Sieve of Eratosthenes)")]),t._v("、"),a("code",[t._v("线性筛选法")]),t._v("的使用。感兴趣的小伙伴可以用代码实现下。")])]),t._v(" "),a("h2",{attrs:{id:"二、把代码写好的四步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、把代码写好的四步"}},[t._v("#")]),t._v(" 二、把代码写好的四步")]),t._v(" "),a("p",[a("code",[t._v("业务提需求、产品定方案、研发做实现。")]),t._v("最终这个系统开发的怎么样是由三方共同决定的！")]),t._v(" "),a("ul",[a("li",[t._v("地基挖的不好，楼就盖不高")]),t._v(" "),a("li",[t._v("砖头摆放不巧，楼就容易倒")]),t._v(" "),a("li",[t._v("水电走线不妙，楼就危险了")]),t._v(" "),a("li",[t._v("格局设计不行，楼就卖不掉")])]),t._v(" "),a("p",[t._v("这里的地基、砖头、水电、格局，对应的就是，数据结构、算法逻辑、设计模式、系统架构。从下到上相互依赖、相互配合，只有这一层做好，下一层才好做！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/81932358d52d2f0d5e02429983036c61.png",alt:"图 20-2 代码实现过程分层"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("数据结构")]),t._v("：高矮胖瘦、长宽扁细，数据的存放方式，是一套程序开发的核心基础。不合理的设计往往是从数据结构开始，哪怕你仅仅是使用数据库存放业务信息，也一样会影响到将来各类数据的查询、汇总等实现逻辑的难易。")]),t._v(" "),a("li",[a("strong",[t._v("算法逻辑")]),t._v("：是对数据结构的使用，合适的数据结构会让算法实现过程降低时间复杂度。可能你现在的多层for循环在合适的算法过程下，能被优化为更简单的方式获取数据。"),a("em",[t._v("注意：算法逻辑实现，并不一定就是排序、归并，还有你实际业务的处理流程。")])]),t._v(" "),a("li",[a("strong",[t._v("设计模式")]),t._v("：可以这么说，不使用设计模式你一样能写代码。但你愿意看到满屏幕的ifelse判断调用，还是喜欢像膏药一样的代码，粘贴来复制去？那么设计模式这套通用场景的解决方案，就是为你剔除掉代码实现过程中的恶心部分，让整套程序更加易维护、易扩展。"),a("em",[t._v("就是开发完一个月，你看它你还认识！")])]),t._v(" "),a("li",[a("strong",[t._v("系统架构")]),t._v("：描述的是三层MVC，还是四层DDD。我对这个的理解就是家里的三居还是四局格局，MVC是我们经常用的大家都熟悉，DDD无非就是家里多了个书房，把各自属于哪一个屋子的摆件规整到各自屋子里。"),a("em",[t._v("那么乱放是什么效果呢，就是自动洗屁屁马桶🚽给按到厨房了，再贵也格楞子！")]),t._v(" 好，那么我们在延展下，如果你的卫生间没有流出下水道咋办？是不这个地方的数据结构就是设计缺失的，而到后面再想扩展就难了吧！")])]),t._v(" "),a("p",[t._v("所以，研发在承接业务需求、实现产品方案的时候。压根就不只是在一个房子的三居或者四居格局里，开始随意码砖。")]),t._v(" "),a("p",[t._v("没有合理的数据结构、没有优化的算法逻辑、没有运用的设计模式，最终都会影响到整个系统架构变得臃肿不堪，调用混乱。在以后附加、迭代、新增的需求下，会让整个系统问题不断的放大，当你想用重构时，就有着千丝万缕般调用关系。 "),a("em",[t._v("重构就不如重写了！")])]),t._v(" "),a("h2",{attrs:{id:"三、for循环没算法快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、for循环没算法快"}},[t._v("#")]),t._v(" 三、for循环没算法快")]),t._v(" "),a("p",[t._v("在《编程之美》一书中，有这样一道题。求：1~n中，1出现的次数。比如：1~10，1出现了两次。")]),t._v(" "),a("h3",{attrs:{id:"_1-for-循环实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-for-循环实现"}},[t._v("#")]),t._v(" 1. for 循环实现")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" startTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1的个数："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"计算耗时："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"毫秒"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用 for 循环的实现过程很好理解，就是往死了循环。之后把循环到的数字按照字符串拆解，判断每一位是不是数字，是就+1。这个过程很简单，但是时间复杂很高。")]),t._v(" "),a("h3",{attrs:{id:"_2-算法逻辑实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-算法逻辑实现"}},[t._v("#")]),t._v(" 2. 算法逻辑实现")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/a6b31abf07647820fc97ac76a2aa3da7.png",alt:"图 20-3 1的个数循环规则"}})]),t._v(" "),a("p",[t._v("如图 20-3 所示，其实我们能发现这个1的个数在100、1000、10000中是有规则的循环出现的。11、12、13、14或者21、31、41、51，以及单个的1出现。最终可以得出通用公式："),a("code",[t._v("abcd...=(abc+1)*1+(ab+1)*10+(a+1)*100+(1)*1000...")]),t._v("，abcd代表位数。另外在实现的过程还需要考虑比如不足100等情况，例如98、1232等。")]),t._v(" "),a("p",[a("strong",[t._v("实现过程")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" startTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" saveNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" countNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" copyNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lastNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是0那么正好是少了一次所以num不加1了")]),t._v("\n        countNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" saveNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是1说明当前数内少了一次所以num不加1，而且当前1所在位置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有1的个数，就是去除当前1最高位，剩下位数，的个数。")]),t._v("\n        countNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" saveNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" copyNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" saveNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果非1非0.直接用公式计算")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// abcd...=(abc+1)*1+(ab+1)*10+(a+1)*100+(1)*1000...")]),t._v("\n        countNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" saveNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    saveNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1的个数："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" countNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"计算耗时："')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"毫秒"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在《编程之美》一书中还不只这一种算法，感兴趣的小伙伴可以查阅。"),a("em",[t._v("但自己折腾实现后的兴奋感更强哦！")])]),t._v(" "),a("h3",{attrs:{id:"_3-耗时曲线对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-耗时曲线对比"}},[t._v("#")]),t._v(" 3. 耗时曲线对比")]),t._v(" "),a("p",[t._v("按照两种不同方式的实现逻辑，我们来计算1000、10000、10000到一个亿，求1出现的次数，看看两种方式的耗时曲线。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/10c760752fae600ad4afc7536143c124.png",alt:"图 20-4 耗时曲线对比"}})]),t._v(" "),a("ul",[a("li",[t._v("for循环随着数量的不断增大后，已经趋近于无法使用了。")]),t._v(" "),a("li",[t._v("算法逻辑依靠的计算公式，所以无论增加多少基本都会在1~2毫秒内计算完成。")])]),t._v(" "),a("p",[a("strong",[t._v("那么")]),t._v("，你的代码中是否也有类似的地方。如果使用算法逻辑配合适合的数据结构，是否可以替代一些for循环的计算方式，来使整个实现过程的时间复杂度降低。")]),t._v(" "),a("h2",{attrs:{id:"四、java中的算法运用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、java中的算法运用"}},[t._v("#")]),t._v(" 四、Java中的算法运用")]),t._v(" "),a("p",[t._v("在 Java 的 JDK 实现中有很多数学知识的运用，包括数组、链表、红黑树的数据结构以及相应的实现类ArrayList、Linkedlist、HashMap等。当你深入的了解这些类的实现后，会发现它们其实就是使用代码来实现数学逻辑而已。"),a("em",[t._v("就像你使用数学公式来计算数学题一样")])]),t._v(" "),a("p",[t._v("接下来小傅哥就给你介绍几个隐藏在我们代码中的数学知识。")]),t._v(" "),a("h3",{attrs:{id:"_1-hashmap的扰动函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-hashmap的扰动函数"}},[t._v("#")]),t._v(" 1. HashMap的扰动函数")]),t._v(" "),a("p",[a("strong",[t._v("未使用扰动函数")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/74018c3f3eccd2d28b0dca8fd846f751.png",alt:"未使用扰动函数，数据分布"}})]),t._v(" "),a("p",[a("strong",[t._v("已使用扰动函数")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/7f65b497de7a4a5b1f49d9c1e7bdd304.png",alt:"未使用扰动函数，数据分布"}})]),t._v(" "),a("p",[a("strong",[t._v("扰动函数公式")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("描述")]),t._v("：以上这段代码是HashMap中用于获取hash值的扰动函数实现代码。"),a("em",[t._v("HashMap通过哈希值与桶定位坐标")]),t._v(" 那么直接获取哈希值就好了，这里为什么要做一次扰动呢？")]),t._v(" "),a("li",[a("strong",[t._v("作用")]),t._v("：为了证明扰动函数的作用，这里选取了10万单词计算哈希值分布在128个格子里。之后把这128个格子中的数据做图表展示。从实现数据可以看到，在使用扰动函数后，曲线更加平稳了。那么，也就是扰动后哈希碰撞会更小。")]),t._v(" "),a("li",[a("strong",[t._v("用途")]),t._v("：当你有需要把数据散列分散到不同格子或者空间时，又不希望有太严重的碰撞，那么使用扰动函数就非常有必要了。比如你做的一个数据库路由，在分库分表时也是尽可能的要做到散列的。")])]),t._v(" "),a("h3",{attrs:{id:"_2-斐波那契-fibonacci-散列法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-斐波那契-fibonacci-散列法"}},[t._v("#")]),t._v(" 2. 斐波那契（Fibonacci）散列法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/4f1e480313fa68ef73268644f4c8490a.png",alt:"ThreadLocal 中 斐波那契（Fibonacci）散列法"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("描述")]),t._v("：在 ThreadLocal 类中的数据存放，使用的是斐波那契（Fibonacci）散列法 + 开放寻址。之所以使用斐波那契数列，是为了让数据更加散列，减少哈希碰撞。具体来自数学公式的计算求值，"),a("strong",[t._v("公式")]),t._v("："),a("code",[t._v("f(k) = ((k * 2654435769) >> X) << Y对于常见的32位整数而言，也就是 f(k) = (k * 2654435769) >> 28")])]),t._v(" "),a("li",[a("strong",[t._v("作用")]),t._v("：与 HashMap 相比，ThreadLocal的数据结构只有数组，并没有链表和红黑树部分。而且经过我们测试验证，斐波那契散列的效果更好，也更适合 ThreadLocal。")]),t._v(" "),a("li",[a("strong",[t._v("用途")]),t._v("：如果你的代码逻辑中需要存储类似 ThreadLocal 的数据结构，又不想有严重哈希碰撞，那么就可以使用 斐波那契（Fibonacci）散列法。其实除此之外还有，"),a("code",[t._v("除法散列法")]),t._v("、"),a("code",[t._v("平方散列法")]),t._v("、"),a("code",[t._v("随机数法")]),t._v("等。")])]),t._v(" "),a("h3",{attrs:{id:"_3-梅森旋转算法-mersenne-twister"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-梅森旋转算法-mersenne-twister"}},[t._v("#")]),t._v(" 3. 梅森旋转算法（Mersenne twister）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f94eb788652964eff061da6de83a2583.png",alt:"梅森旋转算法的三个阶段，来自CSDN博客网图"}})]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initializes mt[N] with a simple integer seed. This method is")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required as part of the Mersenne Twister algorithm but need")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not be made public.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSeed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" seed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Annoying runtime check for initialisation of internal data")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// caused by java.util.Random invoking setSeed() during init.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is unavoidable because no fields in our instance will")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// have been initialised at this point, not even if the code")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// were placed at the declaration of the member variable.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("N")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ---- Begin Mersenne Twister Algorithm ----")]),t._v("\n    mt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" seed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" mti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("N")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" mti"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        mt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MAGIC_FACTOR1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mti"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mti"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" mti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ---- End Mersenne Twister Algorithm ----")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("梅森旋转算法（Mersenne twister）是一个伪随机数发生算法。由松本真和西村拓士在1997年开发，基于有限二进制字段上的矩阵线性递归。可以快速产生高质量的伪随机数，修正了古典随机数发生算法的很多缺陷。 最为广泛使用Mersenne Twister的一种变体是MT19937，可以产生32位整数序列。")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("描述")]),t._v("：梅森旋转算法分为三个阶段，获得基础的梅森旋转链、对于旋转链进行旋转算法、对于旋转算法所得的结果进行处理。")]),t._v(" "),a("li",[a("strong",[t._v("用途")]),t._v("：梅森旋转算法是R、Python、Ruby、IDL、Free Pascal、PHP、Maple、Matlab、GNU多重精度运算库和GSL的默认伪随机数产生器。从C++11开始，C++也可以使用这种算法。在Boost C++,Glib和NAG数值库中，作为插件提供。")])]),t._v(" "),a("h2",{attrs:{id:"五、程序员数学入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、程序员数学入门"}},[t._v("#")]),t._v(" 五、程序员数学入门")]),t._v(" "),a("p",[t._v("与接触到一个有难度的知识点学起来辛苦相比，是自己不知道自己不会什么！"),a("em",[t._v("就像上学时候老师说，你不会的就问我。我不会啥？我从哪问？一样一样的！")])]),t._v(" "),a("p",[t._v("代码是对数学逻辑的实现，简单的逻辑调用关系是很容易看明白的。但还有那部分你可能不知道的数学逻辑时，就很难看懂了。比如：扰动函数、负载因子、斐波那契（Fibonacci）等，这些知识点的学习都需要对数学知识进行验证，否则也就学个概念，背个理论。")]),t._v(" "),a("p",[t._v("书到用时方恨少，在下还是个宝宝！")]),t._v(" "),a("p",[t._v("那如果你想深入的学习下程序员应该会的数学，推荐给你一位科技博主 Jeremy Kun 花了4年时间，写成一本书 "),a("strong",[t._v("《程序员数学入门》")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/0dafd2949e952e77bd1693f76cdc9619.png",alt:" Jeremy Kun，《程序员数学入门》"}})]),t._v(" "),a("p",[t._v("这本书为程序员提供了大量精简后数学知识，包括：多项式、集合、图论、群论、微积分和线性代数等。同时在wiki部分还包括了抽象代数、离散数学、傅里叶分析和拓扑学等。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/10b1b8185f7bc2139660250cb7e5ec23.png",alt:"《程序员数学入门》书中插图"}})]),t._v(" "),a("p",[t._v("作者表示，如果你本科学过一些数学知识，那么本书还是挺适合你的，不会有什么难度。书中的前三章是基础数学内容，往后的难度依次递增。")]),t._v(" "),a("ul",[a("li",[t._v("书籍获取：关注公众号：bugstack虫洞栈，回复："),a("code",[t._v("程序员数学")]),t._v("，下载这本书")]),t._v(" "),a("li",[t._v("在线Wiki："),a("a",{attrs:{href:"https://jeremykun.com/primers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jeremykun.com/primers/"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"六、总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、总结"}},[t._v("#")]),t._v(" 六、总结")]),t._v(" "),a("ul",[a("li",[t._v("Programming is one of the most difficult branches of applied mathematics; the poorer mathematicians had better remain pure mathematicians. "),a("a",{attrs:{href:"https://www.cs.utexas.edu/users/EWD/transcriptions/EWD04xx/EWD498.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cs.utexas.edu/users/EWD/transcriptions/EWD04xx/EWD498.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("单纯的只会数学写不了代码，能写代码的不懂数学只能是CRUD码农。数学知识帮助你设计数据结构和实现算法逻辑，代码能力帮你驾驭设计模式和架构模型。多方面的知识结合和使用才是码农和工程师的主要区别，也是是否拥有核心竞争力的关键点。")]),t._v(" "),a("li",[t._v("学习知识有时候看不到前面的路有多远，但哪怕是个泥坑，只要你不停的蠕动、折腾、翻滚，也能抓出一条泥鳅。"),a("code",[t._v("知识的路上是发现知识的快乐，还学会知识的成就感，不断的促使你前行")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"七、系列推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、系列推荐"}},[t._v("#")]),t._v(" 七、系列推荐")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://bugstack.cn/itstack-code-life/2021/01/10/%E6%8F%A1%E8%8D%89-%E8%BF%99%E4%BA%9B%E7%A0%94%E5%8F%91%E4%BA%8B%E6%95%8530-%E6%88%91%E9%83%BD%E5%B9%B2%E8%BF%87.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("互联网大厂，线上研发事故总结！"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://bugstack.cn/itstack-code-life/2020/12/13/%E7%A0%81%E5%BE%B7%E9%9C%80%E6%B1%82-%E8%BF%99%E4%B8%8D%E5%B0%B1%E6%98%AF%E4%BA%A7%E5%93%81%E7%BB%99%E6%88%91%E7%95%99%E7%9A%84%E6%95%B0%E5%AD%A6%E4%BD%9C%E4%B8%9A.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("码德，这不就是产品给我留的数学作业！"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://bugstack.cn/interview/2020/08/07/%E9%9D%A2%E7%BB%8F%E6%89%8B%E5%86%8C-%E7%AC%AC3%E7%AF%87-HashMap%E6%A0%B8%E5%BF%83%E7%9F%A5%E8%AF%86-%E6%89%B0%E5%8A%A8%E5%87%BD%E6%95%B0-%E8%B4%9F%E8%BD%BD%E5%9B%A0%E5%AD%90-%E6%89%A9%E5%AE%B9%E9%93%BE%E8%A1%A8%E6%8B%86%E5%88%86-%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HashMap核心知识，扰动函数、负载因子、扩容链表拆分，深度学习"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://bugstack.cn/itstack-demo-netty-3/2020/03/04/Netty+JavaFx%E5%AE%9E%E6%88%98-%E4%BB%BF%E6%A1%8C%E9%9D%A2%E7%89%88%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netty实战，1比1仿桌面版微信聊天"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);