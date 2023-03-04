// 5️⃣ ***** EJERCICIO 5 RECURSIÓN***** - liquidacion() 5️⃣
//
// Implementar la función 💲 liquidacion() 💲 la cuál recibirá por parámetros un array de objetos anidados que
// Representarán algunas prendas de ropa en una vidriera, cada una podrá contener, o no, una etiqueta que indique su estado.
// Tendrás que recursivamente iterar el array, y retornar uno nuevo, sólo con los objetos que tengan la etiqueta "LIQUIDACION" asociada.
//
// EJEMPLOS:
//  Dado el siguiente arreglo: [{ camiseta: { LIQUIDACION: true } }, { gorro: { DESCUENTO: true } }, { abrigo: {} }, { pantalones: { LIQUIDACION: true } }]
//  liquidacion() Devuelve ➡
//  [{ pantalones: { LIQUIDACION: true } }, { camiseta: { LIQUIDACION: true } }]
//
// REQUISITOS:
//  🟢 Retornar un nuevo arreglo que contenga las prendas de ropa en LIQUIDACION
//  🟢 Implementar recursividad🔄!
//  🟢 Si el arreglo está vacío, retornar un mensaje que diga "No hay prendas en liquidación"
//
// CUIDADO: ⚠️ ⚠️ ⚠️ ⚠️  las prendas tiene que ir agregandose de derecha a izquierda como se muestra en el ejemplo de mas arriba. ⚠️ ⚠️ ⚠️ ⚠️
//
// TIP: tambien podes usar un rest parameter.

function liquidacion(array, myLista = []) {
  // Tu código aquí:
  //instanciar una lista vacia para luego llenarla con los objetos que cumplen la validacion
  

  //si el array esta vacio(caso de corte para la recursion)
  if(array.length === 0){
    if(myLista.length > 1) return myLista; // si hay algo en mi lista , retornala
    else return "No hay prendas en liquidación"; // de lo contrario retorna "No hay prendas en liquidación".
  }

  //obtenemos el primer elemento del array y lo eliminamos
  const prenda = array.shift();
  //console.log(prenda)
  //si LIQUIDACION se encuentra dentro del objeto que esta dentro de la prenda
  if(prenda[Object.keys(prenda)[0]].LIQUIDACION){ //verifico si la primera prop del objeto tiene como prop liquidacion
    myLista.unshift(prenda);//si se cumple la condicion a mi lista introducela como primer elemento
  }

  //retorno de manera recursiva mi funcion
  return liquidacion(array, myLista); //vuelvo y valido para el array actual y mylista actual.
  

}

//const array = [{ camiseta: { LIQUIDACION: true } }, { gorro: { DESCUENTO: true } }, { abrigo: {} }, { pantalones: { LIQUIDACION: true } }];
//console.log(liquidacion(array));


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  liquidacion,
};
