#### CSS基础知识
#### 伪类
#### 水平垂直居中
1.	display:table-cell
	组合使用display:table-cell和vertical-align、text-align，使父元素内的所有行内元素水平垂直居中。
2.	transform:translate(-50%,-50%)
	利用CSS3新特性，在不知道自身宽高的情况下，可以利用它水平垂直居中，当使用top:50%,left:50% 是以左上角为原点，故不处于中心位置。translate(-50%,-50%)作用：往上、往左移动自身长度的50%，以使其居于中心位置。
3.	利用弹性布局
	display:flex;justify-content:center;align-items:center;
#### 经典布局
1.	圣杯布局
	定义：常见的三栏式布局------两边等宽，中间自适应的三栏布局
2.	双飞翼布局
	定义：双飞翼布局与圣杯布局相似。只不过少了relative与Left、right的步骤和共同的元素，主元素多了层父元素
3.	瀑布流布局
#### BFC
	定义：Block Formatting Contexts(块级格式化上下文)，具有BFC特性的元素可以看做是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且BFC具有普通容器所没有的一些特性。
	通俗来讲，可以把BFC理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
	触发BFC特性：body根元素；浮动元素(float除none以外的值)；绝对定位元素；display为inline-block、table-cell、flex；overflow除了visible以外的hidden、auto、scroll。