import express from "express"
import { healthcheckController } from "../../controllers/healthcheck.controller.js"

const router = express.Router()

router.get('/healthcheck', healthcheckController)

export default router