import express from "express";
import logger from "./config/logger/index.js";
import cors from "cors";

import AuthController from "./src/auth/auth.controller.js";
import UserController from "./src/user/user.controller.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", AuthController);
app.use("/api", UserController);

app.use((err, req, res, next) => {
        let formattedError;
        if (err.issues) {
            formattedError = err.issues.map(issue => ({
                code: issue.code,
                path: issue.path,
                message: issue.message
            }));
        } else {
            formattedError = { message: err.message };
        }
        return res.status(err.status || 500).json(formattedError);
});

app.listen(process.env.APP_PORT || 3000, () => {
    logger.info(`Server is running on port ${process.env.APP_PORT || 3000}`);
})