function addHeader(){

	const headerDiv = document.createElement('div');
	headerDiv.classList.add('header-container');
	const header = document.createElement('header');

	const titleDiv = document.createElement('div');

	const title = document.createElement('h1');
	title.textContent = 'WHITE STAR!';
	const subtitle = document.createElement('p');
	subtitle.classList.add('subtitle');
	subtitle.textContent = 'The best food you can get at a reasonable price.';
	titleDiv.appendChild(title);
	titleDiv.appendChild(subtitle);

	const navbar = document.createElement('nav');
	const navlist = document.createElement('ul');

	const navItemsHome = document.createElement('li');
	navItemsHome.textContent = 'Home';
	navItemsHome.setAttribute("id", "home");
	navlist.appendChild(navItemsHome);

	const navItemsMenu = document.createElement('li');
	navItemsMenu.textContent = 'Menu';
	navItemsMenu.setAttribute("id", "menu");
	navlist.appendChild(navItemsMenu);

	const navItemsAbout = document.createElement('li');
	navItemsAbout.textContent = 'About';
	navItemsAbout.setAttribute("id","about");
	navlist.appendChild(navItemsAbout);

	navbar.appendChild(navlist);
	header.appendChild(titleDiv);
	header.appendChild(navbar);
	headerDiv.appendChild(header);

	const navcontent = document.getElementById('navcontent')

	navcontent.appendChild(headerDiv);
	
}

export default addHeader