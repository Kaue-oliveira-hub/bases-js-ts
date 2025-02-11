const numberArray: number[] = [1,2,3,4,5];

//como anadir un numero mas a la lista: con push
numberArray.push(6);
// como hacer una replica de la lista 
const numberArray2 = [ ...numberArray ];

//como adicionar un elemento mas en la lista
numberArray2.push(7);
console.log(numberArray);
console.log(numberArray2);

//COMO HACER UN MAPEADO.
// una mapeado hace una lista de una lista- transformando los elementos de la lista inicial
//  con una funcion de flecha y propiedad .map  CREAR OTRA LISTA TRANSFORMANDO TODOS LOS ELEMENTOS DE LA LISTA
//const numberArray3 = numberArray.map( (valor) => {
 //   return (valor * 2.455).toFixed(1)
 //} )
 // las funciones de flecha se pueden hacer mas sencillas quitando el return y las flechas
 const numberArray3 = numberArray.map( (valor)=> (valor * 2.345).toFixed(1));
 console.log(numberArray3);

