var winHeight = $(window).height();
var propPort = 0.59; /*Imagem Portrait - width/height */
var propLand = 1.18; /*Imagem Landscape - width/height */
var portWidth = $(".port").height()*propPort;
var landWidth = $(".land").height()*propLand;
var marginUL = $(window).width()/2;
var counter = 1;
var ulSize = 0;
var referencias = $(".list_carousel li:nth-child(1) img").attr("alt");

$(document).ready(function(){
	_proporcao();
	$(".list_carousel ul").css("height", winHeight);
	$(".list_carousel li:nth-child("+counter+")").addClass("destaque");
	_setMargin();
	$(".referencias p").text(referencias);
})

function _proporcao(){
	$(".port").css("width", portWidth);
	$(".land").css("width", landWidth);
}

function _setMargin(){
	if ($(".list_carousel li:nth-child("+counter+")").attr("class")=="port destaque"){
		marginUL = marginUL-($(".port").width()/2);
		$(".carousel_fotos").css("margin-left", marginUL);
	}else{
		marginUL = marginUL-($(".land").width()/2);
		$(".carousel_fotos").css("margin-left", marginUL);
	}
}


/* 	FUNÇÕES DE MOVIMENTO-----------------------------*/
	function _next(){
		if(counter < ($(".list_carousel li").length)){
			if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="port destaque")&&($(".list_carousel li:nth-child("+(counter+1)+")").attr("class")=="port")){
				marginUL = marginUL-$(".list_carousel li:nth-child("+counter+")").width();
			}else if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="port destaque")&&($(".list_carousel li:nth-child("+(counter+1)+")").attr("class")=="land")) {
				marginUL = marginUL-($(".list_carousel li:nth-child("+counter+")").width()/2)-($(".list_carousel li:nth-child("+(counter+1)+")").width()/2);
			}else if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="land destaque")&&($(".list_carousel li:nth-child("+(counter+1)+")").attr("class")=="land")) {
				marginUL = marginUL-$(".list_carousel li:nth-child("+counter+")").width();
			}else if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="land destaque")&&($(".list_carousel li:nth-child("+(counter+1)+")").attr("class")=="port")) {
				marginUL = marginUL-($(".list_carousel li:nth-child("+counter+")").width()/2)-($(".list_carousel li:nth-child("+(counter+1)+")").width()/2);
			}
		
			counter++;
			referencias = $(".list_carousel li:nth-child("+counter+") img").attr("alt");
			$(".referencias p").text(referencias);

			$(".list_carousel li").removeClass("destaque");
			$(".list_carousel li:nth-child("+counter+")").addClass("destaque");		
			$(".carousel_fotos").animate({marginLeft: marginUL},500);
		}
	}

	function _prev(){
		if (counter>1){
			if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="port destaque")&&($(".list_carousel li:nth-child("+(counter-1)+")").attr("class")=="port")){
			marginUL = marginUL+$(".list_carousel li:nth-child("+counter+")").width();
			}else if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="port destaque")&&($(".list_carousel li:nth-child("+(counter-1)+")").attr("class")=="land")) {
				marginUL = marginUL+($(".list_carousel li:nth-child("+counter+")").width()/2)+($(".list_carousel li:nth-child("+(counter-1)+")").width()/2);
			}else if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="land destaque")&&($(".list_carousel li:nth-child("+(counter-1)+")").attr("class")=="land")) {
				marginUL = marginUL+$(".list_carousel li:nth-child("+counter+")").width();
			}else if (($(".list_carousel li:nth-child("+counter+")").attr("class")=="land destaque")&&($(".list_carousel li:nth-child("+(counter-1)+")").attr("class")=="port")) {
				marginUL = marginUL+($(".list_carousel li:nth-child("+counter+")").width()/2)+($(".list_carousel li:nth-child("+(counter-1)+")").width()/2);
			}
		
			counter--;
			referencias = $(".list_carousel li:nth-child("+counter+") img").attr("alt");
			$(".referencias p").text(referencias);

			$(".list_carousel li").removeClass("destaque");
			$(".list_carousel li:nth-child("+counter+")").addClass("destaque");		
			$(".carousel_fotos").animate({marginLeft: marginUL},500);
		}
	}

/* SETAS-----------------------------------*/
	$("#next").click(function(){
		_next();
	})

	$("#prev").click(function(){
		_prev();
	})

/*	TECLADO---------------------------------*/
	var KEYBOARD = {
	    left: 37
	  , right: 39
	}

	$(document).on('keyup.modal', function (event) {
	    if (event.which == KEYBOARD.left) {
	       _prev();
	    } else if (event.which == KEYBOARD.right) {
	       _next();
	    }
	})

/*	TOUCH -------------------------------------------*/
	$(".carousel_fotos").on("swipeleft", function(){
		_next();
	})

	$(".carousel_fotos").on("swiperight", function(){
		_prev();
	})
	

/*	RESIZE ---------------------------------*/
$(window).resize(function() {
	winHeight = $(window).height();
	portWidth = $(".port").height()*propPort;
	landWidth = $(".land").height()*propLand;
	_proporcao();
	marginUL = $(window).width()/2;

	$(".list_carousel ul").css("height", winHeight);

	for ( var i = 1; i <= counter; i++ ) {
		if (i==1){
			marginUL = marginUL-($(".list_carousel li:nth-child("+i+")").width()/2);
		}else {
			marginUL = marginUL-($(".list_carousel li:nth-child("+(i-1)+")").width()/2)-($(".list_carousel li:nth-child("+i+")").width()/2);
		}		
		$(".carousel_fotos").css("margin-left", marginUL);
	}
});