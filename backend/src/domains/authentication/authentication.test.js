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

    describe("test register", () => {
        it("scenario-01: should return a 400 status code when fields register is empty", async () => {
            const response = await request(api).post('/auth/register').send({})
            expect(response.status).toBe(400);

            expect(response.body.data[0].path).toBe("full_name");
            expect(response.body.data[0].message).toBe("Required");

            expect(response.body.data[1].path).toBe("birth_date");
            expect(response.body.data[1].message).toBe("Required");

            expect(response.body.data[2].path).toBe("gender");
            expect(response.body.data[2].message).toBe("Gender is required");

            expect(response.body.data[3].path).toBe("greeting_prefrence");
            expect(response.body.data[3].message).toBe("Greeting prefrence is required");

            expect(response.body.data[4].path).toBe("email");
            expect(response.body.data[4].message).toBe("Required");

            expect(response.body.data[5].path).toBe("phone_number");
            expect(response.body.data[5].message).toBe("Required");

            expect(response.body.data[6].path).toBe("password");
            expect(response.body.data[6].message).toBe("Required");

            expect(response.body.data[7].path).toBe("confirm_password");
            expect(response.body.data[7].message).toBe("Required");
        });

        it("scenario-02: should return a 500 status code when field birth date is not valid", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "20000101",
                gender: "MALE",
                greeting_prefrence: "MALE",
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
                greeting_prefrence: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com1"
            })
            expect(response.status).toBe(400);
            expect(response.body.data[0].path).toBe("gender");
            expect(response.body.data[0].message).toBe("Invalid enum value. Expected 'MALE' | 'FEMALE' | 'NEUTRAL' | 'CUSTOM', received ''");
        });

        it("scenario-03: should return a 400 status code when field greeting prefrence is not valid", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                greeting_prefrence: "",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com1"
            })
            expect(response.status).toBe(400);
            expect(response.body.data[0].path).toBe("greeting_prefrence");
            expect(response.body.data[0].message).toBe("Invalid enum value. Expected 'MALE' | 'FEMALE' | 'NEUTRAL' | 'CUSTOM', received ''");
        });

        it("scenario-04: should return a 400 status code when field email is not valid", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                greeting_prefrence: "MALE",
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
                greeting_prefrence: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com1"
            })

            expect(response.status).toBe(400);
            expect(response.body.data[0].path).toBe("confirm_password");
            expect(response.body.data[0].message).toBe("Passwords do not match");
        });

        it("scenario-06: should return a 201 status code when register is success", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                greeting_prefrence: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com"
            })

            expect(response.status).toBe(201);
            expect(response.body.message).toBe("success");
            expect(response.body.data.full_name).toBe("user one");
            expect(response.body.data.birth_date).toBeDefined();
            expect(response.body.data.gender).toBe("MALE");
            expect(response.body.data.greeting_preference).toBe("MALE");
            expect(response.body.data.profile_image_url).toBe(null);
            expect(response.body.data.email).toBe("user_one@gmail.com");
            expect(response.body.data.phone_number).toBe("001");
        });

        it("scenario-07: should return a 409 status code when email already exist", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user one",
                birth_date: "2000-01-01",
                gender: "MALE",
                greeting_prefrence: "MALE",
                email: "user_one@gmail.com",
                phone_number: "001",
                password: "user_one@gmail.com",
                confirm_password: "user_one@gmail.com"
            })

            expect(response.status).toBe(409);
            expect(response.body.message).toBe("Email is already exist");
        });

        it("scenario-08: should return a 409 status code when phone number already exist", async () => {
            const response = await request(api).post('/auth/register').send({
                full_name: "user two",
                birth_date: "2000-01-02",
                gender: "MALE",
                greeting_prefrence: "MALE",
                email: "user_two@gmail.com",
                phone_number: "001",
                password: "user_two@gmail.com",
                confirm_password: "user_two@gmail.com"
            })

            expect(response.status).toBe(409);
            expect(response.body.message).toBe("Phone number is already exist");
        });
    });

    describe("test login", () => {

        it("scenario-01: should return a 400 status code when fields login is empty", async () => {
            const response = await request(api).post('/auth/login').send({})
            expect(response.status).toBe(400);
            expect(response.body.data[0].path).toBe("type");
            expect(response.body.data[0].message).toBe("Type must be login_with_email or login_with_phone_number");
            expect(response.body.data[1].path).toBe("password");
            expect(response.body.data[1].message).toBe("Required");
        });

        it("scenario-02: should return a 404 status code when login but email not found (login with email)", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_email",
                email: "user_test@gmail.com",
                password: "user_test@gmail.com"
            })
            expect(response.status).toBe(404);
            expect(response.body.message).toBe("User not found");
        });

        it("scenario-03: should return a 404 status code when login but phone number not found (login with phone number)", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_phone_number",
                phone_number: "0000",
                password: "user_test@gmail.com"
            })
            expect(response.status).toBe(404);
            expect(response.body.message).toBe("User not found");
        });

        it("scenario-04: should return a 401 status code when login but invalid password", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_email",
                email: "user_one@gmail.com",
                password: "user_oe@gmail.com"
            })
            expect(response.status).toBe(401);
            expect(response.body.message).toBe("Invalid password");
        });

        it("scenario-05: should return a 200 status code when login success (login with email)", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_email",
                email: "user_one@gmail.com",
                password: "user_one@gmail.com"
            })
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("success");
        });

        it("scenario-06: should return a 200 status code when login success (login with phone number)", async () => {
            const response = await request(api).post('/auth/login').send({
                type: "login_with_phone_number",
                phone_number: "001",
                password: "user_one@gmail.com"
            })
            expect(response.status).toBe(200);
            expect(response.body.message).toBe("success");
        });

    });
});
