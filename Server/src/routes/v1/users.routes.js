import express from "express";
import {
  signinUser,
  loginUser,
  editUser,
  deleteUser,
} from "../../controllers/users.controller.js";
import {validateRequestData} from '../../middlewares/zodMiddleware.js'
import userSchema from "../../validators/userSchema.js";

const router = express.Router();

router.post("/signin", validateRequestData(userSchema), signinUser);
router.post("/login", validateRequestData(userSchema), loginUser);
router.patch("/edit", editUser);
router.delete("/delete/:id", deleteUser);

export default router;
