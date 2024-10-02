import { Admin } from "../models/adminSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken"


export const isAuthenticated = catchAsyncErrors(async(req, res, next)=>{
    const token = req.cookies.adminToken
    if(!token)
    {
        return next(new ErrorHandler('Not Authorized', 400))
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.admin = await Admin.findById(decoded.id)
    if(!req.admin)
    {
        return next(new ErrorHandler(`${req.user.role} not authorized for this resources`,403))
    }
    next()
})