import Users from "../../models/User.js";
import bcrypt from "bcryptjs"

export default async (req, res) => {

    try {

        const passwordHash = bcrypt.hashSync(req.body.password, 10)
        console.log(passwordHash)
        req.body.password = passwordHash

        const newUser = await Users.create(req.body)
        return res.status(201).json({
            success: true,
            message:'New user create!',
            newUser
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Something was wrong'
        })
    }
}
