### Vue 
##### 1.Vuex
1. state：vuex的基本数据，用来存储变量、

2. getter：从基本数据(state)派生的数据，相当于state的计算属性

3. mutation：提交更新数据的方法，必须是同步的。commit调用

4. action：它提交的是mutation，而不是直接修改状态；action可以包含任意异步操作。dispatch调用。

5. modules：模块化vuex，可以让每个模块拥有自己的state/getter/mutation/action，使结构非常清晰，方便管理

##### 2.虚拟dom的原理
1.	用JavaScript对象模拟真实DOM树，对真实DOM进行抽象
2.	diff算法：比较两个虚拟DOM树的差异
3.	pach算法：将两个虚拟DOM对象的差异应用到真正的DOM树

> 虚拟DOM的优缺点：
优点：保证性能下限；无需手动操作DOM；跨平台
缺点：无法进行极致优化

##### 3.双向绑定的原理
1.	双向数据绑定是通过数据劫持结合发布订阅模式的方式来实现的，也就是说数据和视图同步，数据发生变化，视图跟着发生变化，视图变化，数据也随之发生变化。
2.	核心：Object.defineProperty()方法。
3.	介绍下Object.defineProperty()方法
	- Object.defineProperty(obj，prop，descriptor)，这个语法内有三个参数，分别为要定义其上属性的对象，要定义或者修改的属性，具体的改变方法
	- 简单的说，就是用这个方法来定义一个值。当调用时我们使用了它里面的get方法，当我们给这个属性赋值时，又用到了它里面的set方法。
```javascript
	var obj = {};
	Object.defineProperty(obj,"hello",{
		get:function(){
			console.log("调用了get方法")
		},
		set:function(newVal){
			console.log("调用了set方法，方法的值是"+newVal)
		}
	})
```
##### 4.vue组件间传递数据
1.	props / $emit 适用父子组件通信
2.	ref 与 $parent / $children 适用父子组件通信
3.	EventBus($emit / $on) 适用于父子、隔代、兄弟组件通信
4.	$attrs / $listeners 适用于隔代组件通信
5.	provide / inject 适用于隔代组件通信
6.	Vuex 适用于父子、隔代、兄弟组件通信
##### 5.VUE项目优化
1. 使用CDN资源，减少服务器带宽压力
2. 路由懒加载
3. 将一些js css放到其他地方，减少服务器压力
4. 按需加载第三方资源
5. 使用NGINX开启gzip减少网络传输的流量大小
6. 若首屏为登录页，可以做成多入口，登录页单独分离为一个入口
##### 6.父子组件生命周期的加载顺序
1. 加载渲染过程

	父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted
2. 子组件更新过程

	父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated
3. 父组件更新过程

	父beforeUpdate -> 父updated
4. 销毁过程

	父beforeDestory -> 子beforeDestory -> 子destroyed -> 父destroyed
##### 7.您的接口一般都放在哪个生命周期中？
	接口请求一般放在mounted中，但需要注意的是服务端渲染不支持mounted，需要放到created中。
##### 8.data为什么是个函数？
	一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是一个对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例间data不冲突，data必须是一个函数。
##### 9.diff算法过程
1. 同级比较，再比较子节点
2. 先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)
3. 比较都有子节点的情况(核心diff)
4. 递归比较子节点
##### 10.虚拟DOM以及key属性的作用
	由于在浏览器中操作虚拟DOM是很昂贵的。频繁的操作DOM，会产生一定的性能问题，这就是虚拟DOM产生的原因。
	Virtual DOM本质就是用一个原生JS对象去描述一个DOM节点，是对真实DOM的一层抽象。
	key的作用是尽可能的复用DOM元素。
##### 11.优化
> 代码层面的优化

- 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher
- v-if和v-for不能连用
- 如果需要使用v-for给每项元素绑定事件时，使用事件代理
- SPA页面采用keep-alive缓存组件
- 在更多的情况下，使用v-if替代v-show
- key值保证唯一
- 使用路由懒加载，异步组件
- 防抖、节流
- 第三方模块按需导入
- 长列表滚动到可视区域动态加载
- 图片懒加载
- 服务端渲染 SSR or 预渲染

> 基础Web优化

- 开启GZIP压缩
- 浏览器缓存
- CDN的使用
> Webpack层面的优化

- 压缩代码
- Tree Shaking / Scope Hoisting (剔除js中用不上的代码)
- 使用CDN加载第三方模块
- sourceMap优化
- 提取公共代码

##### 12.Vue的两个核心
1. 数据驱动
   在VUE中，数据的改变会驱动视图的自动更新。传统的做法是需要手动改变dom使得视图更新，而VUE只改变数据
2. 组件化
   组件化开发，优点很多，可以很好的降低数据之间的耦合度。将常用的代码封装成组件后，就能高度的复用，提高代码的复用性。
##### 13.MVVM 和 MVC
	最大的区别就是：前者实现了View和Model的自动同步，也就是当Model的属性改变时，我们不用再手动操作DOM元素，来改变View的显示。
	MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。Model层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑;View代表UI组件，它负责将数据模型转化成UI展现出来，ViewModel是一个同步View和Model的对象。MVVM模式简化了界面与业务的依赖，解决了数据频繁更新。MVVM在使用当中，利用双向绑定的技术，使得Model变化时,ViewModel会自动更新，而ViewModel变化时，View会自动变化。
