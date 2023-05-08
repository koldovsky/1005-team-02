// Отримання всіх елементів списку категорій товарів
const categoryItems = document.querySelectorAll('.list__item');

// Отримання блоку з рядками товарів
const productRows = document.querySelectorAll('.block__row');

// Встановлення по замовчуванню виділеного розділу
let activeCategory = 'for__dogs';
categoryItems[0].classList.add('active');

// Ітерація по всім категоріям і додавання обробника подій click
categoryItems.forEach((item) => {
	item.addEventListener('click', () => {
		// Очищення виділення попередньої категорії
		categoryItems.forEach((item) => item.classList.remove('active'));

		// Встановлення виділення для поточної категорії
		item.classList.add('active');

		// Отримання ідентифікатора категорії з data-атрибуту
		activeCategory = item.getAttribute('data-id');

		// Ітерація по всім рядкам товарів і зміна їх видимості в залежності від категорії
		productRows.forEach((row) => {
			const products = row.querySelectorAll('.block__item');
			products.forEach((product) => {
				product.style.display = 'none';
				if (product.classList.contains(activeCategory)) {
					product.style.display = 'block';
				}
			});
		});
	});
});
window.addEventListener('load', () => {
	const activeItem = document.querySelector('.list__item.active');
	activeItem.dispatchEvent(new Event('click'));
});
