const animals = {
    id:10,
    name:'rai',
    type:'man',
    'num of legs':4,
    minLegs:4
}
console.log(animals)

animals['name']='Dog'
console.log(animals)
animals.type = 'security'
console.log(animals)
animals["num of legs"] = 2
console.log(animals)

delete animals.type
console.log(animals)

console.log('name' in animals)

console.log(Object.keys(animals))
console.log(Object.values(animals))

// Rename the key from 'oldKey' to 'newKey' using destructuring and spread syntax

// animals.ids = animals.id
// delete animals.id
// console.log(animals)

const {id: ids, ...animal} = animals
const updateObj = {ids, ...animal}
console.log(animals)
console.log(updateObj)
 

// Object as a Data Structure - Array Operations
/**
 * Store students information
 * - name
 * - email
 * - id
 */

/**
 *
 * a utility to create a random id
 */

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

// const students = [
// 	{
// 		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
// 		name: 'Pratap',
// 		email: 'pratap@test.com',
// 	},
// 	{
// 		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
// 		name: 'P d',
// 		email: 'pd@test.com',
// 	},
// 	{
// 		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
// 		name: 'Dev dsa',
// 		email: 'dev@test.com',
// 	},
// ];

/**
 * 1. Easily Traverse
 * 2. Filter
 * 3. Delete (medium) [splice -> O(n), filter -> O(n)]
 * 4. Update (medium) (easy) [push -> O(n)]
 * 5. Create a new one (easy task) [push -> O(1), unshift -> O(n)]
 */

// create a new students
// students.push({
// 	id: uuidv4(),
// 	name: 'pratap das',
// 	email: 'pdas@test.com',
// });

// update
const idToUpdate = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
// const updatedData = {
// 	name: 'haldia',
// 	// email: 'haldia@test.com',
// };

// const updatedIndex = students.findIndex((item) => item.id === idToUpdate);
// students[updatedIndex] = {
// 	...students[updatedIndex],
// 	...updatedData,
// };
// console.log('Updated', students);

// Delete
// students.splice(updatedIndex, 1);

// console.log('Deleted', students);

// forEach, map, filter, every, reduce, some, find, findIndex -> traversing method

// for (let i = 0; i < students.length; i++) {
// 	console.log(students[i].name);
// }

// for (let i in students) {
// 	console.log(students[i].name);
// }

// for (let student of students) {
// 	console.log(student.name);
// }




// Object Over Array

/**
 * Store students information
 * - name
 * - email
 * - id
 */

/**
 *
 * a utility to create a random id
 */

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

const students = {
	'67de71e5-0eac-474f-ab51-850ba9b31ed5': {
		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
		name: 'pratap',
		email: 'pratap@test.com',
	},
	'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e': {
		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
		name: 'Ak',
		email: 'ak@test.com',
	},
	'ee729e84-a84e-4adf-b32c-4647a7114d5b': {
		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
		name: 'Eli',
		email: 'eli@test.com',
	},
};

/**
 * 1. Easily Traverse [O(n)]
 * 1.1 Get anything if you have the key [O(1)]
 * 2. Filter
 * 3. Delete (medium) [O(1)]
 * 4. Update (medium) [O(1)]
 * 5. Create a new one (easy task) [O(1)]
 */

// create
const std = {
	id: uuidv4(),
	name: 'pd das',
	email: 'pd@test.com',
};

students[std.id] = std;

// update
const idToBeUpdated = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
const updatedData = {
	name: 'HM',
	email: 'hm@test.com',
};
students[idToBeUpdated] = {
	...students[idToBeUpdated], // add orginal object
	...updatedData, // update object
};

// delete
delete students[idToBeUpdated];

// Get
// console.log(students['67de71e5-0eac-474f-ab51-850ba9b31ed5']);
// console.log(students[idToBeUpdated])
// console.log(students.hasOwnProperty(idToBeUpdated))
// Traverse

// for (let key in students) {
// 	console.log(students[key]);
// }

// convert obj to arrry to traverse (traverse, find, itrate )
// Object.values(students).forEach((student) => {
// 	console.log(student.name, student.email);
// });