const Queue = require('../DS').Queue;

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

 ----*** 🍹 BAR CHECKPOINT 🍹 ***----

Felicitaciones por llegar a esta instancia! El checkpoint que realizarás a continuación
consistirá en resolver varios problemas que surgieron en un bar.
Tendrás que resolver cada uno de ellos, aplicando los conceptos aprendidos durante el módulo uno.
🍀 ¡Suerte! 🍀


1️⃣ ***** EJERCICIO 1 QUEUE ***** - guardarTragos() 1️⃣

Ha llegado un nuevo pedido de tragos. Es necesario recogerlos a todos y guardarlos dentro de la barra.
Además, se desea llevar un registro de la cantidad de cada trago que se ha vendido.Para esto tendrás que 
implementar la función guardarTragos, la cuál recibirá por parámetros una Queue con muchos 🍸 Tragos 🍸
que se tendrán que guardar en un objeto que nos servirá como contenedor.

📝 EJEMPLO 📝
(INPUT) ➡
["margarita", "daiquiri", "mojito", "piña colada", "negroni", "daiquiri"]

(OUTPUT) ➡
{
  margarita: {trago: "margarita", cantidad: 1},
  daiquiri: {trago: "daiquiri", cantidad: 2},
  mojito: {trago: "mojito", cantidad: 1},
  piña colada: {trago: "piña colada", cantidad: 1},
  negroni: {trago: "negroni", cantidad: 1}
}

REQUISITOS:
  🟢 Respetar el principio de FIFO que corresponde a las Queues a la hora de guardar los tragos.
  🟢 Retornar un objeto, que tendrá como key value los elementos que agregas y quitas de la Queue.
  🟢 Cada trago debe tener:
    - una propiedad "trago" que almacene el nombre del trago.
    - una propiedad "cantidad" que almacene la cantidad vendida del mismo.
  🟢 ¡SI O SI necesitás utilizar una Queue!

  👀 TIP: Chequear el archivo DS.js para ver la función constructora Queue, y ver sus métodos disponibles.
*/

function guardarTragos(tragosQueue,tragos = {}) {
   // Tu código aquí:
  
   if(tragosQueue.size() < 1) return tragos; // caso de corte para la recursion
   
   let values = {'trago':null, 'cantidad':null};  // insatncio objeto q me servira de value para la key de tragos
   
   let count = 1; // variable auxiliar que me sirve de contador

   let aux = tragosQueue.array[0]; // guardo el primer elemento del array que me ingresa en la queue


   values['trago'] = tragosQueue.dequeue(); // asigno el primer elemento sacado de la queue q me ingresa por parametro 
   values['cantidad'] = count;

   if(tragosQueue.array.includes(aux)){  // si en el array de la queue tiene el elemento que saque
    values['cantidad'] = count + 1;  //a la propiedad cantidad del objeto sumale uno
   }
   // le asigno como propiedad de tragos el elemento eliminado de la queue y le asigno como valor el objeto
   tragos[aux] = values; 
  
   return guardarTragos(tragosQueue,tragos); //vuelvo a llamar la funcion hasta que se cumpla la condicion de corte 
  
}
const tragosQueue = new Queue();
    tragosQueue.enqueue("margarita");
    tragosQueue.enqueue("margarita");
    tragosQueue.enqueue("mojito");
    tragosQueue.enqueue("piña colada");
    tragosQueue.enqueue("negroni");
    tragosQueue.enqueue("daiquiri");
    const result = guardarTragos(tragosQueue);
    console.log(result);

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = guardarTragos;
