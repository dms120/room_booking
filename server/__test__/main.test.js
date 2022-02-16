const request = require("supertest")
const db = require("./config/database")
const app = require("../app");

const agent = request.agent(app);
jest.setTimeout(100000)

beforeAll(async () => await db.connect());
afterEach(async () => await db.clear());
afterAll(async () => await db.close());


describe("bookings", () => {
    describe("POST /bookings", () => {
        test("create a booking", async () => {
            const res = await agent.post("/bookings").send({
                "userID": "620657655676814514bbe22d", "companyID": 1, "room": 1, "hour": 10
            });
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeTruthy();
        });
        test("list bookings", async () => {
            const res = await agent.get("/bookings").expect('Content-Type', /json/)
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeTruthy();
        });
    });
});