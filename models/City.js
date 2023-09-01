import {Schema, model, Types} from "mongoose";

let collection = 'cities'

let schema = new Schema({
    name:{type: String, required: true},
    image:{type: String, required: true},
    country:{type: String},
    description:{type: String},
    itineraries:[{type: Schema.Types.ObjectId, ref: 'itineraries'}]
}, {timestamps: true});

let Cities = model(collection, schema);

export default Cities