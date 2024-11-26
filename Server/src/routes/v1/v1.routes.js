import express from 'express'
import userRoutes from "../routes/v1/users.routes.js";

const router = express.Router();

router.use("/users", userRoutes)

export default router