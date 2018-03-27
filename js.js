$(document).ready(function(){
	/*$(function() {
		$( ".square" ).draggable();
	});*/
	
	var posY = 0;
	var posX = 0;
	var x = 0;
	var y = 0;
	
	$(".square").on("mousedown", function(e) {
		down = true;
		x = 0;
		y = 0;
		console.log(e.pageY);
		posY = e.pageY;
		posX = e.pageX;
		$(this).on("mousemove", function(event) {
			if(down==true) {
				if(posY<event.pageY) {
					y = event.pageY - posY;
					$(this).offset({ top: $(this).offset().top+y, left: $(this).offset().left});
					posY = event.pageY
				} else if(posY>event.pageY) {
					y = posY - event.pageY;
					$(this).offset({ top: $(this).offset().top-y, left: $(this).offset().left});
					posY = event.pageY
				} else if(posY==event.pageY) {
					$(this).offset({ top: $(this).offset().top, left: $(this).offset().left});
					posY = event.pageY
				}
				if(posX<event.pageX) {
					x = event.pageX - posX;
					$(this).offset({ top: $(this).offset().top, left: $(this).offset().left+x});
					posX = event.pageX
				} else if(posX>event.pageX) {
					x = posX - event.pageX;
					$(this).offset({ top: $(this).offset().top, left: $(this).offset().left-x});
					posX = event.pageX
				} else if(posX==event.pageX) {
					$(this).offset({ top: $(this).offset().top, left: $(this).offset().left});
					posX = event.pageX
				}
			}
		});
	}).on("mouseup",function() {
		down = false;
	}).on("mouseout", function() {
		down=false;
	});	
		
	/*$(".square" ).on( "click", function() {
		var down = false;
		var nmbrY  = 0;
		var nmbrX = 0;
		$(this).mousedown(function() {
			down = true;
			$(this).mousemove(function( event ) {
				if(down==true) {
					nmbrY = event.pageY - topY;
					nmbrX = event.pageX - leftX;
					console.log("nmbrY"+event.pageY +" " + topY);
					console.log("nmbrX"+event.pageX +" " + leftX);
					$(this).offset({ top: $(this).offset().top+nmbrY, left: $(this).offset().left+nmbrX});
					topY = event.pageY;
					leftX = event.pageX;
				}
			}).mouseout(function() {
				down=false;
			}).mouseup (function() {
				down=false;
			});
			
			
		})*/
		
		
		/*
		$(this).mouseout(function() {
			$(this).on( "mousemove", function( event ) {
				if(down == true) {
					$(this).offset({ top: event.pageY, left: event.pageX});
				} else {
					event.preventDefault();
				}
			});
		});
		
	});*/
	
	
	/*$(".square").on( "mousemove", function( event ) {
		$(".square").offset({ top: 10, left: 10});
	});*/
});