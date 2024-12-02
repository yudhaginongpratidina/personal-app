// LIBS
import express from "express";

// INIT
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EXPORT
export default app;