// eso abajo es un objecto con 3 elementos. uno de ellos es un otro objecto
export const persona = {
surName: 'Stark',
age: 45,
living: {
city:'New York',
zip: 3456,
lat: 145678,
lng: 456789

    }
} // as const;

 // se quiero que los elementos de una constante nunca puedan ser cambiados hayque poner
// el  la expresion    as const

 // se puede cambiar una propiedad de los objectos no el objecto constante
//persona.age = 55;
//persona.living.city = "Valencia"

//const persona2 = persona;
// como hacer un dubplicado de las cosas
export const persona2 = { ...persona}
persona2.surName = 'Parker';
console.log(persona);
console.log(persona2);
