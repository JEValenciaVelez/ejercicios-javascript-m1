// 6️⃣ ***** EJERCICIO 6 ALGORITMOS***** - ordenarRopa() 6️⃣
// Se desordenó todo el inventario de ropa! hay prendas por todas partes.
// Por el momento tendremos que solucionar el problema creando la función 🧦 ordenarRopa() 🧦, la cual recibirá por parámetros
// un array de objetos anidados, que representarán cada prenda. Cada objeto tendrá dentro una propiedad nombre y un precio entero.
// Tendrás que implementar un algoritmo de ordenamiento para poder organizar toda la ropa de MAYOR a MENOR según el precio.
//
//
// EJEMPLOS:
// Dado el siguiente arreglo:
// [{ nombre: 'Camiseta', precio: 12}, { nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre: 'Gorra', precio: 4 }]
//
// ordenarRopa(array) Devuelve ➡
// [{ nombre: 'Saco', precio: 23 }, { nombre: 'Camiseta', precio: 12 }, { nombre: 'Gorra', precio: 4 }, { nombre: 'Pantalon', precio: 2 }]
//
// REQUISITOS:
//  🟢 Implementar algún algoritmo de ordenamiento para ordenar el arreglo de MAYOR a MENOR
//  🟢 NO utilizar el método sort de array!

function ordenarRopa(ropa) {
  //necesito comparar el elemento anterior con el siguiente para ordenar
  //crear doble bucle anidado

  let cambio = true; //creo variable interruptor para el while

  while(cambio){

    cambio = false; //cuando entro al while  el interruptoop lo apago
    for(let i = 0; i < ropa.length-1; i++){
      let aux = ropa[i]; // guardo el elemento anterior en variable por si hay que cambiarlo no se borre
      if(ropa[i].precio < ropa[i+1].precio){
        ropa[i] = ropa[i +1];
        ropa[i+1]= aux; // a la pos de adelante le asigno la que estaba atras
        cambio = true; // si hace el cambio vuelvo y prendo el interruptor para volver a validar;
      }
    }
    
  }
  return ropa;
  
}

let ropa = [{ nombre: 'Camiseta', precio: 12}, { nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre: 'Gorra', precio: 4 }];
console.log(ordenarRopa(ropa));

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  ordenarRopa
};