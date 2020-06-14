#### CSS基础知识
###### 1.文字单行显示/多行显示
> 单行文本隐藏
```css
p{
	overflow:hidden
	white-space:nowrap
	text-overflow:ellipsis
}
```
> 多行文本溢出隐藏
```css
p{
	overflow:hidden;
	display:-webkit-box;
	-webkit-line-clamp:3;
	-webkit-box-orient:vertical;
}
```

###### 2.px、em和rem
1.	px是固定的像素，一旦设置了就无法因为适应页面大小而改变
2.	em和rem相对于px更具有灵活性，他们是相对长度单位，更适用于响应式布局
3.	em是相对于其父元素设置字体大小的，这样就会存在一个问题，进行任何元素设置，都有可能需要知道它父元素的大小；而rem是相对于根元素的
4.	总之：em是相对于父元素，rem是相对于父元素

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

	##### 1.三栏布局的实现及优点
	
	|   布局方案   |                             实现                             |           优点           |                             缺点                             |
	| :----------: | :----------------------------------------------------------: | :----------------------: | :----------------------------------------------------------: |
	|  Float布局   |   左右中三列，左列左浮动，右列右浮动，中间列设置左右margin   | 比较简单，兼容性也比较好 |   浮动元素脱离文档流，使用的时候只需要注意一定要清除浮动。   |
	| Position布局 |  左中右三列（无顺序），根据定位属性去直接设置各个子元素位置  |                          | 元素脱离了文档流，后代元素也脱离了文档流，高度未知的时候，会有问题，有效性和可使用性比较差 |
	|  Table布局   | 左中右三列，父元素display: table;子元素display: table-cell;居中子元素不设宽度 |                          |                                                              |
	|   Flex布局   | 左中右三列，父元素display: flex;两侧元素设宽；居中子元素flex: 1; |                          |            存在IE上兼容性问题，只能支持到IE9以上             |
	|   Grid布局   |         左中右三列，父元素display: grid;利用网格实现         |                          |        兼容性不好，IE10+上支持，而且也仅支持部分属性         |
	
	

#### BFC
	定义：Block Formatting Contexts(块级格式化上下文)，具有BFC特性的元素可以看做是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且BFC具有普通容器所没有的一些特性。
	通俗来讲，可以把BFC理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。
	触发BFC特性：body根元素；浮动元素(float除none以外的值)；绝对定位元素；display为inline-block、table-cell、flex；overflow除了visible以外的hidden、auto、scroll。
#### 行内元素和块级元素
常见的块级元素：div、p、h1~16、ul、li、table
常见的行内元素：span、img、input、a、button、select

- 行内元素会在一条直线上排列(默认宽度只与内容有关)，块级元素各占据一行
- 块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素，只能包含文本或其他行内元素
- 行内元素与块级元素属性的不同，主要是盒模型上，行内元素设置width无效，height无效(可以设置line-height)，margin上下无效，padding上下无效
#### css盒模型
	页面是由一个个盒模型组成的，每个HTML元素都可以叫盒模型，盒模型由内而外包括：边距(margin)，边框(border),填充(padding),内容(content)。它在页面占据的实际宽度是margin + border + padding + content的宽度相加。
	盒模型分为标准盒模型和IE的盒模型
	标准盒模型：盒模型的大小是content的大小(box-sizing:content-box|border-box|inherit)
	IE盒模型：盒模型的大小是content+padding+padding的大小
#### Flex布局
- flex-direction:决定主轴的方向(即项目的排列方向)。row|row-reverse|column|column-reverse
- flex-warp:默认情况下，项目都排列在一条线上。定义如果一条轴线上排不下，如何换行。nowarp|warp|warp-reverse
- flex-flow:是flex-direction和flex-warp属性的简写形式，默认值为row nowarp;
- justify-content:定义了项目在主轴上的对齐方式。flex-start|flex-end|center|space-between|space-around
- align-items:定义项目在交叉轴上如何对齐。flex-start|flex-end|center|baseline|stretch
- align-content:定义了多跟轴线的对齐方式，如果项目只有一根轴线，该属性不起作用。flex-start|flex-end|center|space-between|space-around|stretch