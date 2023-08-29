import Itineraries from "../../models/Itinerary.js";

export default async (req, res) => {
    try {

        const edit = await Itineraries.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true})

            if(edit){
                return res.status(200).json({
                    success: true,
                    edit
                })
            } else {
                return res.status(404).json({
                    success: true,
                    message: "Not found"
                })
            }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "No se pudo encontrar o editar"
        })
    }
}