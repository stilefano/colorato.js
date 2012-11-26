(function($) {
	$.fn.colorato = function(color) {
		//grid width and height
		
		if(color.toUpperCase()=="RED"){
			var red=0;
		}
		var bw = $(window).width();
		var bh = $(window).height();
		//padding around grid
		var p = 0;
		//size of canvas
		// var cw = bw + (p*2) + 1;
		// var ch = bh + (p*2) + 1;
		var bs = 50;
		var scrollSize = 10;

		var canvas = $('<canvas/>').attr({
			width : bw,
			height : bh
		}).appendTo('body');

		var canvasColor = red;

		var context = canvas.get(0).getContext("2d");

		var colorArrayR;

		var reverse = false;

		function drawBoard(firstColor, bw, bh) {
			//canvas.width=canvas.width;

			colorArrayR = ["00", "08", "10", "18", "20", "28", "30", "38", "40", "48", "50", "58", "60", "68", "70", "78", "80", "88", "90", "98", "A0", "A8", "B0", "B8", "C0", "C8", "D0", "D8", "E0", "E8", "F0", "F8", "FF"]
			colorArrayG = colorArrayR.slice(0);
			colorArrayB = colorArrayR.slice(0);

			if (reverse) {
				firstColor = canvasColor--;
			} else {
				firstColor = canvasColor++;
			}

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
			i = -1;
			setReached = 0;
			var mainColor = colorArrayR[firstColor];
			for (var x = 0; x <= bw; x += bs) {
				i++;

				if (colorArrayB[i] == undefined) {
					colorArrayB.reverse();
					i = 1;
				}
				k = 0;
				if (l % 2 == 0)
					colorArrayG.reverse();
				l = 1;

				for (var y = 0; y <= bh; y += bs) {
					k++;

					if (colorArrayG[k] == undefined) {
						colorArrayG.reverse();
						k = 1;
						l++;
					}

					var color = mainColor + colorArrayG[k] + colorArrayB[i];
					context.fillStyle = "#" + color
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
		setInterval(function() {
			bw = $(window).width();
			bh = $(window).height();
			drawBoard(canvasColor, bw, bh);
		}, 25)

	}
})(jQuery);