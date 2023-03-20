import validatePassword from './validatePassword';

const submitForm = () => {
	console.log('init function');
	const $btn = document.getElementById('reg_submit');
	$btn.addEventListener('click', () => {
		console.log('Click');
	});
};

export default submitForm;