##### 14.VUEX
	Vuex是一个专为Vue.js开发的状态管理模式。它采用集中式存储管理应用的所有组件状态，并以相应的规则保证状态以一种可预测的方式发生变化。
	Vuex的目的是为了管理共享状态，为了达到这个目的，它制定了一系列的规则。
##### 15.keep-alive
	是Vue的内置组件，能在组件切换过程中将状态保留着内存中，防止重新渲染DOM
	include:字符串或者正则表达式。只有匹配的组件会被缓存
	exclude:字符串或者正则表达式。任何匹配的组件都不会被缓存
	exclude优先级大于include
##### 16.Computed和Watch
1. Computed是计算属性，类似于过滤器，对绑定到视图的数据进行处理，并监听变化进而执行对应的方法。计算属性是基于他们的依赖进行缓存的。只有在相关依赖发生改变时，它们才会重新求值。
2. Watch是一个侦听的动作，用来观察和响应Vue实例上的数据变动
3. 异同：它们都是vue对监听器的实现，只不过computed主要用于对同步数据的处理，watch则主要用于观测某个值的变化去完成一段开销较大的复杂业务逻辑。能用computed的时候先用computed，避免了多个数据影响其中某个数据时多次调用watch的情况。
4. 运用场景：当我们需要进行数值计算时，并且依赖于其他数据时，并且依赖于其它数据时，应该使用computed；当我们需要在数据变化时执行异步或者开销较大的操作时，应该使用watch
##### 17.插槽
插槽：插槽就是子组件中的提供给父组件使用的一个占位符，用<slot></slot>表示，父组件可以在这个占位符中填充任何模板代码，如HTML，组件等，填充的内容会替换子组件的<slot></slot>标签。
分为：具名插槽，默认插槽，作用域插槽
##### 18.单页面应用的优缺点
> 优点
1. 良好的交互体验(不需要重新加载页面，没有页面之间的切换，不会出现白屏现象)
2. 良好的前后端工作分离模式
3. 减轻服务器压力
> 缺点
1. 首屏加载慢
- Vue-router懒加载
- 使用CDN加速
- 异步加载组件
- 服务端渲染
2. 不利于SEO
3. 不适合开发大型项目

##### 19.Webpack打包优化
1. 定位体积大的模块(使用webpack插件：webpack-bundle-analyzer)
2. 提取公共模块
3. 移除不必要的文件
4. 模块化引入
5. 用过CDN引用
6. 通过DLLPlugin和DLLReferencePlugin拆分文件
7. 开启Gzip压缩
8. 压缩混淆代码

##### 20.Proxy想比于defineProperty的优势
> Object.defineProperty()的问题主要有三个：
- 不能监听数组的变化
- 必须遍历对象的每个属性
- 必须深层遍历嵌套的对象
> Proxy优点：
- 针对对象：针对整个对象，而不是对象的某个属性，所以也就不需要对keys进行遍历。
- 支持数组：Proxy不需要对数组的方法进行重载，省去了众多hack，减少代码量等于减少了维护成本，而且标准就是好的
- Proxy的第二个参数有13种拦截方法

##### 21.在哪个生命周期内调用异步请求？
	可以在钩子函数created、beforeMount、mounted中。最好在created中，优点：能更快获取到服务端数据，减少页面loading时间；SSR不支持beforeMount、mounted钩子函数，放在created有助于一致性。
##### 22.Vue框架怎么实现对象和数组的监听？
	Vue框架是通过遍历数组和递归遍历对象，从而达到利用Object.defineProperty()也能对对象和数组进行监听。
##### 23.Vue3.0 新特性
1. 监测机制的改变
   3.0将带来基于代理Proxy的observer实现，提供全语言覆盖的反应性跟踪。
2. 对象式的组件声明方式
3. 支持自定义渲染器
4. 支持Fragment(多个根节点)和Protal组件，针对一些特殊的场景做了处理
5. 基于treeshaking优化，提供了更多的内置功能。
##### 24.v-for 和 v-if同时使用？
	建议不要在与v-for相同的元素上使用v-if。当它们处于同一节点时，v-for指令的优先级高于v-if，这意味着v-if将分别重复运行于每个v-for循环中。
##### 25.vue和jquery的区别？
1. 精力集中
   JQ偏重于对DOM的操作，这分散了我们本该放在业务逻辑上的能力。而Vue则是MVVM思想，数据驱动，双向绑定，只需定义好渲染规则，所以我们只需要将注意力放到数据操作上即可
2. 代码结构
   jq写的可能会出现冗余的代码；vue中的钩子函数可以对页面进行精准操作
3. 操作性
   用jq操作DOM实际上是蛮麻烦的
4. 模块化
5. 单页面实现
6. 组件的复用
7. 性能
   vue使用了虚拟DOM，能够减少DOM的操作，能提高一定的效率
##### 26.router和route
1. router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象是一个全局的对象，他包含了所有路由的关键对象和属性
2. route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name、path、params、query等
##### 27.什么时候需要使用$.nextTick()
	在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中
##### 28.路由原理
1. hash模式
   hashchange事件
2. history模式
   pushState()和replaceState()事件