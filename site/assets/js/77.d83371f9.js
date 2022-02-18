(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{483:function(n,s,t){"use strict";t.r(s);var a=t(7),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"linux常用操作速查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux常用操作速查"}},[n._v("#")]),n._v(" Linux常用操作速查")]),n._v(" "),t("h2",{attrs:{id:"linux-安装-centos7-及克隆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-centos7-及克隆"}},[n._v("#")]),n._v(" Linux 安装 Centos7 及克隆")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/babyxue/article/details/80970526",target:"_blank",rel:"noopener noreferrer"}},[n._v("^安装教程1"),t("OutboundLink")],1),n._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/babyxue/article/details/80970526",target:"_blank",rel:"noopener noreferrer"}},[n._v("^安装教程2"),t("OutboundLink")],1),n._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/lushizhuo9655/article/details/90477613",target:"_blank",rel:"noopener noreferrer"}},[n._v("^ping不通外网解决方案"),t("OutboundLink")],1),n._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/Lynette/p/9470800.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("^机器克隆克隆"),t("OutboundLink")],1)]),n._v(" "),t("h2",{attrs:{id:"linux-常用命令-centos7-x版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令-centos7-x版本"}},[n._v("#")]),n._v(" Linux 常用命令 --- centos7 .x版本")]),n._v(" "),t("h2",{attrs:{id:"网络服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络服务"}},[n._v("#")]),n._v(" 网络服务")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("查看IP信息\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ip")]),n._v(" a\n\n网络连通性测试\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ping")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" 目标主机\n\n设置网络信息\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("vi")]),n._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n\n重启network网络服务\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("service")]),n._v(" network restart\n")])])]),t("h2",{attrs:{id:"防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[n._v("#")]),n._v(" 防火墙")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("查看防火墙状态\nsystemctl status firewalld.service \n\n关闭防火墙\nsystemctl stop firewalld.service \n\n禁止开机启动\nsystemctl disable firewalld.service\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("、开放端口\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("public --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("5672")]),n._v("/tcp --permanent   "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 开放5672端口")]),n._v("\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("public --remove-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("5672")]),n._v("/tcp --permanent  "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#关闭5672端口")]),n._v("\nfirewall-cmd --reload   "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 配置立即生效")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v("、查看防火墙所有开放的端口\nfirewall-cmd --zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("public --list-ports\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v(".、关闭防火墙\n如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估\nsystemctl stop firewalld.service\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4")]),n._v("、查看防火墙状态\nfirewall-cmd --state\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),n._v("、查看监听的端口\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("netstat")]),n._v(" -lnpt\n\nPS:centos7默认没有 "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("netstat")]),n._v(" 命令，需要安装 net-tools 工具，yum "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" -y net-tools\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6")]),n._v("、检查端口被哪个进程占用\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("netstat")]),n._v(" -lnpt "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("5672")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("7")]),n._v("、查看进程的详细信息\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6832")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("8")]),n._v("、中止进程\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("kill")]),n._v(" -9 "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6832")]),n._v("\n")])])]),t("h2",{attrs:{id:"目录操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录操作命令"}},[n._v("#")]),n._v(" 目录操作命令")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("查看工作目录（Print Working Directory）\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("pwd")]),n._v("\n\n切换工作目录（Change Directory）\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("cd")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("目录位置"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n\n列表（List）显示目录内容\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ls")]),n._v("\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("目录或文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n\n创建新的目录（Make Directory）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("-p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("/路径/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("目录名\n\n统计目录及文件的空间占用情况（estimate "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("file")]),n._v(" space usage）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("du")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("目录或文件名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n\n常用命令选项\n-l ：详细信息显示\n-a：显示所有子目录和文件的信息，包括隐藏文件\n-A：类似于“-a”，但不显示“.”和“…”目录的信息\n-R：递归显示内容\n")])])]),t("h2",{attrs:{id:"文件操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件操作命令"}},[n._v("#")]),n._v(" 文件操作命令")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("新建空文件，或更新文件时间标记\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("touch")]),n._v(" 文件名\n\n查看文件类型\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("file")]),n._v(" 文件名\n\n复制（copy）文件或目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" 源文件或目录… 目标文件或目录\n\n常用命令选项\n-r：递归复制整个目录树\n-p：保持源文件的属性不变\n-f：强制覆盖目标同名文件或目录\n-i：需要覆盖文件或目录时进行提醒\n\n删除（Remove）文件或目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("rm")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" 文件或目录\n\n常用命令选项\n-f：强行删除文件，不进行提醒\n-i：删除文件时提醒用户确认\n-r：递归删除整个目录树\n\n移动（Move）文件或目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mv")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(". 源文件或目录… 目标文件或目录\n\n如果目标位置与源位置相同，则相当于改名\n\n显示系统命令所在目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("which")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" command（命令名称）\n\n常用命令选项\n-a：将所有由"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[n._v("PATH")]),n._v("路径中可以找到的指令均列出，而不止第一个被找到的指令名称\n\nfind查找\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("find")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("路径"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("表达式"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("\n\nfind查找的特点\n从指定路径下递归向下搜索文件\n支持按照各种条件方式查找\n支持对查找到的文件再进一步的使用指令操作\n（例如：删除、统计大小、复制等）\n\n常用命令选项\n-name 根据文件名查找\n-user 根据文件拥有者查找\n-group 根据文件所属组寻找文件\n-perm 根据文件权限查找文件\n-size 根据文件大小查找文件\n-type 根据文件类型查找（f-普通文件，c-字符设备文件，b-块设备文件，l-链接文件，d-目录）\n-o 表达式或\n-and 表达式与\n")])])]),t("h2",{attrs:{id:"文件内容操作命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件内容操作命令"}},[n._v("#")]),n._v(" 文件内容操作命令")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("显示出文件的全部内容\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("cat")]),n._v(" \n\n全屏方式分页显示文件内容\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("more")]),n._v("\n\n交互操作方法\n按Enter键向下逐行滚动\n按空格键向下翻一屏、按b键向上翻一屏\n按q键退出\n\n与more命令相同\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("less")]),n._v("\n\n查看文件开头的一部分内容（默认为10行）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("head")]),n._v(" -n 文件名\n\n查看文件结尾的少部分内容（默认为10行）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tail")]),n._v(" -n 文件名\n\n统计文件中的单词数量（Word Count）等信息\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("wc")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" 目标文件\n\n常用命令选项\n-l：统计行数\n-w：统计单词个数\n-c：统计字节数\n\n查找文件里符合条件的字符串\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("关键字"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),n._v("文件…"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v("\n\n常用选项\n-c:计算匹配关键字的行数\n-i:忽略字符大小写的差别\n-n:显示匹配的行及其行号\n-s:不显示不存在或不匹配文本的错误信息\n-h: 查询多个文件时不显示文件名\n-l:查询文件时只显示匹配字符所在的文件名\n–color"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("auto:将找到的关键字部分加上颜色显示\n")])])]),t("h2",{attrs:{id:"压缩命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩命令"}},[n._v("#")]),n._v(" 压缩命令")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("压缩（解压）文件或目录，压缩文件后缀为gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("gzip")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" 压缩（解压缩）的文件名\n\n常用选项\n-d将压缩文件解压（decompress）\n-l显示压缩文件的大小，未压缩文件的大小，压缩比（list）\n-v显示文件名和压缩比（verbose）\n-num用指定的数字num调整压缩的速度，-1或–fast表示最快压缩方法（低压缩比），-9或–best表示最慢压缩方法（高压缩比）。系统缺省值为6\n\n压缩（解压）文件或目录，压缩文件后缀为bz2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("bzip2")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("-cdz"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" 文档名\n\n常用选项\n-c将压缩的过程产生的数据输出到屏幕上\n-d解压缩的参数（decompress）\n-z压缩的参数（compress）\n-num 用指定的数字num调整压缩的速度，-1或–fast表示最快压缩方法（低压缩比），-9或–best表示最慢压缩方法（高压缩比）。系统缺省值为6\n\n压缩、解压文件\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("cvf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\t压缩名 文件名（压缩文件）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("tar")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("xvf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("..")]),n._v(".\t文件名.tar（解压文件）\n\n解压zip\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("unzip")]),n._v(" 文件名（压缩文件） /abeOtifq7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("W\n\n常用命令选项\n-c：创建 .tar 格式的包文件\n-x：解开.tar格式的包文件\n-v：输出详细信息\n-f：表示使用归档文件\n-z：用Gzip压缩或解压\n-j：用bzip2压缩或解压\n")])])]),t("h2",{attrs:{id:"用户和组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户和组"}},[n._v("#")]),n._v(" 用户和组")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("保存用户信息的文件：\n/etc/passwd\n\n保存密码的文件：\n/etc/shadow\n\n保存用户组的文件：\n /etc/group\n\n 保存用户组密码的文件：\n/etc/gshadow\n\n用户配置文件：\n/etc/default/useradd\n\n新建组和用户\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("groupadd")]),n._v(" mysql\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("useradd")]),n._v(" -r -g mysql mysql\n更改目录所属群组\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("chown")]),n._v(" -R mysql:mysql /usr/local/mysql\n更改权限\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("chmod")]),n._v(" -R "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("755")]),n._v(" /usr/local/mysql\n\n\n\n\n\n")])])]),t("h2",{attrs:{id:"软件包管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件包管理"}},[n._v("#")]),n._v(" 软件包管理")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("RPM命令使用\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("rpm")]),n._v("\n\n-i：安装应用程序（install）\n-e：卸载应用程序（erase）\n-vh：显示安装进度；（verbose hash）\n-U：升级软件包；（update）\n-qa: 显示所有已安装软件包（query all）\n\nYUM命令\nYum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE、CentOS中的Shell前端软件包管理器。基於RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。\n\nyum  "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v("  gcc-c++\nyum  remove  gcc-c++\nyum  update  gcc-c++\n")])])]),t("h2",{attrs:{id:"内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[n._v("#")]),n._v(" 内存管理")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("查看内存"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("其中free字段为0的话内存就被吃完了 buff/cache 字段表示可以释放的资源"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("free")]),n._v(" -g\n\n查看CUP使用情况 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("top")]),n._v("\n最右侧的%id表示剩余，若很低，则表示cpu被吃完了，在top界面按shift+p对进程使用cpu排序，能看到哪些进程占用cpu较多\n然后kill占用cpu多的进程\n\n首先我们需要使用sync指令，将所有未写的系统缓冲区写到磁盘中，包含已修改的 i-node、已延迟的块 I/O 和读写映射文件。否则在释放缓存的过程中，可能会丢失未保存的文件。\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#sync")]),n._v("\n\n接下来，我们需要将需要的参数写进/proc/sys/vm/drop_caches文件中，比如我们需要释放所有缓存，就输入下面的命令：\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#echo 3 > /proc/sys/vm/drop_caches")]),n._v("\n此指令输入后会立即生效，可以查询现在的可用内存明显的变多了。\n\n要查询当前缓存释放的参数，可以输入下面的指令：\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#cat /proc/sys/vm/drop_caches")]),n._v("\n")])])]),t("h2",{attrs:{id:"进程和端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程和端口"}},[n._v("#")]),n._v(" 进程和端口")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[n._v("根据程序名称查询进程ID\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" xx\n\n根据端口查看哪个进程占用了端口\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("netstat")]),n._v(" -nap "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6379")]),n._v("\ntcp6   "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v(" :::6379          :::*            LISTEN      "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2801")]),n._v("/docker-proxy\n\n根据进程id查端口情况：\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("netstat")]),n._v(" -nap "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("|")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("grep")]),n._v(" pid\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("root@yxt0002 data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# netstat -nap | grep 3982")]),n._v("\ntcp6       "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("0")]),n._v(" :::9999                 :::*                    LISTEN      "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3982")]),n._v("/node /home/dat \nunix  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("         STREAM     CONNECTED     "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3686798")]),n._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3982")]),n._v("/node /home/dat  \nunix  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("         STREAM     CONNECTED     "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3686800")]),n._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3982")]),n._v("/node /home/dat  \nunix  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("         STREAM     CONNECTED     "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3686796")]),n._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3982")]),n._v("/node /home/dat  \nunix  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v("         STREAM     CONNECTED     "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3686802")]),n._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3982")]),n._v("/node /home/dat \n\n杀死进程 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("kill")]),n._v(" -9 pid\n\n查看某一端口的占用情况\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("lsof")]),n._v(" -i:8080\n\n例如\nCOMMAND PID "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[n._v("USER")]),n._v(" FD TYPE DEVICE SIZE/OFF NODE NAME\njava "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3511")]),n._v(" root 46u IPv6 "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("31351")]),n._v(" 0t0 TCP *:webcache "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\nCOMMAND：进行成名，如上说明8080被一个java进程占用\nPID：进程的ID，一般杀掉进程时就是指定进程的PID\n"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[n._v("USER")]),n._v("：进程所有者\n")])])]),t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[n._v("#")]),n._v(" Docker")]),n._v(" "),t("h2",{attrs:{id:"redis-缓存清理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-缓存清理"}},[n._v("#")]),n._v(" Redis 缓存清理")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(".查询所有容器\n\n    docker "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" -a\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v(".进入redis客户端\n\n   docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("exec")]),n._v(" -it  xxx（ID）  redis-cli\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v(".清除缓存\n    flushall  所有数据库\n\n    flushdb  当前库\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4")]),n._v(".清除指定key\n\n   查询所有key：keys *\n\n   删除指定key：del xxx（key）\n\n\n")])])]),t("p",[n._v("[^没有权限输入]: auth Occ2018")]),n._v(" "),t("h2",{attrs:{id:"docker-配置-redis-自启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-配置-redis-自启动"}},[n._v("#")]),n._v(" Docker 配置 Redis 自启动")]),n._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(".获取redis镜像\n\ndocker pull redis\n\n指定版本号：\n\ndocker pull redis:4.0.9\n不加版本号默认获取最新版本，也可以使用 docker search redis 查看镜像来源\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v(".查看本地镜像 \ndocker images\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v(".然后启动容器，做映射\n\n①创建配置文件目录存放redis.conf，文件从官网下载。\n\n \n②创建文件夹,新建配置文件贴入从官网下载的配置文件并修改\nhttp://download.redis.io/redis-stable/redis.conf\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" /usr/local/docker\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("vi")]),n._v(" /usr/local/docker/redis.conf\n\n \n③修改启动默认配置"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("从上至下依次"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("：\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("bind")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("127.0")]),n._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#注释掉这部分，这是限制redis只能本地访问")]),n._v("\n\nprotected-mode no "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#默认yes，开启保护模式，限制为本地访问")]),n._v("\n\ndaemonize no"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#默认no，改为yes意为以守护进程方式启动，可后台运行，除非kill进程，改为yes会使配置文件方式启动redis失败")]),n._v("\n\ndatabases "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("16")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#数据库个数（可选），我修改了这个只是查看是否生效。。")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("dir")]),n._v("  ./ "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#输入本地redis数据库存放文件夹（可选）")]),n._v("\n\nappendonly "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("yes")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#redis持久化（可选）")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4")]),n._v(".docker启动redis命令\n\ndocker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6379")]),n._v(":6379 --name myredis -v /usr/local/docker/redis.conf:/etc/redis/redis.conf -v /usr/local/docker/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("yes")]),n._v("\n\nhttps://www.cnblogs.com/conswin/p/11547120.html\n\n命令解释说明：\n\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("6379")]),n._v(":6379 端口映射：前表示主机部分，：后表示容器部分。\n\n--name myredis  指定该容器名称，查看和进行操作都比较方便。\n\n-v 挂载目录，规则与端口映射相同。\n\n为什么需要挂载目录：个人认为docker是个沙箱隔离级别的容器，这个是它的特点及安全机制，不能随便访问外部（主机）资源目录，所以需要这个挂载目录机制。\n\n-d redis 表示后台启动redis\n\nredis-server /etc/redis/redis.conf  以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录/usr/local/docker/redis.conf\n\n\n--appendonly "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("yes")]),n._v("  开启redis 持久化\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),n._v(".查看是否运行成功\n\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ps")]),n._v(" 查看运行的容器\ndockers logs myredis/27ddba64faa6  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("容器名称/id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);