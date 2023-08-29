import Itineraries from "../../models/Itinerary.js";

export default async (req, res) => {
    try {   
        const oneItinerary = await Itineraries.findById(req.params.id).populate({
            path: "city",
            select: "name"})
        return res.status(200).json({
            success: true,
            oneItinerary
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Failed connection"
        })
    }
}