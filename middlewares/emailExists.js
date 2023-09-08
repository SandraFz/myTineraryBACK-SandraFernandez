import Users from "../models/User.js"

const emailExists = async (req, res, next) => {
    
    const exists = await Users.findOne({email:req.body.email})
    console.log(exists)
    if(!exists){
        return next()
    }

    return res.status(500).json({
        success: false,
        message: 'Email already exists.'
    })
}

export default emailExists