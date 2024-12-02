import express from "express";
import { GET_ALL_ACCOUNTS, GET_ACCOUNT_BY_ID, UPDATE_PASSWORD_BY_ID, UPDATE_ROLE_ACCOUNT_BY_ID, DELETE_ACCOUNT_BY_ID } from "./account.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await GET_ALL_ACCOUNTS()
        res.status(200).json({
            message: "Accounts fetched successfully",
            data: response
        })
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const response = await GET_ACCOUNT_BY_ID(req.params.id)
        res.status(200).json({
            message: "Account fetched successfully",
            data: response
        })
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
})

router.patch("/:id/update-password", async (req, res) => {
    try {
        const response = await UPDATE_PASSWORD_BY_ID(req.params.id, req.body)
        res.status(200).json({
            message: "Account updated successfully",
            data: response
        })
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
})

router.patch("/:id/update-role", async (req, res) => {
    try {
        const response = await UPDATE_ROLE_ACCOUNT_BY_ID(req.params.id, req.body)
        res.status(200).json({
            message: "Account updated successfully",
            data: response
        })
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const response = await DELETE_ACCOUNT_BY_ID(req.params.id)
        res.status(200).json({
            message: "Account deleted successfully",
            data: response
        })
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
})

export default router