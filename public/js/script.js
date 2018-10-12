$("document").ready(function(){
	$(".close").on('click', (e) => {
		$(e.target).parent().removeClass("is-active");
		$(".screen").removeClass("is-active");
		$('.content').removeClass("blur");
		$('.nav-container').removeClass('blur');
	});

	$(".screen").on('click', (e) => {
		$(e.target).removeClass("is-active");
		$('.modal').removeClass("is-active");
		$('.content').removeClass("blur");
		$('.nav-container').removeClass('blur');
	});

	$(".proj img").on('click', (e) => {
		$('#'+e.target.attributes.id.value+'-modal').addClass("is-active");
		$(".screen").addClass("is-active");
		$('.content').addClass('blur');
		$('.nav-container').addClass('blur');
	});
});