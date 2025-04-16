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

    let token;

    describe("test authentication", () => {
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

        it("should return a 201 status code when other user is registered successfully", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user test 1",
                username: "user_test_1",
                email: "user1@test.com",
                password: "user1@test.com",
                confirm_password: "user1@test.com"
            });
            expect(response.status).toBe(201);
            expect(response.body.message).toBe("user registered successfully");
            expect(response.body.data.full_name).toBe("user test 1");
            expect(response.body.data.username).toBe("user_test_1");
            expect(response.body.data.email).toBe("user1@test.com");
            expect(response.body.data.role).toBe("user");
        })

        it("should return a 200 status code when user is login successfully", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_username",
                username: "user_test",
                password: "user@test.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user logged in successfully");
            expect(response.body.data.token).toBeDefined();

            token = response.body.data.token
        })
    })

    describe("test find account", () => {
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

    describe("test update account", () => {

        it("should return a 403 status code when update account but not account owner", async () => {
            const response = await request(api).patch('/account/user_test_1')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    type: "update_full_name",
                    full_name: "user update"
                });
            expect(response.status).toBe(403);
            expect(response.body.message).toBe("Nice try, but you can only perform this operation on your own account");
        })

        it("should return a 200 status code when update account - full name", async () => {
            const response = await request(api).patch('/account/user_test')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    type: "update_full_name",
                    full_name: "user update"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
            expect(response.body.data.full_name).toBe("user update");
        })

        it("should return a 200 status code when update account - bio", async () => {
            const response = await request(api).patch('/account/user_test')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    type: "update_bio",
                    bio: "bio update"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
            expect(response.body.data.bio).toBe("bio update");
        })

        it("should return a 200 status code when update account - password", async () => {
            const response = await request(api).patch('/account/user_test')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    type: "update_password",
                    old_password: "user@test.com",
                    new_password: "user@update.com",
                    confirm_password: "user@update.com"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
        })

        it("should return a 200 status code when update account - image", async () => {
            const response = await request(api).patch('/account/user_test')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    type: "update_image",
                    image: "update image"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account updated");
            expect(response.body.data.image).toBe("update image");
        })
    });

    describe("test delete account", () => {
        it("should return a 403 status code when delete account but not account owner", async () => {
            const response = await request(api).delete('/account/user_test_1')
                .set("Authorization", `Bearer ${token}`);
            expect(response.status).toBe(403);
            expect(response.body.message).toBe("Nice try, but you can only perform this operation on your own account");
        })

        it("should return a 200 status code when delete account", async () => {
            const response = await request(api).delete('/account/user_test')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    confirm_delete: "DELETE ACCOUNT"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account deleted");
        })

        it("should return a 403 status code when user login but account owner is deleted (login with username)", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_username",
                username: "user_test",
                password: "user@test.com"
            });
            expect(response.status).toBe(403);
            expect(response.body.message).toBe("Account deleted. Would you like to restore it?");
        })

        it("should return a 403 status code when user login but account owner is deleted (login with email)", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_email",
                email: "user@test.com",
                password: "user@test.com"
            });
            expect(response.status).toBe(403);
            expect(response.body.message).toBe("Account deleted. Would you like to restore it?");
        })

        it("should return a 200 status code if user login with email", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_email",
                email: "user1@test.com",
                password: "user1@test.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user logged in successfully");
            expect(response.body.data.token).toBeDefined();
        })

        it("should return a 200 status code if user login with username", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_username",
                username: "user_test_1",
                password: "user1@test.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user logged in successfully");
            expect(response.body.data.token).toBeDefined();
        })
    })

    describe("test restore account", () => {
        it("should return a 200 status code when restore account", async () => {
            const response = await request(api).patch('/account/restore').send({
                email: "user@test.com",
                password: "user@update.com"
            })
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account restored");
        })

        it("should return a 200 status code if user login with email after restore", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_email",
                email: "user@test.com",
                password: "user@update.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user logged in successfully");
            expect(response.body.data.token).toBeDefined();
        })
    })

    describe("test update account but account has been deleted", () => {
        it("should return a 200 status code if user login with email", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_email",
                email: "user@test.com",
                password: "user@update.com"
            });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user logged in successfully");
            expect(response.body.data.token).toBeDefined();

            token = response.body.data.token
        })

        it("should return a 200 status code when delete account", async () => {
            const response = await request(api).delete('/account/user_test')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    confirm_delete: "DELETE ACCOUNT"
                });
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("account deleted");
        })

        it("should return a 403 status code when user update account but account has been deleted", async () => {
            const response = await request(api).patch('/account/user_test')
                .set("Authorization", `Bearer ${token}`)
                .send({
                    type: "update_full_name",
                    full_name: "user update"
                });
            expect(response.status).toBe(403);
            expect(response.body.message).toBe("Your account has been deleted, please recover it first");
        })

    })

});
