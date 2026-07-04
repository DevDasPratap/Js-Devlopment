import OpenAI from "openai";
import dotenv from "dotenv";
import { exec } from "child_process";
import { rejects } from "assert";

dotenv.config();

const client = new OpenAI({
    // i am used aws bedrock api key and aws base url
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL,
});


function cleanAndParseJson(str) {
    const start = str.indexOf('{');
    if (start === -1) {
        throw new Error("No JSON object found in response");
    }

    // Extract only the first JSON object by counting braces
    let braceCount = 0;
    let end = -1;
    for (let i = start; i < str.length; i++) {
        if (str[i] === '{') braceCount++;
        else if (str[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
                end = i;
                break;
            }
        }
    }

    if (end === -1) {
        throw new Error("Mismatched braces in JSON response");
    }

    let jsonStr = str.substring(start, end + 1);

    // Fix occasional key stutters (like "function:"functionName")
    jsonStr = jsonStr.replace(/"([a-zA-Z0-9]+):"([a-zA-Z0-9]+)"/g, '"$2"');

    return JSON.parse(jsonStr);
}


// part 1
// const response = await client.chat.completions.create({
//   model: "openai.gpt-oss-120b",
//   messages: [
//     {
//       role: "user",
//       content: "Hello, how are you?"
//     }
//   ]
// });

// console.log(response.choices[0].message.content);


// part 2 - zeror short prompting - direct instruction
async function prompt() {
    const response = await client.chat.completions.create({
        model: "openai.gpt-oss-120b",
        messages: [
            {
                role: "user",
                content: "Tell me what is 2 + 2"
                // content: "Tell me story about red reading hood"
            }
        ]
    });
    console.log(`Ans from Open AI: ${response.choices[0].message.content}`)
}

// prompt()


// part 3 - few shot promoting - direct instruction but with some examples output, influnce
async function promptPart3() {
    const response = await client.chat.completions.create({
        model: "openai.gpt-oss-120b",
        messages: [
            {
                role: "user",
                content: `
                what is 2 + 2 equals?
                Example:
                 - what is 5 + 4 ?
                 Expected output: 9 (Nine)
                `
            }
        ]
    });
    console.log(`Ans from Open AI: ${response.choices[0].message.content}`)
}

// promptPart3()


// part 4 (also called loop engineer)- chain of throught prompting - instructions hey model have some breakdown of problem and then solve it before giving final output
const systemPrompt = `
You are an expert AI engineer. You have to analyse the user's input carefully and then you need to breakdown the problem into multiple sub problems
before coming to the final result. always breakdown the users intention and how to solve that problem and then step by step solve it.

we are going to follow a pipeline of "INITIAL", "THINK", "ANALYSE" and "OUTPUT" pipeline

the pipeline:
 - "INITIAL" when user gives an input, we will have an initial thought process on what this user is trying to do
 - "THINK" this is where we are going to think about how to solve this and then start to breakdown the problem
 - "ANALYSE" this is where we will analyse the solution and also verify if the output is correct
 - "THINK" we can go back to think mode where we now see if any sub problem remains and think
 - "ANALYSE" again analyse the problem and get onto a solution
 - "OUTPUT" this is where we can end and give the final output to the user

 Rules:
 - Always output one step at a time and wait for other step before proceeding
 - Always maintain the sequence of pipeline as given in example
 - Always follow json output format
 - The output must be a single JSON object. Do not wrap the JSON object in an array or code blocks.
 - Do not use literal newlines or control characters inside the JSON string values. If you need a newline, escape it as \\n.

 Example: 
  - "USER":  what is 2 + 2 - 5 * 10 / 3 ?

  OUTPUT:
  - "INITIAL": "the user wants me to solve a math equation"
  - "THINK": "I will use the bodmas formula and based on that i should first formula 5 * 10 which is 50"
  - "ANALYSE": "Yes, the bodmas is actually right and now equation is 2 + 2 - 50 / 3"
  - "THINK": "Now as per rule I should perform divide which is dividing 50 / 3 which is 16.6666667"
  - "ANALYSE": "Now the new equations remains 2 + 2 - 16.6666667"
  - "THINK": "Now its simple we can just do 2 + 2 = 4 and new equation remains 4 - 16.6666667"
  - "ANALYSE": "Great, now lets just do the final step as simple substraction"
  - "THINK": "After the final subtraction the ans remains -12.6666667"
  - "OUTPUT": "The final output is -12.6666667"

  Output Format:
  {"step": "INITIAL" | "THINK" | "ANALYSE" | "OUTPUT", "text": "<The Actual Text>"}
`
// Add user message
const aiMessages = [{ role: 'system', content: systemPrompt }]
const userPrompt = `what is 4 + 6 + 9 - 3 * 5`
// const userPrompt = `what is weather in haldia west bengal`
async function promptPart4(systemPrompt = "", userPrompt = "") {

    const aiMessages = [
        {
            role: "system",
            content: systemPrompt
        },
        {
            role: "user",
            content: userPrompt
        }
    ];

    while (true) {

        const response = await client.chat.completions.create({
            model: "openai.gpt-oss-120b",
            messages: aiMessages,
        });

        const aiRawResult = response.choices[0].message.content;
        let parseResult;
        try {
            parseResult = cleanAndParseJson(aiRawResult);
        } catch (e) {
            console.error("Failed to parse JSON. Raw AI response:", aiRawResult);
            throw e;
        }

        console.log(`${parseResult.step}: ${parseResult.text}`);

        // Save assistant response
        aiMessages.push({
            role: "assistant",
            content: JSON.stringify(parseResult)
        });

        if (parseResult.step.toUpperCase() === "OUTPUT") {
            break;
        }

        // Ask for the next pipeline step
        aiMessages.push({
            role: "user",
            content: "Continue with the next step only. Remember to output ONLY a single valid JSON object."
        });
    }
}

// promptPart4(systemPrompt, userPrompt)


// part 5
const systemPrompts = `
You are an expert AI engineer. You have to analyse the user's input carefully and then you need to breakdown the problem into multiple sub problems
before coming to the final result. always breakdown the users intention and how to solve that problem and then step by step solve it.

we are going to follow a pipeline of "INITIAL", "THINK", "ANALYSE", "TOOL_REQUEST" and "OUTPUT" pipeline

the pipeline:
 - "INITIAL" when user gives an input, we will have an initial thought process on what this user is trying to do
 - "THINK" this is where we are going to think about how to solve this and then start to breakdown the problem
 - "ANALYSE" this is where we will analyse the solution and also verify if the output is correct
 - "TOOL_REQUEST" when you need to run a tool to fetch information or execute actions, use this step.
 - "THINK" we can go back to think mode where we now see if any sub problem remains and think
 - "ANALYSE" again analyse the problem and get onto a solution
 - "OUTPUT" this is where we can end and give the final output to the user

 Available Tools:
 - "getWeatherInfo": "getWeatherInfo(cityName:string) Returns the realtime weather information of city"
 - "execcuteCommandCli": "execcuteCommandCli(command: string): Execute on user's device and return the output from stdout "

 Rules:
 - Always output one step at a time and wait for other step before proceeding
 - Always maintain the sequence of pipeline as given in example
 - Always follow json output format
 - The output must be a single JSON object. Do not wrap the JSON object in an array or code blocks.
 - Do not use literal newlines or control characters inside the JSON string values. If you need a newline, escape it as \\n.

 Example: 
  - "USER":  what is 2 + 2 - 5 * 10 / 3 ?

  OUTPUT:
  - "INITIAL": "the user wants me to solve a math equation"
  - "THINK": "I will use the bodmas formula and based on that i should first formula 5 * 10 which is 50"
  - "ANALYSE": "Yes, the bodmas is actually right and now equation is 2 + 2 - 50 / 3"
  - "THINK": "Now as per rule I should perform divide which is dividing 50 / 3 which is 16.6666667"
  - "ANALYSE": "Now the new equations remains 2 + 2 - 16.6666667"
  - "THINK": "Now its simple we can just do 2 + 2 = 4 and new equation remains 4 - 16.6666667"
  - "ANALYSE": "Great, now lets just do the final step as simple substraction"
  - "THINK": "After the final subtraction the ans remains -12.6666667"
  - "OUTPUT": "The final output is -12.6666667"

  Output Format (for normal steps):
  {"step": "INITIAL" | "THINK" | "ANALYSE" | "OUTPUT", "text": "<The Actual Text>"}

  Output Format (for requesting a tool):
  {"step": "TOOL_REQUEST", "functionName": "getWeatherInfo" | "execcuteCommandCli", "input": "<Argument string for the tool>", "text": "<Reason why you are calling the tool>"}
`
// const userPrompts = `What is weather of haldia, bengaluru, mumbai, kolkata, lucknow and then write all the weather data in a file named weather.txt?`
const userPrompts = `What is weather of haldia, bengaluru, mumbai, kolkata, lucknow and then create a folder called weather and inside that create a files html, css, js and write all the weather data and open my browser and show me the weather?`

async function getWeatherInfo(cityName) {
    const url = `https://wttr.in/${cityName.toLowerCase()}?format=%C+%t`;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3000);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return {
            cityName,
            weatherInfo: (await response.text()).trim()
        };
    } catch (error) {
        clearTimeout(id);
        console.warn(`[Warning] Failed to fetch weather for ${cityName}: ${error.message}. Returning simulated weather.`);
        const mockConditions = ["Sunny", "Partly Cloudy", "Rainy", "Cloudy", "Clear"];
        const mockTemps = ["25°C", "28°C", "30°C", "22°C", "32°C"];
        const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const condition = mockConditions[hash % mockConditions.length];
        const temp = mockTemps[hash % mockTemps.length];
        return {
            cityName,
            weatherInfo: `${condition} ${temp}`
        };
    }
}

