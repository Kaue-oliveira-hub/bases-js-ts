// axios metodo para hacer una peticion nps axious
import axios from "axios";
import type { GIFResponsio } from "../interfaces/git.responsio";

const apiKey = 'XEgGi33PQXfO9APApfJYXK7iY4Vdw4s2';

export const giphyApi = axios.create({
baseURL: 'https://api.giphy.com/v1/gifs',
params: {
    api_key: apiKey,
}

});
//eso abajo es una promesa peticion
giphyApi.get<GIFResponsio>('/random')
.then( resp => console.log(resp.data.data.images.downsized.url))
.catch( err => console.log(err))