import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { Application } from "../models/applicationFormSchema.js";

export const postApplication = catchAsyncErrors(async (req, res, next) => {
    const { name, email, query } = req.body;
    if(!name || !email || !query){
        return next(new ErrorHandler("Please enter all the details!", 400))
    }
    const application = await Application.create({
        name,
        email,
        query
    })
    res.status(201).json({success: true, message:"Submited Successfuly!"})
})


export const getAllApplication = catchAsyncErrors(async(req, res, next)=>{
    const applications = await Application.find()
    if(!applications){
        return next(new ErrorHandler("No Applications found", 400))
    }
    res.status(200).json({success: true, applications})
})

export const deleteApplication = catchAsyncErrors(async(req, res, next)=>{
    const applicationId = req.params.id
    const application = await Application.findByIdAndDelete(applicationId)
    if(!application){
        return next(new ErrorHandler("Application not found", 400))
    }
    res.status(200).json({success: true, message: "Application deleted successfully!"})
})