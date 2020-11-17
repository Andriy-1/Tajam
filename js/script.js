//!незабути підключити бібліотеку jquery
//нажимання на кнопку бургер============================
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//активні елеиенти для меню============================
function RPClass(el) {
	var nav = document.getElementById('header__list'); //id="header__list"
	var links = nav.getElementsByTagName('li');
	for (var i = 0; i < links.length; i++) {
		var li = links[i];
		li.className = '';
	}
	el.className = 'active__menu';
}
//=======================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();