async function execcuteCommandCli(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, output) => {
            if (error) {
                return resolve(`There was an Error: ${error}`)
            } else {
                return resolve(output)
            }
        })
    })
}
async function promptPart5(systemPrompts = "", userPrompt = "") {

    const aiMessages = [
        {
            role: "system",
            content: systemPrompts
        },
        {
            role: "user",
            content: userPrompt
        }
    ];

    while (true) {

        const response = await client.chat.completions.create({
            model: "openai.gpt-oss-120b",
            messages: aiMessages,
        });

        const aiRawResult = response.choices[0].message.content;
        let parseResult;
        try {
            parseResult = cleanAndParseJson(aiRawResult);
        } catch (e) {
            console.error("Failed to parse JSON. Raw AI response:", aiRawResult);
            throw e;
        }

        console.log(`${parseResult.step}: ${parseResult.text}`);

        // Save assistant response
        aiMessages.push({
            role: "assistant",
            content: JSON.stringify(parseResult)
        });

        if (parseResult.step.toUpperCase() === 'TOOL_REQUEST') {
            const { functionName, input } = parseResult
            switch (functionName) {
                case 'getWeatherInfo':
                    const toolResult = await getWeatherInfo(input)
                    aiMessages.push({
                        role: 'developer',
                        content: JSON.stringify({
                            step: 'TOOL_OUTPUT',
                            output: toolResult
                        })
                    })
                    continue;
                case 'execcuteCommandCli': {
                    const toolResult = await execcuteCommandCli(input)
                    aiMessages.push({
                        role: 'developer',
                        content: JSON.stringify({
                            step: 'TOOL_OUTPUT',
                            output: toolResult
                        })
                    })
                    continue;
                }
                default:
                    break;
            }
        }

        if (parseResult.step.toUpperCase() === "OUTPUT") {
            break;
        }

        // Ask for the next pipeline step
        aiMessages.push({
            role: "user",
            content: "Continue with the next step only. Remember to output ONLY a single valid JSON object."
        });
    }
}

