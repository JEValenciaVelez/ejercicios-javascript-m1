const { BinarySearchTree } = require('../DS');
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 🔟 ***** EJERCICIO 10 BINARYSEARCHTREE***** - BinarySearchTree.vender() 🔟 
// Llegó la hora! el primer cliente se dispone a realizar la primera compra de la tienda.
// Para poder vendérsela, tendrás que agregar al prototype de BinarySearchTree, el método 💰 vender() 💰,
// el cuál recibirá por parámetros un array de prendas a vender.
// Tendrás que recorrer el árbol (que contiene objetos al igual que el ejerecicio previo) y agregar la propiedad 'vendido' como valor true a cada
// uno de los nodos que coincida con los elementos del array. 
// Aclaración: Tanto los nodos del árbol, como los elementos del array, serán valores únicos.
//
// EJEMPLOS:
// Dado el siguiente árbol:
//                         { nombre: "Camiseta", num: 20 }
//                          /                           \
//           {nombre: "Saco", num: 7}          {nombre: "Abrigo", num: 30}
//                       /                                     \
//         {nombre: "Pantalon", num: 6}               {nombre: "Gorra", num: 42}
//
// Y dado el siguiente arreglo: ["Gorra", "Pantalon", "Saco"];
//
//  ❗ BinarySearchTree.vender(arreglo) ❗: transforma el árbol en ➡
//
//                             { nombre: "Camiseta", num: 20 }
//                              /                             \
//        {nombre: "Saco", num: 7, vendido: true}      {nombre: "Abrigo", num: 30 }
//                          /                                       \
// {nombre: "Pantalon", num: 6, vendido: true}            {nombre: "Gorra", num: 42, vendido: true}
//
// REQUISITOS:
//  🟢 Agregar la propiedad "vendido: true" a los nodos que coincidan con alguno de los elementos del array
//  🟢 Si el arreglo viene vacío, la función retorna false!

BinarySearchTree.prototype.vender = function (array=[]) {
    // Tu código aquí:
    
    //si el array esta vacio retorna false
    if(array.length < 1) return false;

    if(array.includes(Object.values(this.value)[0])){
      this.value['vendido'] = true;
    }
    if(this.left){
      this.left.vender(array);
    }
    if(this.right){
      this.right.vender(array);
    }
    return this;
  }
  const arbol = new BinarySearchTree({ nombre: "Camiseta", num: 20 })
  arbol.insert({nombre: "Saco", num: 7});
  arbol.insert({nombre: "Pantalon", num: 6} )
  arbol.insert({nombre: "Abrigo", num: 30})
  arbol.insert({nombre: "Gorra", num: 42})
 console.log(arbol.vender(['Gorra', 'Pantalon', 'Saco']));
  
  // ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
  module.exports = {
    BinarySearchTree
  };