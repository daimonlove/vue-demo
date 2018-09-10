## 拖拽排序组件

#### 组件参数
- Property	Type	Default	Description
- value	Array	-	列表的内容
- axis	String	y	列表元素可以被横向拖拽，纵向拖拽还是网格拖拽。用x,y,xy来表示。
- lockAxis	String	-	用于排序时在坐标系中锁定元素的移动
- helperClass	String	-	helper的自定义样式类
- transitionDuration	Number	300	元素移动动画的持续时间
- pressDelay	Number	0	如果需要当元素被按下一段时间再允许拖拽，可以设置这个属性
- pressThreshold	Number	5	移动允许被忽略的阈值，单位是像素
- distance	Number	0	如果需要在拖拽出一定距离之后才被识别为正在拖拽的元素，可以设置这个属性
- useDragHandle	Boolean	false	如果使用HandleDirective，设置为true
- useWindowAsScrollContainer	Boolean	false	是否设置window为可滚动的容器
- hideSortableGhost	Boolean	false	是否设置window为可滚动的容器
- useWindowAsScrollContainer	Boolean	true	是否自动隐藏ghost元素
- lockToContainerEdges	Boolean	false	是否对正在拖拽的元素锁定容器边缘
- lockOffset	String	50%	对正在拖拽的元素锁定容器边缘的偏移量
- shouldCancelStart	Function	-	在拖拽开始前这个方法将被调用
- getHelperDimensions	Function	-	可选方法({node, index, collection}),用于返回SortableHelper的计算尺寸


#### 事件

- 名称	参数	说明
- sortStart	event, node, index, collection	当拖拽开始时触发
- sortMove	event	当拖拽时鼠标移动时触发
- sortEnd	event, newIndex, oldIndex, collection	当拖拽结束时触发
- input	newList	当拖拽结束后产生新的列表时触发
