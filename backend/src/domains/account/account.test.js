import request from "supertest";
import prismaClient from "../../application/database.js";
import 'dotenv/config';

const api = `${process.env.EXPRESS_TEST}`;

describe("AccountController", () => {
    beforeAll(async () => {
        await prismaClient.user.deleteMany();
    });

    afterAll(async () => {
        await prismaClient.user.deleteMany();
        await prismaClient.$disconnect();
    });

    describe("register", () => {
        it("should return a 201 status code when user is registered successfully", async () => {
            const response = await request(api).post('/auth/register').send({
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
    })

    describe("find account test", () => {
        it("should return a 404 status code when account not found", async () => {
            const response = await request(api).get('/account/user_test1');
            expect(response.status).toBe(404);
            expect(response.body.message).toBe("account not found");
        })

        it("should return a 200 status code when find account successfuly", async () => {
            const response = await request(api).get('/account/user_test');
            expect(response.status).toBe(200);
            expect(response.body.data.username).toBe("user_test")
        })
    });

    describe("update account test", () => {
        it("should return a 200 status code when update account - full name", async () => {
            const response = await request(api).patch('/account/user_test').send({
                type : "update_full_name",
                full_name: "user update"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
            expect(response.body.data.full_name).toBe("user update");
        })

        it("should return a 200 status code when update account - bio", async () => {
            const response = await request(api).patch('/account/user_test').send({
                type : "update_bio",
                bio: "bio update"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
            expect(response.body.data.bio).toBe("bio update");
        })

        it("should return a 200 status code when update account - password", async () => {
            const response = await request(api).patch('/account/user_test').send({
                type : "update_password",
                old_password: "user@test.com",
                new_password: "user@update.com",
                confirm_password: "user@update.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
        })

        it("should return a 200 status code when update account - image", async () => {
            const response = await request(api).patch('/account/user_test').send({
                type : "update_image",
                image : "update image"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
            expect(response.body.data.image).toBe("update image");
        })
    });

});
