import express from "express";
import { createUserSchema, updateUserSchema } from "./user.validator.js";
import { GET_ALL_USERS, GET_USER_BY_ID, DELETE_USER_BY_ID, CREATE_USER, UPDATE_USER_BY_ID, DELETE_MANY_USER_BY_ID } from "./user.service.js";

const router = express.Router();

router.get("/users", async (req, res, next) => {
    try {
        const response = await GET_ALL_USERS();
        return res.status(200).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

router.get("/users/:id", async (req, res, next) => {
    try {
        const response = await GET_USER_BY_ID(req.params.id);
        return res.status(200).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

router.post("/users", async (req, res, next) => {
    try {
        const data = await createUserSchema.parseAsync(req.body);
        const response = await CREATE_USER(data);
        return res.status(201).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

router.patch("/users/:id", async (req, res, next) => {
    try {
        const data = await updateUserSchema.parseAsync(req.body);
        const response = await UPDATE_USER_BY_ID(req.params.id, data);
        return res.status(200).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

router.delete("/users/:id", async (req, res, next) => {
    try {
        const response = await DELETE_USER_BY_ID(req.params.id);
        return res.status(200).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

router.post("/users/delete-many", async (req, res, next) => {
    try {
        const response = await DELETE_MANY_USER_BY_ID(req.body.ids);
        return res.status(200).json({ message: "success", data: response });
    } catch (error) {
        next(error);
    }
})

export default router