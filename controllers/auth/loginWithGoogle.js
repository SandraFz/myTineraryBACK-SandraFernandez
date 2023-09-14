import Users from "../../models/User.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export default async (req, res) =>{
    try {

        const { email: emailReq, password }= req.body
        console.log(emailReq)
        const loginUser = await Users.findOne({email: emailReq})
        console.log(loginUser)
        
        if(!loginUser){
            throw new Error("Invalid email")
        }

        const {name, lastName, email, photo, country} = loginUser

        const token = jwt.sign({name, lastName, email, photo, country}, process.env.KEY,{expiresIn: '1h'}) 

            return res.status(200).json({
                success: true,
                token,
                loginUser
            })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Something was wrong",
            error
        })
    }
}