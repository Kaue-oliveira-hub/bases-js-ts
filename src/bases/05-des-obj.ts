//INTERFACE
//esto es un tipo 
interface hero{
    name: string;
    age: number;
    codeName: string; 
    power?: string;  // aqui esta interrogacion informa que esta propiedad es opcional.
}



export const persona: hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    //power: 'money'
}

//console.log(persona.name);
//console.log(persona.age);

// DESESTRUTURACION DE OBJECTOS (para coger los elementos del objecto)
//
const { name, age, power = 'no tiene poder, tiene dinero' } = persona; 
// en el caso de power que es opcional, tiene que estar como arriba porque se no hay
//aparecer'a el mensaje de que no tiene poder

//console.log(name, age, power);
