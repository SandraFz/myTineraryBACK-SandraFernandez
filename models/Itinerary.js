import {Schema, model, Types} from "mongoose";

let collection = 'itineraries'

let schema = new Schema({
    name:{type: String, required: true},
    price:{type: Number, min:1, max:5},
    image:{type: String, required: true},
    duration:{type: Number, required: true},
    likes:{type: Number},
    Hastags:{type: String},
    Comments:{type: Types.ObjectId},
    city:{type: Schema.Types.ObjectId, ref: 'cities'}    
}, {timestamps: true})

let Itineraries = model(collection, schema);

export default Itineraries