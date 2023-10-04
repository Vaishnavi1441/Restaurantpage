function displayMenu(){

	const menuContent = document.createElement('div');
	menuContent.classList.add('menu-content');

	const burger = document.createElement('div');
	const burgerTitle = document.createElement('h3');
	burgerTitle.textContent = 'The Good Burger';
	const burgerPic = document.createElement('img');
	burgerPic.src = 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
	burger.appendChild(burgerTitle);
	burger.appendChild(burgerPic);

	const pizza = document.createElement('div');
	const pizzaTitle = document.createElement('h3');
	pizzaTitle.textContent = 'The Good Pizza';
	const pizzaPic = document.createElement('img');
	pizzaPic.src = 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80';
	pizza.appendChild(pizzaTitle);
	pizza.appendChild(pizzaPic);

	const cake = document.createElement('div');
	const cakeTitle = document.createElement('h3');
	cakeTitle.textContent = 'The Good Cake';
	const cakePic = document.createElement('img');
	cakePic.src = 'https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80';
	cake.appendChild(cakeTitle);
	cake.appendChild(cakePic);

	const ice = document.createElement('div');
	const iceTitle = document.createElement('h3');
	iceTitle.textContent = 'The Good Icecream';
	const icePic = document.createElement('img');
	icePic.src = 'https://images.unsplash.com/photo-1561845730-208ad5910553?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';
	ice.appendChild(iceTitle);
	ice.appendChild(icePic);

	menuContent.appendChild(burger);
	menuContent.appendChild(pizza);
	menuContent.appendChild(cake);
	menuContent.appendChild(ice);

	const content = document.getElementById('content');
	content.appendChild(menuContent);	
}

export default displayMenu