let city: string = 'Valencia';
city = 'Madrid';

const age: number = 24;
const name = 'Tony';

const surName = 'Stark';

// PARA INTERPOLAR VARIABLES para hacer frases y ir buscar alli en las variables haciendo otra variable
export const fullName: string = `${ name } ${surName} tiene ${ age * 2} años y vive en ${ city }`;

console.log(fullName);
