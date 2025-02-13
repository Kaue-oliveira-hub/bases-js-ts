//importar y exportar
//importancion normal
//importancion por exportancia por defecto; se puede cambiar una variable.

import heroum, { dominis, type Dominus } from "../data/heroe";

console.log(dominis);

console.log( heroum );

//para encontrar algo con find en una lista
export const getHeroById = (id:number) => heroum.find(heros => heros.id === id );
//con export se puede llamar la funcion desde otros archivos.
console.log (getHeroById(300));

// para poner un filtro y encontrar algo en una lista
export const getHeroByDominus = (dominus: Dominus) => {
    return heroum.filter(heros => heros.dominus ===dominus)
}
console.log(getHeroByDominus('Marvel'));