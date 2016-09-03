(function () {

	var Modal = function (selector, trigger) {
		this.el = document.querySelector(selector);
		this.trigger = document.querySelector(trigger);
		this.dismiss = this.el.querySelector('.dismiss');

		console.log(this.trigger);

		this.show = function (e) {
			console.log(this.el);
			e.preventDefault();
			this.el.classList.add('visible');
			document.body.classList.add('modal-open');
		}

		this.hide = function (e) {
			console.log(this.el);
			e.preventDefault();
			this.el.classList.remove('visible');
			document.body.classList.remove('modal-open');
		}

		this.trigger.addEventListener('click', this.show.bind(this));
		this.dismiss.addEventListener('click', this.hide.bind(this));
	}

	var photographs = new Modal('#photographs', '.open-photographs');
	var paintings = new Modal('#paintings', '.open-paintings');

})();