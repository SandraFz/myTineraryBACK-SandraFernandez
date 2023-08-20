import Cities from "../../models/City.js";

export default async(req, res, next)=>{
    try {
        let list = await Cities.find().sort({name: 1})
        return res.status(200).json({
            success: true,
            message: list
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Filed connection'
        })
    }
}