import Cities from "../../models/City.js";

export default async(req, res, next) =>{
   console.log('req.query.name= ' +req.query.name)
try {
    let queries = {}
    let searchName = req.query.name

    if(searchName) {queries.name = new RegExp(searchName, 'i')
    console.log(queries.name)
    const firstFilter = await Cities.find(queries).sort({name: 1})
    const secondFilter = []

    firstFilter.filter(elem => {
        
        if(elem.name.toLowerCase().startsWith(searchName.toLowerCase())){
            secondFilter.push(elem)}
        }
    )

    let count = secondFilter.length
   
    console.log('count=  ' + count)
    
    return res.status(200).json(count >= 1?
        {
        success: true,
        count,
        response:  secondFilter
        }:{
            success:true,
            count,
            response: [],
            message:"No find cities calls like that"
        }
    )}
} catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: "Something is wrong"
    })
}
}