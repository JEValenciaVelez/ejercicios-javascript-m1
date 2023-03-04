const { BinarySearchTree } = require('../DS');

/*  ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

9️⃣ ***** EJERCICIO 9 BINARYSEARCHTREE ***** - consultarTragos() 9️⃣

Eres el barman en un evento y un cliente se acerca a la barra a consultar qué tragos podría comprar con el 
efectivo que dispone. Deberás devolver según el efectivo disponible los tragos de la barra que salgan igual
o mas baratos.
Para esto tendrás que agregar al prototype de BinarySearchTree el método 🍹consultarTragos()🍹, el cual
recibirá por parámetro un número que representará el efectivo disponible para comprar tragos.

📝 EJEMPLO 📝
Dado el siguiente árbol - (INPUT) ➡ 
                          { nombre: "Gancia", precio: 400 }
                          /                             \
           {nombre: "Fernet", precio: 500}              {nombre: "Malibu", precio: 400}
                       /                               /                            \
           {nombre: "Agua", precio: 200}    {nombre: "Long Island", precio: 400}     {nombre: Martini, precio: 800}
                          \                                                           \
                {nombre: "Bailey", precio: 900}                                     {nombre: "Tom Collins", precio: 1000}
                           \
                {nombre: "Caipi", precio: 700}


BinarySearchTree.consultarTragos(400) ➡ (OUTPUT)
  ["Gancia","Agua","Malibu","Long Island"]

BinarySearchTree.consultarTragos(Camiseta) ➡ (OUTPUT)
  ["Camiseta", "Camiseta"]

REQUISITOS
  🟢 Recorrer el árbol y devolver en un arreglo con los tragos disponibles.

⛔️ ACLARACIÓN: Dentro del árbol se encuentran objetos, tal como lo muestra el ejemplo más arriba.
⛔️ TIP: puedes utilizar default parameters para ayudarte.
*/

BinarySearchTree.prototype.consultarTragos = function (efectivo,mylist=[]) {
   // Tu código aquí:
   //si el valor de la prop precio de la prop value  del nodo en el que me encuentro parado,es menor o igual al efectivo 
   if(this.value.precio <= efectivo) mylist.push(this.value.nombre);//a myList pusheale el valor de la prop nombre de la prop value
   if(this.left) this.left.consultarTragos(efectivo, mylist);//si hay algon en la prop left del nodo vuelve y valida
   if(this.right) this.right.consultarTragos(efectivo, mylist);// si hay algo en la prop right del nodo, vuelve y valida
   return mylist; //retorna la lista
 // console.log(mylist);

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

console.log(arbol.consultarTragos(200));
// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   BinarySearchTree,
};
