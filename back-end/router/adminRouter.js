import express from "express"
import { adminLogin, adminLogout, adminRegister } from "../controller/adminController.js"
import { isAuthenticated } from "../middleware/auth.js"

const router = express.Router()

router.post("/post/registeradmin",isAuthenticated,adminRegister)
router.post("/login",adminLogin)
router.get("/logout",isAuthenticated,adminLogout)

export default router