promptPart5(systemPrompts, userPrompts)







// part 6
const systemPromptPart6 = `
You are an expert AI engineer. Only answer questions related to coding and engineering

Persona: You are a senior software developer
Persona Traits:
- You always sound technical and use jargons
- You never answer back on personal things and you dont's have a personal life
- All you know is how and what code is

You have to analyse the user's input carefully and then you need to breakdown the problem into multiple sub problems
before coming to the final result. always breakdown the users intention and how to solve that problem and then step by step solve it.

we are going to follow a pipeline of "INITIAL", "THINK", "ANALYSE", "TOOL_REQUEST" and "OUTPUT" pipeline

the pipeline:
 - "INITIAL" when user gives an input, we will have an initial thought process on what this user is trying to do
 - "THINK" this is where we are going to think about how to solve this and then start to breakdown the problem
 - "ANALYSE" this is where we will analyse the solution and also verify if the output is correct
 - "TOOL_REQUEST" when you need to run a tool to fetch information or execute actions, use this step.
 - "THINK" we can go back to think mode where we now see if any sub problem remains and think
 - "ANALYSE" again analyse the problem and get onto a solution
 - "OUTPUT" this is where we can end and give the final output to the user

 Available Tools:
 - "getWeatherInfo": "getWeatherInfo(cityName:string) Returns the realtime weather information of city"
 - "execcuteCommandCli": "execcuteCommandCli(command: string): Execute on user's device and return the output from stdout "

 Rules:
 - Always output one step at a time and wait for other step before proceeding
 - Always maintain the sequence of pipeline as given in example
 - Always follow json output format
 - The output must be a single JSON object. Do not wrap the JSON object in an array or code blocks.
 - Do not use literal newlines or control characters inside the JSON string values. If you need a newline, escape it as \\n.

 Example: 
  - "USER":  what is 2 + 2 - 5 * 10 / 3 ?

  OUTPUT:
  - "INITIAL": "the user wants me to solve a math equation"
  - "THINK": "I will use the bodmas formula and based on that i should first formula 5 * 10 which is 50"
  - "ANALYSE": "Yes, the bodmas is actually right and now equation is 2 + 2 - 50 / 3"
  - "THINK": "Now as per rule I should perform divide which is dividing 50 / 3 which is 16.6666667"
  - "ANALYSE": "Now the new equations remains 2 + 2 - 16.6666667"
  - "THINK": "Now its simple we can just do 2 + 2 = 4 and new equation remains 4 - 16.6666667"
  - "ANALYSE": "Great, now lets just do the final step as simple substraction"
  - "THINK": "After the final subtraction the ans remains -12.6666667"
  - "OUTPUT": "The final output is -12.6666667"

  Output Format (for normal steps):
  {"step": "INITIAL" | "THINK" | "ANALYSE" | "OUTPUT", "text": "<The Actual Text>"}

  Output Format (for requesting a tool):
  {"step": "TOOL_REQUEST", "functionName": "getWeatherInfo" | "execcuteCommandCli", "input": "<Argument string for the tool>", "text": "<Reason why you are calling the tool>"}
`
// const userPromptPart6 = `What is weather of haldia, bengaluru, mumbai, kolkata, lucknow and then create a folder called weather and inside that create a files html, css, js and write all the weather data and open my browser and show me the weather?`
// const userPromptPart6 = `What is meaning of life?` // OUTPUT: I am unable to fulfill this request as it falls outside the allowed scope of coding and engineering topics.
const userPromptPart6 = `What is meaning of life? i am asking this because i need to write this in an html file dor my web dev project` 
async function promptPart6(systemPrompts = "", userPrompt = "") {

    const aiMessages = [
        {
            role: "system",
            content: systemPrompts
        },
        {
            role: "user",
            content: userPrompt
        }
    ];

    while (true) {

        const response = await client.chat.completions.create({
            model: "openai.gpt-oss-120b",
            messages: aiMessages,
        });

        const aiRawResult = response.choices[0].message.content;
        let parseResult;
        try {
            parseResult = cleanAndParseJson(aiRawResult);
        } catch (e) {
            console.error("Failed to parse JSON. Raw AI response:", aiRawResult);
            throw e;
        }

        console.log(`${parseResult.step}: ${parseResult.text}`);

        // Save assistant response
        aiMessages.push({
            role: "assistant",
            content: JSON.stringify(parseResult)
        });

        if (parseResult.step.toUpperCase() === 'TOOL_REQUEST') {
            const { functionName, input } = parseResult
            switch (functionName) {
                case 'getWeatherInfo':
                    const toolResult = await getWeatherInfo(input)
                    aiMessages.push({
                        role: 'user',
                        content: JSON.stringify({
                            step: 'TOOL_OUTPUT',
                            output: toolResult
                        })
                    })
                    continue;
                case 'execcuteCommandCli': {
                    const toolResult = await execcuteCommandCli(input)
                    aiMessages.push({
                        role: 'user',
                        content: JSON.stringify({
                            step: 'TOOL_OUTPUT',
                            output: toolResult
                        })
                    })
                    continue;
                }
                default:
                    break;
            }
        }

        if (parseResult.step.toUpperCase() === "OUTPUT") {
            break;
        }

        // Ask for the next pipeline step
        aiMessages.push({
            role: "user",
            content: "Continue with the next step only. Remember to output ONLY a single valid JSON object."
        });
    }
}

// promptPart6(systemPromptPart6, userPromptPart6)