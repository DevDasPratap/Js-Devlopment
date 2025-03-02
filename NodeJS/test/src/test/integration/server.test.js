const request = require("supertest");
const app = require("../../server.js");

describe("User API Integration Tests", () => {
    test("GET /users should return a list of users", async () => {
        const response = await request(app).get("/users");
        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ id: 1, name: "John Doe" }]);
    });

    test("POST /users should add a new user", async () => {
        const newUser = { name: "Jane Doe" };
        const response = await request(app).post("/users").send(newUser);
        
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({ id: 2, name: "Jane Doe" });

        const usersResponse = await request(app).get("/users");
        expect(usersResponse.body.length).toBe(2);
    });
});
