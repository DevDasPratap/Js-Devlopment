// Object
const person = {
	name: "Pratap",
	"last name": "Das",
	skill: ["JavaScript", "NodeJS", "MongoDB", "Git"],
	project: {
	  frontend: "Weather project with api",
	  backend: "Blog app",
	},
	code: function () {
	  return "Start coding";
	},
	walk: () => {
	  return "start walking";
	},
  };
  
  // how to access
  // console.log(person)
  // console.log(person.name)
  // console.log(person['last name'])
  // console.log(person.walk())
  // console.log(person['walk']())
  
  // how to find
  // console.log(person.hasOwnProperty('name'))
  
  // how to add,update, delete
  person.location = "Kolkata"; //add
  person.name = "Dev Das"; //update
  delete person["last name"];
  // console.log(person)
  
  // shallow copy - change property of original obj
  const person_2 = person;
  // console.log(person === person_2)
  
  person_2["last name"] = "Das";
  // console.log(person)
  // console.log(person_2)
  
  // deep copy - dont change property of original obj
  const person_3 = Object.assign({}, person); //{} -> create empty obj then put copy of all value
  // console.log(person_3)
  person_3.project = null;
  
  // console.log(person)
  // console.log(person_3)
  
  // Object method
  
  // freeze-> you don't add, delete, update key value
  // person.jobTitle = 'swe'
  // Object.freeze(person)
  // person.org = 'BCD'
  // console.log(person)
  // console.log(Object.isFrozen(person))
  
  // seal->you can't add, delete key but can update key values
  // person.room_rent = 7000 //not add
  // Object.seal(person)
  // person.stay_with = 'friend' // not add
  // person.name = 'Name Changed' // updated
  // console.log(person)
  // console.log(Object.isSealed(person))
  
  // Object method keys, values & entries
  // console.log(Object.keys(person))
  // console.log(Object.values(person))
  // console.log(Object.entries(person)) //array of array
  
  // loop in an object
  for (const key in person) {
	// console.log(`${key}: ${person[key]} `)
  }
  // using foreach
  // Object.keys(person).forEach((key)=>console.log(key))
  
  // compare obj
  // console.log(Object.is(person, person_2))
  
  // find the all player count
  const data = {
	id: 1,
	name: ["p1", "p4"],
	next: {
	  id: 2,
	  name: ["p3"],
	  next: {
		id: 3,
		name: ["p3", "p4", "p5"],
		next: {
		  id: 4,
		  name: ["p1", "p2", "p4"],
		  next: {
			id: 5,
			name: ["p2", "p3", "p5"],
			next: null,
		  },
		},
	  },
	},
  };
  
  const playerCount = (data) => {
	if (data === null) {
	  return {};
	}
	let count = {};
	for (let player of data.name) {
	  count[player] = (count[player] || 0) + 1;
	}
	//   console.log(count)
	const nextPlayerCount = playerCount(data.next);
	for (let key in nextPlayerCount) {
	  count[key] = (count[key] || 0) + nextPlayerCount[key];
	}
	return count;
  };
  const count_player = playerCount(data);
//   console.log(count_player);











const animals = {
  id: 10,
  name: "rai",
  type: "man",
  "num of legs": 4,
  minLegs: 4,
};
// console.log(animals)

animals["name"] = "Dog";
// console.log(animals)
animals.type = "security";
// console.log(animals)
animals["num of legs"] = 2;
// console.log(animals)

delete animals.type;
// console.log(animals)

// console.log('name' in animals)

// console.log(Object.keys(animals))
// console.log(Object.values(animals))

// Rename the key from 'oldKey' to 'newKey' using destructuring and spread syntax

// animals.ids = animals.id
// delete animals.id
// console.log(animals)

const { id: ids, ...animal } = animals;
const updateObj = { ids, ...animal };
// console.log(animals)
// console.log(updateObj)

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
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
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
const idToUpdate = "ee729e84-a84e-4adf-b32c-4647a7114d5b";
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
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const students = {
  "67de71e5-0eac-474f-ab51-850ba9b31ed5": {
    id: "67de71e5-0eac-474f-ab51-850ba9b31ed5",
    name: "pratap",
    email: "pratap@test.com",
  },
  "ebdf6b78-c32b-4b1d-8574-e8c655b05c1e": {
    id: "ebdf6b78-c32b-4b1d-8574-e8c655b05c1e",
    name: "Ak",
    email: "ak@test.com",
  },
  "ee729e84-a84e-4adf-b32c-4647a7114d5b": {
    id: "ee729e84-a84e-4adf-b32c-4647a7114d5b",
    name: "Eli",
    email: "eli@test.com",
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
  name: "pd das",
  email: "pd@test.com",
};

students[std.id] = std;

// update
const idToBeUpdated = "ee729e84-a84e-4adf-b32c-4647a7114d5b";
const updatedData = {
  name: "HM",
  email: "hm@test.com",
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

const last = "Last name";
const obje = {
  id: 1,
  name: "PD",
  "First name": "Pratap",
  [last]: "Das",
  id: 2,
  city: "Haldia",
};

// console.log(obje)


const obj = {a:1}
const copy = Object.assign(obj, {b:2})
copy.a=3
// console.log(obj.a)

const gadget = {
  name: 'Smartphone',
  space:{
    brand:'Apple',
    model: 16,
    features:{
      camera:'50MP',
      battery: '4000mAh',
      waterProof:true,
      waranty:'1 year'
    }
  }
}

const gadgetResult = gadget.space.brand.nonExistingProperty?.anyName
console.log(gadgetResult)


global.age = 10
const personObj = {
  age:20,
  getAge: function () {
    return `Hi my age is: ${this.age}`
  }
}

// console.log(personObj.age)
// console.log(personObj.getAge())
// const fn = personObj.getAge
// console.log(fn())