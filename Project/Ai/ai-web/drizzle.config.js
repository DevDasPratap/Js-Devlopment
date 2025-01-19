/** @type {import ("drizzle-kit").Config}; */
export default {
  schema: "./utils/schema.tsx",
  dialect:'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:ax47ypOSwstU@ep-black-night-a8pqfnbw.eastus2.azure.neon.tech/neondb?sslmode=require',
  }
}