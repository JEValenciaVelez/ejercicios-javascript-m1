// 4️⃣ ***** EJERCICIO 4 RECURSIÓN***** - atenderClientes() 4️⃣
//
//
// Implementar la función 👨‍👨‍👦 atenderClientes() 👨‍👨‍👧, la cual recibirá por parámetros un objeto
// de clientes que estarán esperando ser atendidos. Recursivamente debes eliminar los clientes hasta dejar el objeto vacío
//
//
// EJEMPLOS:
// Dado el siguiente objeto de clientes:
// {
//  1: "Franco",
//  2: "María",
//  3: "Alejo"
// }
//
// atenderClientes(clientes) Devuelve ➡ {}
//
// REQUISITOS:
//  🟢 Vaciar recursivamente el objeto de clientes y retornar el objeto vacío
// 
// Tip: Podés usar el operador delete para los objetos.

function atenderClientes(clientes) {
  // Tu código aquí:
  // el operador delete borra propiedades de objetos
  //crear bucle iterador para contar las props de clientes
  //crear variable que me cuente el numero de propiedades.
  //para cuando no halla propiedades devolver el obj vacio //caso de corte de la recursion
  let count = 0;
  for(let cliente in clientes){
    count++;
  }
  if(count < 1) return clientes  //caso de corte
  else{
    delete clientes[count];
  }
  return atenderClientes(clientes); //recursion, vuelvo y valido las instrucciones anteriores.

}
let objeto = {
  1: "Franco",
  2: "María",
  3: "Alejo"
 };
console.log(atenderClientes(objeto));

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  atenderClientes,
};
