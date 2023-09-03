import Itineraries from "../../models/Itinerary.js";

export default async(req, res) => {
    try {

        console.log(req.query)
        let queries = req.query.name
        //console.log(queries)
        let itin = await Itineraries.find().populate({path: "city"})
        //console.log(itin)
        let itinByCities = []
        itin.filter(elem => {
            console.log(elem.city.name)
             if(elem.city.name.toLowerCase().startsWith(queries.toLowerCase())){
                itinByCities.push(elem)} 
        })

        let count = itinByCities.length
        
        return res.status(200).json({
            success: true,
            response: count >=1 ? itinByCities: "No find itineraries"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Filed connection"
        })
    }
}