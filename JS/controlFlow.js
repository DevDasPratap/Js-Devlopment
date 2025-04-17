/**
 * Control Flow:
 * if
 * if else
 * switch
 * switch case
 * break
 * continue
 */

let catchingBus = false;

if (catchingBus) {
    console.log("I will Reach home on time");
} else {
    console.log("I will be late to reach");
}

catchingBus ?  console.log("I will Reach home on time") : console.log("I will be late to reach")

let age = 8;

if (age >= 18) {
    console.log("You are Eligible to Vote");
} else {
    console.log("You are NOT Eligible to Vote");
}

// Let's build a grading system
// if score is >= 90, Grade A
// if score if >= 80, Grade B
// If score if >= 70, Grade C
// Fail

let score = 76;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score < 70) {
    console.log("Fail");
}

let x = 0;

if (x === 0) {
    console.log(0);
} else if (x >= 0) {
    console.log("Greater than 0");
} else if (x <= 0) {
    console.log("Less than 0");
}

const condition = false;
const innerCondition = false;

if (condition) {
    console.log("Outer if");
    if (innerCondition) {
        console.log("Inner if");
    } else {
        console.log("Inner else");
    }
} else {
    console.log("Outer else");
}

/*else {
    console.log("I am alone else")
}*/

let position = 10;

switch (position) {
    case 1:
        console.log("Print 1");
        break;
    case 2:
        console.log("Print 2");
        break;
    case 3:
        console.log("Print 3");
        break;
    case 4:
        console.log("Print 4");
        break;

    default:
        console.log("Nothing is matched");
}

let day = 51;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day Number")
}

let name = "Google"

switch(name) {
    case "pratap":
        console.log("I am Js developer");
        break;
    case "google":
        console.log("Giving answer to all searches");
        break;
    default:
        console.log("You are neither google, nor tapaScript!")
}

const city = "Bangalore";
switch (city) {
  case "Bangalore":
  case "Kolkata":
  case "Agra":
  case "Jaipur":
    console.log("All these are in India");
    break;
  case "New York":
  default:
    console.log("It is in EUROPE");
}

// Why switch case better than if else
//  if else is used when we have multiple conditions to check
//  switch case is used when we have multiple values to check
//  switch case is more readable and easy to understand
//  switch case is faster than if else
//  switch case is more efficient than if else