//fetch metodo para hacer una peticion

import { GIFResponsio } from "../interfaces/git.responsio";

const apiKey = 'XEgGi33PQXfO9APApfJYXK7iY4Vdw4s2';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
.then( resp => resp.json())
.then( (body:GIFResponsio) => {
    console.log(body.data.images.downsized_still.url)
})
.catch(err => console.log(err))
//https://api.giphy.com/v1/gifs/random?api_key=XEgGi33PQXfO9APApfJYXK7iY4Vdw4s2

//utilizamos la web de gifthy. cogimos la creamos una apikey, copiamos la direcion
//hicimos una peticion con el metodo fetch.

en el
// en el programa postman/ ppegamos alli la linea de appkey hasta el igual y pegamos despues la llaveapikey
// copiamos los datos para una interface en formato json
//abrir la app  postman que sirve para hacer peticon a los backend
//utilizamos la extension past json by code