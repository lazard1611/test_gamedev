export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.provide('submitForm', () => {
		const $btn = document.getElementById('reg_submit');
		$btn.addEventListener('click', () => {
			const $password = document.getElementById('reg_password');
			const $confirmPassword = document.getElementById('reg_password_valid');
			if (!$password && !$confirmPassword) return;

			const $confirmPasswordParent = $confirmPassword.parentElement.parentElement;
			const password = $password.value;
			const confirmPassword = $confirmPassword.value;

			if (password !== confirmPassword) {
				$confirmPasswordParent.classList.add('not_validate_state');
			} else {
				$confirmPasswordParent.classList.remove('not_validate_state');
			}
		});
	})
})
