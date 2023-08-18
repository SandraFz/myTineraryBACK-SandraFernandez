import 'dotenv/config.js'
import '../../config/database.js'
import Cities from '../City.js'

let cities = [
    {
        "name":"Buenos Aires",
        "image":"https://images.pexels.com/photos/13544086/pexels-photo-13544086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "country":"",
        "description":""
        },
        {
        "name":"ciudad del Cabo",
        "image":"https://resources.formula-e.pulselive.com/photo-resources/2023/02/20/042dd057-7157-4069-beb8-2aa3af8b21ba/Cape-Town.jpg?width=1440&height=810",
        "country":"",
        "description":""
        },
        {
        "name":"El Cairo",
        "image":"https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "country":"",
        "description":""
        },
        {
        "name":"Kuala Lumpur",
        "image":"https://paisajismourbano.com/wp-content/uploads/2022/05/Jardines-verticales-Kuala-Lumpur.jpg",
        "country":"",
        "description":""
        },
        {
        "name":"Marrakech",
        "image":"https://cdn.viviendodeviaje.com/wp-content/uploads/2023/02/02195738/consejos-viajar-marrakech.jpg",
        "country":"",
        "description":""
        },
        {
        "name":"Nairobi",
        "image":"https://www.andbeyond.com/wp-content/uploads/sites/5/giraffe-and-sky-line-nairobi.jpg",
        "country":"",
        "description":""
        },
        {
        "name":"Paris",
        "image":"https://images.pexels.com/photos/4039924/pexels-photo-4039924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "country":"",
        "description":""
        },
        {
        "name":"Quito",
        "image":"https://i.pinimg.com/originals/fc/f4/d8/fcf4d8ae5db99a613329d03bff5e7d29.jpg",
        "country":"",
        "description":""
        },
        {
        "name":"Seul",
        "image":"https://imagenes.elpais.com/resizer/KWoTTW0OPg3VEZyjdtVA90ATKTI=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/PO7ERGE7F3KLH4UCNHLAUCHIN4.jpg",
        "country":"",
        "description":""
        },
        {
        "name":"Singapur",
        "image":"https://images.pexels.com/photos/2804038/pexels-photo-2804038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "country":"",
        "description":""
        }
]

Cities.insertMany(cities);
