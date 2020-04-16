const nav = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (e) => {
	nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
	document.body.style.overflowY = 'hidden';
});
