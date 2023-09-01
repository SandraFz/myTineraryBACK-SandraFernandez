/* import Itineraries from "../../models/Itinerary";

export default async(req, res) => {
    try {

        let itin = await Itineraries.find({city._id = req.query._id})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Filed connection"
        })
    }
} */