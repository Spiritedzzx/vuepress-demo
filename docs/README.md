# vue学习
1. vue是渐进式框架
2. js属于命令式编程范式（一步一步告诉计算机先做什么再做什么），而vue属于声明式编程范式（它的主要思想是告诉计算机应该做什么，但不指定具体要怎么做）
3. vue的命令式编程可以使数据和页面分离
4. v-html="url"以html形式解析
5. v-cloak==披风==加上这个属性之后div后面的{{}}中的变量在没有被解析时候就以原形式显示知道后面script标签中的标签被解析到时候才会变，但这种形式用户体验不好（内容变了一下），可以配合
```
    <style>
        [v-cloak] {
            display: none;
        }
    </style>
```
使用，这样刚开始没有解析到script标签时候div不显示，解析完之后v-cloak属性会被自动移除
6. 
```
 <img v-bind:src="imgURL">  //冒号表示给那个属性赋值
 <img :src="imgURL"> //语法糖形式
```
加上v-bind后vue实例会动态解析指令，动态给src属性绑定vue实例data里的变量
7. v-bind动态添加class  ==:class="{k1:v1}"==
8. {}里面存的是对象{key1:value1,key2:value2}
9. v-for   什么东西要显示多条就把v-for="变量 in 列表"属性加到那个标签内
10. 
```
<li :class="{}"></li>  //动态绑定时候双引号里传入对象（key：value）
```
11. 双引号不能嵌套双引号
12. computed属性在被调用时候有缓存，多次调用只需要执行一次，性能更高
13. 一个标签加上for="id名"会与这个id名的标签绑定，点击前面的标签时候鼠标会聚焦到后面的标签
14. text的默认提示输入属性是placeholder
15. 登录切换input复用问题（vue内部共用影响），加上key属性  key属性值一样可复用，不一样就不可以复用，key设置不一样就行
16. v-if dom会不断添加或删除（只需要一次时候使用）
17. v-show添加displ的属性隐藏或显示（显示或隐藏需要不断切换时候）
18. v-for="(valude,key) in 对象"  默认显示的也是value
19. 
```
function sum(...num){
    console.log(num);
}
sum(20,30,40,50,60);//...变量这种语法在调用时候相当于传入一个数组
```
20. - push()末尾添加
    - pop()末尾删除
    - shift()删除第一个
    - unshift（）添加到最前面
21. splice()操作，可以传三个参数
    - 作用：删除/插入/替换元素
    - 删除：splice(1,2),从1开始，删除2个，第二个参数若不传，就删除第一个后面的所有
    
     ==删除当前==splice(index,1)
    - 插入：splice（1,0,'a','b','c'） 第一个后面插入三个元素
    - 替换：splice(1,3,'a','b','c') 从第一个后面开始的三个替换为a,b,c
    - 替换的另一种：Vue.set(要修改的对象，索引值，修改后的值)
22. 使用v-for时候最好加上:key,key赋值为==item==

```
<li v-for="item in messages" :key="item">{{item}}</li>
```
23. script标签内导入js文件时候先导入vue.js，再导入main.js，顺序不能乱
24. 浏览器Ctrl+Shift+del删除缓存
25. .toFixed(n) 参数传入几就保留几位小数
26. 计算属性不起动词形式起名词形式
27. v-model="" 双向绑定
28. placeholder显示默认输入的属性
29. 组成radio组只需要给同类input标签添加相同的name=""属性即可
30. label 元素不会向用户呈现任何特殊的样式。不过，它为鼠标用户改善了可用性，因为如果用户点击 label 元素内的文本，则会切换到控件本身。
31. v-model的checkbox：
    - 单选框v-check="布尔类的变量"
    - 多选框v-check="数组变量"
32. label的：for和input的：id对应
33. 修饰符
    - 懒加载.lazy
    - .number
    - .trim删除字符串两边的空格
34. 组件开发
    - 步骤
      - 1.创建组件构造器 
    ```
    const cpnc=Vue.extend({
            template:`
            html代码（外部用一个div嵌套）
        `
        })
    ```
      - 2.注册构造器
        - a.全局构造器
        Vue.component('标签名',第一步声明的Vue实例对象（==cpnc==）)
        所有的new Vue绑定对应的el后的对象都可以调动全局构造器
        - b.局部构造器
        在

```
new Vue({
            el:
            data:
            components:{
                cpn:cpnc    //第一个是使用组件时的标签名  第二个是创建的组件构造器==cpnc==，类似key：value
            }
        })
```
35. 组件无法直接访问vue实例里面的数据
36. instance 实例
37. 语法糖形式注册组件data要写成函数形式

```
data(){
    return {
        counter:0
    }
}
```
38. webpack：==前端模块化打包工具==  
可以打包我们的代码，让它转化为浏览器更容易执行的代码，核心就是让我们进行模块化开发，帮助我们处理模块间的依赖关系，不仅是js文件  css、图片、json都可以为当做模块使用
39. grunt强调的是自动化
40. npm包管理工具（node packa manager）
41. 打包命令：

```
webpack 源文件 目标文件
```
42. vue4创建项目：
```
npx vue create
```
43. selenium自动操作浏览器（测试按钮的点击和超链接的跳转）
44. 路由器：将输入端数据转移到合适的输出端
45. 路由表：实质上就是一个映射表，决定了输入端的数据的指向
46. dedicated 献身的：专心致志的; 一心一意的; 专用的; 专门用途的;

---
# 项目
47. git clone https://github.com/xxx.git
如果不行用

```
git clone git://github.com/xxx.git

```
48. img的alt属性：当图片不能正常加载时候
49. img的title属性：鼠标聚焦时候的提示
50. **components**里面==common==用于存放任何项目都可以公共使用（用的封装的组件可以直接拖用），content存在只针对当前项目使用
51. **view**针对视图层
52. **router**路由
53. **store**状态管理
54. **src下的common（==暂时可能用不上==）**存放公共使用的js文件，里面的**const.js**公共常量,**util.js**存放公共方法，**mixin.js**其他js
55. :root 选择器匹配文档根元素。

在 HTML 中，根元素始终是 html 元素。
56. vue.config.js里的别名配置 

 '@':'src' *@对应的就是src了*
 57. 后端渲染必须通过刷新页面来完成，而前段只需要vue完成对js操作，然后由js完成对dom操作
 58. 













---
**人间繁花多笑语**