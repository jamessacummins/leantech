
const content_container = document.querySelector('.content-container');

/*

// This was before I figured out a more efficient way of building the cards.

function make_card(title, location, link){

	//preview card
	let preview_card = document.createElement('div');
	preview_card.classList.add('preview-card')

		//title container
		let title_container = document.createElement('div');
		title_container.classList.add('title-container');

			//title proper
			let card_title = document.createElement('h1');
			card_title.classList.add('card-title');

				let title_text = document.createTextNode(title);
				card_title.appendChild(title_text);

			title_container.appendChild(card_title);

			//title line
			let title_line = document.createElement('div');
			title_line.classList.add('title-line');
			title_container.appendChild(title_line);

		preview_card.appendChild(title_container);
		
		//img
		let card_img = document.createElement('div');
		card_img.classList.add('card-img');
		card_img.style.backgroundImage = `url('${location}')`

		preview_card.appendChild(card_img);


		//link container
		let click_container = document.createElement('div');
		click_container.classList.add('click-container');

			//link proper
			let preview_link = document.createElement('a');
			preview_link.classList.add('preview-link');
			preview_link.href = link;

				//link text
				let preview_text = document.createElement('h1');
				preview_text.classList.add('preview-click');
				let real_text = document.createTextNode('Read More');
				preview_text.appendChild(real_text);

				preview_link.appendChild(preview_text);

			click_container.appendChild(preview_link);


			//link line
			let click_line = document.createElement('div');
			click_line.classList.add('click-line');

			click_container.appendChild(click_line);

		preview_card.appendChild(click_container);



	content_container.appendChild(preview_card);
};

*/

function quick_make_card(title, location, link){
	let codeBlock = `
			<div class='title-container'>
				<h1 class='card-title'>
					${title}
				</h1>
				<div class='title-line'></div>
			</div>
			<div class='card-img' style='background-image: url("${location}");'></div>
			<div class='click-container'>
				<a class='preview-link' href="${link}">
					<h1 class='preview-click'>
						Read More
					</h1>
				</a>
				<div class='click-line'></div>
			</div>
	`;
	let codeInsert = document.createElement('div');
	codeInsert.innerHTML = codeBlock;
	codeInsert.classList.add('preview-card');
	content_container.appendChild(codeInsert);
};


function insertPreviewContent(){
	content_container.innerHTML = '';
	for(key in wiki_data){
		let title = wiki_data[key].title;
		let location = wiki_data[key].image_location;
		let link = wiki_data[key].address;
		quick_make_card(title,location,link);
	};
};

insertPreviewContent();
