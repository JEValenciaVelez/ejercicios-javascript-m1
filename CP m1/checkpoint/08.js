const { LinkedList } = require('../DS');

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️


8️⃣ ***** EJERCICIO 8 LINKEDLIST ***** - entregarPedido() 8️⃣ 

Debemos encontrar a los clientes que nos pasan por props. Si están incluidos en nuestra lista enlazada, 
debemos guardar en una nueva lista el pedido y el recibo que contendra el precio de dicho trago.
Estos dos valores los obtendremos de nuestra lista anterior.

📝 EJEMPLO 📝
(INPUT) ➡ 
({nombre: "Franco", trago: "Fernet", precio: 200}) ➡ 
({nombre: "Marcos", trago: "Gancia", precio: 150}) ➡ 
({nombre: "Juan", trago: "Negroni", precio: 100}) ➡ 
({nombre: "Nico", trago: "Cerveza", precio: 260}) ➡ 
({nombre: "Mateo", trago: "Vino tinto", precio: 210})
Y los clientes que nos pasaron por parámetros son: ["Franco", "Marcos"]

lista.compra(array) ➡ (OUTPUT)
({pedido: "Fernet", recibo: 200}) ➡ ({pedido:"Gancia", recibo: 150})

REQUISITOS
  🟢 Retornar una NUEVA LinkedList en base a los elementos del arreglo recibido por parámetros.
  🟢 Debes de tener en cuenta los nombres de los clientes, y que su nombre este en nuestra lista.
  Caso contrario, ¡no deben arreglarlos en nuestra nueva lista!
*/

LinkedList.prototype.entregarPedido = function (clientes=[]) {
   // Tu código aquí:
   //instancio una linkedlista vacia para adicionar alli los resultados de busqueda
   const newList = new LinkedList();
   // tomo de referencia el nodo principal
   let current = this.head;

   //mientras halla nodo 
   while(current){
      //itero en el arreglo de clientes ingresados por parametro
      for(let cliente of clientes){
         //instacio objeto vacio par luego llenarlo con las busquedas
         const value = {};
         //valido si item de la iteracion corresponde con el nombre que estoy buscando en la linkedlist
         if(cliente === current.value.nombre){
            //creo propiedad en el objeto value  y le asigno el valor
            value['pedido'] = current.value.trago;
            value['recibo'] = current.value.precio;
            //agruego el objeto a la linkedlist anteriormente instanciada
            newList.add(value);
         }
      }
      //apenas termine de validar todos los items , me muevo al siguiente nodo
      current = current.next;
   }
   //apenas salga del while , recorri toda la linkedlist, ya retorno la nueva linkedlist con las respuestas de
   //busqueda
   return newList;
};
const lista = new LinkedList();
lista.add({ nombre: 'Franco', trago: 'Fernet', precio: 200 });
      lista.add({ nombre: 'Marcos', trago: 'Gancia', precio: 150 });
      lista.add({ nombre: 'Juan', trago: 'Negroni', precio: 100 });
      lista.add({ nombre: 'Nico', trago: 'Cerveza', precio: 260 });
      lista.add({ nombre: 'Mateo', trago: 'Vino tinto', precio: 210 });
      const slicedList = lista.entregarPedido(['Franco', 'Marcos']);
      console.log(slicedList);

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
   LinkedList,
};
