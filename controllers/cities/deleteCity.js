import Cities from "../../models/City.js";

export default async (req, res, nex) => {

    try {
        const deleteCity= await Cities.findByIdAndDelete(req.params.id)
        if(deleteCity){
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
            message: "Something was wrong"
        })
    }
}
