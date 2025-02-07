//funcion
function sayHi2 (name: string): string {

    return `Hola ${ name }`;
}

//como convertir en una funcion de flecha?

const sayHi = (name: string): string => `Hola ${ name }`



//console.log(sayHi('Josep'));

// se una funcion flecha va devolver un objecto, tiene que estar dentro de parentesis
//const getUser = () => ({
  //      uid: 'ABC-123',
    //    name: 'Tony001'
   // })
//console.log(getUser);

const getUser = (uid: string)=> ({
    uid: uid,
    name: 'Tony001'
})
console.log(getUser('XYZ-456'));