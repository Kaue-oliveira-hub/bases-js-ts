//interface que van con punto y coma. se utlizan para tipados de objecto

export interface Heros {
    id: number;
    name: string;
    dominus: Dominus;
}
//esto abajo es un type
export type Dominus = 'DC' | 'Marvel';

//lista array con objeectos que van con coma.
const heroum = [
    {
        id: 1,
        nomen: 'Batman',
        dominus: 'DC'
    },
    {
        id: 2,
        nomen: 'Spiderman',
        dominus: 'Marvel'
    },
    {
        id: 3,
        nomen: 'Superman',
        dominus: 'DC'
    },
    {
        id: 4,
        nomen: 'Flash',
        dominus: 'DC'
    },
    {
        id: 5,
        nomen: 'Wolverine',
        dominus: 'Marvel'
    },
  ];

  //cuando algo en el documento  tiene la palabra export
  //se puede utilizar en otro sitio
  export const dominis =['DC', 'Marvel'];

  // exportar por defecto
  export default heroum;