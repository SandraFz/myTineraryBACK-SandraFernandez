import Users from "../../models/User.js";
import bcrypt from "bcryptjs"

export default async (req, res) =>{
    try {

        const { email, password }= req.body
        console.log(email)
        const loginUser = await Users.findOne({email})
        //Ya tengo middleware para validar el email
        console.log(loginUser)
        if(!loginUser){
            throw new Error("Invalid email o password")
        }
        
        const validPassword = bcrypt.compareSync(password, loginUser.password)
        console.log(validPassword)

            return res.status(200).json({
                success: true,
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