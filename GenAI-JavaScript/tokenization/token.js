import { get_encoding } from "tiktoken";

const encodedForGpt2 = get_encoding('gpt2')
const encoded = encodedForGpt2.encode('Hello i am Pratap Das')
console.log(encoded)

const decoded = encodedForGpt2.decode(encoded)
console.log(new TextDecoder().decode(decoded))