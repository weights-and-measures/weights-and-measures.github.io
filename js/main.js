(function () {
	var navShown = false;

	function checkNav() {
		if (document.body.scrollTop > window.innerHeight && !navShown) {
			navShown = true;
			document.querySelector('.nav').classList.remove('hidden');
		} else if (document.body.scrollTop < window.innerHeight && navShown) {
			navShown = false;
			document.querySelector('.nav').classList.add('hidden');
		}
	}

	window.addEventListener('scroll', checkNav);
	checkNav();
})();