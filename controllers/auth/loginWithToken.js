import Users from "../../models/User.js";

export default async (req, res) => {
    console.log(req.user.email)
    try{
        const logedUser = await Users.findOne({email: req.user.email})
        /* console.log(logedUser) */
        return res.status(200).json(
            {success: true,
            logedUser: logedUser}
        )
    } catch(error){
        console.log(error)
    }
}