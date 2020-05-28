// Task 5. Articles List
// In this problem, you should create a functionality which creates articles and appends them into some article section.
// The programs in this language are called scripts. They can be written right in the HTML and executed automatically
// as the page loads.
// Scripts are provided and executed as a plain text. They don&#39;t need a special preparation or a compilation to run.

function createArticle() {
	let headingThree = document.createElement('h3');
	headingThree.textContent = document.querySelector('#createTitle').value;
	document.getElementById('articles').appendChild(headingThree);

	let textAreaa = document.createElement('p');
	textAreaa.textContent = document.getElementById('createContent').value;
	document.getElementById('articles').appendChild(textAreaa);

	document.getElementById('createTitle').value = '';
	document.getElementById('createContent').value = '';
}