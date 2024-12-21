import express from "express";
import { createClientSchema, updateClientSchema, updatePasswordClientSchema } from "./client.validator.js";
import { CREATE_CLIENT, GET_ALL_CLIENT, GET_CLIENT_BY_ID, UPDATE_CLIENT_BY_ID, UPDATE_PASSWORD_CLIENT_BY_ID, DELETE_CLIENT_BY_ID } from "./client.service.js";

const router = express.Router();

router.get("/client", async (req, res, next) => {
    try {
        const response = await GET_ALL_CLIENT();
        return res.status(200).json({ message: "get all client success", data: response });
    } catch (error) {
        next(error);
    }
})

router.get("/client/:id", async (req, res, next) => {
    try {
        const response = await GET_CLIENT_BY_ID(req.params.id);
        return res.status(200).json({ message: "client found", data: response });
    } catch (error) {
        next(error);
    }
})

router.post("/client/create", async (req, res, next) => {
    try {
        const data = await createClientSchema.parseAsync(req.body);
        const response = await CREATE_CLIENT(data);
        return res.status(201).json({ message: "create client success", data: response });
    } catch (error) {
        next(error);
    }
})

router.patch("/client/:id", async (req, res, next) => {
    try {
        const data = await updateClientSchema.parseAsync(req.body);
        const response = await UPDATE_CLIENT_BY_ID(req.params.id, data);
        return res.status(200).json({ message: "update client success", data: response });
    } catch (error) {
        next(error);
    }
})

router.patch("/client/:id/update-password", async (req, res, next) => {
    try {
        const data = await updatePasswordClientSchema.parseAsync(req.body);
        const response = await UPDATE_PASSWORD_CLIENT_BY_ID(req.params.id, data);
        return res.status(200).json({ message: "update password client success", data: response });
    } catch (error) {
        next(error);
    }
})

router.delete("/client/:id", async (req, res, next) => {
    try {
        const response = await DELETE_CLIENT_BY_ID(req.params.id);
        return res.status(200).json({ message: "delete client success", data: response });
    } catch (error) {
        next(error);
    }
})

export default router