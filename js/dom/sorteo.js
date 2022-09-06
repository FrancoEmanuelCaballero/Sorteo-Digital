const d = document;

//Necesitamos el selector de nuestro boton y el selector que nos traiga la info del html
export default function sorteo(btn, selector) {
  //Creamos una funcion expresada que contenga el selector
  const getWinner = (selector) => {
    //Creamos una constante para traer todos los jugadores
    const $jugadores = d.querySelectorAll(selector),
      //variable con numero random multiplicada por la cantidad de jugadores, dentro de un Math.floor() para que redondee el numero decimal que nos va a devolver hacia abajo, por que si lo redondeamos hacia arriba el NodeList nos devolveria un valor mayor al numero de elementos que nos va a retornar, sabiendo que siempre el index comienza por cero
      random = Math.floor(Math.random() * $jugadores.length),
      // Luego en otra variable guardamos la extraccion de la posicion del ganador que nos retorna la variable random
      ganador = $jugadores[random];

    console.log($jugadores, random, ganador);

    //retornamos un mensaje con el ganador, utilizamos textContent por que es un li, entonces necesitamos su contenido
    return `El ganador es ${ganador.textContent}`;
  };

  //Agregamos el evento al document y utilizamos la delegacion de eventos
  d.addEventListener("click", (e) => {
    //Si el selector del btn coincide con el click del evento, activamos la funcion
    if (e.target.matches(btn)) {
      //Guardamos en una varaible la ejecucion de la funcion getWinner()
      let result = getWinner(selector);
      //Enviamos mediante una alerta el valor que retonra la variable result
      /* alert(result);
      console.log(result); */

      Swal.fire(`${result}`, "Felicitaciones");
    }
  });
}
