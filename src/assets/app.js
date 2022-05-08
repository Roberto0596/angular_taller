$(document).ready(function() {
    var height = $(window).height();

    $("body").height(height);
});

$(".dropdown-toggle").click(function() {
	$(".dropdown-menu").fadeToggle(500);
});