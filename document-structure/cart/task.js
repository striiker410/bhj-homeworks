//Задание №1

const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

function addToCart(event) {
	const product = event.target.closest('.product');
	const productId = product.dataset.id;
	const productImage = product.querySelector('.product__image').src;
	existingCartItem = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

	if(existingCartItem) {
		const quantityValue = existingCartItem.querySelector('.cart__product-count');
		const curentQuantity = parseInt(quantityValue.textContent);

		const quantityInput = product.querySelector('.product__quantity-value');
		const selectedQuantity = parseInt(quantityInput.textContent);
		
		quantityValue.textContent = curentQuantity + selectedQuantity;
	} else {
		const cartProduct = document.createElement('div');
		cartProduct.classList.add('cart__product');
		cartProduct.dataset.id = productId;

		const cartProductImage = document.createElement('img');
		cartProductImage.classList.add('cart__product-image');
		cartProductImage.src = productImage;
		cartProduct.appendChild(cartProductImage);

		const cartProductCount = document.createElement('div');
		cartProductCount.classList.add('cart__product-count');

		const quantityInput = product.querySelector('.product__quantity-value'); 
    const selectedQuantity = parseInt(quantityInput.textContent); 
		cartProductCount.textContent = selectedQuantity;

		cartProduct.appendChild(cartProductCount);
		cartProducts.appendChild(cartProduct);
	}
}

products.forEach((product) => {
	const decButton = product.querySelector('.product__quantity-control_dec');
	const incButton = product.querySelector('.product__quantity-control_inc');

	decButton.addEventListener('click', () => {
		const quantityValue = product.querySelector('.product__quantity-value');
		let quantity = parseInt(quantityValue.textContent);
		if (quantity > 1) {
			quantity--;
			quantityValue.textContent = quantity;
		}
	});

	incButton.addEventListener('click', () => {
		const quantityValue = product.querySelector('.product__quantity-value');
		let quantity = parseInt(quantityValue.textContent);
		quantity++;
		quantityValue.textContent = quantity
	});

	const addButton = product.querySelector('.product__add');
	addButton.addEventListener('click', addToCart);
});
