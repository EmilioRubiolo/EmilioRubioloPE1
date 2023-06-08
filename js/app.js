///mostrar por consola los numeros del 1 al 10

/* let i = 1;

console.log(i);
i = i+1;
console.log(i);
i = i+1;
console.log(i);
i = i+1;
console.log(i);
i = i+1; */


///el codigo lo voy a tener que repetir 10 veces

////FOR
///necesitamos saber la cantidad de veces que vamos a iterar
/* 
 for(VALOR INICIAL; CONDICION_CONTINUIDAD; AVANCE)
 {
    porcion codigo
 }

*/

///mostrar por consola los numeros del 1 al 10
///podemos declarar la variable en su estructura, pero una vez que termine el for, 
///la variable no existe mas


///operador incremento
/// i = i + 1  o   i++

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
}
 */
/* 
1 - inicializa i en 1
2 - evalua la condicion central
3- ejecutar las sentencias de codigo
4 - incrementa i en 1
5 - evalua condicion central
6 - ejecutar las sentencias de codigo
*/



////BUCLE WHILE 
/* 
 while (CONDICION_VERDADERA) {
    EJECUTAN SENTENCIAS
 }

*/


let continuar; 
let precio;
let cantidad;
let total = 0;

do {
    console.log('agregando un nuevo producto al carrito de compras...');
    precio = parseFloat(prompt('precio del producto: '));
    cantidad = parseInt(prompt('cantidad: '));
    total = total + precio*cantidad;
    continuar = prompt('Queres agregar otro producto en el carrito de compras? si/basta');
}while(continuar == 'si');


alert('El total del carrito es $'+ total); 