import Itineraries from "../../models/Itinerary.js";

export default async(req, res) =>{
    try {
        await Itineraries.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'created!'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Failed connection'
        })
    }
}