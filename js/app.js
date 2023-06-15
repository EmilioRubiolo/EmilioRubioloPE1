let total = 0;
function productoTiend(costo, cantidad, totalProducto, producto) {
    return totalProducto + costo*cantidad + producto;
}
iniciar = "si";

do {
    nombreProducto = prompt("Nombre del producto");
    precioProducto = parseFloat(prompt("Costo del producto"));
    cantidadProducto = parseInt(prompt("Ingresar cantidad"));
    total = productoTienda(precioProducto, cantidadProducto, total, precioProducto);
    console.log(total);
    iniciar = prompt("Desea continuar? si/no")
} while (iniciar !== "no")