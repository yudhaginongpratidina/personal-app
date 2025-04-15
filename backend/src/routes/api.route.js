// --------------------------------------------------------------------------------
// dependencies
// --------------------------------------------------------------------------------
import express from "express";

// --------------------------------------------------------------------------------
// controllers
// --------------------------------------------------------------------------------
import WellcomeController from "../domains/wellcome/wellcome.controller.js";
import AuthenticationController from "../domains/authentication/authentication.controller.js";
import AccountController from "../domains/account/account.controller.js";

// --------------------------------------------------------------------------------
// middlewares
// --------------------------------------------------------------------------------
import VerifyTokenMiddleware from "../middleware/VerifyTokenMiddleware.js";

// --------------------------------------------------------------------------------
// initialize express
// --------------------------------------------------------------------------------
const api = express.Router();

// --------------------------------------------------------------------------------
// routes - api
// --------------------------------------------------------------------------------
api.get("/", WellcomeController.index);

api.post("/auth/register", AuthenticationController.register);
api.post("/auth/login", AuthenticationController.login);
api.get("/auth/token", AuthenticationController.refresh_token);
api.get("/auth/logout", AuthenticationController.logout);

api.get("/account/:username", AccountController.show);
api.patch("/account/:username", VerifyTokenMiddleware, AccountController.update);

// --------------------------------------------------------------------------------
// export default
// --------------------------------------------------------------------------------
export default api;