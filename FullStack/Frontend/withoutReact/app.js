// 1.0
// window.onload = function () {
//     main();
// };

// // But I want to see a h1 element. To do that we will write something in our JavaScript file.

// function main() {
//     const h1 = document.createElement('h1');
//     h1.innerText = 'Hello World';

//     document.body.appendChild(h1);
// }

// 2.0
// But we did not hand in the HTML file. We can create dynamically content with JavaScript. This time we will write a paragraph.
// window.onload = function () {
//     main();
// };

// function main() {
//     const h1 = document.createElement('h1');
//     h1.innerText = 'Hello World';
//     const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex voluptas hic tenetur consequatur odio ullam commodi dolore blanditiis illum sint tempora laborum, officiis, ut quam! Rerum quia deleniti qui debitis? Pariatur alias, quibusdam illo aut esse assumenda autem nam, provident nesciunt quis impedit aperiam inventore commodi, debitis molestias excepturi. Distinctio quas sequi qui harum quaerat quae tempora quod id dolores numquam illo, eius praesentium rem officia nihil deserunt doloremque nobis porro vel. Deserunt fugiat obcaecati corrupti dignissimos eaque doloremque id, necessitatibus nesciunt labore laborum dolor. Laudantium voluptate veritatis nulla, at doloremque sequi, culpa fugit, non soluta facere minus mollitia voluptates quos quis officia? Quidem cum a minima numquam. Assumenda iure accusamus quidem ipsa aspernatur corrupti, itaque totam fugiat culpa eveniet neque veniam aliquid doloribus ducimus corporis sed architecto similique? Enim possimus suscipit modi eius alias facere voluptatum dolore qui fugiat beatae. Eaque nihil dignissimos dicta sunt accusamus, vitae accusantium molestiae sed quae ullam itaque saepe nam. Pariatur numquam nam explicabo nihil minima facilis officia non magnam consectetur hic necessitatibus, illo ad quidem modi qui! Quisquam vel alias voluptatem dicta, optio expedita beatae distinctio nam totam ut nesciunt, tempora, aut reiciendis at deleniti veritatis quod perferendis sed et velit nobis.'
//     const p = document.createElement('p');
//     p.innerText = lorem
//     document.body.appendChild(h1);
//     document.body.appendChild(p);
// }

// 3.0
// Now we want to group h1 and p or put it in a div. We have to take a div for that.

// app.js

// window.onload = function () {
// 	main();
// };

// function main() {
// 	const div = document.createElement('div');

// 	const h1 = document.createElement('h1');
// 	h1.innerText = 'Hello World';
//     const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex voluptas hic tenetur consequatur odio ullam commodi dolore blanditiis illum sint tempora laborum, officiis, ut quam! Rerum quia deleniti qui debitis? Pariatur alias, quibusdam illo aut esse assumenda autem nam, provident nesciunt quis impedit aperiam inventore commodi, debitis molestias excepturi. Distinctio quas sequi qui harum quaerat quae tempora quod id dolores numquam illo, eius praesentium rem officia nihil deserunt doloremque nobis porro vel. Deserunt fugiat obcaecati corrupti dignissimos eaque doloremque id, necessitatibus nesciunt labore laborum dolor. Laudantium voluptate veritatis nulla, at doloremque sequi, culpa fugit, non soluta facere minus mollitia voluptates quos quis officia? Quidem cum a minima numquam. Assumenda iure accusamus quidem ipsa aspernatur corrupti, itaque totam fugiat culpa eveniet neque veniam aliquid doloribus ducimus corporis sed architecto similique? Enim possimus suscipit modi eius alias facere voluptatum dolore qui fugiat beatae. Eaque nihil dignissimos dicta sunt accusamus, vitae accusantium molestiae sed quae ullam itaque saepe nam. Pariatur numquam nam explicabo nihil minima facilis officia non magnam consectetur hic necessitatibus, illo ad quidem modi qui! Quisquam vel alias voluptatem dicta, optio expedita beatae distinctio nam totam ut nesciunt, tempora, aut reiciendis at deleniti veritatis quod perferendis sed et velit nobis.'
// 	const p = document.createElement('p');
// 	p.innerText = lorem
// 	div.appendChild(h1);
// 	div.appendChild(p);

// 	document.body.appendChild(div);
// }

// 4.0
// We can do this work more dynamically. We will make two functions. For another text for a container.

// function Container(children) {
// 	const div = document.createElement('div');
// 	children.forEach((child) => div.appendChild(child));

// 	return div;
// }

// function Text(tag, value) {
// 	const text = document.createElement(tag);
// 	text.innerText = value;
// 	return text;
// }

// 5.0
// This time we will use these functions by deletting everything we have written inside the main function.

// window.onload = function () {
// 	main();
// };

// function main() {
// 	const app = Container([
// 		Text('h1', 'Hello World'),
// 		Text('p', 'This is a simple paragraph'),
// 	]);
// 	document.getElementById('root').appendChild(app);
// }

// function Container(children) {
// 	const div = document.createElement('div');
// 	children.forEach((child) => div.appendChild(child));

// 	return div;
// }

// function Text(tag, value) {
// 	const text = document.createElement(tag);
// 	text.innerText = value;
// 	return text;
// }

// 6.0
// It's a lot of sort of way to write before React's jsx arrives. This time you want to take as many containers or text you no longer have to write code for each one. Using these functions you can create content in dynamically pages. We will also give style if we want.
window.onload = function () {
	main();
};

function main() {
	const app = Container([
		Text('h1', 'Hello World'),
		Text('p', 'This is a simple paragraph'),
		Container([Text('h3', 'WOW'), Text('h3', 'NICE')], {
			display: 'flex',
			gap: '2rem',
		}),
	]);
	document.getElementById('root').appendChild(app);
}

function Container(children, style = {}) {
	const div = document.createElement('div');
	Object.keys(style).map((key) => {
		div.style[key] = style[key];
	});
	children.forEach((child) => div.appendChild(child));

	return div;
}

function Text(tag, value) {
	const text = document.createElement(tag);
	text.innerText = value;
	return text;
}