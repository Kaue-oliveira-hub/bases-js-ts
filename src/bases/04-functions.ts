//funcion
function sayHi2 (name: string): string {

    return `Hola ${ name }`;
}

//como convertir una funcion en una funcion de flecha con todo el tipado?
//const sayHi (name: string): string {
//    return `Hola $ { name }`;
// }

// se hay solo una alinea asi.
const sayHi = (name: string): string => `Hola ${ name }`

console.log(sayHi('Oliveira'));

// se una funcion flecha va devolver un objecto, 
// tiene que estar dentro de parentesis
//const getUser = () => ({
//        uid: 'ABC-123',
//        name: 'Tony001'
//    })
//console.log(getUser());

const getUser = (uid: string)=> ({
    uid: uid,
    name: 'Tony001'
})
//console.log(getUser('XYZ-456'));

//listado de objecto es lo normal de internet
const heroOne: {id: number, name: string}[] = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Power'   //opcional, algunos objectos puede que la tengan y otras no : porque no esta declarada arriba...
    },
    
];

const hero = heroOne.find( item => item.id === 2  )

console.log(hero.power);