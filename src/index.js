import addHeader from "./modules/pageload"
import displayHome from "./modules/home"
import displayMenu from "./modules/menu"
import displayInfo from "./modules/about"


addHeader();
displayHome();

let content = document.getElementById('content')

let home = document.getElementById('home');
home.addEventListener('click', () => {
	content.textContent = '';
	displayHome();
});



let menu = document.getElementById('menu');
menu.addEventListener('click', () => {
	content.textContent = '';
	displayMenu();
});


let about = document.getElementById('about');
about.addEventListener('click', () => {
	content.textContent = '';
	displayInfo();
});

