//funcion con async esta funcion se transforma en una funcion asyncronica...una promesa

import { GIFResponsio } from "../interfaces/git.responsio"
import { giphyApi } from "./10-axios"

export const getImg = async() => {
    try {
        const resp = giphyApi.get<GIFResponsio>('/random');
        return  (await resp).data.data.images.downsized_large.url;
        
    } catch (error) {
        throw 'Url no encontrada'
    }
}

//eso abajo es una promesa 
//export const getiMGpROMISE = () => {
// return new Promise(resolve => {
//resolve('https://url-de-mi-sitio-web/imagen/1.jpg')
//});
//}

getImg()
.then(url => console.log({url: url}))
.catch(error=> console.log(error))