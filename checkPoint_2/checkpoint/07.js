const { LinkedList } = require('../DS');
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
// 7️⃣ ***** EJERCICIO 7 ***** - LinkedList.migrarStock() 7️⃣ 
//  La tienda de ropa necesita migrar sus datos de stock de una lista a un objeto.
//  Para esto deberás agregar al prototype de LinkedList el método 📦 migrarStock() 📦, el cual deberá retornar todos los valores almacenados
//  de la lista en un nuevo objeto con formato nombre:stock.
//
// EJEMPLOS:
//  Dada la siguiente lista:
//
// ({nombre: 'Camisetas', stock: 22}) ➡ ({nombre:'Pantalones', stock: 12}) ➡ ({nombre:'Zapatos', stock: 45}) ➡ ({nombre: 'Bufandas', stock: 12}) ➡ ({nombre: 'Sacos', stock: 4})
//
// lista.migrarStock() devuelve ➡
// {Camisetas: 22, Pantalones: 12, Zapatos: 45, Bufandas: 12, Sacos: 4}
//
//
// REQUISITOS:
// 🟢 Retornar un objeto con la prenda de ropa y su stock a modo de clave/valor mostrado en el ejemplo arriba
// 🟢 Si la lista está vacía retornar un mensaje que diga exactamente: "No hay stock para migrar"

LinkedList.prototype.migrarStock = function () {
  // Tu código aquí:
  //debo recorrer la lista , puede ser con un while 
  //debo crear un punto de partida, para esto guardo en un variable current el primer nodo, para luego recorrerlo
  //debo instanciar un objeto vacio para ir llenando con los valores de los nodos
  // puedo hacer uso de la clase Object.values(objecto) para evaluar solo los valores de las props

  let current = this.head;
  const result = {};
  
  if(!current) return "No hay stock para migrar";

  while(current){
    result[Object.values(current.value)[0]] = Object.values(current.value)[1];
    current = current.next;
  }
  return result;
}
let stock = new LinkedList();
// stock.add({nombre: 'Camisetas', stock: 22});
// stock.add({nombre:'Pantalones', stock: 12});
// stock.add({nombre:'Zapatos', stock: 45});
// stock.add({nombre: 'Bufandas', stock: 12});
// stock.add({nombre: 'Sacos', stock: 4});
console.log(stock.migrarStock());


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};