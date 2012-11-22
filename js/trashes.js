/*****STRANGE SHAPES

		i=-1;
		var mainColor=2;
		for (var x=0;x<=bw;x+=bs){
			i++;
			k=0;
			for (var y = 0; y <= bh; y += bs) {
					colorArray[i]==undefined?i--:i++;
					var color = colorArray[mainColor] + colorArray[k] + colorArray[i];
					context.fillStyle = "#" + color
					context.fillRect(x, y, bs, bs);
					console.log("i=",i,"****","k=",k,"****","x=",x,"****","y=",y,"****","color=",color);
					if(colorArray[i]==undefined){
						colorArray.reverse();
						
					}
			}
		
		} 
*********************/