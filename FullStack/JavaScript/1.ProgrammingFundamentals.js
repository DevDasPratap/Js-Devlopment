// Variables: Variables helps us to make thing dynamic.

const names = [
	'PD',
	'Adi',
	'devdas',
	'Shiva',
	'Sambhu'
];
let index = -1;
let person = names[++index];

setInterval(() => {
	person = names[index++];
	console.log(person, person.length);

	if (index === names.length) {
		index = 0;
	}
}, 1000);

// Operators: Mathematical representations

// Conditions: Brain of a computer

if (studyBasic) {
	wontJoin();
}

if (studyAdvanced) {
	join();
}

if (teacherSpeaks) {
	silent();
}

if (!teacherSpeaks) {
	shout();
}

// Scenario 1 - Single branch
// if condition
if (hasMoney) {
	buyPhone();
}

// Scenario 2 - Two branches
// if else condition
if (toss === 'head') {
	win();
} else {
	loss();
}

// Scenario 3 - Multiple branches
// else if
if (1 > 1) {
	big();
} else if (1 < 1) {
	small();
} else {
	same();
}

// Loops
for (let i = 1; i <= 100; i++) {
	// it's a new js file,
	// we can write any valid js code here
	// every code written inside this block will execute multiple times
	console.log('Hello world!', i);
}

// There are total three types of loop available in JS
// 1. for (When we know the range)
// 1.1 Range
// 1.2 for in
// 1.3 for of
// 2. while (When we don't know the range)
// 3. do while *

while (true) {
	let num = Math.ceil(Math.random() * 100);
	console.log('Hello World', num);
	if (num === 99) break;
}

do {
	console.log('It will run at least once');
} while (false);

// Arrays
const name1 = 'Adi';
const name2 = 'yogi';
const name3 = 'Anik';
const name4 = 'Arjun';
const name5 = 'Ayman';

const students = [
	'PD',
	'Adi',
	'devdas',
	'Shiva',
	'Sambhu',
	'Arjun'
];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);

for (let i = 0; i < students.length; i++) {
	console.log(students[i], students[i].toLowerCase());
}

// name1.sendEmail();
// name2.sendEmail();
// name3.sendEmail();
// name4.sendEmail();
// name5.sendEmail();

const nums = [1, 2, 3, 4, 5, 6];
const bools = [true, true, false, false];
const nulls = [null, null, null];
const undefineds = [undefined, undefined, undefined];
const arrayOfArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const mixed = [true, null, 'Str', 5, [12, 2, 4]];

// Objects
const student1 = {
	firstName: 'pratap',
	secondName: 'das',
	email: 'pratap@example.com',
	age: 25,
	attend: true,
};

const student2 = {
	firstName: 'pd',
	secondName: 'das',
	email: 'pd@example.com',
	age: 27,
	attend: true,
};

const student3 = {
	firstName: 'dev',
	secondName: 'das',
	email: 'dev@example.com',
	age: 22,
	attend: true,
};

const allStudents = [student1, student2, student3];

for (let i = 0; i < allStudents.length; i++) {
	sendMail(allStudents[i].email);
}

function sendMail(email) {
	console.log('Sending email to', email);
}

// Functions
function nameOfFunction(name) {
	if (!name) {
		console.log('Please provide your name');
	} else {
		console.log('Hello', name);
	}
}

nameOfFunction('adi');
nameOfFunction('yogi');
nameOfFunction();

function generateRandomNumber(min = 1, max) {
	const randomNumber = Math.floor(Math.random() * min + (max - min));
	return randomNumber;
}

console.log(generateRandomNumber(5, 10));