const step_data = wiki_data[article].step;

const article_container = document.querySelector('.article-container');

function addHeader(){
	let header = document.createElement('h1');
	header.classList.add('article-h1');
	let text = document.createTextNode(wiki_data[article].title);
	header.appendChild(text);
	article_container.appendChild(header);
};

function addImage(){
	let article_image_div = document.createElement('div');
	article_image_div.classList.add('image-div');
	article_image_div.style.backgroundImage = `url('${wiki_data[article].image_location}')`;
	article_container.appendChild(article_image_div);
};

function addStep(stepItem, stepIndex){

	stepIndex++;

	let step_container = document.createElement('div');
	step_container.classList.add('step-container');

		let step_num = document.createElement('div');
		step_num.classList.add('step-num');
			
			let step_num_text = document.createTextNode(stepIndex);
			step_num.appendChild(step_num_text);

		step_container.appendChild(step_num);

		let step = document.createElement('div');
		step.classList.add('step');

			let step_text = document.createTextNode(stepItem.text);
			step.appendChild(step_text);

		step_container.appendChild(step);

		let step_gif = document.createElement('img');
		step_gif.classList.add('step-gif');
		step_gif.src = stepItem.gif;

		step_container.appendChild(step_gif);


	article_container.appendChild(step_container);
};

function addStepS(){
	for(index in step_data){
		addStep(step_data[index],index);
	};
};

function addButton(){
	let button_link = document.createElement('a');
	button_link.href = 'index.html';

		let button = document.createElement('button');
		button.classList.add('article-button');

			let button_text = document.createTextNode('Return to Main Page');
			button.appendChild(button_text);

		button_link.appendChild(button);

	article_container.appendChild(button_link);
};

function addArticleContent(){
	addHeader();
	addImage();
	addStepS();
	addButton();
};

addArticleContent();