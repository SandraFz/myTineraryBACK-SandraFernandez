import Cities from "../../models/City";

export default async(req, res, next)=>{
    try {
        await Cities.find()
        return res.status(200).json({
            success: true,
            message: 'Here they are!'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Filed connection'
        })
    }
}