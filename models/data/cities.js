import 'dotenv/config.js'
import '../../config/database.js'
import Cities from '../City.js'
import arrayCities from './arrayCities.js'

let cities = [
    
]

Cities.insertMany(arrayCities);
