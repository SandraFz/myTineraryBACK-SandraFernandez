import Itineraries from "../../models/Itinerary.js";

export default async (req, res) => {
    try {
        const deleteItin = await Itineraries.findByIdAndDelete(req.params.id)
        if(deleteItin){
            res.status(200).json({
                success: true,
                message: "Deleted"
            })
        } else {
            res.status(404).json({
                success: false,
                message: "Not found"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:"Algo falló"
        })
    }
}