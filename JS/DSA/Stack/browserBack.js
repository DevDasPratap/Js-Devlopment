import PromptSync from "prompt-sync";
import Stack from "./stack.js";

const prompt = PromptSync();
const stack = new Stack();

let exit = false;

while (!exit) {
  const userChoice = prompt(`\nPlease select one of the below choices:
  1. Press 1 to add a new domain
  2. Press 2 to see the current domain
  3. Press 3 to go back
  4. Press 4 to exit
  Your choice: `);
  
  const userChoiceNo = parseInt(userChoice);

  switch (userChoiceNo) {
    case 1:
      const domainName = prompt('Please provide the new domain: ');
      stack.push(domainName);
      console.log(`${domainName} is now open`);
      break;

    case 2:
      if (stack.isEmpty()) {
        console.log("No domains are open.");
      } else {
        console.log(`Current domain is: ${stack.peek()}`);
      }
      break;

    case 3:
      if (stack.isEmpty()) {
        console.log("No previous domain to go back to.");
      } else {
        stack.pop();
        console.log(`Went back to domain: ${stack.peek() || "No domains left"}`);
      }
      break;

    case 4:
      exit = true;
      console.log("Exiting...");
      break;

    default:
      console.log("Invalid choice. Please select a valid option.");
      break;
  }
}
