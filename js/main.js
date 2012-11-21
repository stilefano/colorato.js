$(function() {

	//grid width and height
	var bw = $(window).width();
	var bh = $(window).height();
	//padding around grid
	var p = 0;
	//size of canvas
	// var cw = bw + (p*2) + 1;
	// var ch = bh + (p*2) + 1;
	var bs = 100;
	var scrollSize = 10;

	var canvas = $('<canvas/>').attr({
		width : bw,
		height : bh
	}).appendTo('body');

	var context = canvas.get(0).getContext("2d");

	function drawBoard() {
		canvas.attr({
			width : bw,
			height : bh
		})

		//context.fillRect(100, 100, 100, 100);
		//context.clearRect(45,45,60,60);
		//context.fill();

		var colorArray = ["00", "08", "10", "18", "20", "28", "30", "38", "40", "48", "50", "58", "60", "68", "70", "78", "80", "88", "90", "98", "A0", "A8", "B0", "B8", "C0", "C8", "D0", "D8", "E0", "E8", "F0", "F8", "FF"]

		/*for ( i = 0; i < 20; i++) {
		 for ( j = 0; j < 20; j++) {
		 //context.fillStyle = 'rgb(' + Math.floor(255 - 10 * i) + ',' + Math.floor(255 - 10 * j) + ',0)';

		 //context.fillRect(j * 100, i * 100, 100, 100);
		 console.log("i=", i, " ***", "j=", j)
		 }
		 }*/
		i=-1;
		var mainColor=2;
		for (var x=0;x<=bw;x+=bs){
			i++;
			k=0;
			for (var y = 0; y <= bh; y += bs) {
					k++;
					var color = colorArray[mainColor] + colorArray[k] + colorArray[i];
					context.fillStyle = "#" + color
					context.fillRect(x, y, 100, 100);
					console.log("i=",i,"****","k=",k,"****","x=",x,"****","y=",y,"****","color=",color);
			}
		
		}


		/*for (var x = 0; x <= bw; x += bs) {
		 context.moveTo(0.5 + x + p, p);
		 context.lineTo(0.5 + x + p, bh + p);
		 }

		 for (var x = 0; x <= bh; x += bs) {
		 context.moveTo(p, 0.5 + x + p);
		 context.lineTo(bw + p, 0.5 + x + p);
		 }

		 context.strokeStyle = "black";
		 context.stroke();*/

	}

	drawBoard();

	// $(window).resize(function() {
		// drawBoard();
	// })
})