const nav = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (e) => {
	if (nav.classList.contains('nav-anim')) {
		nav.classList.remove('nav-anim');
		nav.classList.add('nav-anim-hide');
	}
	else {
		nav.classList.remove('nav-anim-hide');
		nav.classList.add('nav-anim');
	}

	document.body.style.overflowY = 'hidden';
});
