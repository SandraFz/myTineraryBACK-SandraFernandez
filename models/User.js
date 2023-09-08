import {Schema, model } from "mongoose";

let collection = 'users'

let schema = new Schema({
    name: {type: String},
    lastName: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    photo: {type: String},
    country: {type: String}
}, {timestamps: true});

let Users = model(collection, schema)

export default Users