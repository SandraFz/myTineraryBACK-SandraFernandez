import Users from "../../models/User.js";

export default async (req, res, next) => {
    try {
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
