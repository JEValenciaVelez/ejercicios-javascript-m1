// 3️⃣ ***** EJERCICIO 3 CLOSURES***** - chequearDisponibilidad() 3️⃣
// Implementar la función 🔍chequearDisponibilidad()🔍, la cuál recibirá inicialmente por parámetros
// un arreglo con prendas de ropa.
// Después podrá ser nuevamente invocada, recibiendo por parámetros un arreglo de las prendas disponibles para vender
// Debes retornar el mensaje correspondiente dependiendo de cuantas prendas hayan disponibles, o
// si no hay ninguna retornar "No se encontraron las prendas solicitadas"
//
// EJEMPLOS:
// Se solicitan las siguientes prendas: ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"]
// Y a continuación está disponible el siguiente stock: ["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]
// chequearDisponibilidad(prendas)(stock) Devuelve ➡
//  "2 de las 3 prendas solicitadas se encuentran en stock"
//
// O si probamos con otras prendas para solicitar: ["Pantalón Rojo", "Sweater Celeste"]
// chequearDisponibilidad(prendas2)(stock) Devuelve ➡
// "1 de las 2 prendas solicitadas se encuentran en stock"
//
// REQUISITOS:
//  🟢 Retornar un mensaje que indique la cantidad de prendas disponibles acorde al stock
//  🟢 Retornar "No se encontraron las prendas solicitadas" si no se encontró disponibilidad
//  🟢 Retornar "Todas las prendas fueron encontradas" si las prendas solicitadas se encontraron
//
// ACLARACIÓN: Chequear el output de los test, para poder colocar los mensajes como corresponden!

function chequearDisponibilidad(ropas) {
  // Tu código aquí:
  //debo crear una closure function
  //la funcion padre inicialmente recibe un pedido de ropa en un arreglo
  //la funcion hija recibe por parametro las prendas disponibles
  //debo iterar en los dos arraglos para verificar si los items coinciden
  //debo crear una variable contador que me cuente cada coincidencia
  //tener conteo del pedido

  let pedidas = ropas.length;
  let count = 0;
  function stock(disponibles){

    for(let i = 0; i < disponibles.length; i++){
      for(let j = 0; j < ropas.length; j++){
        if(disponibles[i]===ropas[j]){
          count += 1;
        }
      }
    }
    if(count === pedidas) return "Todas las prendas fueron encontradas";
    else if(count === 0) return "No se encontraron las prendas solicitadas";
    else return `${count} de las ${pedidas} prendas solicitadas se encuentran en el stock`;

  }
  return stock;
 
}
//let stock = chequearDisponibilidad( ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"]);
//console.log(stock(["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]));

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  chequearDisponibilidad,
};
