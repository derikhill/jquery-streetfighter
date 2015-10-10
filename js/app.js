$(document).ready(function() {
	gameIntro();
  $('.ryu').mouseenter(function() {
  	$('.ryu-still').hide();
  	$('.ryu-ready').show();
  })
  .mouseleave(function() {
  	$('.ryu-ready').hide();
  	$('.ryu-still').show();
  })
  .mousedown(function() {
  	playHadouken();
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').finish().show().animate(
  		{'left': '1020px'},
  		500,
  		function() {
  			$(this).hide();
  			$(this).css('left', '620px');
  		});
  })
  .mouseup(function() {
  	$('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  })
  $(document).keydown(function(e) {
  	if (e.which == 88) {
  		$('.ryu-still').hide();
  		$('.ryu-cool').show();
  		console.log('button pressed');
  	};
  })
  $(document).keyup(function(e) {
  	$('.ryu-cool').hide();
  	$('.ryu-still').show();
  });
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function gameIntro() {
	$('.logo').fadeIn(2500, function() {
		$(this).fadeOut(1000, function() {
			$('.instructions').fadeIn(1500, function() {
				$(this).fadeOut(4500);
			});
		});
	})
}