import Users from "../../models/User.js";

export default async (req, res) => {
    /* console.log(req) */
    try{
        const logedUser = await Users.findOne({email: req.email})
        console.log(req.user)
        return res.json(
            {success: true,
            logedUser}
        )
    } catch(error){
        console.log(error)
    }
}