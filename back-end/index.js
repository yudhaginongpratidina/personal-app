import express from "express";
import logger from "./config/logger/index.js";
import cors from "cors";

// CLIENT
import ClientController from "./src/client/client.controller.js";

// ADMINISTRATOR
import AdminController from "./src/admin/admin.controller.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CLIENT
app.use("/api", ClientController);

// ADMINISTRATOR
app.use("/api", AdminController);

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