//desestruturacion de array es igual a una lista


const characters: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gotem'];

const [ g,v, t, g2, g3 = 'yamoshi']= characters;
//esto arriba es la desestruturacion.
// se solo queremos en segundo elemento de la lista hay que dejar el espacio
console.log( {g, v, t,g2, g3}); 

const returnArray = () => {
    return [123, 'ABC'] as const//ESTO ES UNA funcion con una lista con 2 objectos.
}

const [numbers, letters] = returnArray();

console.log(numbers as number * 2, letters.toLowerCase());