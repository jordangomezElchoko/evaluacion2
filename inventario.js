const inventario = {
    productos : []
};
 
function agregarproducto (nombre, precio , cantidad ){
    let producto= {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
    };
    inventario.productos.push(producto);
}

function listarProductos() {
   
    inventario.productos.forEach(producto =>
 console.log( ` producto: ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidad}`)
    )};
   

function totalinventario() {
let total= 0;
inventario.productos.forEach(producto =>{  
total += producto.precio * producto.cantidad;
});
 return total;
}


agregarproducto(`moto`,1000000,100);
agregarproducto(`avion`, 100000,5);
listarProductos();
console.log(`valor total de inventario: ${totalinventario()}`);
  


