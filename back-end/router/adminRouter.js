import express from "express"
import { adminLogin, adminLogout, adminRegister, getAdmin } from "../controller/adminController.js"
import { isAuthenticated } from "../middleware/auth.js"

const router = express.Router()

router.post("/post/registeradmin",isAuthenticated,adminRegister)
router.post("/login",adminLogin)
router.get("/logout",isAuthenticated,adminLogout)
router.get("/getAdmin/me",isAuthenticated,getAdmin)

export default router