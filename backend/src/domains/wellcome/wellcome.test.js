import request from "supertest";
import 'dotenv/config';

const api = `${process.env.EXPRESS_TEST}`;

describe("WellcomeController", () => {
    it("should return a 200 status code", async () => {
        const response = await request(api).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("successfuly");
        expect(response.body.data).toBe("api is running");
    });
});
