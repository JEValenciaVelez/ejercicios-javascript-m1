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

function guardarTragos(tragosQueue) {
   // Tu código aquí:
  const tragosObj = {};

  while(tragosQueue.size() > 0){ // mientra que el tamaño de la queue sea mayor que 0
    const trago = tragosQueue.dequeue(); // guardo el primer elemento de la queue

    if(!tragosObj[trago]){  //si en el objeto tragos no tiene de propiedad el primer elemento que saque de la queue
      tragosObj[trago] = {trago: trago, cantidad: 1}; //le asigno la propiedad con su valor
    }else{   // de lo contrario 
      tragosObj[trago].cantidad++; //accede al valor de su prop cantidad e incrementalo por uno
    }
  }

  return tragosObj;
   
}
const tragosQueue = new Queue();
tragosQueue.enqueue("margarita");
tragosQueue.enqueue("daiquiri");
tragosQueue.enqueue("daiquiri");
tragosQueue.enqueue("mojito");
tragosQueue.enqueue("mojito");
tragosQueue.enqueue("mojito");
tragosQueue.enqueue("piña colada");
tragosQueue.enqueue("negroni");
const result = guardarTragos(tragosQueue);
console.log(result);


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = guardarTragos;
