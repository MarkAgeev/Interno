// navbar
const navbar = document.querySelector('.checkbox');
const menu = document.querySelector('.menu-items');
const itemName = document.querySelectorAll('.item');
console.log(itemName);
navbar.onclick = () => {
	menu.classList.toggle('move')
	document.querySelector('.line1').classList.toggle('rotate-one')
	document.querySelector('.line2').classList.toggle('scale-two')
	document.querySelector('.line3').classList.toggle('rotate-three')
	document.body.classList.toggle('noscroll')
}

itemName.forEach((item) => {
	item.onclick = () => {
		menu.classList.remove('move')
		document.body.classList.remove('noscroll')
		document.querySelector('.line1').classList.remove('rotate-one')
		document.querySelector('.line2').classList.remove('scale-two')
		document.querySelector('.line3').classList.remove('rotate-three')
	}
})

// accordion
const texts = document.querySelectorAll('.accordion');
const links = document.querySelectorAll('.section-tenth__block__info');
texts.forEach((item, idx) => {
	item.onclick = () => {
		links[idx].classList.toggle('visible')
	}
})