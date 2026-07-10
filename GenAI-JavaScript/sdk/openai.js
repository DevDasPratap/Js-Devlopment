import OpenAI from "openai";
import dotenv from "dotenv";
import { z } from "zod";
import { zodTextFormat } from "openai/helpers/zod";


dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
  timeout: 10000,
  // logLevel: "debug",
});

async function init() {
  try {
    const result = await client.responses.create({
      model: "openai.gpt-oss-120b",
      input: "Hey there, my name is Pratap Das",
    });

    console.log(result.output_text);
  } catch (err) {
    console.error(err);
  }
}

// init();


const RiskSchema = z.object({
  title: z.string().describe("The actual title for risk"),
  tags: z.array(z.string()).describe("3-4 tags for this risk"),
  score: z.number().min(1).max(5).describe("Risk level out of 5"),
});

const outputSchema = z.object({
  risks: z.array(RiskSchema).describe('Array of risks')
})


async function initWithZod() {
  try {
    console.log("Before API");
    const result = await client.responses.create({
      model: "openai.gpt-oss-120b",
      text: {
        format: zodTextFormat(outputSchema, 'risks')
      },
      input: `
Extract the risks from the following document.

Document:

Project: Online Banking Platform Migration

The project aims to migrate the existing banking platform to a new cloud infrastructure within six months.

Potential Issues:
- Customer account data could be lost if database backups fail during migration.
- The migration may experience downtime of up to 8 hours, affecting online transactions.
- Unauthorized users may gain access if IAM policies are misconfigured.
- Sensitive customer information could be exposed due to improper encryption.
- Delays from third-party vendors may postpone the project deadline.
- The project budget may exceed the allocated amount because of unexpected cloud costs.
- Performance issues may occur if the new infrastructure is not properly load tested.
- Failure to comply with RBI and GDPR regulations could result in legal penalties.
- Employees may resist adopting the new system, reducing productivity.
- Cyberattacks such as ransomware or DDoS attacks could disrupt banking services.
      `,
    });
console.log("After API");
    console.log('Result: ', result);
  } catch (err) {
    console.error(err);
  }
}

// initWithZod()

/**
 * User is asking a question
 * openai, claude, gemini all ai data validate most accurate and common data will pass to user
 */