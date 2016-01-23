$(document).ready(function () {
	var nav_collapsed = false;
	$('#pointer-primary').click(function() {
		if (! nav_collapsed){
		    $('#nav-primary').css('right','-200px');
				nav_collapsed=true;
				$('#pointer-primary').css('-moz-transform', '');
				$('#pointer-primary').css('-o-transform','');
				$('#pointer-primary').css('-webkit-transform','');
				$('#pointer-primary').css('transform','');
				$('#pointer-primary').css('filter', '');
			  $('#pointer-primary').css('-ms-filter', '');
			} else {
				$('#nav-primary').sidecontentpullout();
				nav_collapsed=false;
			}
		});
});
