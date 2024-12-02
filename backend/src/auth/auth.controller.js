import express from "express";
import { REGISTER, LOGIN } from "./auth.service.js";

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const user = req.body
        const response = await REGISTER(user)
        res.status(201).json({
            message: "User created successfully",
            data: response
        });
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = req.body
        const response = await LOGIN(user)
        res.status(200).json({
            message: "User logged in successfully",
            data: response
        });
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
});

export default router