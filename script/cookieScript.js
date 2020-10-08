(function() {
	if (!localStorage.getItem('cookieconsent')) {
		document.body.innerHTML += '\
		<div class="cookieconsent">\
			This site uses cookies. By continuing to use this website, you agree to their use. \
			<a href="#">I Understand</a>\
		</div>\
		';
		document.querySelector('.cookieconsent a').onclick = function(e) {
			e.preventDefault();
			document.querySelector('.cookieconsent').style.display = 'none';
			localStorage.setItem('cookieconsent', true);
		};
	}
})();