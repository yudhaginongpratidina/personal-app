import express from "express";
import { registerSchema, loginSchema } from "./auth.validator.js";
import { REGISTER, LOGIN } from "./auth.service.js";

const router = express.Router();

router.post("/register", async (req, res, next) => {
    try {
        const data = await registerSchema.parseAsync(req.body);
        const response = await REGISTER(data);
        return res.status(201).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const data = await loginSchema.parseAsync(req.body);
        const response = await LOGIN(data);
        return res.status(200).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

export default router