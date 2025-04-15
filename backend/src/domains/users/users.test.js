import request from "supertest";
import prismaClient from "../../application/database.js";
import bcrypt from "bcrypt";
import 'dotenv/config';

const api = `${process.env.EXPRESS_TEST}`;

describe("UsersController", () => {

    beforeAll(async () => {
        await prismaClient.user.deleteMany();
        const roles = ['user', 'contributor', 'admin'];
        const users = Array.from({ length: 20 }, (_, i) => ({
            full_name: `User ${i + 1}`,
            username: `user${i + 1}`,
            email: `user${i + 1}@test.com`,
            password: bcrypt.hashSync('password123', 10),
            role: roles[i % roles.length]
        }));
        await prismaClient.user.createMany({
            data: users
        });
    });

    afterAll(async () => {
        await prismaClient.user.deleteMany();
        await prismaClient.$disconnect();
    });

    describe("test get all users", () => {
        it("should return a 200 status code when get all users successfully", async () => {
            const response = await request(api).get('/users');
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("successfully");
            expect(response.body.data.total_user).toBeDefined();
            expect(response.body.data.total_by_role).toBeDefined();
            expect(response.body.data.total_by_role.user).toBeDefined();
            expect(response.body.data.total_by_role.contributor).toBeDefined();
            expect(response.body.data.total_by_role.admin).toBeDefined();
            expect(response.body.data.users_by_role).toBeDefined();
            expect(response.body.data.users_by_role.user).toBeDefined();
            expect(response.body.data.users_by_role.contributor).toBeDefined();
            expect(response.body.data.users_by_role.admin).toBeDefined();
        })
    })
});
