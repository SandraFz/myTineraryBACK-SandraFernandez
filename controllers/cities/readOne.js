import Cities from "../../models/City";

async (req, res, next)=>{
   try {
    await Cities.find(req.body)
   } catch (error) {
    console.log(error)
    return res.status(500).json({
        success: false,
        message: "Failed connection"
    })
   } 
}