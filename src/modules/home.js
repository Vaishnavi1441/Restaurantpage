function displayHome(){

	const homeDiv = document.createElement('div');

	const image = document.createElement('img');
	image.src = 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

	const intro = document.createElement('p');
	intro.classList.add('intro');
	intro.textContent = 'Welcome to The White Star.';

	const introSlogan = document.createElement('p');
	introSlogan.classList.add('intro');
	introSlogan.textContent = 'Good Food, Good Mood!'


	homeDiv.appendChild(intro);
	homeDiv.appendChild(introSlogan);
	homeDiv.appendChild(image);

	const content = document.getElementById('content');
	content.appendChild(homeDiv);
}

export default displayHome