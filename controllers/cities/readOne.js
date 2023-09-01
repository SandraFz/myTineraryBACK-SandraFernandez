import Cities from "../../models/City.js";

export default async (req, res, next)=>{
   try {
    const oneCity = await Cities.findById(req.params.id)
                            .populate({path:"itineraries"})
        console.log(oneCity)
        return res.status(200).json({
            success: true,
            oneCity
        })
   } catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: "Failed connection"
    })
   } 
}