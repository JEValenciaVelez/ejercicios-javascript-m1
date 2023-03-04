const { BinarySearchTree } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
// 9️⃣ ***** EJERCICIO 9 BINARYSEARCHTREE***** - BinarySearchTree.obtenerPrendas() 9️⃣
//
// Te han mandado a recoger una determinada prenda del inventario! Tendrás que buscar sobre el mismo
// Todas las que coincidan con la que te pidieron!
// Para esto tendrás que agregar al prototype de BinarySearchTree, el método 🩳 obtenerPrendas() 🩳, el cuál
// recibirá por parámetros un string, que representará el nombre de las prendas que se necesitan encontrar.
//
//
// EJEMPLOS:
// Dado el siguiente árbol:
//                          { nombre: "Camiseta", num: 13 }
//                          /                           \
//           {nombre: "Zapato", num: 7}          {nombre: "Camiseta", num: 24}
//                       /                               /                 \
//           {nombre: "Pollera", num: 6}   {nombre: "Zapato", num: 16}  {nombre: 27, num: 27}
//                     /                                                     \
//        {nombre: "Zapato", num: 3}                              {nombre: "Zapato", num: 45}
//                      \
//                  {nombre: "Zapato", num: 4}
//
//
//  BinarySearchTree.obtenerPrendas(Zapato) Devuelve ➡
//  ["Zapato", "Zapato", "Zapato", "Zapato"]
//
//  BinarySearchTree.obtenerPrendas(Camiseta) Devuelve ➡
//  ["Camiseta", "Camiseta"]
//
// REQUISITOS:
//  🟢 Recorrer el árbol y devolver en un array las prendas que coincidan con la solicitada
// ACLARACIÓN: Dentro del árbol se encuentran objetos, tal como lo muestra el ejemplo más arriba!
// TIP: Podés usar default parameters para ayudarte.

BinarySearchTree.prototype.obtenerPrendas = function (string, myList=[]) {
  // Tu código aquí:
  //instancio un array vacio para guardar las prendas encontradas
  
  //si el valor de este nodo , en su propiedad value en el index 0 es igual al string , pushela en myList 
  if(Object.values(this.value)[0] === string){
    myList.push(string);
  }
  // si hay nodo en la propiedad left de este nodo , vuelve a evaluar este nodo left
  if(this.left){
    myList.concat(this.left.obtenerPrendas(string,myList));
  }
  //si hay nodo en la propiedad rigth de este nodo , vuelve y evalua el nodo en right
  if(this.right){
    myList.concat(this.right.obtenerPrendas(string, myList));
  }
  //cuando no halla mas nodos que evaluar , retorna la lista
  return myList;
 
};
let arbol = new BinarySearchTree({ nombre: "Camiseta", num: 13 });
arbol.insert({ nombre: "Abrigo", num: 7 });
arbol.insert({ nombre: "Pantalon", num: 6 });
arbol.insert({ nombre: "Abrigo", num: 30 });
arbol.insert({ nombre: "Camiseta", num: 42 });
console.log(arbol.obtenerPrendas("Abrigo"));


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BinarySearchTree,
};
