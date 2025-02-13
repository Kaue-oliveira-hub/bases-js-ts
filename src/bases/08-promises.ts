//promessas

import type { Heros } from "../data/heroe";
import { getHeroById } from "./07-imp-exp";

console.log('Inicio');

//eso es la promesa como un objecto (codigo asincrono?)
// new Promise( (resolve, reject ) =>{
    
//     console.log('cuerpo de la promesa');

//     setTimeout(()=> {
// resolve ('Mi amigo cumple');
// reject ('mi amigo no paga');
//     }, 1000)


// }).then(msg => console.log(msg))
// .catch( msgError => console.log( msgError))
// .finally(() => console.log('Fin de la promesa'))



// console.log('Fin');

const getHeroByIdAsync = (id:number): Promise<Heros> => {
    return new Promise((resolve, reject) =>{
setTimeout(()=> {
const heros = getHeroById(id);

//if ( heros ) {
//    resolve (heros as Heros )
//} 
//else {
//    reject(`El heroe  con id #${ id } no ha sido encontrado`)
//}
heros? resolve (heros as Heros ) :  reject(`El heroe  con id #${ id } no ha sido encontrado`);
// esto arriba: se eso existe ensene as hero. Se no, ensename eso otro.
}, 1500);

})
}

(getHeroByIdAsync(1)).then(heros => console.log(`El nombre es ${heros.nomen}`))
.catch(msg => console.log(msg));