$('#menu-icon').on('click', menuClick);
$('#password-hide').on('click', passwordHide);

function menuClick() {
	$('#menu').toggleClass('open');
}

function passwordHide() {
	$('#password-hide').addClass('hide');
	$('#password').attr('type', 'password');
}