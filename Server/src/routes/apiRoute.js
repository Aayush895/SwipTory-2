import express from "express"
import healthcheckRoute from '../routes/v1/healthcheck.route.js'

const router = express.Router()

router.use("/v1", healthcheckRoute)

export default router