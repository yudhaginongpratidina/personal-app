import request from "supertest";
import prismaClient from "../../application/database.js";
import 'dotenv/config';

const api = `${process.env.EXPRESS_TEST}`;

describe("AuthenticationController", () => {

    beforeAll(async () => {
        await prismaClient.user.deleteMany();
    });

    afterAll(async () => {
        await prismaClient.user.deleteMany();
        await prismaClient.$disconnect();
    });

    describe("test register", () => {

        it("should return a 400 status code if fields are empty", async () => {
            const response = await request(api).post('/register').send({
                full_name: "",
                username: "",
                email: "",
                password: "",
                confirm_password: ""
            });
            expect(response.status).toBe(400);
        })

        it("should return a 400 status code if password and confirm password are not the same", async () => {
            const response = await request(api).post('/register').send({
                full_name: "user test",
                username: "user_test",
                email: "user@test.com",
                password: "user@test.com",
                confirm_password: "user@wrong.com"
            });
            expect(response.status).toBe(400);
            expect(response.body.data[0].message).toBe("Passwords do not match");
        })

        it("should return a 201 status code when user is registered successfully", async () => {
            const response = await request(api).post('/register').send({
                full_name: "user test",
                username: "user_test",
                email: "user@test.com",
                password: "user@test.com",
                confirm_password: "user@test.com"
            });
            expect(response.status).toBe(201);
            expect(response.body.message).toBe("user registered successfully");
            expect(response.body.data.full_name).toBe("user test");
            expect(response.body.data.username).toBe("user_test");
            expect(response.body.data.email).toBe("user@test.com");
            expect(response.body.data.role).toBe("user");
        })

    });

    describe("test register", () => {

        it("should return a 404 status code if user is not found when login with email", async () => {
            const response = await request(api).post('/login').send({
                type : "login_with_email",
                email: "user1@test.com",
                password: "user1@test.com"
            });
            expect(response.status).toBe(404);
            expect(response.body.message).toBe("user not found");
        })

        it("should return a 404 status code if user is not found when login with username", async () => {
            const response = await request(api).post('/login').send({
                type : "login_with_username",
                username: "user1",
                password: "user1@test.com"
            });
            expect(response.status).toBe(404);
            expect(response.body.message).toBe("user not found");
        })

        it("should return a 200 status code if user login with email", async () => {
            const response = await request(api).post('/login').send({
                type : "login_with_email",
                email: "user@test.com",
                password: "user@test.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user logged in successfully");
            expect(response.body.data.token).toBeDefined();
        })

        it("should return a 200 status code if user login with username", async () => {
            const response = await request(api).post('/login').send({
                type : "login_with_username",
                username: "user_test",
                password: "user@test.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user logged in successfully");
            expect(response.body.data.token).toBeDefined();
        })

        it("should return a 401 status code if user login but password is wrong", async () => {
            const response = await request(api).post('/login').send({
                type : "login_with_username",
                username: "user_test",
                password: "wrong_password"
            });
            expect(response.status).toBe(401);
            expect(response.body.message).toBe("wrong password");
        })
    });

});
