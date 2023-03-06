const { BinarySearchTree } = require('../DS');
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

🔟 ***** EJERCICIO 10 BINARYSEARCHTREE***** - BinarySearchTree.enOrden() 🔟
Tenemos una carta con todos los tragos y los precios pero un cliente solicito si los tragos podrian estar ordenados alfabeticamente.
Tu mision va a ser agregar al prototype de BinarySearchTree, el método 🔡 enOrden() 🔡
Tendrás que recorrer el árbol (que contiene objetos al igual que el ejerecicio previo) y devolver los nombres de los tragos
ordenados de forma alfabetica como se muestra en el ejemplo de mas abajo.

📝 EJEMPLO 📝
Dado el siguiente árbol:
                         { nombre: "Gancia", precio: 400 }
                         /                             \
          {nombre: "Fernet", precio: 500}              {nombre: "Malibu", precio: 400}
                      /                               /                            \
          {nombre: "Agua", precio: 200}    {nombre: "Long Island", precio: 400}     {nombre: Martini, precio: 800}
                         \                                                           \
               {nombre: "Bailey", precio: 900}                                     {nombre: "Tom Collins", precio: 1000}
                          \
               {nombre: "Caipi", precio: 700}


 ❗ BinarySearchTree.enOrden() ❗: ["Agua","Bailey","Caipi","Fernet","Gancia","Long Island","Malibu","Martini","Tom Collins"]

REQUISITOS
 🟢 Debe devolver los tragos ordenados alfabéticamente.

⛔️ TIP: Podés usar default parameters para ayudarte.
*/

BinarySearchTree.prototype.enOrden = function (myList=[]) {
   //  Tu código aquí:
  // recorro el arbol y pusheo en myList q declare como default parameter, para q me sirva de acumulador en la recursion
   if(this.value) myList.push(this.value);
   if(this.left) this.left.enOrden(myList);
   if(this.right) this.right.enOrden(myList);

   //luego de tener lista myList con los objetos values del arbol desordenados 
   //implemento algortmo de ordenamiento

   let cambio = true;

   while(cambio){
      cambio = false;
      for(let i = 0; i < myList.length-1; i++){
         for(let j = i + 1; j < myList.length; j++){
            let aux = myList[i];
            if(myList[i].nombre > myList[j].nombre){
               myList[i] = myList[j];
               myList[j] = aux;
               cambio = true;
            }
         }

      }
   }
   //apenas este oredenada la lista retornala
   return myList;
};
const arbol = new BinarySearchTree({ nombre: 'Gancia', precio: 400 });
      arbol.insert({ nombre: 'Fernet', precio: 500 });
      arbol.insert({ nombre: 'Agua', precio: 200 });
      arbol.insert({ nombre: 'Malibu', precio: 400 });
      arbol.insert({ nombre: 'Long Island', precio: 400 });
      arbol.insert({ nombre: 'Martini', precio: 800 });
      arbol.insert({ nombre: 'Tom Collins', precio: 1000 });
      arbol.insert({ nombre: 'Bailey', precio: 900 });
      arbol.insert({ nombre: 'Caipi', precio: 700 });

      console.log(arbol.enOrden());

//  ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   BinarySearchTree,
};
