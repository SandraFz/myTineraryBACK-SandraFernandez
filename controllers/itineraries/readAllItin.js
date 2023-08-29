import Itineraries from "../../models/Itinerary.js";

export default async(req, res, next)=>{
    try{
        let list = await Itineraries.find()
                            .sort({duration: 1})
                            .populate({path: "city"})
        return res.status(200).json({
            success: true,
            response: list
        })
    } catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Filed connection'
        })
    }
}