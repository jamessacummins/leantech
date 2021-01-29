const content_navbar = document.querySelector('.content-navbar');

function insertNavbarItem(title, location, id){
	let navbar_link = document.createElement('a');
	navbar_link.classList.add('navbar-link');
	navbar_link.href = location;

		let navbar_item = document.createElement('div');
		navbar_item.classList.add('wiki-navbar-item');
		navbar_item.id = `navbar-item-${id}`;
		if(id == article){
			navbar_item.classList.add('current-navbar-item');
		};

			let ni_text = document.createTextNode(title);
			navbar_item.appendChild(ni_text);

		navbar_link.appendChild(navbar_item);

	content_navbar.appendChild(navbar_link);
};


function insertNavbar(){
	content_navbar.innerHTML = '';
	for(i in wiki_data){
		let title = wiki_data[i].title;
		let url = wiki_data[i].address;
		if(article != -1){
			url = url.slice(5);
		};
		insertNavbarItem(title, url, i);
	};
};

insertNavbar();

function expandNavbarMobile(){
	let isActive = content_navbar.style.display == 'block';
	console.log(isActive);
	if(article == -1){
		if(isActive){
			content_navbar.style.display = 'none';
			content_container.style.display = 'flex';
		} else{
			content_navbar.style.display = 'block';
			content_container.style.display = 'none';
		}
	} else{
		if(isActive){
			content_navbar.style.display = 'none';
			article_page.style.display = 'flex';
		} else{
			content_navbar.style.display = 'block';
			article_page.style.display = 'none';
		}
	}
}