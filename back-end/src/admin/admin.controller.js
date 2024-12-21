import express from "express";
import { createAdminSchema, updatePasswordAdminSchema } from "./admin.validator.js";
import { CREATE_ADMIN, GET_ALL_ADMIN, GET_ADMIN_BY_ID, UPDATE_PASSWORD_BY_ID, DELETE_ADMIN_BY_ID } from "./admin.service.js";

const router = express.Router();

router.get("/admin", async (req, res, next) => {
    try {
        const response = await GET_ALL_ADMIN();
        return res.status(200).json({ message: "get all admin success", data: response });
    } catch (error) {
        next(error);
    }
})

router.get("/admin/:id", async (req, res, next) => {
    try {
        const response = await GET_ADMIN_BY_ID(req.params.id);
        return res.status(200).json({ message: "admin found", data: response });
    } catch (error) {
        next(error);
    }
})

router.post("/admin/create", async (req, res, next) => {
    try {
        const data = await createAdminSchema.parseAsync(req.body);
        const response = await CREATE_ADMIN(data);
        return res.status(201).json({ message: "create admin success", data: response });
    } catch (error) {
        next(error);
    }
})

router.patch("/admin/:id/update-password", async (req, res, next) => {
    try {
        const data = await updatePasswordAdminSchema.parseAsync(req.body);
        const response = await UPDATE_PASSWORD_BY_ID(req.params.id, data);
        return res.status(200).json({ message: "update password admin success", data: response });
    } catch (error) {
        next(error);
    }
})

router.delete("/admin/:id", async (req, res, next) => {
    try {
        const response = await DELETE_ADMIN_BY_ID(req.params.id);
        return res.status(200).json({ message: "delete admin success", data: response });
    } catch (error) {
        next(error);
    }
})

export default router