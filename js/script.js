const burgerButton = document.querySelector('.header__menu')
const headerMenu = document.querySelector('.header__right')
const overlay = document.querySelector('.overlay')

if (burgerButton) {
	burgerButton.addEventListener('click', () => {
		burgerButton.classList.toggle('active')
		headerMenu.classList.toggle('active')
		overlay.classList.toggle('active')
		document.body.classList.toggle('lock')
	})

	overlay.addEventListener('click', (e) => {
		console.log(e.target)
		burgerButton.classList.toggle('active')
		headerMenu.classList.toggle('active')
		overlay.classList.toggle('active')
		document.body.classList.toggle('lock')
	})
}
const filter = document.querySelector('.filter')
const filterItems = document.querySelectorAll('.filter__item')

if (filter) {
	filterItems.forEach(item => {
		item.addEventListener('click', () => {
			let subList = item.querySelector('.filter__sublist')
			subList.classList.toggle('active')
		})
	})
}