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
// middlewares
// --------------------------------------------------------------------------------
import RateLimiterMiddleware from "../middleware/RateLimiterMiddleware.js";

// --------------------------------------------------------------------------------
// initialize express
// --------------------------------------------------------------------------------
const api = express.Router();

// --------------------------------------------------------------------------------
// routes - api
// --------------------------------------------------------------------------------
api.get("/", WellcomeController.index);
api.post("/auth/register", AuthenticationController.register);
api.post("/auth/login", RateLimiterMiddleware({ windowMinutes: 60, max: 1000 }), AuthenticationController.login);

// --------------------------------------------------------------------------------
// export default
// --------------------------------------------------------------------------------
export default api;