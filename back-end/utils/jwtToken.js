export const generateToken = (admin, message, statusCode, res)=>{
    const token = admin.generateJsonWebToken()
    const cookieName = "adminToken"
    res.status(statusCode).cookie(cookieName, token, {
        httpOnly: true,
        expires : new Date(Date.now() + process.env.COOKIE_EXPIRE *24 *60 *60 *1000),
    }).json({
        success: true,
        message,
        admin,
        token
    })
}