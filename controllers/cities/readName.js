import Cities from "../../models/City.js";

export default async(req, res, next) =>{
   console.log('req.query.name= ' +req.query.name)
try {
    let queries = {}
    let searchName = req.query.name

    if(req.query.name) {queries.name = new RegExp(searchName, 'i')}
    
    const firstFilter = await Cities.find(queries).sort({name: 1})
    const secondFilter = []

    firstFilter.filter(elem => {
        
        if(elem.name.toLowerCase().startsWith(searchName.toLowerCase())){
            secondFilter.push(elem)}
            return secondFilter
        }
    )

    let count = secondFilter.length
   
    console.log('count=  ' + count)
    
    return res.status(200).json({
        success: true,
        count,
        response: count >= 1? secondFilter:"No hay ciudades que coincidan"
    })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: "Algo falló"
    })
}
}