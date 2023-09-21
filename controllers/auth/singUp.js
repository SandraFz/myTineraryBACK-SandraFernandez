import Users from "../../models/User.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export default async (req, res) => {

    try {
        const exists = await Users.findOne({email:req.body.email})
        console.log(exists)

        if(!exists){
            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            console.log(passwordHash)
            req.body.password = passwordHash

            const newUser = await Users.create(req.body)

            const {name, lastName, email, photo, country} = newUser
            const token = jwt.sign({name, lastName, email, photo}, process.env.KEY, {expiresIn: '1h'})

            return res.status(201).json({
                success: true,
                message:'New user create!',
                token: token,
                newUser
            })
        } else {
            return res.status(200).json({
                message: 'Email already exists.'
            })
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Something was wrong'
        })
    }
}
