import { OpenAi } from 'openai'

const client = new OpenAi({
    apikey: ''
})

async function main() {
    const result = await client.chat.completions.create({
        model: "gpt-40-mini",
        message: [{ role: 'user', content: "tell me what 2 + 2" }]
    })
    console.log(`Ans from openAi ${result.choises[0].content}`)
}

const system_promot = `
example:
 - user: what is 2+2?
 output:
  - intial:
  -think:
  analyse:
  think:
  analysis:
 `
// chain of throught prompting (overthink) - instructions hey model have some breakdown
async function main(prompt = "") {
    const result = await client.chat.completions.create({
        model: "gpt-40-mini",
        message: [{ role: 'system', content: prompt }]
    })
    console.log(`Ans from openAi ${result.choises[0].content}`)
}