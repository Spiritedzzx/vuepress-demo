(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(v,t,l){"use strict";l.r(t);var e=l(43),a=Object(e.a)({},(function(){var v=this,t=v.$createElement,l=v._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"vue学习"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#vue学习"}},[v._v("#")]),v._v(" vue学习")]),v._v(" "),l("ol",[l("li",[v._v("vue是渐进式框架")]),v._v(" "),l("li",[v._v("js属于命令式编程范式（一步一步告诉计算机先做什么再做什么），而vue属于声明式编程范式（它的主要思想是告诉计算机应该做什么，但不指定具体要怎么做）")]),v._v(" "),l("li",[v._v("vue的命令式编程可以使数据和页面分离")]),v._v(" "),l("li",[v._v('v-html="url"以html形式解析')]),v._v(" "),l("li",[v._v("v-cloak==披风==加上这个属性之后div后面的{{}}中的变量在没有被解析时候就以原形式显示知道后面script标签中的标签被解析到时候才会变，但这种形式用户体验不好（内容变了一下），可以配合")])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("    <style>\n        [v-cloak] {\n            display: none;\n        }\n    </style>\n")])])]),l("p",[v._v("使用，这样刚开始没有解析到script标签时候div不显示，解析完之后v-cloak属性会被自动移除\n6.")]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v(' <img v-bind:src="imgURL">  //冒号表示给那个属性赋值\n <img :src="imgURL"> //语法糖形式\n')])])]),l("p",[v._v('加上v-bind后vue实例会动态解析指令，动态给src属性绑定vue实例data里的变量\n7. v-bind动态添加class  ==:class="{k1:v1}"==\n8. {}里面存的是对象{key1:value1,key2:value2}\n9. v-for   什么东西要显示多条就把v-for="变量 in 列表"属性加到那个标签内\n10.')]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v('<li :class="{}"></li>  //动态绑定时候双引号里传入对象（key：value）\n')])])]),l("ol",{attrs:{start:"11"}},[l("li",[v._v("双引号不能嵌套双引号")]),v._v(" "),l("li",[v._v("computed属性在被调用时候有缓存，多次调用只需要执行一次，性能更高")]),v._v(" "),l("li",[v._v('一个标签加上for="id名"会与这个id名的标签绑定，点击前面的标签时候鼠标会聚焦到后面的标签')]),v._v(" "),l("li",[v._v("text的默认提示输入属性是placeholder")]),v._v(" "),l("li",[v._v("登录切换input复用问题（vue内部共用影响），加上key属性  key属性值一样可复用，不一样就不可以复用，key设置不一样就行")]),v._v(" "),l("li",[v._v("v-if dom会不断添加或删除（只需要一次时候使用）")]),v._v(" "),l("li",[v._v("v-show添加displ的属性隐藏或显示（显示或隐藏需要不断切换时候）")]),v._v(" "),l("li",[v._v('v-for="(valude,key) in 对象"  默认显示的也是value')]),v._v(" "),l("li")]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("function sum(...num){\n    console.log(num);\n}\nsum(20,30,40,50,60);//...变量这种语法在调用时候相当于传入一个数组\n")])])]),l("ol",{attrs:{start:"20"}},[l("li",[l("ul",[l("li",[v._v("push()末尾添加")]),v._v(" "),l("li",[v._v("pop()末尾删除")]),v._v(" "),l("li",[v._v("shift()删除第一个")]),v._v(" "),l("li",[v._v("unshift（）添加到最前面")])])]),v._v(" "),l("li",[l("p",[v._v("splice()操作，可以传三个参数")]),v._v(" "),l("ul",[l("li",[v._v("作用：删除/插入/替换元素")]),v._v(" "),l("li",[v._v("删除：splice(1,2),从1开始，删除2个，第二个参数若不传，就删除第一个后面的所有")])]),v._v(" "),l("p",[v._v("==删除当前==splice(index,1)")]),v._v(" "),l("ul",[l("li",[v._v("插入：splice（1,0,'a','b','c'） 第一个后面插入三个元素")]),v._v(" "),l("li",[v._v("替换：splice(1,3,'a','b','c') 从第一个后面开始的三个替换为a,b,c")]),v._v(" "),l("li",[v._v("替换的另一种：Vue.set(要修改的对象，索引值，修改后的值)")])])]),v._v(" "),l("li",[l("p",[v._v("使用v-for时候最好加上:key,key赋值为==item==")])])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v('<li v-for="item in messages" :key="item">{{item}}</li>\n')])])]),l("ol",{attrs:{start:"23"}},[l("li",[v._v("script标签内导入js文件时候先导入vue.js，再导入main.js，顺序不能乱")]),v._v(" "),l("li",[v._v("浏览器Ctrl+Shift+del删除缓存")]),v._v(" "),l("li",[v._v(".toFixed(n) 参数传入几就保留几位小数")]),v._v(" "),l("li",[v._v("计算属性不起动词形式起名词形式")]),v._v(" "),l("li",[v._v('v-model="" 双向绑定')]),v._v(" "),l("li",[v._v("placeholder显示默认输入的属性")]),v._v(" "),l("li",[v._v('组成radio组只需要给同类input标签添加相同的name=""属性即可')]),v._v(" "),l("li",[v._v("label 元素不会向用户呈现任何特殊的样式。不过，它为鼠标用户改善了可用性，因为如果用户点击 label 元素内的文本，则会切换到控件本身。")]),v._v(" "),l("li",[v._v("v-model的checkbox：\n"),l("ul",[l("li",[v._v('单选框v-check="布尔类的变量"')]),v._v(" "),l("li",[v._v('多选框v-check="数组变量"')])])]),v._v(" "),l("li",[v._v("label的：for和input的：id对应")]),v._v(" "),l("li",[v._v("修饰符\n"),l("ul",[l("li",[v._v("懒加载.lazy")]),v._v(" "),l("li",[v._v(".number")]),v._v(" "),l("li",[v._v(".trim删除字符串两边的空格")])])]),v._v(" "),l("li",[v._v("组件开发\n"),l("ul",[l("li",[v._v("步骤\n"),l("ul",[l("li",[v._v("1.创建组件构造器")])])])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("const cpnc=Vue.extend({\n        template:`\n        html代码（外部用一个div嵌套）\n    `\n    })\n")])])]),l("ul",[l("li",[v._v("2.注册构造器\n"),l("ul",[l("li",[v._v("a.全局构造器\nVue.component('标签名',第一步声明的Vue实例对象（==cpnc==）)\n所有的new Vue绑定对应的el后的对象都可以调动全局构造器")]),v._v(" "),l("li",[v._v("b.局部构造器\n在")])])])])])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("new Vue({\n            el:\n            data:\n            components:{\n                cpn:cpnc    //第一个是使用组件时的标签名  第二个是创建的组件构造器==cpnc==，类似key：value\n            }\n        })\n")])])]),l("ol",{attrs:{start:"35"}},[l("li",[v._v("组件无法直接访问vue实例里面的数据")]),v._v(" "),l("li",[v._v("instance 实例")]),v._v(" "),l("li",[v._v("语法糖形式注册组件data要写成函数形式")])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("data(){\n    return {\n        counter:0\n    }\n}\n")])])]),l("ol",{attrs:{start:"38"}},[l("li",[v._v("webpack：==前端模块化打包工具=="),l("br"),v._v("\n可以打包我们的代码，让它转化为浏览器更容易执行的代码，核心就是让我们进行模块化开发，帮助我们处理模块间的依赖关系，不仅是js文件  css、图片、json都可以为当做模块使用")]),v._v(" "),l("li",[v._v("grunt强调的是自动化")]),v._v(" "),l("li",[v._v("npm包管理工具（node packa manager）")]),v._v(" "),l("li",[v._v("打包命令：")])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("webpack 源文件 目标文件\n")])])]),l("ol",{attrs:{start:"42"}},[l("li",[v._v("vue4创建项目：")])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("npx vue create\n")])])]),l("ol",{attrs:{start:"43"}},[l("li",[v._v("selenium自动操作浏览器（测试按钮的点击和超链接的跳转）")]),v._v(" "),l("li",[v._v("路由器：将输入端数据转移到合适的输出端")]),v._v(" "),l("li",[v._v("路由表：实质上就是一个映射表，决定了输入端的数据的指向")]),v._v(" "),l("li",[v._v("dedicated 献身的：专心致志的; 一心一意的; 专用的; 专门用途的;")])]),v._v(" "),l("hr"),v._v(" "),l("h1",{attrs:{id:"项目"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[v._v("#")]),v._v(" 项目")]),v._v(" "),l("ol",{attrs:{start:"47"}},[l("li",[v._v("git clone https://github.com/xxx.git\n如果不行用")])]),v._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[v._v("git clone git://github.com/xxx.git\n\n")])])]),l("ol",{attrs:{start:"48"}},[l("li",[v._v("img的alt属性：当图片不能正常加载时候")]),v._v(" "),l("li",[v._v("img的title属性：鼠标聚焦时候的提示")]),v._v(" "),l("li",[l("strong",[v._v("components")]),v._v("里面==common==用于存放任何项目都可以公共使用（用的封装的组件可以直接拖用），content存在只针对当前项目使用")]),v._v(" "),l("li",[l("strong",[v._v("view")]),v._v("针对视图层")]),v._v(" "),l("li",[l("strong",[v._v("router")]),v._v("路由")]),v._v(" "),l("li",[l("strong",[v._v("store")]),v._v("状态管理")]),v._v(" "),l("li",[l("strong",[v._v("src下的common（==暂时可能用不上==）"),l("strong",[v._v("存放公共使用的js文件，里面的")]),v._v("const.js")]),v._v("公共常量,"),l("strong",[v._v("util.js")]),v._v("存放公共方法，"),l("strong",[v._v("mixin.js")]),v._v("其他js")]),v._v(" "),l("li",[v._v(":root 选择器匹配文档根元素。")])]),v._v(" "),l("p",[v._v("在 HTML 中，根元素始终是 html 元素。\n56. vue.config.js里的别名配置")]),v._v(" "),l("p",[v._v("'@':'src' "),l("em",[v._v("@对应的就是src了")]),v._v("\n57. 后端渲染必须通过刷新页面来完成，而前段只需要vue完成对js操作，然后由js完成对dom操作\n58.")]),v._v(" "),l("hr"),v._v(" "),l("p",[l("strong",[v._v("人间繁花多笑语")])])])}),[],!1,null,null,null);t.default=a.exports}}]);