(function($) {
	$.fn.colorato = function(colorLetter,boxSize) {
		
		boxSize<20?boxSize=20:boxSize;
		var bw = $(window).width();
		var bh = $(window).height();
		var bs = boxSize;
		var scrollSize = 10;

		var canvas = $('<canvas/>').attr({
			width : bw,
			height : bh
		}).appendTo('body');

		var canvasColor = 0;

		var context = canvas.get(0).getContext("2d");

		var colorArrayR;

		var reverse = false;

		function drawBoard(firstColor, bw, bh) {

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
					
					if(colorLetter.toUpperCase()=="R"){
						color=mainColor + colorArrayG[k] + colorArrayB[i];
					}else if(colorLetter.toUpperCase()=="G"){
						color=colorArrayG[k]+mainColor+colorArrayB[i];
					}else if(colorLetter.toUpperCase()=="B"){
						color=colorArrayG[k]+colorArrayB[i]+mainColor;
					}
					 
					context.fillStyle = "#" + color
					context.fillRect(x, y, bs, bs);
				}
			}

		}

		drawBoard(canvasColor, bw, bh);
		setInterval(function() {
			bw = $(window).width();
			bh = $(window).height();
			drawBoard(canvasColor, bw, bh);
		}, 25)

	}
})(jQuery);