import express from "express";
import { GET_DETAIL_ACCOUNT_BY_ID, UPDATE_DETAIL_ACCOUNT_BY_ID } from "./profile.service.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const response = await GET_DETAIL_ACCOUNT_BY_ID(req.params.id)
        res.status(200).json({
            message: "Fetched successfully",
            data: response
        })
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const response = await UPDATE_DETAIL_ACCOUNT_BY_ID(req.params.id, req.body)
        res.status(200).json({
            message: "Updated successfully",
            data: response
        })
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
});

export default router