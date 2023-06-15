let precioItem;
let nombreItem;
let cantidad;
let nombreUser;
let total = 0;
let opcion;
let ticket = "" ;

alert('Bienvenido al carrito de compras');
nombreUser = prompt("Ingrese su nombre");

do{
    nombreItem = prompt("Nombre del item");
    precioItem = Number(prompt("Ingresar el precio del item"));

    while (precioItem < 0 ) {
        precioItem = Number(prompt('Precio invalido'));
    }

    cantidad = parseInt(prompt("Ingrese la cantidad"));

    while (cantidad <= 0 ) {
        cantidad = parseInt(prompt('Cantidad invalida'));
    }
    ticket = ticket + `nombre del item : ${nombreItem} \n precio unitario: $${precioItem} \n cantidad: ${cantidad} \n subtotal: $${cantidad * precioItem} \n\n`
    total = total + cantidad * precioItem;

    opcion = prompt("¿Desea añadir otro item?");

} while (opcion == 'si')

alert(`${ticket} El total para ${nombreUser} es de: $${total}`);
