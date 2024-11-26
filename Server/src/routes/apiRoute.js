import express from "express"
import healthcheckRoute from '../routes/v1/healthcheck.route.js'
import v1Router from '../routes/v1/v1.routes.js'

const router = express.Router()

router.use("/v1", healthcheckRoute)
router.use("/v1", v1Router)

export default router