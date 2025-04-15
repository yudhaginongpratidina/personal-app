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
        await prismaClient.user.create({
            data: {
                full_name: "admin",
                username: "admin",
                email: "admin@test.com",
                password: bcrypt.hashSync('admin@test.com', 10),
                role: "admin"
            }
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

    describe("test get user by id", () => {
        it("should return a 200 status code when get user by id successfully", async () => {
            const users = await request(api).get('/users');
            const response = await request(api).get(`/users/${users.body.data.users_by_role.user[0].id}`);
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user found");
            expect(response.body.data.id).toBeDefined();
            expect(response.body.data.full_name).toBeDefined();
            expect(response.body.data.username).toBeDefined();
            expect(response.body.data.role).toBeDefined();
            expect(response.body.data.image).toBeDefined();
            expect(response.body.data.created_at).toBeDefined();
            expect(response.body.data.updated_at).toBeDefined();
            expect(response.body.data.deleted_at).toBeDefined();
        })
    })

    describe("test update role user by id", () => {
        it("should return a 200 status code when update role user by id successfully", async () => {
            const users = await request(api).get('/users');
            const user_by_id = await request(api).get(`/users/${users.body.data.users_by_role.user[0].id}`);
            const response = await request(api).patch(`/users/${user_by_id.body.data.id}`).send({
                type: "update_role",
                role: "admin"
            })
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("user role updated");
        })
    })

});
