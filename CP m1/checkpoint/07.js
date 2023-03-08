const { LinkedList } = require('../DS');

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

7️⃣ ***** EJERCICIO 7 - LinkedList ***** - encontrarPedidoRepetido() 7️⃣

Estamos trabajando en un bar y hay pedidos repetidos. Debemos realizar un algoritmo que nos ayude a 
encontrar dichos pedidos y guardarlos en una nueva LinkedList.
Para esto nos ayudaremos del nombre que figura en el ticket, he iremos comparando con el nombre que 
nos pasan por parámetro.

⛔️ IMPORTANTE ⛔️
1) Tienes que retornar una nueva LinkedList con los elementos que coincidan con el número recibido por parámetro.
2) Si no se encuentran elementos con el mismo nombre, debes retornar false.
3) No te olvides de comparar el nombre que figura en cada ticket con el nombre que te pasan por props y no el trago.

📝 EJEMPLO 📝
LISTA ---> Head ➡ ({nombre: "Franco", trago: "Fernet"}) ➡ ({nombre: "Martin", trago: "Gancia"}) ➡ ({nombre: "Franco", trago: "Fernet"}) ➡ ({nombre: "Mateo", trago: "Cerveza Corona"}) ➡ ({nombre: "Nico", trago: "Negroni"}) ➡ ({nombre: "Ale", trago: "Cerveza IPA"})
INPUT ---> "Franco"
OUTPUT --> Head ➡ ({nombre: "Franco", trago: "Fernet"}) ➡ ({nombre: "Franco", trago: "Fernet"})
*/

LinkedList.prototype.encontrarPedidoRepetido = function (nombre) {
   // Tu código aquí:
   //creo una instancia de la clase  likendlist vacia para llenarla con los items buscados
   let newList = new LinkedList();
   //instancio variable y le asigno el nodo principal como referencia
   let current = this.head;
   //valido , mientras halla algo en el nodo 
    while(current){
      //si la propiedad nombre del objeto value es estrictamente igual al nombre ingresado por parametro
       if(current.value.nombre === nombre){
         // a la linkedlist que instancie le pusheo este objeto value
          newList.add(current.value);
         }
         // muevete al siguiente nodo
           current = current.next;
      }
      //despues de salir del while valido , si la la linkedlist que instancie quedo vacia, retorno false
      if(!newList.head) return false;
      //retorno la linkedlist que instancie con la respuesta
    return newList;
   
};
const lista1 = new LinkedList();
lista1.add({ nombre: "Franco", trago: "Fernet" });
lista1.add({ nombre: "Martin", trago: "Gancia" });
lista1.add({ nombre: "Franco", trago: "Fernet" });
lista1.add({ nombre: "Mateo", trago: "Cerveza Corona" });
lista1.add({ nombre: "Nico", trago: "Negroni" });
lista1.add({ nombre: "Ale", trago: "Cerveza IPA" });
console.log(lista1.encontrarPedidoRepetido('Franco'))

// ⚠️ NO MODIFICAR NADA DEBAJO DE ESTA LINEA ⚠️
module.exports = LinkedList;
