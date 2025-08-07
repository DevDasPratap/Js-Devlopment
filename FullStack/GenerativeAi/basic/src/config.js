import dotenv from 'dotenv';
dotenv.config();

const env = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY
}

export default Object.freeze(env)
