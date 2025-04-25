import prismaClient from "../../application/database.js";
import request from "supertest";
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

    describe("test register (normal register)", () => {
        it("scenario-01: should return a 400 status code when fields register is empty", async () => {
            const response = await request(api).post('/auth/register').send({})
            expect(response.status).toBe(400);

            expect(response.body.data[0].path).toBe("full_name");
            expect(response.body.data[0].message).toBe("Required");

            expect(response.body.data[1].path).toBe("birth_date");
            expect(response.body.data[1].message).toBe("Required");

            expect(response.body.data[2].path).toBe("gender");
            expect(response.body.data[2].message).toBe("Gender is required");

            expect(response.body.data[3].path).toBe("email");
            expect(response.body.data[3].message).toBe("Required");

            expect(response.body.data[4].path).toBe("phone_number");
            expect(response.body.data[4].message).toBe("Required");

            expect(response.body.data[5].path).toBe("password");
            expect(response.body.data[5].message).toBe("Required");

            expect(response.body.data[6].path).toBe("confirm_password");
            expect(response.body.data[6].message).toBe("Required");
        });

        it("scenario-02: should return a 500 status code when field birth date is not valid", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "20000101",
                gender: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com1"
            })
            expect(response.status).toBe(500);
            expect(response.body.error.details.message).toBe("date.getTime is not a function");
        });

        it("scenario-03: should return a 400 status code when field gender is not valid", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com1"
            })
            expect(response.status).toBe(400);
            expect(response.body.data[0].path).toBe("gender");
            expect(response.body.data[0].message).toBe("Invalid enum value. Expected 'MALE' | 'FEMALE', received ''");
        });

        it("scenario-04: should return a 400 status code when field email is not valid", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                email: "user_one",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com1"
            })
            expect(response.status).toBe(400);
            expect(response.body.data[0].path).toBe("email");
            expect(response.body.data[0].message).toBe("Email is invalid");
        });

        it("scenario-05: should return a 400 status code when password and confirm password is not match", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com1"
            })

            expect(response.status).toBe(400);
            expect(response.body.data[0].path).toBe("confirm_password");
            expect(response.body.data[0].message).toBe("Passwords do not match");
        });

        it("scenario-07: should return a 201 status code when register is success", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com"
            })

            expect(response.status).toBe(201);
            expect(response.body.message).toBe("create user successfully");
            expect(response.body.data.full_name).toBe("user one");
            expect(response.body.data.birth_date).toBeDefined();
            expect(response.body.data.gender).toBe("MALE");
            expect(response.body.data.profile_image_url).toBe(null);
            expect(response.body.data.email).toBe("user_one@gmail.com");
            expect(response.body.data.phone_number).toBe("001");
        });

        it("scenario-08: should return a 409 status code when email already exist", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com"
            })

            expect(response.status).toBe(409);
            expect(response.body.message).toBe("Email is already exist");
        });

        it("scenario-09: should return a 409 status code when phone number already exist", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user two",
                birth_date: "2000-01-02",
                gender: "MALE",
                email: "user_two@gmail.com",
                phone_number: "001",
                password: "user_two@gmail.com",
                confirm_password: "user_two@gmail.com"
            })

            expect(response.status).toBe(409);
            expect(response.body.message).toBe("Phone number is already exist");
        });
    });
});
