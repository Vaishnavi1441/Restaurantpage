function displayInfo(){

	const infoDiv = document.createElement('div');
	infoDiv.classList.add('about');
	const infoTitle = document.createElement('h2');
	infoTitle.textContent = 'About Us';
	const infoParaFirst = document.createElement('p');
	infoParaFirst.textContent = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique leo pulvinar leo elementum accumsan. Vivamus vulputate risus vel libero maximus egestas. Nulla facilisi. Etiam tempus dictum finibus. Fusce sed mi elit. Aenean in elit tempor, porttitor nisl non, dignissim augue. Mauris felis sapien, commodo ultrices scelerisque eu, feugiat eget erat. In at magna vel dolor tincidunt imperdiet vel id massa. Ut eu eros et dolor lacinia commodo.';
	const infoParaSecond = document.createElement('p');
	infoParaSecond.textContent = 'Maecenas sed accumsan enim. Sed sollicitudin felis quis nibh ultrices aliquet. In ut risus at orci fringilla sodales. Donec dapibus nunc nec efficitur faucibus. Nam mi ex, tincidunt in tempus vel, aliquam non elit. Integer tempor dui luctus, consequat mi nec, fermentum lorem.';

	const infoContact = document.createElement('p');
	infoContact.textContent = 'Contact us at: whitestar@gmail.com';

	infoDiv.appendChild(infoTitle);
	infoDiv.appendChild(infoParaFirst);
	infoDiv.appendChild(infoParaSecond);
	infoDiv.appendChild(infoContact); 

	const content = document.getElementById('content');
	content.appendChild(infoDiv);

}

export default displayInfo