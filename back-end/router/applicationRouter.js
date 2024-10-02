import express from "express"
import {deleteApplication, getAllApplication,postApplication} from "../controller/applicationController.js"
import {isAuthenticated} from "../middleware/auth.js"


const router = express.Router()

router.post("/postapplication",postApplication)
router.get("/getapplication",isAuthenticated,getAllApplication)
router.delete("/deleteapplication/:id",isAuthenticated,deleteApplication)

export default router