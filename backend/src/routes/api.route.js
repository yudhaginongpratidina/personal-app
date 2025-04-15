// --------------------------------------------------------------------------------
// dependencies
// --------------------------------------------------------------------------------
import express from "express";

// --------------------------------------------------------------------------------
// controllers
// --------------------------------------------------------------------------------
import WellcomeController from "../domains/wellcome/wellcome.controller.js";
import AuthenticationController from "../domains/authentication/authentication.controller.js";

// --------------------------------------------------------------------------------
// initialize express
// --------------------------------------------------------------------------------
const api = express.Router();

// --------------------------------------------------------------------------------
// routes - api
// --------------------------------------------------------------------------------
api.get("/", WellcomeController.index);
api.post("/register", AuthenticationController.register);
api.post("/login", AuthenticationController.login);
api.get("/logout", AuthenticationController.logout);

// --------------------------------------------------------------------------------
// export default
// --------------------------------------------------------------------------------
export default api;