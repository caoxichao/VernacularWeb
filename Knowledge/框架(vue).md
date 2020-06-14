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
##### 3.双向绑定的原理
1.	双向数据绑定是通过数据劫持结合发布订阅模式的方式来实现的，也就是说数据和视图同步，数据发生变化，视图跟着发生变化，视图变化，数据也随之发生变化。
2.	核心：Object.defineProperty()方法。
3.	介绍下Object.defineProperty()方法
	- Object.defineProperty(obj，prop，descriptor)，这个语法内有三个参数，分别为要定义其上属性的对象，要定义或者修改的属性，具体的改变方法
	- 简单的说，就是用这个方法来定义一个值。当调用时我们使用了它里面的get方法，当我们给这个属性赋值时，又用到了它里面的set方法。
```                                                                                                  
                                                                                                  
                                                                                                  ··-javascript
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