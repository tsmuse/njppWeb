$(document).ready(function(){
	console.log("ready");
	//scrollmagic
	//var controller = new ScrollMagic.Controller();

	/*
	new ScrollMagic.Scene({triggerElement: "#pathos"})
		.setClassToggle("#content", "reveal")
		.addTo(controller);
	*/

	//defeat the spam bots via ( original from: http://www.kevinleary.net/safe-mailtos-with-jquery/)
	$("a[rel='email']").each(function(){
		// Modify the mailto: value
		var mailtoVal = $(this).attr('href');
		mailtoVal = mailtoVal.replace("[email]","mailto:");
		mailtoVal = mailtoVal.replace("[at]","@");
		mailtoVal = mailtoVal.replace("[dot]",".");
		//add custom subject line
		mailtoVal = mailtoVal + "?subject=New Business Inquiry";
		// Auto-generate title tags for users
		var mailtoTitle = mailtoVal.replace("mailto:","Email: ");
		$(this).attr('title',mailtoTitle);
		// onClick Event
		$(this).click(function(){
			window.location.href = mailtoVal;
			return false;
		});
	});
});