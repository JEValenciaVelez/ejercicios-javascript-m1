const { LinkedList } = require('../DS');
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
// 8️⃣ ** EJERCICIO 8 LINKEDLIST** - tacharLista() 8️⃣ 
// 
// Llegó la hora de revisar el catálogo de ropa disponible! tendremos que tachar las que hayan se hayan agotado
// el stock
// Agregar al prototype de LinkedList el método 📄 tacharLista() 📄 el cuál recibirá por parámetros un array de strings,
// Tendrás que retornar una nueva lista en base a las prendas que hay en el array.
// Es decir, tendrás que agregar a la nueva lista los elementos que NO coincidan en la lista actual con el array.
//
// EJEMPLOS:
// Dada la siguiente lista de strings:
// ('Pantalon') ➡ ('Zapatos') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Gafas') ➡ ('Sweater') ➡
//
// Y dado el siguiente array por parámetros: ['Gafas', 'Zapatos']
// lista.tachar(array): Devuelve ➡
// ('Pantalon') ➡ ('Camisa') ➡ ('Calcetines') ➡ ('Sweater') ➡
//
// REQUISITOS:
// 🟢 Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.
// 🟢 Si el arreglo viene vacío retornar la LinkedList COMPLETA.
// Tip: Tanto las LinkedList como los arreglos, contendrán siempre strings.

LinkedList.prototype.tacharLista = function(lista=[]) {
  // Tu código aquí:
  
  let current = this.head;
  let newList = new LinkedList();
  
  // si la lista esta vacia retorna la linkedlist
  if(lista.length < 1) return this;

  while(current){
    //si el valor del nodo actual no esta en el array recibido por parametro
    //lo agruegamos a la nueva lista
    if(!lista.includes(current.value)){
      newList.add(current.value);
    }
    //pasamos a evaluar el siguiente noso
    current = current.next;
  }
  return newList;
  

}

// let lista = new LinkedList();
// lista.add("Zapatos")
// lista.add("Camisa")
// lista.add("Calcetines")
// lista.add("Gafas")
// lista.add("Sweater")  
// const slicedList = lista.tacharLista(["Zapatos", "Camisa"]);
// console.log(slicedList.head.value);


  


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};