function displayHome(){

	const homeDiv = document.createElement('div');

	const image = document.createElement('img');
	image.src = 'one.jpg';
	console.log("one");

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