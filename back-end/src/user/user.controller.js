import express from "express";
import { createUserSchema, updateUserSchema, updateRoleUserSchema } from "./user.validator.js";
import { GET_ALL_USERS, GET_USER_BY_ID, DELETE_USER_BY_ID, CREATE_USER, UPDATE_USER_BY_ID, DELETE_MANY_USER_BY_ID, UPDATE_ROLE_BY_ID } from "./user.service.js";

const router = express.Router();

router.get("/users", async (req, res, next) => {
    try {
        const response = await GET_ALL_USERS();
        return res.status(200).json({ message: "get all users success", data: response });
    } catch (error) {
        next(error);
    }
})

router.get("/users/:id", async (req, res, next) => {
    try {
        const response = await GET_USER_BY_ID(req.params.id);
        return res.status(200).json({ message: "user found", data: response });
    } catch (error) {
        next(error);
    }
})

router.post("/users", async (req, res, next) => {
    try {
        const data = await createUserSchema.parseAsync(req.body);
        const response = await CREATE_USER(data);
        return res.status(201).json({ message: "create user success", data: response });
    } catch (error) {
        next(error);
    }
})

router.patch("/users/:id", async (req, res, next) => {
    try {
        const data = await updateUserSchema.parseAsync(req.body);
        const response = await UPDATE_USER_BY_ID(req.params.id, data);
        return res.status(200).json({ message: "update user success", data: response });
    } catch (error) {
        next(error);
    }
})

router.patch("/users/:id/update-role", async (req, res, next) => {
    try {
        const data = await updateRoleUserSchema.parseAsync(req.body);
        const response = await UPDATE_ROLE_BY_ID(req.params.id, data.role);
        return res.status(200).json({ message: "update role user success", data: response });
    } catch (error) {
        next(error);
    }
})

router.delete("/users/:id", async (req, res, next) => {
    try {
        const response = await DELETE_USER_BY_ID(req.params.id);
        return res.status(200).json({ message: "delete user success", data: response });
    } catch (error) {
        next(error);
    }
})

router.post("/users/delete-many", async (req, res, next) => {
    try {
        const response = await DELETE_MANY_USER_BY_ID(req.body.ids);
        return res.status(200).json({ message: "delete many user success", data: response });
    } catch (error) {
        next(error);
    }
})

export default router