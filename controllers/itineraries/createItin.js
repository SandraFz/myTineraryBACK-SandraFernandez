import Cities from "../../models/City.js";
import Itineraries from "../../models/Itinerary.js";

export default async(req, res) =>{
    try {
        
    const newItin = await Itineraries.create(req.body)
    
    const city = await Cities.findById(req.params.id_city)
    
    /* const arrayItin = city.itineraries.push(newItin._id) */
    console.log(newItin)
    const updateCity = await Cities.findByIdAndUpdate(
            city._id,
            {$push: {itineraries: newItin}},
            {new: true}
    )
   /*  console.log() */
        
        return res.status(201).json({
            success: true,
            message: 'created!',
            updateCity
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Failed connection'
        })
    }
}