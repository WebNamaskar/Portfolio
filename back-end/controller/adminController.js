import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { Admin } from "../models/adminSchema.js";
import { generateToken } from "../utils/jwtToken.js";



export const adminRegister = catchAsyncErrors(async(req, res, next)=>{
    const {name, email, password} = req.body
    if(!name || !email || !password) {
        return next(new ErrorHandler('Please fill in all fields', 400))
    }
    const admin = Admin.create({
        name,
        email,
        password
    })
    res.status(200).json({
        success: true,
        message:"Admin Registered Successfully!"
    })
})


export const adminLogin = catchAsyncErrors(async(req,res,next)=>{
    const {email,password,confirmPassword} = req.body;
    if(!email || !password || !confirmPassword){
        return next(new ErrorHandler("Please enter all the details!", 400))
    }
    if(password !== confirmPassword)
    {
        return next(new ErrorHandler("Password and Confirm Password does not match!", 400))
    }
    const admin = await Admin.findOne({email});
    if(!admin){
        return next(new ErrorHandler("No user found with this email address!",400))
    }
    const isPasswordMatch = await admin.comparePassword(password);
    if(!isPasswordMatch){
        return next(new ErrorHandler("Password is incorrect!", 400))
    }
    generateToken(admin,"Logged in Successfully!",200, res);

})


export const adminLogout = catchAsyncErrors(async(req, res, next)=>{
    res.status(200).cookie("adminToken","",{
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        expires: new Date(Date.now()),
    }).json({
        success:true,
        message:"Logged out successfully"
    })
})


export const getAdmin = catchAsyncErrors(async(req, res, next)=>{
    const admin = req.admin
    res.status(200).json({
        success: true,
        admin
    })
})