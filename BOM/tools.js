//定义一个变量，用来表示定时器的标识
		// var timer;
		//执行简单动画的函数
		/* 参数：
		      obj: 要执行的对象
					attr: 要实行动画的样式 比如: left right width height
					target: 执行动画的目标位置
					speed: 移动的速度 （正数向右移，负数向左移）
					callback: 回调函数，动画执行完毕后执行
		 */
		function move(obj,attr,target,speed,callback){
			//关闭上一个定时器
			clearInterval(obj.timer);
			//获取元素当前位置
			var current = parseInt(getStyle(obj,attr));
			//判断速度的正负值
			//如果从0到800，则speed为正
			//如果从800到0，则speed为负

			if(current > target){
				speed = -speed;
			}
			//开启一个定时器，用来执行动画效果
			//向执行动画的对象中添加一个timer属性，用来保存自己的定时器的标识
			obj.timer = setInterval(() => {

				//获取box1原来的left 值
				var oldvalue = parseInt(getStyle(obj,attr));
				//在旧值的基础上增加
				var newValue = oldvalue + speed;
				//向左移动时，需要判断newValue是否小于target
				//向右移动时，需要判断newValue是否大于target
				if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
					newValue = target;
				}
				//将新增值赋给box1
				obj.style[attr] = newValue + "px";
				//当元素执行到target时，停止动画
				if(newValue == target){
					clearInterval(obj.timer);
					//动画执行完毕后执行
				  callback && callback();
				}
			}, 30)
	 }
		//获取元素样式函数
		function getStyle(obj,name){
			if(window.getComputedStyle){
				return getComputedStyle(obj,null)[name];
			}else{
				return obj.currentStyle[name];
			}
		}