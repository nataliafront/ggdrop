const sandwich = function () {
	const sandwichButton = document.querySelector('.sandwich__open-btn');
	const sandwichClose = document.querySelector('.sandwich__close-btn');
	const content = document.querySelector('.sandwich__content');
	const menu = document.querySelector('.sandwich__menu');

	sandwichButton.addEventListener('click', () => {
		menu.classList.add('sandwich__menu--opened');
		content.classList.add('sandwich__content--active');
		document.body.style.overflow = 'hidden';
	});

	content.addEventListener('click', function () {
		menu.classList.remove('sandwich__menu--opened');
		this.classList.remove('sandwich__content--active');
		document.body.style.overflow = 'visible';
	});

	sandwichClose.addEventListener('click', () => {
		menu.classList.remove('sandwich__menu--opened');
		content.classList.remove('sandwich__content--active');
		document.body.style.overflow = 'visible';
	});
};

sandwich();

const select = () => {
	const selectCurrent = document.querySelectorAll('.select__header'),
		selectItem = document.querySelectorAll('.select__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('select--opened');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.select').classList.remove('select--opened');
		})
	});
};

select();
