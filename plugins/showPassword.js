export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.provide('showPassword', () => {
		const $buttons = document.querySelectorAll('.btnShowPass');
		if (!$buttons.length) return;

		Array.from($buttons).forEach(($element) => {
			$element.addEventListener('click', () => {
				const { inputId } = $element.dataset;
				if (!inputId) return;

				const $input = document.getElementById(inputId);
				if (!$input) return;

				const attrInput = $input.getAttribute('type');
				if (attrInput === 'password') {
					$input.setAttribute('type', 'text');
				} else {
					$input.setAttribute('type', 'password');
				}
			});
		});
	})
})
