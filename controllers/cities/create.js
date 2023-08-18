import Cities from '../../models/City.js'

export default async(req, res, next)=>{
    try {
        await Cities.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'created!'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Failed connection'
        })
    }
}

