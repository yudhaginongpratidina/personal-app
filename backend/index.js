// LIBS
import app from "./application/app.js";
import { logger } from "./application/logger.js";
import dotenv from "dotenv";

// CONTROLLERS
import AuthController from "./src/auth/auth.controller.js";
import AccountController from "./src/account/account.controller.js";
import ProfileController from "./src/profile/profile.controller.js";

// INIT DOTENV
dotenv.config();

// ROUTES
app.use("/api/auth", AuthController)
app.use("/api/accounts", AccountController)
app.use("/api/profile", ProfileController)

// SERVER
app.listen(process.env.APP_PORT || 3000, () => {
    logger.info(`Server is running on port ${process.env.APP_PORT || 3000}`);
})