### HTML基础知识
##### 1.HTML5语义化标签
> 为什么要语义化？
1.	代码结构：使页面没有css情况下，也能够呈现出很好的内容结构
2.	有利于SEO：爬虫依赖标签来确定关键字的权重，可以和搜索引擎建立良好的沟通，获取有效信息。
3.	提升用户体验
4.	便于团队开发和维护：语义化使代码更具有可读性。
5.	方便其他设备解析：如屏幕阅读器，移动设备等。

分为：header、nav、article、section、aside、footer
##### 2.前端优化？
1. 资源压缩合并，减少HTTP请求
2. 非核心代码异步加载
3. 利用浏览器缓存
4. 使用CDN
5. DNS预解析
##### 3.HTML5新特性
1. 语义化标签

2. 增强型表单

   Number、Email、Url(网址)、Tel(电话)、range(范围)、日期/时间/月份、颜色

   新增的特有属性：autofocus/max,min,step/placeholder/multiple

3. 视频Video和音频audio

4. Canvas绘图

5. Svg绘图

6. 地理定位

7. 拖放API

8. Web Worker(为JavaScript创造多线程环境)

9. Web Storage

10. WebSocket
##### 4.Cookie、localStorage和sessionStorage的区别？
1. 数据上的生命周期不同
   cookie一般由服务器生成，可以设置失效时间；localstorage除非被永久清除，否则永久保存；sessionstorage仅在当前会话有效，关闭页面或浏览器后被清除
2. 存放数据的大小不同
   cookie一般为4kb，localstorage和sessionstorage一般为5mb
3. 与服务器端通信不同
   cookie每次都会携带HTTP头中，如果使用过多会带来性能问题；storage仅在客户端保存，不参与服务端的通信
4. 易用性
   cookie需要程序员自己封装，原生接口不够友好；
##### 5.为什么要使用websocket？
> 为什么使用？

在浏览器与服务器通信间，传统的HTTP请求在某些场景下并不理想，主要有两个点：无法做到消息的实时性；服务端无法主动推送消息；

> 传统的解决方案

1. 基于ajax的轮训：客户端定时或者动态相隔短时间内不断像服务器请求接口
2. Long Poll：其采用的是阻塞性的方案

	Websocket是HTML5提供的一种浏览器与服务器间全双工通讯的网络技术；浏览器提供了原生类WebSocket，使用new关键字实例化它。
	方法：open、message、close、error