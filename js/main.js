$(function() {

	//grid width and height
	var bw = $(window).width();
	var bh = $(window).height();
	//padding around grid
	var p = 0;
	//size of canvas
	// var cw = bw + (p*2) + 1;
	// var ch = bh + (p*2) + 1;

	var imageData;
	var bs = 20;
	var scrollSize = 10;

	var canvas = $('<canvas/>').attr({
		width : bw,
		height : bh,
	}).appendTo('body').addClass('colorato');

	var canvasColor = 6;

	var context = canvas.get(0).getContext("2d");

	var colorArrayR;

	var reverse = false;

	function rgbToHex(r, g, b) {
		if (r > 255 || g > 255 || b > 255)
			throw "Invalid color component";
		return ((r << 16) | (g << 8) | b).toString(16);
	}

	function drawBoard(firstColor, bw, bh,hex) {
		//canvas.width=canvas.width;

		colorArrayR = ["00", "08", "10", "18", "20", "28", "30", "38", "40", "48", "50", "58", "60", "68", "70", "78", "80", "88", "90", "98", "A0", "A8", "B0", "B8", "C0", "C8", "D0", "D8", "E0", "E8", "F0", "F8", "FF"]
		colorArrayG = colorArrayR.slice(0);
		colorArrayB = colorArrayR.slice(0);

		if (reverse) {
			firstColor = canvasColor--;
		} else {
			firstColor = canvasColor++;
		}
		

		//console.log(firstColor)

		if (firstColor >= colorArrayR.length - 2) {
			reverse = true;
		} else if (firstColor < 2) {
			reverse = false;
		}

		canvas.attr({
			width : bw,
			height : bh
		})

		l = 0;
		hex?i=colorArrayB.indexOf(hex.substr(5,2).toUpperCase()):i = -1;
		setReached = 0;
		var mainColor = colorArrayR[hex?colorArrayR.indexOf(hex.substr(1,2).toUpperCase()):firstColor];
		for (var x = 0; x <= bw; x += bs) {
			i++;

			if (colorArrayB[i] == undefined) {
				colorArrayB.reverse();
				i = 1;
			}
			hex?k=colorArrayG.indexOf(hex.substr(3,2).toUpperCase())-1:k = 0;
			
			if (l % 2 == 0){
				colorArrayG.reverse();
			}
				
			l = 1;

			for (var y = 0; y <= bh; y += bs) {
				k++;

				if (colorArrayG[k] == undefined) {
					colorArrayG.reverse();
					k = 1;
					l++;
				}
				
				color ="#" + mainColor + colorArrayG[k] + colorArrayB[i];
				//var color = mainColor + mainColor + mainColor;
				context.fillStyle =  color
				context.fillRect(x, y, bs, bs);
			}
		}
		
		/**********
		 function colorObject (colorR,colorG,colorB){
		 this.r = colorR;
		 this.g = colorG;
		 this.b = colorB;
		 }

		 for (var key in colorArray){
		 var color = new colorObject(colorArray[key],colorArray[key],colorArray[key])
		 colorBundle = [];
		 colorBundle.push("#"+color.r+color.g+color.b);
		 console.log(colorBundle,colorBundle[0]);
		 }

		 console.log(color)

		 for (var x=0;x<=bw;x+=bs){
		 for (var y = 0; y <= bh; y += bs) {
		 i=0;
		 i++;
		 console.log(colorBundle)
		 context.fillStyle = colorBundle
		 //console.log(context.fillStyle,"#"+color.r)
		 context.fillRect(x, y, bs, bs);
		 }
		 }
		 *******/

	}

	drawBoard(canvasColor, bw, bh);
	/*setInterval(function(){
	 bw = $(window).width();
	 bh = $(window).height();
	 drawBoard(canvasColor,bw,bh);
	 },25)*/

	$('.colorato').click(function(e) {
		pageCoords = {
			/*x : Math.floor(e.pageX / bs),
			y : Math.floor(e.pageY / bs)*/
			x: e.pageX,
			y: e.pageY
		}
		imageData = context.getImageData(pageCoords.x, pageCoords.y, bs, bs).data;
		var hex = "#" + ("000000" + rgbToHex(imageData[0], imageData[1], imageData[2])).slice(-6);
		bw = $(window).width();
		bh = $(window).height();
		drawBoard(pageCoords.x, bw, bh,hex);

	});

})

