import Cities from "../../models/City.js";

export default async(req, res, next) =>{
   console.log('req.query.name= ' +req.query.name.toLowerCase())
try {
    let queries = {}
    let searchName = req.query.name
    if(req.query.name) {queries.name = new RegExp(searchName, 'i')}
    //console.log('quieries = ' +queries.name)
    const firstFilter = await Cities.find(queries).sort({name: 1})
    const secondFilter = []
    firstFilter.filter(elem => {
        
        if(elem.name.toLowerCase().startsWith(searchName.toLowerCase())){
            secondFilter.push(elem)}
            return secondFilter
        }
    )
    console.log('secondFilter value ==' +secondFilter)
    return res.status(200).json({
        success: true,
        response: secondFilter
    })
} catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: "Algo falló"
    })
}
}